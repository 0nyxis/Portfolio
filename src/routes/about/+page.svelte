<script>
    //import { resolve } from '$app/paths';
    import { translate } from '$lib/data/translateSystem';

	import Texte from '$lib/components/FormattingPage/Texte.svelte';
</script>

<Texte txt={$translate.home.welcomeTitle}/>