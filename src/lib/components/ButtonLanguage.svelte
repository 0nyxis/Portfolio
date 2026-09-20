<script>
	import { language } from "$lib/stores/language";
</script>

<style>
	button
	{
		background : none;
		border : none;
		padding:0;
		margin:0;
		cursor:pointer;
	}	
	img{
		border: 1px solid #000000;
	}
</style>


{#if $language == "en"} 
	<button onclick={() => $language = "fr"} > 
		<img src="https://kapowaz.github.io/square-flags/flags/fr.svg" width="30"/> 
	</button>

{:else if $language == "fr"} 
	<button  onclick={() => $language = "en"}> 
		<img src="https://kapowaz.github.io/square-flags/flags/gb.svg" width="30"/> 
	</button>
{/if}