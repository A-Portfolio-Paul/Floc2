<script>
	import { onMount } from 'svelte';
	import supabase from '$lib/db';
	import { user, sess } from '../lib/stores';
	import { goto } from '$app/navigation';
	import Home from '../lib/components/pages/home.svelte';
	import Documents from '../lib/components/docs/Documents.svelte';
	import Folders from '../lib/components/wiki/Folders.svelte';
	// load stores just so they can be logged in console
	import { documents, views } from '../lib/stores';
	import { currentDocument, currentViews, currentView } from '../lib/stores';

	//View All Stores\
	// user.subscribe((value) => {
	// 	console.log('STORE:user:', value);
	// });
	// documents.subscribe((value) => {
	// 	console.log('STORE:documents:', value);
	// });
	// views.subscribe((value) => {
	// 	console.log('STORE:views:', value);
	// });
	currentDocument.subscribe((value) => {
		console.log('STORE:currentDocument:', value);
	});
	currentViews.subscribe((value) => {
		console.log('STORE:currentViews:', value);
	});
	currentView.subscribe((value) => {
		console.log('STORE:currentView:', value);
	});

	//use this to see a view of all my folders
	let wiki = false;

	onMount(async () => {
		getSession();
	});

	const getSession = () => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'PASSWORD_RECOVERY') {
				console.log('RECOVERY HAS BEEN REQUESTED', 'my_event:', event, 'my_session', session);
				sess.update((val) => {
					val = { session };
					return val;
				});
				goto('/passwordReset');
			} else if (event === 'SIGNED_IN') {
				// save the user session
				goto('/login');
			}
		});
	};
</script>

{#if wiki}
	<Folders />
{:else if $user}
	<Documents />
{:else}
	<Home />
{/if}
