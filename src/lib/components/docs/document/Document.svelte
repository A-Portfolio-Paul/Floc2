<script>
	export let docId;
	import Card from './Card.svelte';
	import ShowPreview from './furniture/buttons/document/ShowPreview.svelte';
	import ExitDocument from './furniture/buttons/document/ExitDocument.svelte'
	import Preview from './preview/Preview.svelte';
	import {
		currentDocument,
		currentViews,
		currentView,
		initCurrentDocument
	} from '../document/../../../stores';

	let colorShade = 1;
	let preview = false;
	const startingCardId = '1';
	// const node =  JSON.parse(JSON.stringify($currentView[0].cardMap));

	//Inititalize the document
	initCurrentDocument(docId);
	// View Stores
	currentDocument.subscribe((value) => {
		console.log('STORE:currentDocument:', value);
	});
	currentViews.subscribe((value) => {
		console.log('STORE:currentViews:', value);
	});
	currentView.subscribe((value) => {
		console.log('STORE:currentView:', value.cardMap)
	});

</script>

<main id="pauls" label="myMain" class=" p-3">
	<div class="flex flex-row justify-between ">
		<ExitDocument bind:docId={docId}/>
		<ShowPreview bind:preview />
	</div>
	{#if preview == true}
		<!-- <Preview {cardId} {colorShade} node={$nodes[1]}/> -->
		preview {docId}
	{:else}
	<div class={'p-2 rounded-md level' + colorShade}>
			
			<Card  card={$currentView.cardMap[1]} {colorShade} />
		</div>
	{/if}
</main>
