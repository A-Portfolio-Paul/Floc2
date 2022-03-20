import { user, documents, alerts } from '../stores';
import { goto } from '$app/navigation';

import supabase from '$lib/db';
import { updateAlert } from '../functions/alerts';


const logout = async () => {
	let { err } = await supabase.auth.signOut();
	if (err) {
		updateAlert(error.message, 'error');
	} else {
		clearStores();
		updateAlert('You are logged out', 'notify');
		goto('/');
	}
};
const clearStores = () => {
	user.update((val) => {
		val = false;
		return val;
	});
	documents.update((val) => {
		val = false;
		return val;
	});
	alerts.update((val) => {
		val = false;
		return val;
	});
};

export { logout };
