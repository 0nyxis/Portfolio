<script>
    import { resolve } from '$app/paths';
    import { translate } from '$lib/data/translateSystem';
	import ProjectCardHome from '$lib/components/ProjectCardHome.svelte';
	import { getFeaturedProjects } from '$lib/data/projectsList';
	import { getAllTech } from '$lib/data/technologies';
	import TechIcon from '$lib/components/TechIcon.svelte';

</script>

<style>
    .technoHeader
    {
        display : flex;
        justify-content: space-between;
        align-items: center;

        position: relative;
    }

    .help
    {
        position: relative;

        width:40px;
        height:40px;

        display : flex;
        justify-content: center;
        align-items: center;

        border: 3px solid black;
        border-radius: 50%;

        cursor: help;
    }

    .helpTxt
    {
        display:none;
        position: absolute;
        z-index: 1;

        top: calc(100% + 10px);
        right: 0;

        width: 220px;
        padding: 1rem;

        background-color: #f0f0f0d0;
        border: 2px solid #888;

        box-sizing: border-box;
    }

    .help:hover .helpTxt
    {
        display:block;
    }

    .technoPart
    {
        display:flex;
    }
    .technoDiv
    {
        display:flex;
        flex-direction: wrap;
        gap:1rem;
    }
    .carouselProject
    {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap : 2rem;
        margin: 0 3rem;
    }

    a
    {
        text-decoration: none;
    }
</style>

<h3>{$translate.home.welcomeTitle}</h3>
<p>{$translate.home.welcomeTxt}</p>

<hr/>

<h4><a href={resolve('/projects')}> {$translate.home.projectAll}</a></h4>
<div class="carouselProject">
    {#each getFeaturedProjects() as project(project)}
        <ProjectCardHome {project}/>
    {/each}
</div>

<hr/>

<div class="technoHeader">
    <h4>{$translate.home.technologies}</h4>
    <div class="help">
            <span> ? </span>
            <div class="helpTxt">
                {$translate.home.helphover}
            </div>
    </div>
</div>

<div class="technoPart">
    <div class="technoDiv">
        {#each getAllTech() as techno(techno.name)}
            <TechIcon {techno}/>
        {/each}
    </div>
</div>

<hr/>

<p> {$translate.home.aboutme}</p>