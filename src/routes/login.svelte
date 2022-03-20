<script>
	import { goto } from '$app/navigation';
	import supabase from '$lib/db';
	import { user, documents } from '../lib/stores';
	import Register from '../lib/components/auth/register.svelte';
	import Login from '../lib/components/auth/login.svelte';
	import { updateAlert } from '../lib/functions/alerts';
	export let isNewRegistration = false;

	user.subscribe((value) => {
		console.log('STORE:user:', value);
	});
	documents.subscribe((value) => {
		console.log('STORE:documents:', value);
	});
	//set vars
	let email = '';
	let password = '';

	const signup = async () => {
		let { user: userDetails, error } = await supabase.auth.signUp({
			email: email,
			password: password
		});
		if (error) {
			console.log('error', error);
		} else {
			updateAlert('Please check your email', 'notify');
			$user = userDetails;
			goto('/login');
		}
	};

	const login = async () => {
		let { user: userDetails, error } = await supabase.auth.signIn({
			email: email,
			password: password
		});
		if (error) {
			updateAlert(error.message, 'error');
			await goto('/login')
		} else {
			updateAlert('Login successful', 'notify');
			$user = userDetails;
			const userDocIds = await updateDocIds($user.id);
			const docs = await getUserDocs(userDocIds);
			await updateStoreDocs(docs);
			await goto('/');
		}
	};

	// update userDocs
	const updateDocIds = async (userId) => {
		let { data: users_documents, err } = await supabase
			.from('users_documents')
			.select('document_id')
			.eq('users_id', userId);
		if (err) {
			updateAlert(error.message, 'error');
		} else {
			return users_documents;
		}
	};

	const getUserDocs = async (userDocIds) => {
		let { data, error } = await supabase
			.from('documents')
			.select('*')
			.in('id', userDocIds[0].document_id);
		if (error) {
			console.log('BIG BAD ERROR', error);
		} else {
			let docs;
			docs = data;
			return docs;
		}
	};

	const updateStoreDocs = async (docs) => {
		documents.update((val) => {
			val = docs;
			return val;
		});
	};
	const updateStoreUser = (docs) => {
		user.update((val) => {
			val = docs;
			return val;
		});
	};
</script>

{#if isNewRegistration}
	<Register bind:password bind:email {signup} bind:isNewRegistration />
{:else}
	<Login bind:password bind:email {login} bind:isNewRegistration />
{/if}
