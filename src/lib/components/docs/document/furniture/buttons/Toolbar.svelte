<script>
    import { removeRecord } from '../../../../../functions/documents/remove';

    export let bodyVisible 
    export let editUrl
    export let cardId
    import BodyVisible from './BodyVisible.svelte';
    import Remove from './Remove.svelte'
    import ShowUrl from './EditUrl.svelte';
</script>

<nav class="flex flex-row">
	<Remove {cardId} />
	<ShowUrl bind:editUrl={editUrl}/>
	<BodyVisible bind:bodyVisible={bodyVisible}/>
</nav>
