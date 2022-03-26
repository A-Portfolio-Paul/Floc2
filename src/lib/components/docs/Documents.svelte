<script>
	import DocumentsTable from './Table.svelte'
	import Document from './document/Document.svelte'
	// import Documents from '../docs/documents/documents.svelte'

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