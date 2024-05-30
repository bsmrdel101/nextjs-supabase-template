import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://aooqthfyrleuxqilfiok.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
