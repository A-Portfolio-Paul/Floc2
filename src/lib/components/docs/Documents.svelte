<script>
	// import Documents from '../docs/documents/documents.svelte'
	import { documents, views, users } from '../../stores';
	documents.subscribe((value) => {
		console.log('STORE:documents:', value);
	});
	views.subscribe((value) => {
		console.log('STORE:views:', value);
	});
	users.subscribe((value) => {
		console.log('STORE:users:', value);
	});

	const arr=[1,2,3,4]
</script>

<h1>Welcome to your docs</h1>
<p>this is where the docs view goes</p>
<ul>
	{#each $documents as document}
		<li>{document.docId}</li>
	{/each}
</ul>
