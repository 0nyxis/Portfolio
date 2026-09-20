<script>
	import Texte from '$lib/components/FormattingPage/Texte.svelte';
	import Title from '$lib/components/FormattingPage/Title.svelte';

	import { translate } from '$lib/data/translateSystem';
	import { base } from '$app/paths';

</script>

<style>
	footer {
		color:black;
		background-color: rgb(165, 165, 255);
		padding : 0.5rem 2rem;
	}
</style>

<footer> 
	<div style="display:grid; grid-template-columns: repeat(2,1fr);">	
		<div>
			<Title txt={$translate.footer.titleTouch}/>
			<a href={$translate.footer.github} target="_blank"> Github </a>
			<a href={$translate.footer.itchio} target="_blank"> Itch.io </a>
			<a href={$translate.footer.LinkedIn} target="_blank"> LinkedIn </a>
			<a href={base + $translate.footer.CV} target="_blank"> CV </a>
		</div>
		<div>
			<Title txt={$translate.footer.contact}/>
			<Texte txt={$translate.footer.mail}/>
		</div>
	</div>
	<br/>
	<Title txt={$translate.footer.copyright} />



</footer>