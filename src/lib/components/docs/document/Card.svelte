<script>
	import { flip } from 'svelte/animate';
	import { dndzone, SHADOW_PLACEHOLDER_ITEM_ID } from 'svelte-dnd-action';
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	import Add from './furniture/buttons/Add.svelte';

	import { cards } from './stores/cards';
	import { authenticatedUser } from './stores/authenticatedUser';
	import { nodes } from './stores/nodes';

	export let node;
	export let colorShade;
	export let cardId

	// I would like to move all these functions into cardLayout store but cant figure out how to get the args to carry up to date data
	// Functions work "in place"

	const handleDndConsider = (e, greet) => {
		//if I put node into the arg it goes horribly wrong so I will leave it for now
		console.log('handleDndConsider:  e.detail.items', e.detail.items, greet);
		node.items = e.detail.items;
	};
	const handleDndFinalize = (e, greet, node) => {
		console.log('handleDndConsider:  e.node.items', node.items, greet);
		nodes.update((val) => {
			val[node.id].items = e.detail.items;
			return val;
		});
	};

	const removeRecord = (cardId) => {
		const getParentId = (childId) => {
			const findId = (id, myarr) => {
				let res;
				for (let i = 0; i < myarr.length; i++) {
					if (myarr[i].id == id) return true;
				}
				return false;
			};
			for (const key in $nodes) {
				let nodeArr = $nodes[key].items;
				if (findId(childId, nodeArr) == true) {
					return key;
				}
			}
		};
		const parentId = getParentId(cardId);
		console.log('parentId', parentId);
		// alert('no more alerts')
		console.log('remove Record running....cardId:', cardId);
		// 1. remove card from items

		const items = $nodes[parentId].items;
		const getIndex = () => {
			for (let i = 0; i < items.length; i++) {
				console.log('LOOP:', items[i]);
				if (items[i].id == cardId) {
					return i;
				}
			}
		};
		const cardIndex = getIndex(cardId);
		nodes.update((val) => {
			val[parentId].items.splice(cardIndex, 1);
			return val;
		});
		//2. remove card from nodes
		nodes.update((val) => {
			val[cardId].items.splice(cardIndex, 1);
			return val;
		});
	};
	const addRecord = (cardId) => {
		console.log('add record running.........', cardId);
		// 1. Create new id {using the bottom id - this will have to use newId later}
		const newId = $nodes[Object.keys($nodes)[Object.keys($nodes).length - 1]].id + 1;
		console.log('newId', newId);

		// 2. Add newRecord
		// to item array
		nodes.update((val) => {
			val[cardId].items.push({ id: newId });
			return val;
		});
		// $nodes[cardId].items.push({ id: newId });

		//to $nodes
		const newNode = { id: newId, items: [],cols:false };
		nodes.update((val) => {
			val = { ...val, [newId]: newNode };
			return val;
		});
		// $nodes = { ...nodes, [newId]: newNode };

		// 3. Add new card to cards
		const newItem = { id: newId, items: [], cols: false };
		const newCard = {
			componentId: newId,
			url: null,
			imageUrl:null,
			allTags: [],
			notes:null,
			usersVersion: {
				userId: { userId: $authenticatedUser.userId, versionId: 1 }
			},
			versions: {
				1: {
					title: '',
					imageUrl: '',
		
				}
			}
		};



		console.log('newCard', newCard)
		cards.update((val) => {
			val = { ...val, [newId]: newCard };
			return val;
		});
	};
	//FORMATTING / CONFIG

	let bodyVisible = false;
	let editUrl = false;

	const flipDurationMs = 300;

	// const toggleCols = () => {
	// 	console.log('toggleCols Running..');
	// 	console.log('b', node.cols);
	// 	node.cols = !node.cols;
	// 	console.log('a', node.cols);
	// 	node = { ...node };
	// };
	const toggleCols = () => {
		nodes.update((val) => {
			val[node.id].cols = !val[node.id].cols
			console.log('val',val,node.id)

			return val;
			
		});
	};
	const greet = 'placeholder for the consider & finalize functions' 
	$:dragZoneStyle = $nodes[node.id].cols ? 'w-full p-1  rounded-t-md flex flex-row level' +colorShade:'w-full p-1  rounded-t-md flex flex-col level' +colorShade

</script>

<article class={"w-full p-2  rounded-md flex flex-col m-1  level" +colorShade}>
	<Header
		cardId={node.id}
		bind:bodyVisible
		bind:editUrl
		{colorShade}
		{removeRecord}
		bind:cols={node.cols}
		{toggleCols}
	/>
	{#if bodyVisible}
		<Body cardId={node.id} {colorShade} />
	{/if}
	<!-- DROPZONE -->
	{#if node.hasOwnProperty('items')}
		<section
			use:dndzone={{ items: node.items, flipDurationMs, centreDraggedOnCursor: true }}
			on:consider={(e) => handleDndConsider(e, greet, node)}
			on:finalize={(e) => handleDndFinalize(e, greet, node)}
			class={dragZoneStyle}
		>
			<!-- WE FILTER THE SHADOW PLACEHOLDER THAT WAS ADDED IN VERSION 0.7.4, filtering this way rather than checking whether 'nodes' have the id became possible in version 0.9.1 -->
			{#each node.items.filter((item) => item.id !== SHADOW_PLACEHOLDER_ITEM_ID) as item (item.id)}
				<div animate:flip={{ duration: flipDurationMs }} class="item rounded-md p-1 ">
					<svelte:self node={$nodes[item.id]} colorShade={colorShade + 1} />
				</div>
			{/each}
			<Add cardId={node.id} {addRecord} />
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
	article{
		min-width: 300px;
	}
</style>
