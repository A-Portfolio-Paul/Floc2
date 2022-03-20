<script>
    export let bodyVisible 
    export let editUrl
    export let cardId
    export let  removeRecord
    export let cols
    export let toggleCols
    import BodyVisible from './bodyVisible.svelte';
    import Remove from './Remove.svelte'
    import ShowUrl from './EditUrl.svelte';
    import Cols from './Cols.svelte'
</script>
<nav class="flex flex-row">
    <Remove cardId={cardId}  removeRecord={removeRecord}/>
    <ShowUrl bind:editUrl={editUrl}/>
    <Cols bind:cols={cols} {toggleCols}/>
    <BodyVisible bind:bodyVisible={bodyVisible}/>
</nav>  