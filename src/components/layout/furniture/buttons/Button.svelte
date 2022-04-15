<script>
	export let label;
	export let action;
	export let data = 'default';

	const runFunction = () => {
		if (data == 'default') {
			console.log('function passed with 0 args');
			action();
		} else {
			console.log('GOT prop');
			action(data);
		}
	};
</script>

<button
	on:click={() => runFunction()}
	class="ml-4 p-2 pl-3 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-lg rounded-lg focus:border-4 border-indigo-300"
>
	{label}
</button>
