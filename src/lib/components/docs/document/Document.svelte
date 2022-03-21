<script>
	import { get } from 'svelte/store'
	import {cards} from './stores/cards'
	import {nodes} from './stores/nodes'
	import Card from './Card.svelte';
	import ShowPreview from './furniture/buttons/ShowPreview.svelte'
	import Preview from './preview/Preview.svelte'

	nodes.subscribe((value) => {
		console.log('STORE:nodes:', value);
	});
	cards.subscribe((value) => {
		console.log('STORE:CARDS:', value);
	});

	let colorShade = 1;
	let preview = false
	const cardId = 1
</script>

<main id="pauls" label="myMain" class=" p-3">
	<ShowPreview bind:preview={preview} />
	{#if preview == true}
	<Preview {cardId} {colorShade} node={$nodes[1]}/>
	{:else}
	<div class={"p-2 rounded-md level"+colorShade} >
			<Card cardId = {cardId} node={$nodes[1]}  {colorShade} />
	</div>

	{/if}

</main>
