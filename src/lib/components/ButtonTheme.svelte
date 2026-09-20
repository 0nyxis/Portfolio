<script>
	import { darkMode } from "$lib/stores/theme";
	import { base } from '$app/paths';
</script>

<style>
	img {
		width: 30px;
		height: 30px;
	}
	button
	{
		background : none;
		border : none;
		padding:0;
		margin:0;
		cursor:pointer;
	}
</style>

<button onclick={() => $darkMode = !$darkMode}> 
	{#if $darkMode == false}
		<img src={base + "/images/icons/MoonLogo.png"} alt=""/> 
	{:else}
		<img src={base + "/images/icons/SunLogo.png"} alt=""/> 
	{/if}
</button>
