<script>
	import Image from '$lib/components/FormattingPage/Image.svelte';
	import Texte from '$lib/components/FormattingPage/Texte.svelte';
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
		<h3>
			<Texte txt={$translate.project.cyberdemineur.titleOverview}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.textOverview}/>
	</div>

	<div class="Paragraph">
		
		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.ConceptArt.src} 
			altTxt={$translate.project.cyberdemineur.ConceptArt.desc} 
			title={$translate.project.cyberdemineur.ConceptArt.title}
		/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.whatIsTitle}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.whatIsText}/>
	</div>
</div>

<div class="section">
	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.contriTitle}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.contriText}/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.aTitle}/>
		</h3>
	</div>
	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		<Texte txt={$translate.project.cyberdemineur.aText}/>
		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.generatedGrid.src} 
			altTxt={$translate.project.cyberdemineur.generatedGrid.desc} 
			title={$translate.project.cyberdemineur.generatedGrid.title}
		/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.bTitle}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.bTextDifficulty}/>
	</div>

	<div class="Paragraph">
		
		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.difficultyPage.src} 
			altTxt={$translate.project.cyberdemineur.difficultyPage.desc} 
			title={$translate.project.cyberdemineur.difficultyPage.title}
		/>
	</div>	

	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		<Texte txt={$translate.project.cyberdemineur.bTextGame}/>
		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.pythonGameOpened.src} 
			altTxt={$translate.project.cyberdemineur.pythonGameOpened.desc} 
			title={$translate.project.cyberdemineur.pythonGameOpened.title}
		/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.cTitle}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.cText}/>
	</div>

	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.pythonOptionMenu.src} 
			altTxt={$translate.project.cyberdemineur.pythonOptionMenu.desc} 
			title={$translate.project.cyberdemineur.pythonOptionMenu.title}
		/>
		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.pythonHelpPopup.src} 
			altTxt={$translate.project.cyberdemineur.pythonHelpPopup.desc} 
			title={$translate.project.cyberdemineur.pythonHelpPopup.title}
		/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.dTitle}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.dText}/>
	</div>

	<div class="Paragraph">
		
		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.DBCode.src} 
			altTxt={$translate.project.cyberdemineur.DBCode.desc} 
			title={$translate.project.cyberdemineur.DBCode.title}
		/>
	</div>
</div>

<div class="section">
	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.laterIterTitle}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.laterIterOverview}/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.javaTitle}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.javaText}/>
	</div>

	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		
		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.javaFullGrid.src} 
			altTxt={$translate.project.cyberdemineur.javaFullGrid.desc} 
			title={$translate.project.cyberdemineur.javaFullGrid.title}
		/>

		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.javaOpenGrid.src} 
			altTxt={$translate.project.cyberdemineur.javaOpenGrid.desc} 
			title={$translate.project.cyberdemineur.javaOpenGrid.title}
		/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.cppTitle}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.cppText}/>
	</div>

	<div class="Paragraph" style="grid-template-columns:1fr 1fr;">
		
		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.cppMainMenu.src} 
			altTxt={$translate.project.cyberdemineur.cppMainMenu.desc} 
			title={$translate.project.cyberdemineur.cppMainMenu.title}
		/>

		<Image 
			type="image"
			srcLink={"/images/projects/Cyberdemineur/" + $translate.project.cyberdemineur.cppGridOpen.src} 
			altTxt={$translate.project.cyberdemineur.cppGridOpen.desc} 
			title={$translate.project.cyberdemineur.cppGridOpen.title}
		/>
	</div>
</div>

<div class="section">
	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.retroTitle}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.retroOverview}/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.retroTitleA}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.retroTextA}/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.retroTitleB}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.retroTextB}/>
	</div>

	<div class="Paragraph">
		<h3>
			<Texte txt={$translate.project.cyberdemineur.retroTitleC}/>
		</h3>
		<Texte txt={$translate.project.cyberdemineur.retroTextC}/>
	</div>
	<br>
	<div class="Paragraph">
		<Texte txt={$translate.project.cyberdemineur.links}/>
	</div>
</div>