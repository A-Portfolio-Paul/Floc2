<script>
    export let editUrl
    import Fa from 'svelte-fa';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';

    const toggle=() =>{
        editUrl = !editUrl
        console.log('toggle initiated......editUrl:',editUrl)
}
</script>
 
<button class="p-1"  on:click={toggle}>
    <Fa  icon={faGlobe} class="text-sm text-blue-200 hover:text-red-400  active:text-red-300" />
</button>