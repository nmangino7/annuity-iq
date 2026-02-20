-- ============================================================================
-- AnnuityIQ Database Schema Extension
-- Migration 005: RILA (Registered Index-Linked Annuity) products table
-- ============================================================================

-- --------------------------------------------------------------------------
-- rila_products - Buffer/Structured annuity products
-- --------------------------------------------------------------------------
CREATE TABLE public.rila_products (
    id                      text        PRIMARY KEY,  -- kebab-case slug
    carrier_id              text        NOT NULL REFERENCES public.carriers(id),
    name                    text        NOT NULL,
    term                    integer,                   -- contract term in years (1, 3, 6)
    account_options         jsonb       DEFAULT '[]',  -- array of { indexName, creditingMethod, term, capRate, participationRate, bufferLevel, bufferType, floorLevel, isUncapped }
    minimum_premium         numeric,
    maximum_issue_age       integer,
    withdrawal_provisions   jsonb,                     -- { freeWithdrawalPercent, penaltyRate }
    death_benefit           text,                      -- "Account Value", "Greater of AV or ROP"
    highlights              text[]      DEFAULT '{}',
    last_rate_update        date,
    created_at              timestamptz DEFAULT now(),
    updated_at              timestamptz DEFAULT now()
);

COMMENT ON TABLE public.rila_products IS 'Registered Index-Linked Annuity (buffer annuity) product catalog';

-- Index for carrier lookup
CREATE INDEX idx_rila_products_carrier_id ON public.rila_products (carrier_id);

-- Auto-update timestamp trigger
CREATE TRIGGER trg_rila_products_updated_at
    BEFORE UPDATE ON public.rila_products
    FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Enable RLS
ALTER TABLE public.rila_products ENABLE ROW LEVEL SECURITY;

-- RLS policy: require active subscription
CREATE POLICY rila_products_select_active ON public.rila_products
    FOR SELECT USING (public.has_active_access());
