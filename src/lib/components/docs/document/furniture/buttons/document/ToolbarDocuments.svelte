<script>
	export let docId;
	import { documents } from '../../../../../../stores';
	import RemoveDocument from './RemoveDocument.svelte';

	documents.subscribe((value) => {
		console.log('STORE:Documents:', value);
	});


</script>

<div class="flex flex-row">
	<RemoveDocument {docId} />
</div>
