<script>
    import { base } from '$app/paths';

	let {type, srcLink, altTxt, title, maxWidth = "500px"} = $props();
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
            {#if maxWidth != "500px"}  
                <img src={base + srcLink} alt={altTxt} style="max-width:{maxWidth} !important; width:{maxWidth} !important"/> 
            {:else}
                <img src={base + srcLink} alt={altTxt}/> 
            {/if}
        {:else if type === "video"}
            {#if maxWidth != "500px"}
                <video
                    src={base + srcLink}
                    autoplay
                    loop
                    muted
                    playsinline
                    
                    style="max-width:{maxWidth} !important; 
                            width:{maxWidth} !important">
                </video>
            {:else}
                <video
                    src={base + srcLink}
                    autoplay
                    loop
                    muted
                    playsinline>
                </video>
            {/if}

        {/if}
        <figcaption><em> {title} </em></figcaption>
    </figure>
</div>