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
		--background: #F4F6F3;
		--backgroundSection : #ffffff;

		--navBar-BackgroundColor : #104459;
		--navBar-sousMenu-background : #104459;
		--narBar-sousMenu-Hover : #186786;
		--navBar-text : #E8EFEC;

		--footer-backgroundColor : #104459;

		--text: #18201d;
		--text-variant: #103480;
		--hover: #b8d8d0;

		--border: #3F7D20;

		--help-text-bg : #f0f0f0d0 ;

		--radius : 16px;
	}

	:global([data-theme="dark"])
	{
		--background: #101614;
		--backgroundSection : #18201D;

		--navBar-BackgroundColor : #0C3028;
		--navBar-sousMenu-background : #19352f;
		--narBar-sousMenu-Hover : #186786;
		--navBar-text : #E8EFEC;
		
		--footer-backgroundColor : #0C3028;

		--text: #E8EFEC;
		--text-variant: #62bd95;
		--hover: #91CDBB;

		--border: #3F7D20;

		--help-text-bg : #19352fDD ;
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