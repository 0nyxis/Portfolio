<script>	
	import { language } from "$lib/stores/language";
	import { resolve } from "$app/paths";

	import { base } from '$app/paths';

	let {project} = $props();
</script>

<style>
	.projectCard 
	{
		width :100%;

        border : 2px solid #000000;
        border-radius: 30px;
        overflow:hidden;

        background-color: white;
        box-sizing: border-box;

        transition:
        transform 0.2s ease,
        box-shadow 0.2s ease;

        cursor: pointer;
	}

	a
	{
		text-decoration: none;
		color:black;
	}

	.projectCard:hover
	{
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    }
	img
	{
		width: 100%;
		aspect-ratio:  16 / 9;
		object-fit: cover;
		display: block;
	}

	.thumbnail
	{
		width: 100%;
		aspect-ratio:  16 / 9;
		object-fit: cover;
		display: block;
	}

	.textCard
	{
		padding:0px 10px;
	}

</style>
<div class="projectCard">
    <a href={resolve(project.link)}>
		<img class="thumbnail" src={base + "/images/thumbnails/" + project.thumbnail} 
		alt={project.alt_txt_thumbnail[$language]}
		/>

		<p class="textCard"> <b>{project.title[$language]}</b> {project.overview[$language]} </p>
	</a>
</div>