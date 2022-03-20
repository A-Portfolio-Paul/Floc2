<script>
	import { onMount } from 'svelte';
	import supabase from '$lib/db';
	import { user, sess } from '../../../stores';
	import { goto } from '$app/navigation';
	import Todo from './todo.svelte';

	import Button from '../../../components/layout/furniture/buttons/Button.svelte';

	let todos = [];
	let newTask = '';
	onMount(async () => {
		console.log('mounted.....');
		getSession();
		await getAllTodos();
		let { data, error } = await supabase.from('todos').select('*');
		todos = data;
	});
	const getAllTodos = async () => {
		try {
			let { data, err } = await supabase.from('todos').select('*');
			todos = data;
		} catch {
			console.log(err);
		}
	};
	const addTask = async (task) => {
		console.log('add task');
		try {
			const { data, error } = await supabase
				.from('todos')
				.insert([{ task: newTask, user_id: $user.id }]);
			await getAllTodos();
			newTask = '';
		} catch {
			console.log(error);
		}
	};

	const updateTodo = async (todo) => {
		console.table(todo);
		try {
			const { data, error } = await supabase
				.from('todos')
				.update({ task: todo.task, isComplete: todo.isComplete })
				.eq('id', todo.id);
			await getAllTodos();
		} catch {
			console.log(error);
		}
	};
	const deleteTodo = async (todo) => {
		try {
			const { data, error } = await supabase.from('todos').delete().eq('id', todo.id);
			await getAllTodos();
		} catch {
			console.log(err);
		}
	};
	const handleKeyPress = (event) => {
		console.log(event);
		if (event.key == 'Enter' && newTask != '') {
			addTask();
		}
	};
	const logout = async () => {
		let { error } = await supabase.auth.signOut();
		$user = false;
		goto('/login');
	};
	const getSession = () => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (event === 'PASSWORD_RECOVERY') {
				console.log('RECOVERY HAS BEEN REQUESTED', 'my_event:', event, 'my_session', session);
				sess.update((val) => {
					val = { session };
					return val;
				});
				goto('/passwordReset');
			} else {
				// save the user session
			}
		});
	};
</script>

<section class="m-10 p-10 bg-slate-200 rounded-md">
	<h1
		class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10"
	>
		Welcome {$user?.email ? $user.email : ''}!
	</h1>
	<div class="addTodo mt-5">
		<input
			class=" bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
			type="text"
			bind:value={newTask}
		/>
		<Button label="Add Task" action={addTask} />
	</div>
	<div class="mt-10">
		{#each todos as todo}
			<Todo {todo} {updateTodo} {deleteTodo} />
		{:else}
			<p>no todos found</p>
		{/each}
		{#if $user.email}
			<p on:click={logout} class="switch">logout</p>
		{/if}
	</div>
</section>

<svelte:window on:keypress={handleKeyPress} />

<style>
	.addTodo {
		display: flex;
		margin-bottom: 0.5em;
	}
	:global(.switch) {
		color: skyblue;
		cursor: pointer;
	}
	:global(.switch:hover) {
		text-decoration: underline;
	}
</style>
