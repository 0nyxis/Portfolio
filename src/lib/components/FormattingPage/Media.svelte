<script>
    import { base } from '$app/paths';

	let {type, srcLink, altTxt, title} = $props();
</script>

<style>
    .containerMedia
    {
        width: 100%;
    }

    figure 
    {
        width : 100%;
        margin : 0;
        padding:1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img, video
    {
        width : auto;
        height : auto;
        max-width: 500px;
        border-radius: var(--radius);
		box-sizing: border-box;
        }

    figcaption
    {
        text-align: center;
        margin-top: 0rem;
    }

</style>

<div class="containerMedia">
    <figure>
        {#if type === "image"}
            <img src={base + srcLink} alt={altTxt}/> 
        {:else if type === "video"}
            <video
                src={base + srcLink}
                autoplay
                loop
                muted
                playsinline
                ></video>

        {/if}
        <figcaption><em> {title} </em></figcaption>
    </figure>
</div>