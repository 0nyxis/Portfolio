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
		--rear-background : #81c29e;
		--background: #f5f6f3;
		--surface: #ffffff;
		--text: #18201d;
		--muted-text : #5f6964;

		--primary: #104439;
		--primary-light: #dce9e4;
		
		--border: #cbd4d0;

		--help-text-bg : #f0f0f0d0 ;

		--radius : 16px;
	}

	:global([data-theme="dark"])
	{
		--background: #101614;
		--surface: #18201d;
		--text: #edf2ef;
		--muted-text : #aab6b0;

		--primary: #6fb3a1;
		--primary-light: #233b34;
		
		--border: #34443e;
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