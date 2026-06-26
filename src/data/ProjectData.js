import pro1 from "../assets/proj/food.png"
import pro2 from "../assets/proj/counter.png"
import pro3 from "../assets/proj/facebook.png"
import pro4 from "../assets/proj/pass.png"
import pro5 from "../assets/proj/todo.png"


const projectsData = [
{
    id:"1",
    image:pro1,
    category:"Featured Project",
    title:"FoodNest Recipe App",
    desc:"A recipe discovery application that allows users to search recipes, explore cooking instructions and manage bookmarked recipes through an interactive interface.",
    tech:[
        "HTML",
        "CSS",
        "JavaScript",
        "Forkify API"
    ]
},
{
    id:"2",
    image:pro3,
    category:"UI Clone",
    title:"Facebook",
    desc:"A responsive Facebook login interface recreated with modern frontend techniques focusing on layout accuracy and user interface design.",
    tech:[
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design"
    ]
},
{
    id:"3",
    image:pro4,
    category:"Utility Application",
    title:"Secure Password Generator",
    desc:"A password generation tool that creates secure passwords with customizable length and character selection options.",
    tech:[
        "HTML",
        "CSS",
        "JavaScript"
    ]
},
{
    id:"4",
    image:pro5,
    category:"Productivity App",
    title:"Task Management App",
    desc:"A task management application that enables users to add, organize and remove daily tasks through a clean user interface.",
    tech:[
        "HTML",
        "CSS",
        "JavaScript",
        "Local Storage"
    ]
},
{
    id:"5",
    image:pro2,
    category:"React Fundamentals",
    title:"Interactive Counter App",
    desc:'A simple React application demonstrating state management with increment, decrement and reset functionality.',
    tech:[
        "React",
        "JavaScript",
        "CSS",
        "useState"
    ]
}
];

export default projectsData;