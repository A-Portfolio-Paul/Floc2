<script>
	export let cardId;
	export let colorShade;

	import { cards } from '../stores/cards';
	import { nodes } from '../stores/nodes';
	import PNotes from './PNotes.svelte';
	import Tags from '../Tags.svelte';
	import PHeader from './PHeader.svelte';
	console.log('cardId', cardId);
	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value[cardId]);
	});

	$: imageUrl = $cards[cardId].imageUrl;
	$: title = $cards[cardId].title;
	$: notes = $cards[cardId].notes;
	// console.log(imageUrl,title,notes)
	let bodyVisible = false;
	let editUrl = false;
	let removeRecord = 'delete';
	let toggleCols = 'delete';

	const dragZoneStyle = $nodes[cardId].cols ? 'w-full p-1  rounded-t-md flex flex-row':'w-full p-1  rounded-t-md flex flex-col'

</script>

<article class={"px-1 rounded-md m-1 level"+colorShade}>
	<PHeader
		{cardId}
		bind:bodyVisible
		bind:editUrl
		{colorShade}
		{removeRecord}
		bind:cols={$nodes[cardId].cols}
		{toggleCols}
	/>
	{#if bodyVisible}
		<body>
			<!-- <Tags {cardId}/> -->
			<img src={imageUrl} alt={title} class="image rounded-md" style="width:100%" />
			<PNotes {notes} {colorShade} />
			<body />
		</body>
	{/if}
	<section class={dragZoneStyle}>
		{#each $nodes[cardId].items as item}
			<svelte:self cardId={item.id} colorShade={colorShade+1} />
		{/each}
	</section>
</article>
<style>
		article{
		min-width: 300px;
	}
</style>