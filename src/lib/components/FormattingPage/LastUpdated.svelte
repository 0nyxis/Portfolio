<script>	
	let {txt} = $props();
</script>

<style>
.lastUpdated
	{
		padding: 1rem 0;
		margin:0;
		display:grid;
		align-items: center;
		color: var(--text-variant);
	}
</style>
<div class="lastUpdated">
    <i>{@html txt}</i>
</div>