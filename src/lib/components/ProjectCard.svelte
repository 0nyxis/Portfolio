<script>	
    import { language } from "$lib/stores/language";
    import { resolve } from "$app/paths";

	let {project} = $props();

</script>

<style>
    .projectCard 
	{
		width :100%;

        border : 2px solid #104439;
        border-radius: 30px;
        overflow:hidden;

        background-color: white;
        box-sizing: border-box;

        transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

        cursor: pointer;
	}

    .projectCard:hover
	{
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }

	.thumbnail
	{
		width: 100%;
		aspect-ratio:  16 / 9;
		object-fit: cover;
		display: block;
	}

    .projectInfo 
    {
        display:grid;
        grid-template-columns: 2fr 1fr;
    }

    .leftInfo
    {
        display:grid;
        grid-template-rows: auto 1fr auto;

        padding: 1rem;
    }

    .rightInfo
    {
        display:grid;
        grid-template-rows: repeat(3,1fr);

        border-left: 2px solid #19352f;
    }

    .rightInfo p
    {
        margin : 0;
        padding: 1rem;

        border-bottom: 2px solid #19352f;
    }

    .rightInfo p:last-child
    {
        border-bottom: none;
    }

    a 
    {
        text-decoration: none;
        color: black;
    }
</style>

<div class="projectCard">
    <a href={resolve(project.link)}>
        <img class="thumbnail" src={"images/thumbnails/" + project.thumbnail} alt={project.alt_txt_thumbnail[$language]}/>
        <div class="projectInfo">
            <div class="leftInfo">
                <h3> {project.title[$language]} </h3>

                <p class="recap"> {project.desc[$language]} </p>
                <p class="roles"> {project.role} </p>
            </div>
            <div class="rightInfo">
                <p> {project.year} </p>
                <p> {project.engine} </p>
                <p>
                {#each project.tags as tags (tags)}
                    {tags + " "} 
                {/each}
                </p>
            </div>
        </div>
    </a>
</div>