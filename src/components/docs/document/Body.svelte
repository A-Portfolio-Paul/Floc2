<script>
    export let cardId
    export let colorShade
    import Tags from './Tags.svelte'
    import Notes from './Notes.svelte'
    import ImageCard from './furniture/ImageCard.svelte'
    import {currentView} from '../../../utils/stores.js'


    $:imageUrl = $currentView.cards[cardId].imageUrl
    $:title = $currentView.cards[cardId].title
    $:notes = $currentView.cards[cardId].notes
</script>
    <Tags cardId={cardId}/>
    <ImageCard cardId={cardId} bind:imageUrl={imageUrl} title = {title} colorShade={colorShade} />
    <!-- <Notes  cardId={cardId} colorShade={colorShade} /> -->
