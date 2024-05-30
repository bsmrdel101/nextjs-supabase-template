import { supabase } from "../config/supabase";

interface UserLogin {
  email: string
  password: string
}


// === GET routes === //

export const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) return console.error(error);

  const userData: User = {
    id: data.user.id,
    email: data.user.email,
  };
  return userData;  
};

export const loginUser = async (user: UserLogin) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });
  if (error) return console.error(error);

  const userData: User = {
    id: data.user.id,
    email: data.user.email,
  };
  return userData;
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
  if (error) return console.error(error);
};

