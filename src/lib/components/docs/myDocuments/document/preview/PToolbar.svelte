<script>
    export let bodyVisible 
    export let cardId
    import BodyVisible from '../furniture/buttons/BodyVisible.svelte';

</script>
<nav class="flex flex-row">
    <BodyVisible bind:bodyVisible={bodyVisible}/>
</nav>  