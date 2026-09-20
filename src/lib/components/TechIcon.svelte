<script>	
    import { base } from '$app/paths';
	let {techno} = $props();
</script>

<style>
    p 
    {
        display:none;
        
        position: absolute;
        z-index: 1;

        top: calc(60% + 10px);
        right: 0;

        width: 100%;
        padding: 0.2rem;

        background-color: var(--help-text-bg);
        border: 1px solid var(--border);

        box-sizing: border-box;
    }

    .TechIcon
    {
        width : 100px;
        aspect-ratio: 1 / 1;

        display: flex;
        justify-content: center;
        align-items: center;

        position: relative;

        background-color: #f0f0f0;
        border: 2px solid #000000;

        box-sizing: border-box;
    }

    .TechIcon:hover p{
        display : flex;
        justify-content: center;
    }

    img
    {
        width: 80%;
        height: 80%;
        object-fit: contain;
    }
</style>

<div class="TechIcon" style="background-image: linear-gradient(to top, {techno.known},white );">
    <img src={base + "/images/technoIcon/" + techno.image} alt={techno.alt_txt}/>
    <p> {techno.name} </p>
</div>