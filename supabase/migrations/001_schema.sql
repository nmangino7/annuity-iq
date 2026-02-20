-- ============================================================================
-- AnnuityIQ Database Schema
-- Migration 001: Core tables, indexes, and auth trigger
-- ============================================================================

-- --------------------------------------------------------------------------
-- 1. profiles - extends Supabase auth.users
-- --------------------------------------------------------------------------
CREATE TABLE public.profiles (
    id                      uuid        PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE,
    email                   text,
    full_name               text,
    trial_start             timestamptz DEFAULT now(),
    subscription_status     text        DEFAULT 'trialing'
        CHECK (subscription_status IN ('trialing', 'active', 'canceled', 'expired')),
    stripe_customer_id      text        UNIQUE,
    stripe_subscription_id  text        UNIQUE,
    created_at              timestamptz DEFAULT now(),
    updated_at              timestamptz DEFAULT now()
);

COMMENT ON TABLE public.profiles IS 'User profiles linked 1:1 with Supabase auth.users';

-- --------------------------------------------------------------------------
-- 2. carriers
-- --------------------------------------------------------------------------
CREATE TABLE public.carriers (
    id                  text        PRIMARY KEY,  -- kebab-case slug, e.g. 'pacific-life'
    name                text        NOT NULL,
    short_name          text        NOT NULL,
    ratings             jsonb       DEFAULT '{}',  -- { amBest, sAndP, moodys, fitch, comdex }
    founded_year        integer,
    headquarters        text,
    total_assets        text,
    website             text,
    product_categories  text[]      DEFAULT '{}',
    created_at          timestamptz DEFAULT now(),
    updated_at          timestamptz DEFAULT now()
);

COMMENT ON TABLE public.carriers IS 'Insurance carrier directory with financial strength ratings';

-- --------------------------------------------------------------------------
-- 3. fia_products - Fixed Indexed Annuity products
-- --------------------------------------------------------------------------
CREATE TABLE public.fia_products (
    id                      text        PRIMARY KEY,  -- kebab-case slug
    carrier_id              text        NOT NULL REFERENCES public.carriers(id),
    name                    text        NOT NULL,
    surrender_period        integer,
    surrender_schedule      jsonb,
    minimum_premium         numeric,
    maximum_issue_age       integer,
    guaranteed_min_rate     numeric,
    premium_bonus           numeric     DEFAULT 0,
    free_withdrawal_pct     numeric,
    index_strategies        jsonb       DEFAULT '[]',
    income_rider_available  boolean     DEFAULT false,
    highlights              text[]      DEFAULT '{}',
    last_rate_update        date,
    created_at              timestamptz DEFAULT now(),
    updated_at              timestamptz DEFAULT now()
);

COMMENT ON TABLE public.fia_products IS 'Fixed Indexed Annuity product catalog with current rates';

-- --------------------------------------------------------------------------
-- 4. glwb_riders - Guaranteed Lifetime Withdrawal Benefit riders
-- --------------------------------------------------------------------------
CREATE TABLE public.glwb_riders (
    id                      text        PRIMARY KEY,
    carrier_id              text        NOT NULL REFERENCES public.carriers(id),
    name                    text        NOT NULL,
    attached_product        text,
    rider_fee               numeric,
    rollup                  jsonb,       -- { rate, type, maxYears }
    withdrawal_rates        jsonb,       -- { single: {...}, joint: {...} } by age band
    step_up_available       boolean     DEFAULT true,
    rmd_friendly            boolean     DEFAULT true,
    nursing_home_benefit    boolean     DEFAULT false,
    nursing_home_multiplier numeric,
    minimum_premium         numeric,
    maximum_issue_age       integer,
    highlights              text[]      DEFAULT '{}',
    last_rate_update        date,
    created_at              timestamptz DEFAULT now(),
    updated_at              timestamptz DEFAULT now()
);

COMMENT ON TABLE public.glwb_riders IS 'GLWB income rider catalog with withdrawal rate schedules';

-- --------------------------------------------------------------------------
-- 5. iul_products - Indexed Universal Life products
-- --------------------------------------------------------------------------
CREATE TABLE public.iul_products (
    id                          text        PRIMARY KEY,
    carrier_id                  text        NOT NULL REFERENCES public.carriers(id),
    name                        text        NOT NULL,
    max_illustrated_rate        numeric,
    index_accounts              jsonb       DEFAULT '[]',
    fixed_account_rate          numeric,
    guaranteed_min_crediting_rate numeric,
    loan_provisions             jsonb,
    no_lapse_guarantee          text,
    death_benefit_options       text[]      DEFAULT '{}',
    riders                      jsonb       DEFAULT '[]',
    minimum_face_amount         numeric,
    maximum_issue_age           integer,
    highlights                  text[]      DEFAULT '{}',
    last_rate_update            date,
    created_at                  timestamptz DEFAULT now(),
    updated_at                  timestamptz DEFAULT now()
);

COMMENT ON TABLE public.iul_products IS 'Indexed Universal Life product catalog with crediting rates';

-- --------------------------------------------------------------------------
-- 6. rate_history - historical rate snapshots by quarter
-- --------------------------------------------------------------------------
CREATE TABLE public.rate_history (
    id              uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id      text        NOT NULL,
    product_type    text        NOT NULL
        CHECK (product_type IN ('fia', 'glwb', 'iul')),
    quarter         text        NOT NULL,   -- e.g. '2025-Q1'
    metrics         jsonb       NOT NULL,
    created_at      timestamptz DEFAULT now()
);

COMMENT ON TABLE public.rate_history IS 'Quarterly rate snapshots for trend analysis';

-- --------------------------------------------------------------------------
-- 7. benchmarks - category-level aggregate metrics
-- --------------------------------------------------------------------------
CREATE TABLE public.benchmarks (
    id          text        PRIMARY KEY,  -- e.g. 'fia', 'glwb', 'iul'
    category    text        NOT NULL,
    metrics     jsonb       NOT NULL,
    computed_at timestamptz DEFAULT now()
);

COMMENT ON TABLE public.benchmarks IS 'Precomputed category benchmarks for product comparison';

-- --------------------------------------------------------------------------
-- 8. data_update_log - ETL run log
-- --------------------------------------------------------------------------
CREATE TABLE public.data_update_log (
    id                  uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
    source              text,
    products_updated    integer     DEFAULT 0,
    products_added      integer     DEFAULT 0,
    errors              jsonb       DEFAULT '[]',
    ran_at              timestamptz DEFAULT now()
);

COMMENT ON TABLE public.data_update_log IS 'Audit log for data pipeline runs';


-- ============================================================================
-- INDEXES
-- ============================================================================

-- Product tables: look up by carrier
CREATE INDEX idx_fia_products_carrier_id  ON public.fia_products  (carrier_id);
CREATE INDEX idx_glwb_riders_carrier_id   ON public.glwb_riders   (carrier_id);
CREATE INDEX idx_iul_products_carrier_id  ON public.iul_products  (carrier_id);

-- Rate history: query by product type + quarter
CREATE INDEX idx_rate_history_type_quarter ON public.rate_history (product_type, quarter);

-- Profiles: filter by subscription status
CREATE INDEX idx_profiles_subscription_status ON public.profiles (subscription_status);


-- ============================================================================
-- TRIGGER: auto-create profile on sign-up
-- ============================================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        NEW.raw_user_meta_data->>'full_name'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_user();


-- ============================================================================
-- UPDATED_AT TRIGGER (auto-set updated_at on row modification)
-- ============================================================================

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER trg_carriers_updated_at
    BEFORE UPDATE ON public.carriers
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER trg_fia_products_updated_at
    BEFORE UPDATE ON public.fia_products
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER trg_glwb_riders_updated_at
    BEFORE UPDATE ON public.glwb_riders
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER trg_iul_products_updated_at
    BEFORE UPDATE ON public.iul_products
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
