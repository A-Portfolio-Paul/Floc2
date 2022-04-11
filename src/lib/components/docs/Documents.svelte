<script>
	import DocumentsTable from './DocumentsTable.svelte'
	import Document from './document/Document.svelte'
	import DocHeader from './DocHeader.svelte';
	$:docId = false



</script>
<div class="max-w-2xl mx-auto">
	<DocHeader bind:docId={docId}/>
{#if docId == false}
<DocumentsTable bind:docId={docId}/>
{:else}
<Document bind:docId={docId}/>
{/if}
</div>
