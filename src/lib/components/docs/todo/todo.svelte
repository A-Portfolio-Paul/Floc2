<script>
	export let todo, updateTodo, deleteTodo;
	import Button from '../../layout/furniture/buttons/Button.svelte'
</script>

<div class="todo" class:done={todo.isComplete}>
	<input
		class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
		type="checkbox"
		checked={todo.isComplete}
		on:change={(e) => {
			todo.isComplete = e.currentTarget.checked;
			updateTodo(todo);
		}}
	/>

	<input
	class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"

		type="text"
		value={todo.task}
		on:input={(e) => {
			todo.task = e.currentTarget.value;
			updateTodo(todo);
		}}
	/>
	<Button label="Delete" action={deleteTodo} data={todo}/>
</div>

<style>
	.todo {
		display: flex;
		padding:4px;
	}
    .done {
        opacity:0.5
    }
    .done input[type="text"]{
        text-decoration:line-through
    }
	button{

	}
</style>