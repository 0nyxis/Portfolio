<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	
	import { darkMode } from '$lib/stores/theme';

	$effect( () => 
		{
			document.documentElement.dataset.theme = $darkMode ? "dark" : "light" ;
		});

	let { children } = $props();
</script>

<style>

	:global(body)
	{
		margin:0;
		background-color: var(--background);
		color: var(--text);
	}
	:global(:root)
	{
		--background: #f5f6f3;
		--backgroundSection : #ebe7e7;

		--navBar-BackgroundColor : #a0a2a5;
		--navBar-sousMenu-background : #19352f;

		--footer-backgroundColor : rgb(165, 165, 255);

		--text: #18201d;
		--text-variant: #18201d;
		--hover: #b8d8d0;

		--border: #3F7D20;

		--help-text-bg : #f0f0f0d0 ;

		--radius : 16px;
	}

	:global([data-theme="dark"])
	{
		--background: #39393A;
		--backgroundSection : #575757;

		--navBar-BackgroundColor : #a0a2a5;
		--navBar-sousMenu-background : #19352f;

		--footer-backgroundColor : rgb(165, 165, 255);

		--text: #e4e4e4;
		--text-variant: #18201d;
		--hover: #b8d8d0;

		--border: #3F7D20;

		--help-text-bg : #f0f0f0d0 ;
	}
	main
	{
		width: min(1200px, calc(100% - 40px));
		min-width: 600px;
		max-width: 1400px;
		margin : 0 auto;
		padding: 2rem;
		font-family: 'Tahoma', 'Arial', sans-serif;
	}
</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar/> 

<main>
	{@render children()}
</main>

<Footer/>