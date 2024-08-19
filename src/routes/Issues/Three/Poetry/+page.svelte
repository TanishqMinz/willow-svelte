<script>
    import { Card, Button } from "flowbite-svelte";
    import Poetryimage from "../../../../lib/components/Poetryimage.svelte";

    export const Issues = [
        {
            header: "test1",
            author: "author1",
            description: "desc1",
            href: "#"
        },
        {
            header: "test2",
            author: "author2",
            description: "desc2",
            href: "#"
        },
]
</script>

<div>
    <Poetryimage overlayText="testing" imgUrl='/1.jpg' />
    <div class="flex flex-col items-center justify-center bg-[#785C24]">
        {#each Issues as Issue}
        <Card class="my-8 flex items-start justify-center rounded-none ">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{Issue.header}</h5>
            <h6 class="text-base font-sans">{Issue.author}</h6>
            <p class="mb-3 font-normal text-gray-700 leading-tight">{Issue.description}</p>
            <Button class="w-fit bg-primary-600" href={Issue.href}>View</Button>
        </Card>
        {/each}
    </div>
</div>