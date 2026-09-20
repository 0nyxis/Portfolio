<script>
	import Media from '$lib/components/FormattingPage/Media.svelte';
	import Texte from '$lib/components/FormattingPage/Texte.svelte';
	import Title from '$lib/components/FormattingPage/Title.svelte';
	import { translate } from '$lib/data/translateSystem';

</script>

<style>
	.section
	{
		border : 1px solid var(--border);
        border-radius: var(--radius);
		padding: 2rem;
		margin: 2rem 0;

        background-color: var(--background);
	}

	.Paragraph
	{
        padding: 1rem 0;
		display:grid;
		align-items: center;
	}
</style>

<div class="section">
	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.titleOverview}/>
		<Texte txt={$translate.project.cyberdemineur.textOverview}/>
	</div>

	<div class="Paragraph">
		
		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.ConceptArt.src} 
			altTxt={$translate.project.cyberdemineur.ConceptArt.desc} 
			title={$translate.project.cyberdemineur.ConceptArt.title}
		/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.whatIsTitle}/>
		<Texte txt={$translate.project.cyberdemineur.whatIsText}/>
	</div>
</div>

<div class="section">
	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.contriTitle}/>
		<Texte txt={$translate.project.cyberdemineur.contriText}/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.aTitle}/>
	</div>
	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		<Texte txt={$translate.project.cyberdemineur.aText}/>
		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.generatedGrid.src} 
			altTxt={$translate.project.cyberdemineur.generatedGrid.desc} 
			title={$translate.project.cyberdemineur.generatedGrid.title}
		/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.bTitle}/>
		<Texte txt={$translate.project.cyberdemineur.bTextDifficulty}/>
	</div>

	<div class="Paragraph">
		
		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.difficultyPage.src} 
			altTxt={$translate.project.cyberdemineur.difficultyPage.desc} 
			title={$translate.project.cyberdemineur.difficultyPage.title}
		/>
	</div>	

	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		<Texte txt={$translate.project.cyberdemineur.bTextGame}/>
		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.pythonGameOpened.src} 
			altTxt={$translate.project.cyberdemineur.pythonGameOpened.desc} 
			title={$translate.project.cyberdemineur.pythonGameOpened.title}
		/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.cTitle}/>
		<Texte txt={$translate.project.cyberdemineur.cText}/>
	</div>

	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.pythonOptionMenu.src} 
			altTxt={$translate.project.cyberdemineur.pythonOptionMenu.desc} 
			title={$translate.project.cyberdemineur.pythonOptionMenu.title}
		/>
		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.pythonHelpPopup.src} 
			altTxt={$translate.project.cyberdemineur.pythonHelpPopup.desc} 
			title={$translate.project.cyberdemineur.pythonHelpPopup.title}
		/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.dTitle}/>
		<Texte txt={$translate.project.cyberdemineur.dText}/>
	</div>

	<div class="Paragraph">
		
		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.DBCode.src} 
			altTxt={$translate.project.cyberdemineur.DBCode.desc} 
			title={$translate.project.cyberdemineur.DBCode.title}
		/>
	</div>
</div>

<div class="section">
	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.laterIterTitle}/>
		<Texte txt={$translate.project.cyberdemineur.laterIterOverview}/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.javaTitle}/>
		<Texte txt={$translate.project.cyberdemineur.javaText}/>
	</div>

	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		
		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.javaFullGrid.src} 
			altTxt={$translate.project.cyberdemineur.javaFullGrid.desc} 
			title={$translate.project.cyberdemineur.javaFullGrid.title}
		/>

		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.javaOpenGrid.src} 
			altTxt={$translate.project.cyberdemineur.javaOpenGrid.desc} 
			title={$translate.project.cyberdemineur.javaOpenGrid.title}
		/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.cppTitle}/>
		<Texte txt={$translate.project.cyberdemineur.cppText}/>
	</div>

	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		
		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.cppMainMenu.src} 
			altTxt={$translate.project.cyberdemineur.cppMainMenu.desc} 
			title={$translate.project.cyberdemineur.cppMainMenu.title}
		/>

		<Media 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.cppGridOpen.src} 
			altTxt={$translate.project.cyberdemineur.cppGridOpen.desc} 
			title={$translate.project.cyberdemineur.cppGridOpen.title}
		/>
	</div>
</div>

<div class="section">
	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.retroTitle}/>
		<Texte txt={$translate.project.cyberdemineur.retroOverview}/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.retroTitleA}/>
		<Texte txt={$translate.project.cyberdemineur.retroTextA}/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.retroTitleB}/>
		<Texte txt={$translate.project.cyberdemineur.retroTextB}/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.retroTitleC}/>
		<Texte txt={$translate.project.cyberdemineur.retroTextC}/>
	</div>
	<br>
	<div class="Paragraph">
		<Title txt={$translate.project.cyberdemineur.links}/>
	</div>
</div>