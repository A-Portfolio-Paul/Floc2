<script>
    export let preview
    import Fa from 'svelte-fa';
	import { faEye,faEdit } from '@fortawesome/free-solid-svg-icons';

    const toggleprev=() =>{
        preview = !preview
        console.log('toggleprev initiated......:',preview)
}
</script>
<button  on:click={toggleprev} class="p-1 text-gray-300">
    <Fa icon={preview?  faEdit: faEye} class="ml-2 mr-1  text-gray-300 hover:text-blue-500" />
</button>   
