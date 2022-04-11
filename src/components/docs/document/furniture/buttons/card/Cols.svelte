<script>
	export let cols;
	export let toggleCols;
	import Fa from 'svelte-fa';
	import { faColumns, faAlignJustify } from '@fortawesome/free-solid-svg-icons';
</script>

<button on:click={toggleCols} class="p-1">
	<Fa icon={cols ? faColumns : faAlignJustify} class="text-sm text-blue-200 hover:text-red-400  active:text-red-300" />
</button>
