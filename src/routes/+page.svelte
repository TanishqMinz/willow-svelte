<script>
    import { base } from '$app/paths'
    import { Carousel } from 'flowbite-svelte';
    import  { Button } from 'flowbite-svelte';
    export let data
    let { images } = data

    $: images = images.map(img => ({
      ...img, 
      src : `${base}${img.src}`,
      href : `${base}${img.href}`
    }) )

    $: image = images[0]
</script>

<div class=" bg-[url(/1.jpg)] h-[400px] md:h-[729px] w-full bg-cover bg-center bg-no-repeat relative"></div>
<div class=" h-px[800] w-full relative bg-primary-400 flex justify-center items-center space-y-4 ">
      <div class=" max-w-[1128px] w-full h-[767px] px-16 py-8 bg-primary-300 rounded-none shadow-md my-12">
        <Carousel {images} duration={4000} let:Controls on:change={({detail}) => (image=detail)}>
          <Controls />
        </Carousel>
        <div class="p-2">
          <h2 class="text-6xl font-serif text-green-800">{image?.title}</h2>
          <p class="mt-2 text-lg">{image?.description}</p>
          <Button class="mt-4 px-16 py-4 bg-primary-500 rounded shadow hover:bg-yellow-600 text-black" href={image?.href}>View More</Button>
        </div>
      </div>
</div>
