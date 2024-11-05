import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./database.types";

export const createClient = () => {
    return createBrowserClient<Database>(                       /* database lägg in senare*/
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    )
}