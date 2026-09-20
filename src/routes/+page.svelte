<script>
    import { resolve } from '$app/paths';
    import { translate } from '$lib/data/translateSystem';
	import ProjectCardHome from '$lib/components/ProjectCardHome.svelte';
	import { getFeaturedProjects } from '$lib/data/projectsList';
	import { getAllTech } from '$lib/data/technologies';
	import TechIcon from '$lib/components/TechIcon.svelte';
	import Texte from '$lib/components/FormattingPage/Texte.svelte';
	import Title from '$lib/components/FormattingPage/Title.svelte';


</script>

<style>

    :global(body)
    {
        margin: 0 ;
    }

    .help
    {
        position: relative;

        width:40px;
        height:40px;

        display : flex;
        justify-content: center;
        align-items: center;

        border: 2px solid var(--border);
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

        background-color: var(--help-text-bg);
        border: 1px solid var(--border);

        box-sizing: border-box;
    }

    .help:hover .helpTxt
    {
        display:block;
    }

    .technoHeader
    {
        display : flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .technoPart
    {
        width : 100%;
    }
    .technoDiv
    {
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(90px, 110px));
        justify-content: center;
        gap:1rem;
    }

    .carouselProject
    {
        display: grid;
        grid-template-columns: repeat(2, minmax(0,1fr));
        gap : 2rem;
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

     @media (max-width:700px)
     {
        .carouselProject
        {
            grid-template-columns: 1fr;
        }
     }
</style>

<div class="section">
    <div class="Paragraph">
        <Title txt={$translate.home.welcomeTitle}/>
        <Texte txt={$translate.home.welcomeTxt}/>
    </div>
     <br/>

    <hr/>
    <div class="Paragraph">
        <Title txt={$translate.home.projectTitle}/>

        <Texte txt={$translate.home.projectText}/>
            <br/>
        <div class="carouselProject">
            {#each getFeaturedProjects() as project(project)}
                <ProjectCardHome {project}/>
            {/each}
        </div>
            <br/>
        <a href="{resolve('/projects')}">{$translate.home.projectLink} </a>
    </div>

    <hr/>

    <div class="Paragraph">
        <div class="technoHeader">
            <Title txt = {$translate.home.technologiesTitle} />

            <div class="help">
                <span> ? </span>
                <div class="helpTxt">
                    <Texte txt = {$translate.home.helphover} />
                </div>
            </div>
        </div>
        <Texte txt = {$translate.home.technologiesText} />
            <br/>
        <div class="technoPart">
            <div class="technoDiv">
                {#each getAllTech() as techno(techno.name)}
                    <TechIcon {techno}/>
                {/each}
            </div>
        </div>
    </div>
    <br/>
    <hr/>

    <div class="Paragraph">
        <Title txt={$translate.home.aboutmeTitle}/>
        <a href="{resolve('/about')}">{$translate.home.aboutMeText} </a>
    </div>
</div>