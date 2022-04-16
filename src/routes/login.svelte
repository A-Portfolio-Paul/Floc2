<script>
	import { goto } from '$app/navigation';
	import supabase from '../lib/db';
	//Stores
	import { user } from '../utils/stores';
	import Register from '../components/auth/register.svelte';
	import Login from '../components/auth/login.svelte';
	import { updateAlert } from '../utils/functions/alerts';

	export let isNewRegistration = false;
	// view user Store ciontents


	//set vars
	let email = '';
	let password = '';

	const signup = async () => {
		let { user: userDetails, error } = await supabase.auth.signUp({
			email: email,
			password: password
		});
		if (error) {
			console.log('error in signup', error);
		} else {
			updateAlert('Please check your email', 'notify');
			$user = userDetails;
			goto('/login');
		}
	};

	const login = async () => {
		let { user: userDetails, error } = await supabase.auth.signIn({
			// to remove hardcoding use below
			// email: email,
			// password: password
			// hardcoded
			email: 'timrie@theemailaddy.com',
			password: '1234567890'
			//id: d82d629e-168d-48f3-8100-b66e745c6b21
			//user 2
			// email: 'hepbaj@myspainishmail.com ',
			// password: '1234567890',
			// id: '1d89c4f5-c38a-44c3-93aa-9290e1d3673e'
		});
		if (error) {
			updateAlert(error.message, 'error');
			await goto('/login');
		} else {
			updateAlert('Login successful', 'notify');
			$user = userDetails;
			await goto('/');
		}
	};

	// update userDocs
	// const updateDocIds = async (userId) => {
	// 	let { data: users_documents, err } = await supabase
	// 		.from('users_documents')
	// 		.select('document_id')
	// 		.eq('users_id', userId);
	// 	if (err) {
	// 		updateAlert(error.message, 'error');
	// 	} else {
	// 		return users_documents;
	// 	}
	// };

	// const getUserDocs = async (userDocIds) => {
	// 	let { data, error } = await supabase
	// 		.from('documents')
	// 		.select('*')
	// 		.in('id', userDocIds[0].document_id);
	// 	if (error) {
	// 		console.log('BIG BAD ERROR', error);
	// 	} else {
	// 		let docs;
	// 		docs = data;
	// 		return docs;
	// 	}
	// };

	// const updateStoreUser = (user) => {
	// 	user.update((val) => {
	// 		val = user;
	// 		return val;
	// 	});
	// };
</script>

{#if isNewRegistration}
	<Register bind:password bind:email {signup} bind:isNewRegistration />
{:else}
	<Login bind:password bind:email {login} bind:isNewRegistration />
{/if}
