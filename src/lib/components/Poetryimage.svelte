<script>
    export let overlayText
    export let imgUrl
</script>

<div class="flex items-center justify-center h-[481px] bg-cover bg-center" style="background-image: url('{imgUrl}'">
    <div class="bg-black bg-opacity-60 rounded-lg px-96 py-16">
        <h1 class="text-white text-7xl ">{overlayText}</h1>
    </div>
</div>