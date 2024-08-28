<script>
    import { Card, Button } from 'flowbite-svelte'

    export let type
    export let header
    export let author
    export let description
    export let href
</script>

<Card class="my-8 flex {type == 'poetry' ? 'items-center' : 'items-start' } rounded-none" size="md" >
    <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900">{header}</h5>
    <h6 class="text-base font-sans {type == 'poetry' ? 'ml-96' : '' } ">{author}</h6>
    <p class="mb-3 font-normal text-gray-700 leading-tight">{description}</p>
    <Button class="w-fit bg-primary-600" href={href}>View</Button>
</Card>