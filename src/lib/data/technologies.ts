interface sortColor {
    id: number;
    known: "green" | "yellow" | "orange";
}

const sortByColor: sortColor[] = [
{ id : 1, known: "orange"},
{ id : 2, known: "yellow"},
{ id : 3, known: "green"},
]

const priority: Record<string, number> = {
    "green": 1,
    "yellow" : 2,
    "orange" : 3
}

export function getAllTech()
{
    return technologies.sort((a,b) => { return priority[a.known] - priority[b.known]; });
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
        image: "SQLite.webp",
        alt_txt: "SQLite Logo",
    },
    {
        name: "MySQL",
        known: "yellow",
        image: "MySQL.png",
        alt_txt: "MySQL Logo",
    },
    {
        name: "Php",
        known: "yellow",
        image: "PHP.webp",
        alt_txt: "PHP Logo",
    },
    {
        name: "HTML",
        known: "yellow",
        image: "HTML5.webp",
        alt_txt: "HTML5 Logo",
    },
    {
        name: "CSS",
        known: "yellow",
        image: "CSS3.webp",
        alt_txt: "CSS3 Logo",
    }
    ,
    {
        name: "C",
        known: "orange",
        image: "C.png",
        alt_txt: "C Logo",
    },
    {
        name: "C++",
        known: "yellow",
        image: "Cpp.webp",
        alt_txt: "C++ Logo",
    },
    {
        name: "C#",
        known: "yellow",
        image: "CS.webp",
        alt_txt: "C# Logo",
    },

]