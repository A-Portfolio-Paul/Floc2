<script>
	import { onMount } from 'svelte';
	//stores
	import { storesInitMock } from '../../utils/storesInitMock';
	import { documents, views } from '../../utils/stores';
	//components
	import DocHeader from './DocHeader.svelte';
	import DocumentsTable from './DocumentsTable.svelte';
	// import Document from './document/Document.svelte';

	// testing toolbar
	import TestingToolbar from '../layout/furniture/buttons/TestingToolbar.svelte';


	$: docId = false;
	const dummyData = true;

	const dbDataPlaceholder = () => {
		console.log('dbDataPlaceholder running....');
	};

	const dataPicker = () => {
		dummyData ? storesInitMock() : dbDataPlaceholder();
	};

	onMount(async () => {
		console.log('Documents mounted.......');
		// view stores
		documents.subscribe((value) => {
			console.log('STORE:documents initialized:', value);
		});
		views.subscribe((value) => {
			console.log('STORE:views initialized:', value);
		});
	});
</script>

<div class="max-w-2xl mx-auto">
	<DocHeader {docId}/>
	<TestingToolbar />
	{#await dataPicker()}
		<p>...waiting</p>
	{:then data}
		{#if docId == false}
			<DocumentsTable bind:docId />
		{:else}
			<!-- open component when click on one in the list -->
			<Document bind:docId />
			<p>Individual document goes here</p>
		{/if}
	{:catch error}
		<p>An error occurred!</p>
	{/await}

</div>
