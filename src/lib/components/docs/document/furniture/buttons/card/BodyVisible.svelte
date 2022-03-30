<script>
	export let bodyVisible;
	import Fa from 'svelte-fa';
	import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

	const toggle = () => {
		bodyVisible = !bodyVisible;
	};
</script>

<button on:click={() => toggle()} class="p-2 text-sm text-blue-200 hover:text-red-400  active:text-red-300 ">
	<Fa icon={bodyVisible ? faSortDown : faSortUp}  
	class="text-sm text-blue-200 hover:text-red-400  active:text-red-300"/>
</button>


