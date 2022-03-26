<script>
	import { user } from '../../../stores';
	import Login from './Login.svelte';
	import Icon from '../furniture/Icon.svelte';
	import Logout from './Logout.svelte';

	
</script>

<div class="bg-gray-500 ">
	<nav class="bg-white px-6 relative ">
		<div class="flex flex-row justify-between items-center py-2">
			<Icon />
			<div class="group flex flex-col items-center">
				<button class="p-2 rounded-lg md:hidden">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						class="h-10 fill-current"
						viewBox="0 0 16 16"
						><path
							fill-rule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/></svg
					>
				</button>
				<div
					class="hidden group-hover:block md:block absolute md:static bg-white inset-x-0 top-16 py-3 shadow-md md:shadow-none text-gray-600"
				>
					<div
						class="flex flex-row justify-center items-center text-center font-semibold text-gray-500"
					>
						<a
							class="hover:text-green-500 hover:underline px-6 py-1 flex flex-col md:flex-row md:items-center"
							href="/"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="currentColor"
								class="fill-current h-10 md:h-5 px-2"
								viewBox="0 0 16 16"
								><path
									fill-rule="evenodd"
									d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
								/><path
									fill-rule="evenodd"
									d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
								/></svg
							>
							Home
						</a>
						{#if $user.email}
							<Logout  />
						{:else}
							<Login />
						{/if}
					</div>
				</div>
			</div>
		</div>
	</nav>
</div>
