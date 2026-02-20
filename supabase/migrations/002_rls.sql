-- ============================================================================
-- AnnuityIQ Row Level Security Policies
-- Migration 002: RLS policies for all tables
-- ============================================================================


-- ============================================================================
-- ENABLE RLS ON ALL TABLES
-- ============================================================================

ALTER TABLE public.profiles         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.carriers         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fia_products     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.glwb_riders      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.iul_products     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rate_history     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.benchmarks       ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.data_update_log  ENABLE ROW LEVEL SECURITY;


-- ============================================================================
-- HELPER: check if the current user has an active subscription or valid trial
-- ============================================================================

CREATE OR REPLACE FUNCTION public.has_active_access()
RETURNS boolean AS $$
    SELECT EXISTS (
        SELECT 1
        FROM public.profiles
        WHERE id = auth.uid()
          AND (
              subscription_status = 'active'
              OR (
                  subscription_status = 'trialing'
                  AND trial_start > now() - interval '7 days'
              )
          )
    );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

COMMENT ON FUNCTION public.has_active_access()
    IS 'Returns true if the authenticated user has an active subscription or is within the 7-day trial window';


-- ============================================================================
-- PROFILES: users can only read and update their own profile
-- ============================================================================

CREATE POLICY profiles_select_own ON public.profiles
    FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY profiles_update_own ON public.profiles
    FOR UPDATE
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);


-- ============================================================================
-- CARRIERS: read access for active subscribers / trialing users
-- ============================================================================

CREATE POLICY carriers_select_active ON public.carriers
    FOR SELECT
    USING (public.has_active_access());


-- ============================================================================
-- FIA_PRODUCTS: read access for active subscribers / trialing users
-- ============================================================================

CREATE POLICY fia_products_select_active ON public.fia_products
    FOR SELECT
    USING (public.has_active_access());


-- ============================================================================
-- GLWB_RIDERS: read access for active subscribers / trialing users
-- ============================================================================

CREATE POLICY glwb_riders_select_active ON public.glwb_riders
    FOR SELECT
    USING (public.has_active_access());


-- ============================================================================
-- IUL_PRODUCTS: read access for active subscribers / trialing users
-- ============================================================================

CREATE POLICY iul_products_select_active ON public.iul_products
    FOR SELECT
    USING (public.has_active_access());


-- ============================================================================
-- RATE_HISTORY: read access for active subscribers / trialing users
-- ============================================================================

CREATE POLICY rate_history_select_active ON public.rate_history
    FOR SELECT
    USING (public.has_active_access());


-- ============================================================================
-- BENCHMARKS: read access for active subscribers / trialing users
-- ============================================================================

CREATE POLICY benchmarks_select_active ON public.benchmarks
    FOR SELECT
    USING (public.has_active_access());


-- ============================================================================
-- DATA_UPDATE_LOG: no public access (admin only via service_role key)
-- ============================================================================

-- No policies defined intentionally.
-- With RLS enabled and no policies, all access is denied to regular users.
-- Admins interact with this table through the Supabase service_role key,
-- which bypasses RLS entirely.
