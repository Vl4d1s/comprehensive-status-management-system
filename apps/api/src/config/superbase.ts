import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";

const supabaseUrl = "https://sfuviupsjrdtbxoifacp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdXZpdXBzanJkdGJ4b2lmYWNwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk1NjEyNTYsImV4cCI6MjAyNTEzNzI1Nn0._R63-LNclzhyah2gq2Vp8BjgdXdaIrGlUcEyja_F-Eg";
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
