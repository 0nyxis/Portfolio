<script>
// @ts-nocheck


    import { resolve } from '$app/paths';

	import ButtonLanguage from "./ButtonLanguage.svelte";
	import ButtonTheme from "./ButtonTheme.svelte";
	import { translate } from '$lib/data/translateSystem';
	import { getFeaturedProjects } from '$lib/data/projectsList';
	import { language } from "$lib/stores/language";

</script>

<style>
	.navbar 
	{
		position: sticky;
		top:0;
		z-index : 100;

		height: 70px;
		
		display : flex;
		justify-content: space-between;
		align-items: center;

		padding: 0 2rem;
		
		background-color: #a0a2a5;
		color : white;
		
		box-sizing: border-box;
	}

	.navbar a 
	{
		color: #e8eeec;
		text-decoration: none;

		font-family: Arial, sans-serif;
		font-size: 0.9rem;

		transition: color 0.2s ease;
	}
	
	.navbar a:hover
	{
		color:#b8d8d0;
	}

	.sous-menu 
	{
		display:none;

		position : absolute;
		top:100%;
		left:50%;
		transform: translateX(-50%);

		min-width : 220px;

		margin : 0;
		padding : 0.5rem 0;

		list-style: none;

		background-color: #19352f;
		border: 1px solid #47635d;
	}

	.sous-menu li
	{
		padding: 0.6rem 1rem;
	}

	.sous-menu li:hover
	{
		background-color: #294840;
	}

	.projects 
	{
		position : relative;
	}

	.projects:hover .sous-menu
	{
		display:block;
	}

	.right 
	{
		display : flex;
		align-items: center;
		gap: 1.5rem;
	}

	.right > ul 
	{
		display: flex;
		align-items: center;
		gap:1.5rem;
		list-style: none;
		margin:0;
		padding:0;
	}
</style>

<nav class="navbar">
	<div class="left">
		<a href={resolve("/")}> {$translate.nav.home} </a>
	</div>
	<div class="right"> 
	<ul >
		<li class="projects"><a href={resolve("/projects")}> {$translate.nav.projects} </a>
			<ul class="sous-menu">
			
				{#each getFeaturedProjects() as project(project.id)}
					<li class="elt-sous-menu"><a href={resolve(project.link)}> {project.title[$language]} </a></li>
				{/each}
			</ul>
		</li>
		<li><a href={resolve("/about")}> {$translate.nav.about} </a></li>
	</ul>
		<ButtonTheme/> <ButtonLanguage/>
	</div>	
</nav>