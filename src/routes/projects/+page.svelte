<script>
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

<p>{$translate.projectPage.welcomeTxt}</p>

<div class="projectsGrid">
	{#each projects as project(project)}
		<ProjectCard {project}/>
	{/each}
</div>