<script>
	export let imageUrl;
	export let title;
	export let cardId;
	export let colorShade;
	import Input from './Input.svelte';
	import ChangeImage from '../ChangeImage.svelte';
</script>

<div class={imageUrl ? "container hoverwrap rounded-md max-w-6xl p-2 myMinH text-slate-300 mb-2 " : "container hoverwrap rounded-md max-w-6xl p-2 myMinH text-slate-300 mb-2 bg-blue-200"}>
	<img  src={imageUrl} alt={imageUrl ? title :''} class="image rounded-md" style="width:100%" />
	<div class="middle">
		<ChangeImage {colorShade} cardId={cardId}/>
	</div>
</div>

<style>
	.container {
		position: relative;
	}

	.image {
		opacity: 1;
		display: block;
		width: 100%;
		height: auto;
		transition: 0.5s ease;
		backface-visibility: hidden;
	}

	.middle {
		transition: 0.5s ease;
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		text-align: center;
	}

	.container:hover .image {
		opacity: 0.3;
	}

	.container:hover .middle {
		opacity: 1;
	}

	.text {
		background-color: #22c55e;
		border-radius: 10px;
		color: white;
		font-size: 16px;
		padding: 16px 32px;
	}
	.myMinH{
		min-height: 200px;
	}
</style>
