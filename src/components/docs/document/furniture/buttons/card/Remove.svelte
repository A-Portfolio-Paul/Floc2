<script>
	export let cardId;
	import Fa from 'svelte-fa';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';
	import { Confirm } from 'svelte-confirm';
	import { slide } from 'svelte/transition';
	import { removeRecord } from '../../../../../../utils/functions/documents/remove.js'
</script>

<Confirm
	confirmTitle="Delete"
	cancelTitle="Cancel"
	let:confirm={confirmThis}
	themeColor="200"
	class="bg-red-500"
>
	<button class="p-2 text-gray-300" on:click={() => confirmThis(removeRecord, cardId)}>
		<Fa icon={faTrash} class="hover:text-red-400  active:text-red-300" />
	</button>
	<span slot="title"> Delete this item? </span>
	<span slot="description"> You won't be able to revert this! </span>
</Confirm>

<style>

button:hover{
        transform: rotate(30deg); /* Equal to rotateZ(45deg) */
        -webkit-transition: -webkit-transform 1s ease-in;
    }

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
