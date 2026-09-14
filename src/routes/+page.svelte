<script>
    import { resolve } from '$app/paths';
    import { translate } from '$lib/data/translateSystem';
	import ProjectCardHome from '$lib/components/ProjectCardHome.svelte';
	import { getFeaturedProjects } from '$lib/data/projectsList';
	import { getAllTech } from '$lib/data/technologies';
	import TechIcon from '$lib/components/TechIcon.svelte';
	import Texte from '$lib/components/FormattingPage/Texte.svelte';


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

        width: 400px;
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

    .section
	{
		border : 2px solid #104439;
        border-radius: 30px;
		padding: 1rem 2rem 1rem 1rem;
		margin: 1rem;
	}

	.Paragraph
	{
		display:grid;
		align-items : center;
	}
</style>

<div class="section">
    <div class="Paragraph">
        <h3>
            <Texte txt={$translate.home.welcomeTitle}/>
        </h3>
        <Texte txt={$translate.home.welcomeTxt}/>
    </div>

    <hr/>
    <div class="Paragraph">
        <h3>
            <Texte txt={$translate.home.projectTitle}/>
        </h3>

        <Texte txt={$translate.home.projectText}/>

        <div class="carouselProject">
            {#each getFeaturedProjects() as project(project)}
                <ProjectCardHome {project}/>
            {/each}
        </div>

        <a href="{resolve('/projects')}">{$translate.home.projectLink} </a>
    </div>

    <hr/>

    <div class="Paragraph">
        <div class="technoHeader">
            <h4>
                <Texte txt = {$translate.home.technologiesTitle} />
            </h4>  

            <div class="help">
                <span> ? </span>
                <div class="helpTxt">
                    <Texte txt = {$translate.home.helphover} />
                </div>
            </div>
        </div>
        <Texte txt = {$translate.home.technologiesText} />

        <div class="technoPart">
            <div class="technoDiv">
                {#each getAllTech() as techno(techno.name)}
                    <TechIcon {techno}/>
                {/each}
            </div>
        </div>
    </div>

    <hr/>

    <div class="Paragraph">
        <h3>
            <Texte txt={$translate.home.aboutmeTitle}/>
        </h3>
        <a href="{resolve('/about')}">{$translate.home.aboutMeText} </a>
    </div>
</div>