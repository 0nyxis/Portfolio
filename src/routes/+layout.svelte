<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import NavBar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	

	let { children } = $props();
</script>

<style>
	*
	{
		max-width: 1400px;
		margin : 0 auto;
		padding: 2rem;
	}
</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar/> 

{@render children()}

<Footer/>