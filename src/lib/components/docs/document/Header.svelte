<script>
	export let cardId;
	export let bodyVisible;
	export let editUrl;
	export let colorShade;

	import { cards } from './stores/cards';
	import {currentView } from '../../../stores'
	import Fa from 'svelte-fa';
	import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
	import Input from './furniture/Input.svelte';
	import Toolbar from './furniture/buttons/card/Toolbar.svelte';

</script>

<div class="flex flex-row flex-wrap justify-between ">
	<div class="flex flex-row items-center ">
		<Fa class=" text-blue-200 align-bottom cursor-move text-xs" icon={faGripVertical} />
		{#if editUrl == false}
			<Input bind:inputText={$currentView.cards[cardId].title} inputPlaceholder="Enter title" {colorShade} />
		{:else}
			<Input bind:inputText={$currentView.cards[cardId].url} inputPlaceholder="Enter url" {colorShade} />
		{/if}
	</div>

	<Toolbar bind:bodyVisible bind:editUrl {cardId}   />
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
