import { supabase } from "../config/supabase";

interface UserLogin {
  email: string
  password: string
}


// === GET routes === //

export const loginUser = async (user: UserLogin) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });
};

// === POST routes === //

export const registerUser = async (user: UserLogin) => {
  const { data, error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
    options: {
      emailRedirectTo: window.location.origin,
    },
  });
};

