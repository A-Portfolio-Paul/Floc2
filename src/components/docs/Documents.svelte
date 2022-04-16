<script>
	import { onMount } from 'svelte';
	import { storesInitMock } from '../../utils/storesInitMock';
	import DocumentsTable from './DocumentsTable.svelte';
	// import Document from './document/Document.svelte';
	
	import DocHeader from './DocHeader.svelte';
	// testing toolbar
	import TestingToolbar from '../layout/furniture/buttons/TestingToolbar.svelte';
	// Import stores to display the initialized vals
	import { documents, views } from '../../utils/stores';
	import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';

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
	<!-- <TestingToolbar /> -->
	{#await dataPicker()}
		<p>...waiting</p>
	{:then data}
		{#if docId == false}
			<DocumentsTable bind:docId />
		{:else}
			<!-- <Document bind:docId /> -->
			<p>Individual document goes here</p>
		{/if}
	{:catch error}
		<p>An error occurred!</p>
	{/await}

	<!-- 
	<p>data in store</p>
	<DocumentsTable bind:docId />
	{:else}
	<p>Loading....</p>
	{/if} -->

	<!-- <DocumentsTable bind:docId /> -->
	<!-- {#if docId == false}
		<DocumentsTable bind:docId />
	{:else}
		<Document bind:docId />
	{/if} -->
</div>
