<script>
	export let addRecord;
	export let cardId;
	import Fa from 'svelte-fa';
	import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="flex flex-row w-800 pl-3">
	<button class="hover:drop-shadow-xl" on:click={() => addRecord(cardId)} >
        <Fa icon={faPlusCircle}  class="text-lg text-blue-200 hover:text-red-400  active:text-red-300" />
	</button>
	<div class=" p-4 text-center text-white  h-6 w-6 flex-grow rounded-md"></div>
</div>

<style>
    button:hover{
        transform: rotate(30deg); /* Equal to rotateZ(45deg) */
        -webkit-transition: -webkit-transform 1s ease-in;
    }
</style>
