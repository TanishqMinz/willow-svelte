<script>
    import { base } from '$app/paths'

    import ParallaxImage from '../../../../lib/components/ParallaxImage.svelte';
	import PoetryProseCard from "../../../../lib/components/PoetryProseCard.svelte";

    export let data
    let { Issues } = data

    $: Issues = Issues.map(issue => ({
        ...issue, 
        href : `${base}${issue.href}`
    }))
</script>

<div>
    <ParallaxImage src="{base}/1.jpg" overlayText="Testing" alt= "yes" height={481} speed={0.5} />
    <div class="flex flex-col items-center justify-center bg-[#785C24]">
        {#each Issues as {type, header, author, description, href}}
            <PoetryProseCard {type} {header} {author} {description} {href} />
        {/each}
    </div>
</div>