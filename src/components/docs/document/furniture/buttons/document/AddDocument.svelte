<script>
	import Fa from 'svelte-fa';
	import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
    import {addDocument} from '../../../../../../utils/functions/documents/addDocument.js'
</script>

<div class=" flex flex-row flex-end justify-end pl-3 pb-6">
	<button class="hover:drop-shadow-xl" on:click={() => addDocument()} >
        <Fa icon={faPlusCircle}  class="text-4xl text-blue-200 hover:text-red-400  active:text-red-300" />
	</button>
</div>

<style>
    button:hover{
        transform: rotate(30deg); /* Equal to rotateZ(45deg) */
        -webkit-transition: -webkit-transform 1s ease-in;
    }
</style>
