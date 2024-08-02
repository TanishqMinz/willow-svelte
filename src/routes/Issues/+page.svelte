<script>
	import { Button } from "flowbite-svelte";

    export let issues = [
        {
            number: '1',
            title: "Unexplored Spaces",
            image: "/1.jpg",
            align: 'right'
        },
        {
            number: '2',
            title: "Alchemy of Warmth",
            image: "/2.jpg",
            align: 'left'
        },
        {
            number: '3',
            title: "Echoes of the Morphed",
            image: "/3.jpg",
            align: 'right',
            href: "/Issues/Three"
        }
    ];
</script>

<div class="bg-[#d2b48c] min-h-screen p-8">
    {#each issues as issue, index}
      <div class="mb-24 flex {issue.align === 'left' ? 'flex-row-reverse' : ''} items-center justify-between">
        <div class="w-[45%]">
          <img src={issue.image} alt={issue.title} class="w-full object-cover aspect-video" />
        </div>
        <div class="w-[45%] {issue.align === 'left' ? 'text-right' : 'text-left'}">
          <h2 class="text-lg font-semibold mb-2 font-sans text-[#8b4513]">Issue {issue.number}</h2>
          <h1 class="text-4xl font-bold mb-4 font-serif">{issue.title}</h1>
          <Button class="bg-[#8b4513] text-white px-4 py-2 rounded hover:bg-[#724214] transition-colors" href="/Issues/Three">
            View More
          </Button>
        </div>
      </div>
    {/each}
</div>