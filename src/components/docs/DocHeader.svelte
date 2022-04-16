<script>
	export let docId;
	import { user } from '../../utils/stores';
	import Button from '../layout/furniture/buttons/Button.svelte';

</script>

{#if docId == false}
	<header class="flex flex-row justify-between p-3">
		<div><h1 class="text-center text-xl  uppercase">Your flocs</h1></div>
	</header>
{:else}
	<h1 class="text-center text-xl mb-5 mt-5 uppercase">Tend to your floc</h1>
{/if}
