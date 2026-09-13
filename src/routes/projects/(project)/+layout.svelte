<script lang="ts">
    import { base } from '$app/paths';
    import { language } from "$lib/stores/language";

	let { children, data } = $props();
</script>

<style>
    .ProjectCard
    {
        width :100%;

        border : 2px solid #104439;
        border-radius: 30px;
        overflow:hidden;

        margin-top: 1rem;

        display:grid;
        grid-template-columns: 4fr 3.5fr 2.5fr;
        grid-template-rows: repeat(5, 1fr);

        aspect-ratio : 2 / 1;
        background-color: grey;
    }

    .image
    {
        grid-column: 1;
        grid-row: 1 / 6;

        background-color: white;

        border : 2px solid #104439;
        border-radius: 30px;
        margin : 0 2rem 0 0;
        overflow: hidden;
        align-items: center;
    }

    .thumbnail
    {
        width: 100%;
        height: 100%;

        object-position: center;
        object-fit: cover;

        margin:0;
    }

    .title
    {
        grid-column: 2 ;
        grid-row: 1;
    }
    .year
    {
        grid-column: 3;
        grid-row: 1;
    }
    .desc
    {
        grid-column: 2;
        grid-row: 2 / 5;
    }
    .engines
    {

        grid-column: 3;
        grid-row: 2 / 4;
    }
    .tags
    {
        grid-column: 3;
        grid-row: 4 / 6;
    }
    .roles
    {
        grid-column:2;
        grid-row: 5;

    }

    .title, .desc, .roles, .year, .engines, .tags
    {
        background-color: white;

        border : 2px solid #104439;
        border-radius: 30px;
        padding: 1rem;
        margin: 0.25rem;

        display:flex;

        justify-content: center;
        align-items: center;
    }
</style>

{#if data.project}
    <div class="ProjectCard">
    <!--!> 10fr / 5fr <!-->
        <div class="image">
            <img class="thumbnail" src={ base + "/images/thumbnails/" + data.project.thumbnail} alt={data.project.alt_txt_thumbnail[$language]}/>
        </div>

        <div class="title">{data.project.title[$language]} </div>

        <div class="desc"> {data.project.desc[$language]} </div>

        <div class="roles"> {data.project.role} </div>

        <div class="year"> {data.project.year} </div>

        <div class="engines"> {data.project.engine} </div>

        <div class="tags"> {data.project.tags.join(", ")}
        </div>

    </div>
{/if}

{@render children()}
