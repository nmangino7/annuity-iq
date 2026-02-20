-- ============================================================================
-- AnnuityIQ Cron Jobs
-- Migration 004: Schedule automated data refresh
-- ============================================================================
-- Requires the pg_cron extension (enabled by default on Supabase Pro+)
-- This migration schedules the refresh-rates Edge Function to run daily at 6 AM UTC
-- ============================================================================

-- Enable pg_cron extension (may already be enabled)
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule daily rate refresh at 6:00 AM UTC (1:00 AM EST)
-- The Edge Function handles all the scraping, updating, and benchmarking
SELECT cron.schedule(
  'daily-rate-refresh',                              -- job name
  '0 6 * * *',                                       -- cron expression: 6 AM UTC daily
  $$
    SELECT net.http_post(
      url := current_setting('app.settings.supabase_url') || '/functions/v1/refresh-rates',
      headers := jsonb_build_object(
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key'),
        'Content-Type', 'application/json'
      ),
      body := '{"source": "pg_cron"}'
    );
  $$
);

-- Schedule quarterly snapshot on the 1st of Jan, Apr, Jul, Oct at 7 AM UTC
-- (runs after the daily refresh to ensure fresh data)
SELECT cron.schedule(
  'quarterly-snapshot',
  '0 7 1 1,4,7,10 *',
  $$
    SELECT net.http_post(
      url := current_setting('app.settings.supabase_url') || '/functions/v1/refresh-rates',
      headers := jsonb_build_object(
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key'),
        'Content-Type', 'application/json'
      ),
      body := '{"source": "quarterly-snapshot"}'
    );
  $$
);

-- Note: On Supabase, you may need to configure app.settings via:
--   ALTER DATABASE postgres SET app.settings.supabase_url = 'https://your-project.supabase.co';
--   ALTER DATABASE postgres SET app.settings.service_role_key = 'your-service-role-key';
--
-- Alternatively, use the Supabase Dashboard > Edge Functions > Schedules
-- to set up cron jobs without SQL.
