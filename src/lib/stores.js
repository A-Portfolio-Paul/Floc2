import { writable } from "svelte/store";
import supabase from '$lib/db';


export const user = writable(supabase.auth.user()
     ||false)
export const sess = writable('')
export const alerts = writable({})

//Documents
export const documents = writable({})
export const document = writable({})
export const usersVersion = writable({})