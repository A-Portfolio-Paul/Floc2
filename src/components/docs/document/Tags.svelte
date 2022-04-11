<script>
    export let cardId
    import {currentView} from '../../../utils/stores'
    $:allTags = $currentView.cards[cardId].tags
</script>
<div class="flex flex-row content-center">
{#each   allTags as tag}
    <div  class='text-sm text-center text-white rounded-xl bg-red-400 p-1 m-2 hover:bg-blue-300 w-1/6'>
        {tag}
    </div>
{/each}
</div>
<!-- //something -->