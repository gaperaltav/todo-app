"use server";

import { getSiteURL } from '../helpers/utils';
import { createClient } from '../helpers/supabase';
import { redirect } from 'next/navigation';

export async function signInWithGoogle() {
  const supabase =  await createClient() 
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
      redirectTo: getSiteURL()
    },
  })
  redirect(data.url!)
}
export async function getUserInfo(sessionIndex: string){
  const supabase =  await createClient() 
  const { data, error } = await supabase.auth.getUser('gaperaltav@gmail.com')
  return data

}