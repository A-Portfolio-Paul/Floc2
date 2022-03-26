<script>
	export let cardId;
	export let colorShade;
	import PreviewCard from './PCard.svelte';
	
</script>

<h1>Preview</h1>
<PreviewCard {cardId}  {colorShade}/>
