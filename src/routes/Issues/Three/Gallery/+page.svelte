<script>
	import { base } from '$app/paths'
 	import GalleryLightbox from "../../../../lib/components/GalleryLightbox.svelte";
	export let data

	let { Images } = data
	$: Images = Images.map(image => ({
		...image,
		src : `${base}${image.src}`
	})  )

</script>


<div class="flex justify-center min-h-screen bg-primary-700">
	<div class="p-4 w-full max-w-7xl mx-auto">
		<GalleryLightbox {Images} />
	</div>
</div>
