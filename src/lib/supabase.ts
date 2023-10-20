import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wpywusgbgiagrxtjwydf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndweXd1c2diZ2lhZ3J4dGp3eWRmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzgyNjkwNiwiZXhwIjoyMDEzNDAyOTA2fQ.Y5ndQsAV0sNQwxCiUC_9KpD7lo_0ipQZ1lCk90v02-o";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false,
  },
});
