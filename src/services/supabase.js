import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ocstdzmdigqbkhcmyoqr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jc3Rkem1kaWdxYmtoY215b3FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc1MTc3NTcsImV4cCI6MjAyMzA5Mzc1N30.qOhJYlyWVdB0fGI5WGpEbfMxk6TaCdHKJ9PlQXSzjvM";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
