<script>
    import { onMount } from 'svelte';
    import { spring } from 'svelte/motion';
  
    export let src
    export let alt
    export let height = 400;
    export let speed = 0.5;
    export let overlayText
  
    let container;
    let imageWrapper;
    let containerTop = 0;
    let windowHeight = 0;
    let imageHeight = 0;
    let parallaxOffset = spring(0, {
      stiffness: 0.015,
      damping: 0.8
    });
  
    $: {
    const maxOffset = imageHeight - height;
    const offset = Math.max(0, Math.min(-containerTop * speed, maxOffset));
    parallaxOffset.set(offset);
  }

  onMount(() => {
    const updateParallax = () => {
      if (container && imageWrapper) {
        const rect = container.getBoundingClientRect();
        containerTop = rect.top;
        windowHeight = window.innerHeight;
        imageHeight = imageWrapper.offsetHeight;
      }
    };

    window.addEventListener('scroll', updateParallax);
    window.addEventListener('resize', updateParallax);
    updateParallax(); // Initial call to set values

    return () => {
      window.removeEventListener('scroll', updateParallax);
      window.removeEventListener('resize', updateParallax);
    };
  });
</script>

<div 
  bind:this={container}
  class="parallax-container"
  style="height: {height}px;"
  aria-label="Parallax container for {alt}"
>
  <div 
    bind:this={imageWrapper}
    class="image-wrapper"
    style="transform: translateY(-{$parallaxOffset}px);"
  >
    <img {src} {alt} />
  </div>
  {#if overlayText}
    <div class="text-overlay">
      <h2>{overlayText}</h2>
    </div>
  {/if}
</div>

<style>
  .parallax-container {
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .image-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150%; /* Increase height to allow for parallax movement */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .text-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.4);
    color: #f1e9d6;
    font-family: serif;
  }

  .text-overlay h2 {
    font-size: 5rem;
    text-align: center;
    padding: 1rem;
    margin: 0;
  }
</style>