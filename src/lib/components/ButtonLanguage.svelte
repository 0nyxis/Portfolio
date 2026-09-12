<script>
	import { language } from "$lib/stores/language";
	import { translate } from '$lib/data/translateSystem';

</script>

{#if $language == "en"} 
	<button  onclick={() => $language = "fr"}> {$translate.nav.btn.french} </button>

{:else if $language == "fr"} 
	<button  onclick={() => $language = "en"}> {$translate.nav.btn.english} </button>
{/if}