<script>
	import Content from './Content.svelte';
	import Section from './Section.svelte';

	const f1 = 'flex flex-row flex-grow w-full flex-wrap';
	const f2 = 'flex flex-row ';
	const f3 = 'flex flex-col cu_grow';
	const f4 = 'flex flex-col ';
	const f5 = 'flex flex-col ';
	const f6 = 'flex flex-col ';

	const base = 'p-1 m-1 rounded ';
	//colors
	const col1 = 'bg-gray-300 text-gray-700';
	const col2 = 'bg-blue-100';
	const col3 = 'bg-green-800 text-gray-200';
	const col4 = 'bg-green-600';
	const col5 = 'bg-green-400 text-gray-700';
	const col6 = 'bg-green-200';
</script>


<div class="lg:p-10 md:p-1">
	<main class="flex flex-row flex-grow w-full p-1 flex-wrap rounded">
		<header class="majorCol m-px p-1 bg-green-900 text-slate-100 rounded w-full" >Header</header>
		<section class="majorCol m-px p-1 bg-green-700 text-slate-100 rounded">
			<Content text="3-article" />
			<article class="{base} {col4} {f4}">
				<Content text="4-div" />
				<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
				<div class="{base} {col5} {f5}">
					<Content text="5-div" />
					<div class="{base} {col6} {f6}"><Content text="6-div" /></div>
				</div>
				<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
				<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
			</article>
		</section>
		<section class="majorCol m-px p-1 bg-red-600 rounded"><Content text="3-article" />
			<article class="{base} {col4} {f4}">
				<Content text="4-div" />
				<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
				<div class="{base} {col5} {f5}">
					<Content text="5-div" />
					<div class="{base} {col6} {f6}"><Content text="6-div" /></div>
				</div>
				<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
				<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
			</article></section>
		<section class="majorCol m-px p-1 bg-red-600 rounded"><Content text="3-article" />
			<article class="{base} {col4} {f4}">
				<Content text="4-div" />
				<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
				<div class="{base} {col5} {f5}">
					<Content text="5-div" />
					<div class="{base} {col6} {f6}"><Content text="6-div" /></div>
				</div>
				<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
				<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
			</article></section>
		<section class="majorCol m-px p-1 bg-red-600 rounded">a</section>
		<section class="majorCol m-px p-1 bg-red-600 rounded">a</section>
		<section class="majorCol m-px p-1 bg-red-600 rounded">a</section>
		<section class="majorCol m-px p-1 bg-red-600 rounded">a</section>
		<footer class="majorCol m-px p-1 bg-green-900 text-slate-100 rounded w-full" >Footer</footer>

	</main>
</div>


<style>
	.majorCol {
		min-width: 150px;
		flex-grow: 1;
	}
	.cu_grow{
		min-width: 100px;
		flex-grow: 1;
	}
</style>
