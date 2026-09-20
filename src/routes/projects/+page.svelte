<script>
	import Texte from "$lib/components/FormattingPage/Texte.svelte";
	import Title from "$lib/components/FormattingPage/Title.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { projects }  from "$lib/data/projectsList" ;
	import { translate } from '$lib/data/translateSystem';

</script>

<style>
	.projectsGrid
	{
		display:grid;
		grid-template-columns: repeat(3, 1fr);
		gap : 2rem;

		max-width: 1400px;
		margin: 0 auto;
		padding : 2rem;
	}

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
	}

@media (max-width: 1000px) {
    .projectsGrid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 650px) {
    .projectsGrid {
        grid-template-columns: 1fr;
    }
}
</style>
<div class="section">
    <div class="Paragraph">
		<Title txt={$translate.projectPage.welcomeTitle}/>
		<Texte txt ={$translate.projectPage.welcomeText}/>

		<div class="projectsGrid">
			{#each projects as project(project)}
				<ProjectCard {project}/>
			{/each}
		</div>
	</div>
</div>