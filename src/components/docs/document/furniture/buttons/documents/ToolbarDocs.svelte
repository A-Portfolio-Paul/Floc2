<script>
	export let docId;
	import { documents } from '../../../../../../utils/stores.js';
	import RemoveDocument from './RemoveDocument.svelte';

</script>

<div class="flex flex-row">
	<RemoveDocument {docId} />
</div>
