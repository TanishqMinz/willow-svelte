<script>
    import { Carousel } from 'flowbite-svelte';
    import  { Button } from 'flowbite-svelte';
    const images = [
      {
        alt: 'Cosmic timetraveler',
        src: '/1.jpg',
        title: 'VISUAL ART',
        description: 'yay1',
        href: 'https://www.google.co.in/'
      },
      {
        alt: 'Cristina Gottardi',
        src: '/2.jpg',
        title: 'test2',
        description: 'yay2'
      },
      {
        src: '/3.jpg',
        title: 'test3',
        description: 'yay3'
      },
      {
        src: '/4.jpg',
        title: 'test4',
        description: 'yay4'
      }
    ]
  let index = 0
  let image 
</script>

<div class="bg-[url('/pranshu_edited.jpg')] h-[400px] md:h-[729px] w-full bg-cover bg-center bg-no-repeat relative"></div>
<div class=" h-px[800] w-full relative bg-primary-400 flex justify-center items-center space-y-4 ">
      <div class=" max-w-[1128px] w-full h-[767px] p-8 bg-primary-300 rounded-md shadow-md my-12">
        <Carousel {images} duration={4000} let:Controls on:change={({detail}) => (image=detail)}>
          <Controls />
        </Carousel>
        <div class="p-2">
          <h2 class=" text-4xl font-serif text-green-800">{image?.title}</h2>
          <p class="mt-2 text-lg">{image?.description}</p>
          <Button class="mt-4 px-4 py-2 bg-primary-500 rounded shadow hover:bg-yellow-600 text-black" href={image?.href}>View More</Button>
        </div>
      </div>
</div>
