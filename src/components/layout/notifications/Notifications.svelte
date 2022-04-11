<script>
	import { alerts } from '../../../utils/stores';
	import Notification from './Notification.svelte';
	// import Banner from '$lib/layout/Banner.svelte';

	// alerts.subscribe((value) => {
	// 	console.log('STORE:alerts:', value, 'alerts length:', value.length);
	// });

	let displayNotification = true; // this will be a prop

	const hide = () => {
		displayNotification = false;
	};

	// setTimeout(function() {
	// 	displayNotification = false; }, 1 * 90000);
</script>

<!-- Toast Container -->
<!-- put taost notification in here , to cope when the toast more than one -->
<!-- class="absolute right-0 top-0 m-5" For put toast on top right -->
{#if displayNotification == true}
	<div on:click={hide} class="pt-4 flex flex-col justify-center">
		<Notification />
	</div>
{/if}
