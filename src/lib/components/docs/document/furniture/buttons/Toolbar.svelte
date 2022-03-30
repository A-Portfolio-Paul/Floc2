<script>
    import { removeRecord } from '../../../../../functions/documents/remove2';

    export let bodyVisible 
    export let editUrl
    export let cardId
    // import BodyVisible from './BodyVisible.svelte';
    import Remove from './Remove.svelte'
    // import ShowUrl from './EditUrl.svelte';
    // import Cols from './Cols.svelte'
</script>

<nav class="flex flex-row">
	<Remove {cardId} />
	<!-- <ShowUrl bind:editUrl={editUrl}/> -->
	<!-- <Cols bind:cols={cols} /> -->
	<!-- <BodyVisible bind:bodyVisible={bodyVisible}/> -->
</nav>
