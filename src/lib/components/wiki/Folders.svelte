<script>
	import Content from './Content.svelte';
	import Section from './Section.svelte'

	const f1 = 'flex flex-col';
	const f2 = 'flex flex-row';
	const f3 = 'flex flex-col';
	const f4 = 'flex flex-col';
	const f5 = 'flex flex-col';
	const f6 = 'flex flex-col';

	const base = 'p-1 m-1 rounded ';
	//colors
	const col1 = 'bg-gray-300 text-gray-700';
	const col2 = 'bg-blue-100';
	const col3 = 'bg-green-800 text-gray-200';
	const col4 = 'bg-green-600';
	const col5 = 'bg-green-400 text-gray-700';
	const col6 = 'bg-green-200';
</script>

<div class="p-10">
	<main class="{base} {col1} {f1}">
		<Content text="1-main text-center" />
		<section class=" {base} {col2} {f2}">
			<!-- <Content text="2-section" /> -->
			<article class="{base} {col3} {f3} w-96">
				<Content text="3-article" />
				<div class="{base} {col4} {f4}">
					<Content text="4-div" />
					<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
					<div class="{base} {col5} {f5}">
						<Content text="5-div" />
						<div class="{base} {col6} {f6}"><Content text="6-div" /></div>
					</div>
					<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
					<div class="{base} {col5} {f5}"><Content text="5-div" /></div>
				</div>
			</article>
			<article class="{base} {col3} {f3} w-96"><Content text="3-article" /></article>
			<article class="{base} {col3} {f3} w-96"><Content text="3-article" /></article>
			<article class="{base} {col3} {f3} w-96"><Content text="3-article" /></article>
		</section>
		<section>
			<Content text="2-section" />
			<article />
		</section>
	</main>
</div>
