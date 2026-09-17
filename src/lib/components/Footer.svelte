<script>
	import Texte from '$lib/components/FormattingPage/Texte.svelte';
</script>

<style>
	* {
		color:black;
		background-color: rgb(165, 165, 255);
	}
</style>

<footer> 
	<Texte txt="Let's get in touch !" />
	<div style="display:grid; grid-template-columns: repeat(2,1fr);">	
		<div>
			<Texte txt="GitHub" />
			<Texte txt="itch.io" />
			<Texte txt="LinkedIn" />
			<Texte txt="CV" />
		</div>
		<div>
			<Texte txt="Contact : email@example.com" />
		</div>
	</div>
	<Texte txt="© LE CLEAC'H - Louis [0nyxis]" />



</footer>