import type { RouteId } from "$app/types";
import type { Language } from "$lib/stores/language";

export interface Project {
    id: string;
    title : Record<Language, string>;
    link: string;
    featured : boolean;
    thumbnail : string;
    alt_txt_thumbnail : Record<Language, string>;
    desc : Record<Language, string>;
    role : string;
    year : number;
    engine : string;
    tags: string[];
}

export function getProject(id : string){
    return projects.find(project => project.id === id);
}

export function getFeaturedProjects()
{
    return projects.filter(projects => projects.featured);
}

export const projects : Project[] = 
[
    {
        id : "cyberdemineur",
        featured : true,

        title : {
            en : "Cyberdémineur",
            fr : "Cyberdémineur"
            },
        link: "/projects/cyberdemineur",
        thumbnail : "Cyberdemineur.png",
        alt_txt_thumbnail : 
        {
            en :"Image from the game \"Cyberdemineur\". It display a game of minesweeper, in the middle of play. A bomb was uncovered, and multiple flags were putted down.",
            fr : "Image venant du jeu \"Cyberdemineur\". En pleine partie, on y voit qu'une bombe a été découverte, ainsi que des drapeaux ont été posés.",
        },
        desc :
        {
            en : "The first reel project I've worked on : it is a minesweeper game, with a \"cyberpunk\" art visual.",
            fr : "Le premier projet sur lequel j'ai travaillé : il s'agit d'un démineur, avec un style visuel dit \"cyberpunk\"",
        },
        role : "Game programmer, Data manager, co-leader",
        year : 2018,
        engine : "Python (PIL), Java, C#",
        tags : 
        [
            "firstProject", "Python", "Small-Team", "Multiple-Iteration"
        ]
    },

	{
        id : "after_impact",
        featured : true,

        title : {
            en : "After Impact",
            fr : "After Impact"
            },
        link: "/projects/after_impact",
        thumbnail : "AfterImpact.png",
        alt_txt_thumbnail : 
        {
            en : "Image from the game \"After Impact\", displaying the initial plane crash of the game. There is debris and fire, in the middle of the snowy forest",
            fr : "Image venant du jeu \"After Impact\", montrant le crash d'avion initial du jeu. Il y a des débris et du feu, au milieu d'une forêt enneigée.",
        },
        desc :
        {
            en : "Final project of 3rd year of Creajeux, it is a survival game, focused on exploring the world and crafting new items to help you survive, and escape.",
            fr : "Projet final de 3ème année de Créajeux, il s'agit d'un jeu de survie, dont l'objectif principal est l'exploration du monde et la fabrication d'objet afin de survivre, et de s'échaper.",
        },
        role : "Tool programmer, Game Programmer",
        year : 2026,
        engine : "Unity",
        tags : 
        [
            "Creajeux", "Group-Project", "C#"
        ]
    },

    {
        id : "Ceritar",
        featured : false,

        title : {
            en : "Ceritar",
            fr : "Ceritar"
            },
        link: "/projects/ceritar",
        thumbnail : "test.png",
        alt_txt_thumbnail : 
        {
            en : "",
            fr : "",
        },
        desc :
        {
            en : "Last year internship done in Quebec",
            fr : "Stage de dernière année au Québec",
        },
        role : "back-end developper",
        year : 0,
        engine : "",
        tags : 
        [
            ""
        ]
    },

    {
        id : "null",
        featured : false,

        title : {
            en : "null",
            fr : "null"
            },
        link: "/projects/error",
        thumbnail : "",
        alt_txt_thumbnail : 
        {
            en : "",
            fr : "",
        },
        desc :
        {
            en : "",
            fr : "",
        },
        role : "",
        year : 0,
        engine : "",
        tags : 
        [
            ""
        ]
    },
]