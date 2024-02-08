import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bwwkbtzpuuypwmewkcso.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3d2tidHpwdXV5cHdtZXdrY3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyMTI4MTksImV4cCI6MjAyMjc4ODgxOX0.mvMRhxMpIcx5AWgCAIBw-i1_PJT5ZngYHGESdkcJsv4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
