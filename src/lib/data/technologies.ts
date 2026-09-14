interface sortColor {
    id: number;
    known: "Green" | "Yellow" | "Red";
}

const sortByColor: sortColor[] = [
{ id : 1, known: "Red"},
{ id : 2, known: "Yellow"},
{ id : 3, known: "Green"},
]

const priority: Record<string, number> = {
    "Green": 1,
    "Yellow" : 2,
    "Red" : 3
}

export function getAllTech()
{
    return technologies.sort((a,b) => priority[a.known] - priority[b.known]);
}

export const technologies = 
[
    {
        name: "Unity",
        known: "green",
        image: "Unity.png",
        alt_txt: "Unity logo",
    },
    {
        name: "Java",
        known: "yellow",
        image: "Java.png",
        alt_txt: "Java logo",
    },
    {
        name: "Python",
        known: "yellow",
        image: "Python.png",
        alt_txt: "Python logo",
    },
    {
        name: "Unreal Engine",
        known: "green",
        image: "UE.png",
        alt_txt: "Unreal Engine Logo",
    },
    {
        name: "SQLite",
        known: "yellow",
        image: "UE.png",
        alt_txt: "Unreal Engine Logo",
    },
    {
        name: "MySQL",
        known: "yellow",
        image: "UE.png",
        alt_txt: "Unreal Engine Logo",
    },
    {
        name: "Php",
        known: "yellow",
        image: "UE.png",
        alt_txt: "Unreal Engine Logo",
    },
    {
        name: "HTML",
        known: "yellow",
        image: "UE.png",
        alt_txt: "Unreal Engine Logo",
    },
    {
        name: "HTMLd",
        known: "yellow",
        image: "UE.png",
        alt_txt: "Unreal Engine Logo",
    },
    {
        name: "HTMsL",
        known: "yellow",
        image: "UE.png",
        alt_txt: "Unreal Engine Logo",
    },
    {
        name: "HTqML",
        known: "yellow",
        image: "UE.png",
        alt_txt: "Unreal Engine Logo",
    },
    {
        name: "HTMfL",
        known: "yellow",
        image: "UE.png",
        alt_txt: "Unreal Engine Logo",
    },

]