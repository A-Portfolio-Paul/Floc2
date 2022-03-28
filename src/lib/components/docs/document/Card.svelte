<script>
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	import Add from './furniture/buttons/Add.svelte';

	import { currentView } from '../document/../../../stores'

	import {handleDndConsider, handleDndFinalize } from '../document/../../../functions/documents/dragDrop'
	// import { nodes, handleDndConsider, handleDndFinalize } from './stores/nodes';
	// import { addRecord } from '../../../functions/documents/add';
	// import { removeRecord } from '../../../functions/documents/remove';
	export let card;
	export let colorShade;

	// See  handleDndConsider, handleDndFinalize to update node
	const changeState = (newItem) => {
		card.items = newItem;
	};

	//FORMATTING / CONFIG

	let bodyVisible = false;
	let editUrl = false;
	const cardId = $currentView[0].cardId
	const flipDurationMs = 300;
	const addRecord = () =>{
		console.log('addRecords runnning...')
	}
	const removeRecord = () =>{
		console.log('remove runnning...')
	}


	const toggleCols = () => {
		nodes.update((val) => {
			val[card.id].cols = !val[card.id].cols;
			console.log('val', val, card.id);

			return val;
		});
	};
	$: dragZoneStyle = $currentView[0].cardMap[card.id].cols
		? 'w-full p-1  rounded-t-md flex flex-row level' + colorShade
		: 'w-full p-1  rounded-t-md flex flex-col level' + colorShade;
</script>

<article class={'w-full p-2  rounded-md flex flex-col m-1  level' + colorShade}>
	<Header
		cardId={card.id}
		bind:bodyVisible
		bind:editUrl
		{colorShade}
		{removeRecord}
	/>
	{#if bodyVisible}
		<Body cardId={card.id} {colorShade} />
	{/if}
	<!-- DROPZONE -->
	{#if card.hasOwnProperty('items')}
		<section
			use:dndzone={{ items: card.items, flipDurationMs, centreDraggedOnCursor: true }}
			on:consider={(e) => handleDndConsider(e, changeState)}
			on:finalize={(e) => handleDndFinalize(e,cardId)}
			class={dragZoneStyle}
		>
			<!-- WE FILTER THE SHADOW PLACEHOLDER THAT WAS ADDED IN VERSION 0.7.4, filtering this way rather than checking whether 'cards' have the id became possible in version 0.9.1 -->
			{#each card.items.filter((item) => item.id !== SHADOW_PLACEHOLDER_ITEM_ID) as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }} class="item rounded-md p-1 ">
					<svelte:self card={$currentView[0].cardMap[item.id]} colorShade={colorShade + 1} />
				</div>
			{/each}
			<Add cardId={card.id} {addRecord} />
		</section>
	{/if}
</article>

<style>
	section {
		width: auto;
		border: 0px solid black;
		/* this will allow the dragged element to scroll the list */
		overflow-y: auto;
		height: auto;
	}
	article {
		min-width: 300px;
	}
</style>
