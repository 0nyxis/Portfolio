<script>	
	let {srcLink, altTxt, title} = $props();
</script>

<style>
    figure 
    {
        width : 100%;
        margin : 0;
    }

    img
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
    <img src={srcLink} alt={altTxt}/> 
    <figcaption><em> {title} </em></figcaption>
</figure>