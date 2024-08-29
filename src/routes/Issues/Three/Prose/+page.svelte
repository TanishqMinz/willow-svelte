<script>
    import { base } from '$app/paths'

    import HeadImage from "../../../../lib/components/HeadImage.svelte";
	import PoetryProseCard from "../../../../lib/components/PoetryProseCard.svelte";

    export let data
    let { Issues } = data

    $: Issues = Issues.map(issue => ({
        ...issue, 
        href : `${base}${issue.href}`
    }))
</script>

<div>
    <HeadImage overlayText="testing" imgUrl='{base}/2.jpg' />
    <div class="flex flex-col items-center justify-center bg-[#785C24]">
        {#each Issues as {type, header, author, description, href}}
            <PoetryProseCard {type} {header} {author} {description} {href} />
        {/each}
    </div>
</div>