<script>
	import DocumentsTable from './DocumentsTable.svelte'
	import Document from './document/Document.svelte'
	import DocHeader from './DocHeader.svelte';
		//seed database
	import Button from '../layout/furniture/buttons/Button.svelte';
	import { seedDb } from '../../utils/mockupData/seedDb/seedDb';
	$:docId = false



</script>
<div class="max-w-2xl mx-auto">
	<Button label='seed database' action={seedDb}/>

	<DocHeader bind:docId={docId}/>
{#if docId == false}
<DocumentsTable bind:docId={docId}/>
{:else}
<Document bind:docId={docId}/>
{/if}
</div>
