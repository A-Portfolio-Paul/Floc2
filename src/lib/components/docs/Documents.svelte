<script>
	import DocumentsTable from './Table.svelte'
	import Document from './document/Dcoument.svelte'
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
	$:docId = false


</script>
{#if docId== false}
<h1 class="text-center text-xl mb-5 mt-5 uppercase">Your flocs</h1>
{:else}
<h1 class="text-center text-xl mb-5 mt-5 uppercase">Tend to your floc</h1>
{/if}
{#if docId == false}
<DocumentsTable bind:docId={docId}/>
{:else}
<Document {docId}/>
{/if}