<script>
	import supabase from '$lib/db';
	let email = '';
	let submitted = false;

	const passwordReset = async () => {
		const { data, error } = supabase.auth.api.resetPasswordForEmail(email);
		submitted = true;
	};
</script>

{#if submitted}
	<div
		class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full  flex flex-col  justify-center"
	>
		<div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">

			<div class="space-y-4">
				<div>
					<h2>Please check your emails</h2>
				</div>
			</div>
		</div>
	</div>
{:else}
	<div
		class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full  flex flex-col  justify-center">
		
		<div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
				<h1 class="text-xl  text-center text-gray-800 font-black leading-7 md:leading-10">Reset Password</h1>
			<div class="space-y-4">
				<div>
					<label for="email" class="block mt-3 mb-1 text-gray-600 font-semibold"
						>Please enter your email</label
					>
					<input
						bind:value={email}
						type="email"
						class="mt-2 bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
					/>
				</div>
			</div>
			<div class="p-4 content-center flex flex-col items-center">
				<button
					on:click={passwordReset}
					class=" flex shadow w-32 block border-blue-600 border-2 rounded-full focus:outline-none focus:border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-600 hover:text-white"
				>
					<svg
						class="inline-block h-5 w-5 mr-1"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387A7.731 7.731 0 007.1 19h5.8a7.68 7.68 0 001.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3s2 .754 2 2.199V8z"
						/></svg
					>
					<span>Submit</span>
				</button>
			</div>
		</div>
	</div>
{/if}
