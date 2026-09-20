<script>
    //import { resolve } from '$app/paths';
    import { translate } from '$lib/data/translateSystem';

	import Texte from '$lib/components/FormattingPage/Texte.svelte';
	import Title from '$lib/components/FormattingPage/Title.svelte';
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
    </div>
    
    <div class="Paragraph">
        <Title txt={$translate.about.beyondTitle}/>
        <Texte txt={$translate.about.beyondRoutine}/>  
        <Texte txt={$translate.about.beyondGames}/>
        <Texte txt={$translate.about.beyondMusic}/>
    </div>

    <div class="Paragraph">
        <Title txt={$translate.about.workTitle}/>
        <Texte txt={$translate.about.workTeamProject}/>  
        <Texte txt={$translate.about.workTeamImportance}/>
        <Texte txt={$translate.about.workOutside}/>
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
