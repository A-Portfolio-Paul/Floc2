<script>
	import { onMount } from 'svelte';
	import supabase from '$lib/db';
	import { user, sess } from '../lib/stores';
	import { goto } from '$app/navigation';
	import Home from '../lib/components/pages/home.svelte';
	import Documents from '../lib/components/docs/Documents.svelte';
	import Folders from '../lib/components/wiki/Folders.svelte';

	//use this to see a view of all my folders
	let wiki = true;
	onMount(async () => {
		getSession();
	});

	const getSession = () => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'PASSWORD_RECOVERY') {
				console.log('RECOVERY HAS BEEN REQUESTED', 'my_event:', event, 'my_session', session);
				sess.update((val) => {
					// @ts-ignore
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
