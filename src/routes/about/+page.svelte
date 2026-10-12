<script>
    //import { resolve } from '$app/paths';
    import { translate } from '$lib/data/translateSystem';

	import Texte from '$lib/components/FormattingPage/Texte.svelte';
	import Title from '$lib/components/FormattingPage/Title.svelte';
	import Media from '$lib/components/FormattingPage/Media.svelte';
</script>

<style>
    .section
	{
		border : 1px solid var(--border);
        border-radius: var(--radius);
		padding: 2rem;
		margin: 2rem 0;

        background-color: var(--backgroundSection);
	}

	.Paragraph
	{
        padding: 1rem 0;
		display:grid;
		align-items: center;
	}

    @media(max-width: 900px)
	{
		.Paragraph
		{
			grid-template-columns: 1fr !important;
		}
	}
</style>
<div class="section">
    <div class="Paragraph">
        <Title txt={$translate.about.littleTitle}/>
        <Texte txt={$translate.about.littleText}/>        
    </div>

    <div class="Paragraph">
        <Title txt={$translate.about.journeyTitle}/>
        <Texte txt={$translate.about.journeyTextMiddleSchool}/>
        <br/>
        <Texte txt={$translate.about.journeyTextHSBUT}/>   
        <br/>
        <Texte txt={$translate.about.journeyTextCreajeux}/>         
        <br>
        <Media 
			type="image"
			srcLink={"/images/aboutPage/" + $translate.about.chrono.src} 
			altTxt={$translate.about.chrono.desc} 
			title={$translate.about.chrono.title}
			maxWidth = "700px"
        />
    </div>
    
    <div class="Paragraph">
        <Title txt={$translate.about.beyondTitle}/>
        <Texte txt={$translate.about.beyondRoutine}/>  
        <Texte txt={$translate.about.beyondGames}/>
        <Texte txt={$translate.about.beyondMusic}/>
    </div>

    <div class="Paragraph">
        <Media 
			type="image"
			srcLink={"/images/aboutPage/" + $translate.about.gameList.src} 
			altTxt={$translate.about.gameList.desc} 
			title={$translate.about.gameList.title}
			maxWidth = "500px"
        />
        <Media 
            type="image"
            srcLink={"/images/aboutPage/" + $translate.about.musicList.src} 
            altTxt={$translate.about.musicList.desc} 
            title={$translate.about.musicList.title}
            maxWidth = "550px"
        />
    </div>

    <div class="Paragraph">
        <Title txt={$translate.about.workTitle}/>
        <Texte txt={$translate.about.workTeamProject}/>  
        <Texte txt={$translate.about.workTeamImportance}/>
        <Texte txt={$translate.about.workOutside}/>

        <br>
        <Media 
			type="image"
			srcLink={"/images/projects/AfterImpact/" + $translate.project.after_impact.AfterImpactgroupPhoto.src} 
			altTxt={$translate.project.after_impact.AfterImpactgroupPhoto.desc} 
			title={$translate.project.after_impact.AfterImpactgroupPhoto.title}
			maxWidth = "500px"
		/>
    </div>

    <div class="Paragraph">
        <Title txt={$translate.about.lookingTitle}/>
        <Texte txt={$translate.about.lookingDate}/>  
        <Texte txt={$translate.about.lookingWhat}/>
        <Texte txt={$translate.about.lookingLocation}/>
    </div>

    <div class="Paragraph">
        <Title txt={$translate.about.talkTitle}/>
        <Texte txt={$translate.about.talkText}/>
    </div>
</div>
