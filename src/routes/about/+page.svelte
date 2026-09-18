<script>
    //import { resolve } from '$app/paths';
    import { translate } from '$lib/data/translateSystem';

	import Texte from '$lib/components/FormattingPage/Texte.svelte';
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
        <h3>
            <Texte txt={$translate.about.littleTitle}/>
        </h3>
        <Texte txt={$translate.about.littleText}/>        
    </div>

    <div class="Paragraph">
        <h3>
            <Texte txt={$translate.about.journeyTitle}/>
        </h3>
        <Texte txt={$translate.about.journeyTextMiddleSchool}/>  
        <Texte txt={$translate.about.journeyTextHSBUT}/>   
        <Texte txt={$translate.about.journeyTextCreajeux}/>         
    </div>
    
    <div class="Paragraph">
        <h3>
            <Texte txt={$translate.about.beyondTitle}/>
        </h3>
        <Texte txt={$translate.about.beyondRoutine}/>  
        <Texte txt={$translate.about.beyondGames}/>
        <Texte txt={$translate.about.beyondMusic}/>
    </div>

    <div class="Paragraph">
        <h3>
            <Texte txt={$translate.about.workTitle}/>
        </h3>
        <Texte txt={$translate.about.workTeamProject}/>  
        <Texte txt={$translate.about.workTeamImportance}/>
        <Texte txt={$translate.about.workOutside}/>
    </div>

    <div class="Paragraph">
        <h3>
            <Texte txt={$translate.about.lookingTitle}/>
        </h3>
        <Texte txt={$translate.about.lookingDate}/>  
        <Texte txt={$translate.about.lookingWhat}/>
        <Texte txt={$translate.about.lookingLocation}/>
    </div>

    <div class="Paragraph">
        <h3>
            <Texte txt={$translate.about.talkTitle}/>
        </h3>
        <Texte txt={$translate.about.talkText}/>
    </div>
</div>
