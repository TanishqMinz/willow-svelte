<script>
    import { Card } from 'flowbite-svelte'

    export let type
    export let header
    export let author
    export let description
    export let href 
    export let buttonColor = "bg-[#5e4a2e]"
    export let buttonText = "View More"
</script>

<Card class=" bg-[#f7f3ef] my-8 flex {type == 'poetry' ? 'items-center' : 'items-start' } rounded-none" size="md" >
    <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900">{header}</h5>
    <h6 class="text-base font-sans {type == 'poetry' ? 'ml-96' : '' } ">{author}</h6>
    <p class="mb-3 font-normal text-gray-700 leading-tight">{description}</p>
    <a 
    href={href} 
    class={`${buttonColor} text-white py-2 px-6 inline-block hover:opacity-90 transition-opacity`}
  >
    {buttonText}
  </a>
</Card>