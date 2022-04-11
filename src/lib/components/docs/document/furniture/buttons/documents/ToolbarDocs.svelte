<script>
	export let docId;
	import { documents } from '../../../../../../stores';
	import RemoveDocument from './RemoveDocument.svelte';

</script>

<div class="flex flex-row">
	<RemoveDocument {docId} />
</div>
