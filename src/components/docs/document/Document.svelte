<script>
	export let docId;
	export let dummyData;
	import Card from './Card.svelte';
	import ShowPreview from './furniture/buttons/document/ShowPreview.svelte';
	import ExitDocument from './furniture/buttons/document/exitDocument.svelte'
	import Preview from './preview/Preview.svelte';
	import {
		currentDocument,
		currentViews,
		currentView,
	} from '../../../utils/stores'
	import {initCurrentDocMock} from '../../../utils/storesInitMock'

	let colorShade = 1;
	let preview = false;
	const dbDataPlaceholder = () => {
		console.log('dbDataPlaceholder running....');
	};

	const dataPicker = (docId) => {
		dummyData ? initCurrentDocMock(docId) : dbDataPlaceholder(docId);
	};

	const startingCardId = '1';
	//Inititalize the document
	dataPicker(docId);
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
	<div class={'p-2 rounded-md level' + colorShade}>	
		<Card  card={$currentView.cardMap[1]} {colorShade} />
	</div>
</main>
