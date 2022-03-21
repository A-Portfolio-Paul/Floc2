<script>
	export let iconName;
    export let btnData;
    export let btnFunc;
    import Fa from 'svelte-fa';
	import { faPlusCircle, faColumns, faAlignJustify } from '@fortawesome/free-solid-svg-icons';

</script>
	<button class="hover:drop-shadow-xl" on:click={sayHello()}>
        <Fa icon={faPlusCircle}  class="hover:text-red-400  active:text-red-300" />
	</button>
<style>
    button:hover{
        transform: rotate(30deg); /* Equal to rotateZ(45deg) */
        -webkit-transition: -webkit-transform 1s ease-in;
    }
</style>
