<script>
	export let cardId;
	export let bodyVisible;
	export let editUrl;
	export let colorShade;
	export let removeRecord;
	export let cols;
	export let toggleCols;
	import { cards } from '../stores/cards';
	import Fa from 'svelte-fa';
	import { faGripVertical } from '@fortawesome/free-solid-svg-icons';

	import PToolbar from './PToolbar.svelte';
</script>

<div class="flex flex-row flex-start px-1 p-1 items-center">
    <a class="text-blue-100 w-full hover:underline hover:text-green-500 hover:underline-offset-4 " href="url">
    {$cards[cardId].title}</a>
	<PToolbar bind:bodyVisible bind:editUrl {cardId} {removeRecord} bind:cols {toggleCols} />
</div>

<style>
	.level900 {
		background: #1e3a8a;
	}
	.level700 {
		background: #1d4ed8;
	}
	.level500 {
		background: #3b82f6;
	}
	.level300 {
		background: #7dd3fc;
	}
</style>
