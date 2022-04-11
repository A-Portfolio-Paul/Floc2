<script>
	export let cardId;
	export let colorShade;

	import {currentView} from '../../../../utils/stores.js'


	console.log('cardId', cardId);
	currentView.subscribe((value) => {
		console.log('STORE:CARDS:', value.cards[cardId]);
	});

	$: imageUrl = $currentView.cards[cardId].imageUrl;
	$: title = $currentView.cards[cardId].title;
	$: notes = $currentView.cards[cardId].notes;
	let bodyVisible = false;
	let editUrl = false;
	let removeRecord = 'delete';
	let toggleCols = 'delete';

	const dragZoneStyle = $currentView.cardMap[cardId].cols ? 'w-full p-1  rounded-t-md flex flex-row':'w-full p-1  rounded-t-md flex flex-col'

</script>

