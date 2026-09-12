<script>
	import { darkMode } from "$lib/stores/theme";
	import { translate } from '$lib/data/translateSystem';

</script>

<button onclick={() => $darkMode = !$darkMode}> {$translate.nav.btn.darkmodeTxt} {$darkMode ? $translate.nav.btn.light : $translate.nav.btn.dark} </button>
