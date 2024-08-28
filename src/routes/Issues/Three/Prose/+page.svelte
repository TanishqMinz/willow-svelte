<script>
    import HeadImage from "../../../../lib/components/HeadImage.svelte";
	import PoetryProseCard from "../../../../lib/components/PoetryProseCard.svelte";

    export const Issues = [
        {
            type: "prose",
            header: "test1",
            author: "author1",
            description: "desc1",
            href: "#"
        },
        {
            type: "prose",
            header: "test2",
            author: "author2",
            description: "desc2",
            href: "#"
        },
        {
            type: "prose",
            header: "test2",
            author: "author2",
            description: "desc2",
            href: "#"
        },
]
</script>

<div>
    <HeadImage overlayText="testing" imgUrl='/2.jpg' />
    <div class="flex flex-col items-center justify-center bg-[#785C24]">
        {#each Issues as {type, header, author, description, href}}
            <PoetryProseCard {type} {header} {author} {description} {href} />
        {/each}
    </div>
</div>