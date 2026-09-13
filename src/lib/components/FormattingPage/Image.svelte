<script>
    import { base } from '$app/paths';

	let {type, srcLink, altTxt, title} = $props();
</script>

<style>
    figure 
    {
        width : 100%;
        margin : 0;
    }

    img, video
    {
        display : block;
        width : 100%;
        height : auto;
        max-width: 500px;
        border-radius: 30px;
		padding: 1rem;

    }

    figcaption
    {
        text-align: center;
        margin-top: 0rem;
        padding-top: 0rem;
    }
</style>

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