<script>
    import { Card, Button } from 'flowbite-svelte';
    export const CardData = [
        {
            header: "header1",
            description: "description1",
            href: "#"
        },
        {
            header: "header1",
            description: "description1",
            href: "#"
        },
        {
            header: "header1",
            description: "description1",
            href: "#"
        },
        {
            header: "header1",
            description: "description1",
            href: "#"
        },
        {
            header: "header1",
            description: "description1",
            href: "#"
        },
        {
            header: "header1",
            description: "description1",
            href: "#"
        },
    ]
</script>

<div class=" bg-primary-50">
    <div class="flex flex-col flex-wrap lg:flex-row justify-between items-center ">
    {#each CardData as Data}
    <Card class="my-4 mx-4">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{Data.header}</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{Data.description}</p>
        <Button class="w-fit" href={Data.href}>
        View
        </Button>
    </Card>
    {/each}
    </div>
    <div class="bg-primary-300 mt-4 h-36 flex items-center justify-center">
        <h2 class="text-4xl text-center font-serif pb-2 relative">
            Meet The Team
            <span class="absolute left-0 right-0 top-full border-b-4 border-current w-full"></span>
        </h2>
    </div>      
</div>