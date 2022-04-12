<script>
    export let colorShade
    export let cardId
    import Input from './furniture/Input.svelte'
    import {currentView} from '../../../utils/stores.js'
    let newUrl = ''
    
    const addNewUrl = (newUrl,cardId) =>{
        currentView.update((val) => {
			val.cards[cardId].imageUrl =newUrl
			return val;
		});
    }

</script>
<div class="rounded-md h-24">
    <Input bind:inputText={newUrl} inputPlaceholder="Optional image url" {colorShade} />
    <button  on:click={() => addNewUrl(newUrl,cardId)} class="mt-3 p-2 text-white bg-green-400 rounded-md">
        submit
    </button>
</div>