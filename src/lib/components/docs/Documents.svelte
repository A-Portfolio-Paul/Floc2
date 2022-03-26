<script>
	import DocumentsTable from './Table.svelte'
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

<h1 class="text-center text-xl mb-5 mt-5 uppercase">Here is your floc</h1>
docId:{docId}
{#if docId == false}
<DocumentsTable bind:docId={docId}/>
{:else}
load doc here {docId}
{/if}