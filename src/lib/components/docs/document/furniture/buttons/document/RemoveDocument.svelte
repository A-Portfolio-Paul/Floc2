<script>
	export let docId;
	import Fa from 'svelte-fa';
	import { faTrash } from '@fortawesome/free-solid-svg-icons';
	import { Confirm } from 'svelte-confirm';
	import { slide } from 'svelte/transition';
	import { removeDocument } from '../../../../../../functions/documents/removeDocument';
</script>

<Confirm
	confirmTitle="Delete"
	cancelTitle="Cancel"
	let:confirm={confirmThis}
	themeColor="200"
	class="bg-red-500"
>
	<button class="text-gray-300" on:click={() => confirmThis(removeDocument, docId)}>
		<Fa icon={faTrash} class="text-xl hover:text-red-400  active:text-red-300" />
	</button>
	<span slot="title"> Delete this Document? </span>
	<span slot="description"> You won't be able to revert this! </span>
</Confirm>

<style>
	button:hover {
		transform: rotate(30deg); /* Equal to rotateZ(45deg) */
		-webkit-transition: -webkit-transform 1s ease-in;
	}

	@keyframes shake {
		10%,
		90% {
			transform: translate3d(-1px, 0, 0);
		}

		20%,
		80% {
			transform: translate3d(2px, 0, 0);
		}

		30%,
		50%,
		70% {
			transform: translate3d(-4px, 0, 0);
		}

		40%,
		60% {
			transform: translate3d(4px, 0, 0);
		}
	}
</style>
