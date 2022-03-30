<script>
    export let docId
    import Fa from 'svelte-fa';
	import { faFolderMinus } from '@fortawesome/free-solid-svg-icons';

    const toggle=() =>{
        docId = !docId
        console.log('toggle initiated......exitDocument:',docId)
}
</script>
 
<button class="p-1"  on:click={toggle}>
    <Fa  icon={faFolderMinus} class="text-sm text-blue-200 hover:text-red-400  active:text-red-300" />
</button>