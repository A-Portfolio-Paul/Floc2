<script>
	export let inputText;
	export let inputPlaceholder
	export let colorShade

	const style = "inputText rounded p-1 w-full flex-grow level"+colorShade

</script>
<input
	class={" text-blue-100 placeholder:text-blue-400   hover:text-blue-600 rounded p-1 pl-2 flex-grow level"+colorShade}
	type="text"
	id="fname"
	name="firstname"
	size=14
    bind:value={inputText}
	placeholder={inputPlaceholder}
/>
<style>
	.inputText{
		color:red;
	}

</style>