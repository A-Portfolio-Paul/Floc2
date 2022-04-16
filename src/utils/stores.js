import { writable } from 'svelte/store';
import supabase from '../lib/db';

// AUTHENTICATION
export const user = writable(
	supabase.auth.user() || //Authenticated user from Superbase
	false
	);
export const sess = writable(''); //session data
export const alerts = writable({}); //alerts
export const documents = writable({}); // all docs for user
export const views = writable({}); // all views for user
export const users = writable({}); // all users that conrributed to users docs
//current doc
export const currentDocument = writable({}); // current selected dcoument
export const currentViews = writable({}); // Views for current document
export const currentView = writable(); // authenticated users view of current document