<script>
	import { page } from '$app/stores';
	import { base } from '$app/paths'
	import { onNavigate } from '$app/navigation';
	import '../app.css';
	import { FooterIcon } from 'flowbite-svelte';
	import { Footer, FooterCopyright, FooterLinkGroup } from 'flowbite-svelte';
	import { InstagramSolid, LinkedinSolid, MailBoxSolid } from 'flowbite-svelte-icons';

	let isOpen = false;

	const toggleMenu = () => {
  		isOpen = !isOpen;
	};

	// Reactive variable for the active URL
	$: activeUrl = $page.url.pathname;
	let activeClass = 'text-primary-600 bg-primary-200 ';
	let nonActiveClass = 'text-primary-50 bg-primary-600 hover:bg-primary-300 hover:text-primary-600 transition-colors duration-200 ease-in-out';

	// Handle navigation to update active link
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<nav class="bg-primary-600 p-4 flex justify-between items-center lg:flex">

	<div class="lg:hidden">
	  <button on:click={toggleMenu} aria-label="Toggle menu" class="text-primary-200 focus:outline-none">
		<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
		</svg>
	  </button>
	</div>

	<ul class="hidden lg:flex space-x-0 ml-72">
	  <li class="uppercase font-serif">
		<a href="{base}/" class={`flex items-center justify-center w-[100px] h-[30px] ${activeUrl === '/' ? activeClass : nonActiveClass}`}>Home</a>
	  </li>
	  <li class="uppercase font-serif">
		<a href="{base}/About-Us" class={`flex items-center justify-center w-[100px] h-[30px]  ${activeUrl === '/About-Us' ? activeClass : nonActiveClass}`}>About</a>
	  </li>
	  <li class="uppercase font-serif">
		<a href="{base}/Issues" class={`flex items-center justify-center w-[100px] h-[30px]  ${activeUrl === '/Issues' ? activeClass : nonActiveClass}`}>Issues</a>
	  </li>
	  <li class="uppercase font-serif">
		<a href="{base}/Submissions" class={`flex items-center justify-center w-[140px] h-[30px] p-4  ${activeUrl === '/Submissions' ? activeClass : nonActiveClass}`}>Submissions</a>
	  </li>
	</ul>

	<a href="{base}/" class="lg:mr-72">
		<img src="{base}/willow tree_edited.jpg" alt="Logo" class="rounded-full w-20">
	</a>
  
	<ul class={`flex-col mt-4 space-y-2 lg:hidden ${isOpen ? 'flex' : 'hidden'}`}>
	  <li class="uppercase font-serif">
		<a href="{base}/" class={`flex items-center justify-center w-full h-[40px] ${activeUrl === '/' ? activeClass : nonActiveClass}`}>Home</a>
	  </li>
	  <li class="uppercase font-serif">
		<a href="{base}/About-Us" class={`flex items-center justify-center w-full h-[40px] ${activeUrl === '/About-Us' ? activeClass : nonActiveClass}`}>About</a>
	  </li>
	  <li class="uppercase font-serif">
		<a href="{base}/Issues" class={`flex items-center justify-center w-full h-[40px] ${activeUrl === '/Issues' ? activeClass : nonActiveClass}`}>Issues</a>
	  </li>
	  <li class="uppercase font-serif">
		<a href="{base}/Submissions" class={`flex items-center justify-center w-full h-[40px] ${activeUrl === '/Submissions' ? activeClass : nonActiveClass}`}>Submissions</a>
	  </li>
	</ul>
  </nav>

<main>	
	<slot/>
	<Footer footerType="socialmedia" class="bg-primary-600 ">
		<div class="flex flex-col items-center justify-center">
			<FooterLinkGroup ulClass="flex items-center mb-6 text-xl text-primary-50">
				<h2 class="mb-0 text-primary-50 text-xl uppercase font-serif mr-4">Contact Us :</h2>
				<FooterIcon href="mailto:elshrc13@gmail.com">
					<MailBoxSolid class="w-9 h-9 text-primary-50" />
				</FooterIcon>
				<FooterIcon href="https://www.linkedin.com/in/the-english-society-hansraj-college-80a612212">
					<LinkedinSolid class="w-9 h-9 text-primary-50" />
				</FooterIcon>
				<FooterIcon href="{base}/">
					<InstagramSolid class="w-9 h-9 text-primary-50" />
				</FooterIcon>
			</FooterLinkGroup>
		</div>
		<hr class="my-6 border-white sm:mx-auto lg:my-8" />
		<FooterCopyright spanClass="block text-primary-50 text-md text-center" href="{base}/" by="Willow Journal™" />
	</Footer>
</main>
