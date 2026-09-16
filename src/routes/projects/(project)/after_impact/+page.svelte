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
		<h3>
			<Texte txt={$translate.project.after_impact.title1}/>
		</h3>
		<Texte txt={$translate.project.after_impact.overview}/>
	</div>

	<div class="Paragraph" style="grid-template-columns:repeat(3, minmax(0,1fr));">
		<br>
			<Image 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.ImgForShow.src} 
				altTxt={$translate.project.after_impact.ImgForShow.desc} 
				title={$translate.project.after_impact.ImgForShow.title}
			/>
		</div>
		<div class="Paragraph">
			<h4>
				<Texte txt={$translate.project.after_impact.title2}/>
			</h4>
			<Texte txt={$translate.project.after_impact.whatisit}/>
		</div>

		<Image 
			type="image"
			srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.Inventory.src} 
			altTxt={$translate.project.after_impact.Inventory.desc} 
			title={$translate.project.after_impact.Inventory.title}
		/>
	</div>

	<div class="section">
		<div class="Paragraph">
			<h4>
				<Texte txt={$translate.project.after_impact.title3}/>
			</h4>
			<Texte txt={$translate.project.after_impact.contributions}/>
		</div>

		<div class="Paragraph">
			<h4>
				<Texte txt={$translate.project.after_impact.title4a}/>
			</h4>
			<Texte txt={$translate.project.after_impact.itemEntitySys}/>
		</div>

		<div class="Paragraph" style="grid-template-columns:repeat(2, minmax(0,1fr));">
			<Image 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.CustomEditorItem.src} 
				altTxt={$translate.project.after_impact.CustomEditorItem.desc} 
				title={$translate.project.after_impact.CustomEditorItem.title}
				/>
			<Texte txt={$translate.project.after_impact.customEditor}/>
		</div>

		<div class="Paragraph" style="grid-template-columns:repeat(2, minmax(0,1fr));">
			<div>
				<Texte txt={$translate.project.after_impact.entitiesReused}/>
				<br>
				<Texte txt={$translate.project.after_impact.customEditor2}/>
			</div>
			<Image 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.CustomEditorEntities.src} 
				altTxt={$translate.project.after_impact.CustomEditorEntities.desc} 
				title={$translate.project.after_impact.CustomEditorEntities.title}
				/>
		</div>
		
	</div>
	
	<div class="section">
		<div class="Paragraph">
			<h4>
				<Texte txt={$translate.project.after_impact.title4b}/>
			</h4>
			<Texte txt={$translate.project.after_impact.animalOverview}/>
		</div>
			<br>
		<div class="Paragraph">
			<Texte txt={$translate.project.after_impact.animalMovementBehavior}/>

			<Image 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.BehaviorTree.src} 
				altTxt={$translate.project.after_impact.BehaviorTree.desc} 
				title={$translate.project.after_impact.BehaviorTree.title}
				/>
		</div>

		<div class="Paragraph">
			<Texte txt={$translate.project.after_impact.animalSpawning}/>
		</div>
		<div class="Paragraph" style="grid-template-columns:repeat(2, minmax(0,1fr));">
			<Image 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.SpawnerInScene.src} 
				altTxt={$translate.project.after_impact.SpawnerInScene.desc} 
				title={$translate.project.after_impact.SpawnerInScene.title}
				/>
			<Image 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.SpawnerInInspector.src} 
				altTxt={$translate.project.after_impact.SpawnerInInspector.desc} 
				title={$translate.project.after_impact.SpawnerInInspector.title}
				/>
		</div>

		<div class="Paragraph">
			<Texte txt={$translate.project.after_impact.animalAnimation}/>
		</div>

		<div class="Paragraph" style="grid-template-columns:repeat(3, minmax(0,1fr));">
			<Image 
				type="image"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.FoxBig.src} 
				altTxt={$translate.project.after_impact.FoxBig.desc} 
				title={$translate.project.after_impact.FoxBig.title}
				/>
			<Image 
				type="video"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.shrinkingFox.src} 
				altTxt={$translate.project.after_impact.shrinkingFox.desc} 
				title={$translate.project.after_impact.shrinkingFox.title}
				/>
			<Image 
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
			<Image 
				type="video"
				srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.RunningFox.src} 
				altTxt={$translate.project.after_impact.RunningFox.desc} 
				title={$translate.project.after_impact.RunningFox.title}
				/>
		</div>
	</div>	

<div class="section">
	<div class="Paragraph">
		<h4>
			<Texte txt={$translate.project.after_impact.title4c}/>
		</h4>
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
		<Image 
			type="image"
			srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.ShootingTheFox.src} 
			altTxt={$translate.project.after_impact.ShootingTheFox.desc} 
			title={$translate.project.after_impact.ShootingTheFox.title}
			/>
		<Image 
			type="video"
			srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.ShootingTheFoxGif.src} 
			altTxt={$translate.project.after_impact.ShootingTheFoxGif.desc} 
			title={$translate.project.after_impact.ShootingTheFoxGif.title}
			/>
	</div>
</div>

<div class="section">
	<div class="Paragraph">
		<h4>
			<Texte txt={$translate.project.after_impact.retrospectiveTitle}/>
		</h4>
		<Texte txt={$translate.project.after_impact.retroOverview}/>
	</div>

	<div class="Paragraph">
		<h4>
			<Texte txt={$translate.project.after_impact.retroTitleA}/>
		</h4>
		<Texte txt={$translate.project.after_impact.retroA}/>
	</div>

	<div class="Paragraph">
		<h4>
			<Texte txt={$translate.project.after_impact.retroTitleB}/>
		</h4>
		<Texte txt={$translate.project.after_impact.retroB}/>
	</div>

	<div class="Paragraph">
		<h4>
			<Texte txt={$translate.project.after_impact.retroTitleC}/>
		</h4>
		<Texte txt={$translate.project.after_impact.retroC}/>
	</div>

	<div class="Paragraph">
		<h4>
			<Texte txt={$translate.project.after_impact.retroTitleD}/>
		</h4>
		<Texte txt={$translate.project.after_impact.retroD}/>
		<br>
		<Texte txt={$translate.project.after_impact.links}/>
	</div>
</div>