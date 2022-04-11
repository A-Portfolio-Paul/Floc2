<script>
    import { removeRecord } from '../../../../../../utils/functions/documents/remove.js';

    export let bodyVisible 
    export let editUrl
    export let cardId
    import BodyVisible from '../card/BodyVisible.svelte';
    import Remove from '../card/Remove.svelte'
    import ShowUrl from '../card/EditUrl.svelte';
</script>

<nav class="flex flex-row">
	<Remove {cardId} />
	<ShowUrl bind:editUrl={editUrl}/>
	<BodyVisible bind:bodyVisible={bodyVisible}/>
</nav>
