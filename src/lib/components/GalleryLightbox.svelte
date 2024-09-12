<script>
	export let Images;

	let selectedImage;
	let hoveredIndex;

	function openLightbox(index) {
		selectedImage = Images[index];
	}

	function closeLightbox() {
		selectedImage = null;
	}
</script>

<div class="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
	{#each Images as image, index}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="group relative cursor-pointer transition-transform duration-300"
			class:scale-105={hoveredIndex === index}
			on:mouseenter={() => (hoveredIndex = index)}
			on:mouseleave={() => (hoveredIndex = null)}
			on:click={() => openLightbox(index)}
		>
			<img src={image.src} alt={image.alt} class="h-full w-full rounded-lg object-cover" />
			<div
				class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
			>
				<p class="p-2 text-center text-white">{image.hoverText}</p>
			</div>
		</div>
	{/each}
</div>

{#if selectedImage}
	<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
		<div class="w-full max-w-3xl p-4">
			<img src={selectedImage.src} alt={selectedImage.alt} class="h-auto w-full" />
			<div class="mt-4 text-white">
				<h2 class="text-xl font-bold">{selectedImage.title}</h2>
				<p class="mt-2">Photograph by {selectedImage.photographer}</p>
				<p class="mt-2">{selectedImage.description}</p>
			</div>
			<button on:click={closeLightbox} class="absolute right-4 top-4 text-white"
				>Close(todo)
			</button>
		</div>
	</div>
{/if}
