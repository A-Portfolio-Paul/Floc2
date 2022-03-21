<script>
	import { user, documents } from '../../../stores';
	import Document from '../document/Document.svelte'

</script>

<section class="m-10 p-10 bg-slate-200 rounded-md">
	<h1
		class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10"
	>
		Welcome {$user?.email ? $user.email : ''}!
	</h1>
	<h2 class="underline ">My Flocs</h2>
	<ul>
		{#each $documents as doc}
			<li>-{doc.name}</li>
		{/each}
	</ul>
</section>
<Document/>
<style>
</style>
