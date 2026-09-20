<script>
	import Title from '$lib/components/FormattingPage/Title.svelte';

	import { translate } from '$lib/data/translateSystem';
	import { base } from '$app/paths';

</script>

<style>
	.container {
		background-color: rgb(165, 165, 255);
	}

	footer {
		width: min(1200px, calc(100% - 40px));
		margin: 0 auto;
		padding: 3rem 2rem 1.5rem;
		box-sizing: border-box;
		color:black;
	}

	.footerTop 
	{
		display:grid;
		grid-template-columns: 2fr 1fr;
		gap: 4rem;
		padding-bottom: 2.5rem;
	}

	.socials {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.socialLink {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.socialLink img {
		width : 40px;
		height: 40px;
		object-fit: contain;
		transition: transform 0.2s ease;
	}

	.socialLink img:hover {
		transform: translateY(-2px);
	}
	.contact {
		display: flex;
		flex-direction: column;
		gap:0.75rem;
	}
	.contact a {
		width: fit-content;
		text-decoration: none;
		color:black;
		transition: transform 0.2s ease;
	}

	.contact a:hover {
		color:blue;
		transform: translateY(-2px);
	}

	.bottom {
		border-top: 1px solid rgba(0,0,0,0.25);
		padding-top: 1.25rem;
	}

	@media (max-width: 700px)
	{
		.footerTop {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

</style>
<div class="container">
	<footer> 
		<div class="footerTop">	

			<div>
				<Title txt={$translate.footer.titleTouch}/>

				<div class="socials">
					<a href={$translate.footer.github} 
					target="_blank" 
					rel="noopener noreferrer" 
					class="socialLink"
					aria-label="GitHub"> 
						<img src={base + "/images/icons/githubLogo.png"} alt=""/>
					</a>
					<a href={$translate.footer.itchio}
					target="_blank"
					rel="noopener noreferrer" 
					class="socialLink"
					aria-label="Itch.Io"> 
					 	<img src={base + "/images/icons/itchioLogo.svg"} alt=""/> 
					</a>
					<a href={$translate.footer.LinkedIn} 
					target="_blank"
					rel="noopener noreferrer" 
					class="socialLink"
					aria-label="LinkedIn"> 
						<img src={base + "/images/icons/linkedInLogo.png"} alt=""/> 
					</a>
				</div>
			</div>

			<div class="contact">
				<Title txt={$translate.footer.contact}/>

				<a href="mailto:louislecleach27@gmail.com" target="_blank"> 
					louislecleach27@gmail.com 
				</a>
				<a href={base + $translate.footer.CV} 
				target="_blank"
				rel="noopener noreferrer">
					CV 
				</a>
			</div>
		</div>

		<div class="bottom">
			<Title txt={$translate.footer.copyright} />
		</div>
	</footer>
</div>