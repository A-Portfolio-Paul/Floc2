<script>
	export let text;
	export let flex;
</script>

<div>
	<div><p class="p-1">{text}</p></div>
	<div class={flex}>
		<slot />
	</div>
</div>
