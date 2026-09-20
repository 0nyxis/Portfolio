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

	@media(max-width: 700px)
	{
		.Paragraph
		{
			grid-template-columns: 1fr !important;
		}
	}
	
</style>
<div class="section">
	<div class="Paragraph">
		<Title txt={$translate.project.after_impact.title1}/>
		<Texte txt={$translate.project.after_impact.overview}/>
	</div>

	<div class="Paragraph" style="grid-template-columns:repeat(3, minmax(0,1fr));">
		<br>
			<Media 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.ImgForShow.src} 
				altTxt={$translate.project.after_impact.ImgForShow.desc} 
				title={$translate.project.after_impact.ImgForShow.title}
				maxWidth = "700px"
			/>
		</div>
		<div class="Paragraph">
			<Title txt={$translate.project.after_impact.title2}/>
			<Texte txt={$translate.project.after_impact.whatisit}/>
		</div>

		<Media 
			type="image"
			srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.Inventory.src} 
			altTxt={$translate.project.after_impact.Inventory.desc} 
			title={$translate.project.after_impact.Inventory.title}
			maxWidth = "700px"
		/>
	</div>

	<div class="section">
		<div class="Paragraph">
			<Title txt={$translate.project.after_impact.title3}/>
			<Texte txt={$translate.project.after_impact.contributions}/>
		</div>

		<div class="Paragraph">
			<Title txt={$translate.project.after_impact.title4a}/>
			<Texte txt={$translate.project.after_impact.itemEntitySys}/>
		</div>

		<div class="Paragraph" style="grid-template-columns:repeat(2, minmax(0,1fr));">
			<Media 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.CustomEditorItem.src} 
				altTxt={$translate.project.after_impact.CustomEditorItem.desc} 
				title={$translate.project.after_impact.CustomEditorItem.title}
				maxWidth = "300px"
				/>
			<Texte txt={$translate.project.after_impact.customEditor}/>
		</div>

		<div class="Paragraph" style="grid-template-columns:repeat(2, minmax(0,1fr));">
			<div>
				<Texte txt={$translate.project.after_impact.entitiesReused}/>
				<br>
				<Texte txt={$translate.project.after_impact.customEditor2}/>
			</div>
			<Media 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.CustomEditorEntities.src} 
				altTxt={$translate.project.after_impact.CustomEditorEntities.desc} 
				title={$translate.project.after_impact.CustomEditorEntities.title}
				/>
		</div>
		
	</div>
	
	<div class="section">
		<div class="Paragraph">
			<Title txt={$translate.project.after_impact.title4b}/>
			<Texte txt={$translate.project.after_impact.animalOverview}/>
		</div>
			<br>
		<div class="Paragraph">
			<Texte txt={$translate.project.after_impact.animalMovementBehavior}/>

			<Media 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.BehaviorTree.src} 
				altTxt={$translate.project.after_impact.BehaviorTree.desc} 
				title={$translate.project.after_impact.BehaviorTree.title}
				maxWidth = "700px"
				/>
		</div>

		<div class="Paragraph">
			<Texte txt={$translate.project.after_impact.animalSpawning}/>
		</div>
		<div class="Paragraph" style="grid-template-columns:repeat(2, minmax(0,1fr));">
			<Media 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.SpawnerInScene.src} 
				altTxt={$translate.project.after_impact.SpawnerInScene.desc} 
				title={$translate.project.after_impact.SpawnerInScene.title}
				maxWidth = "450px"
				/>
			<Media 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.SpawnerInInspector.src} 
				altTxt={$translate.project.after_impact.SpawnerInInspector.desc} 
				title={$translate.project.after_impact.SpawnerInInspector.title}
				maxWidth = "400px"
				/>
		</div>

		<div class="Paragraph">
			<Texte txt={$translate.project.after_impact.animalAnimation}/>
		</div>

		<div class="Paragraph" style="grid-template-columns:repeat(2, minmax(0,1fr));">
			<Media 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.FoxBig.src} 
				altTxt={$translate.project.after_impact.FoxBig.desc} 
				title={$translate.project.after_impact.FoxBig.title}
				/>
			<Media 
				type="video"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.shrinkingFox.src} 
				altTxt={$translate.project.after_impact.shrinkingFox.desc} 
				title={$translate.project.after_impact.shrinkingFox.title}
				/>
		</div>

		<div class="Paragraph" style="grid-template-columns:repeat(1, minmax(0,1fr));">
			<Media 
				type="video"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.MiniFoxRunning.src} 
				altTxt={$translate.project.after_impact.MiniFoxRunning.desc} 
				title={$translate.project.after_impact.MiniFoxRunning.title}
				/>
		</div>

		<div class="Paragraph">
			<Texte txt={$translate.project.after_impact.animalAnimConclusion}/>
		</div>

		<div class="Paragraph">
			<Media 
				type="video"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.RunningFox.src} 
				altTxt={$translate.project.after_impact.RunningFox.desc} 
				title={$translate.project.after_impact.RunningFox.title}
				/>
		</div>
	</div>	

<div class="section">
	<div class="Paragraph">
		<Title txt={$translate.project.after_impact.title4c}/>
		<Texte txt={$translate.project.after_impact.huntOverview}/>
		<br>
		<Texte txt={$translate.project.after_impact.huntTraps}/>
	</div>

	<div class="Paragraph">
		<br>
		<Texte txt={$translate.project.after_impact.bowAndArrow}/>
		<br>
		<Texte txt={$translate.project.after_impact.arrowDifficulty}/>
	</div>

	<div class="Paragraph" style="grid-template-columns:repeat(2, minmax(0,1fr));">
		<Media 
			type="image"
			srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.ShootingTheFox.src} 
			altTxt={$translate.project.after_impact.ShootingTheFox.desc} 
			title={$translate.project.after_impact.ShootingTheFox.title}
			/>
		<Media 
			type="video"
			srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.ShootingTheFoxGif.src} 
			altTxt={$translate.project.after_impact.ShootingTheFoxGif.desc} 
			title={$translate.project.after_impact.ShootingTheFoxGif.title}
			/>
	</div>
</div>

<div class="section">
	<div class="Paragraph">
		<Title txt={$translate.project.after_impact.retrospectiveTitle}/>
		<Texte txt={$translate.project.after_impact.retroOverview}/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.after_impact.retroTitleA}/>
		<Texte txt={$translate.project.after_impact.retroA}/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.after_impact.retroTitleB}/>
		<Texte txt={$translate.project.after_impact.retroB}/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.after_impact.retroTitleC}/>
		<Texte txt={$translate.project.after_impact.retroC}/>
	</div>

	<div class="Paragraph">
		<Title txt={$translate.project.after_impact.retroTitleD}/>
		<Texte txt={$translate.project.after_impact.retroD}/>
		<br>
		<Title txt={$translate.project.after_impact.links}/>
	</div>
</div>