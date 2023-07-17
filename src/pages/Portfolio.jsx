import Sidebar from "../components/Sidebar.jsx";
import Project from "../components/Project.jsx";
import Navbar from "../components/Navbar.jsx";
import {Link} from "react-router-dom";

const Portfolio = () => {
    const projects = [
        {
            name: "Classification d'images",
            language: "Python",
            context: "Introduction à l'apprentissage automatique",
            team_size: "3 personnes",
            objective: "Créer un programme qui prédit la catégorie d'une image, dans ce programme, déterminer si une image contient la mer ou non",
            description: "Programme réalisé en Python basé sur des algorithmes d'apprentissage supervisé en utilisant les librairies Sklearn (Pour les algorithmes d'apprentissage), OpenCV (Pour le traitement des images) et Numpy (Pour modéliser les données).",
            tools: [
                "Python",
                "Sklearn",
                "OpenCV",
                "Numpy"
            ],
            link: "../../public/apprentissage.png"
        },
        // {
        //     name: "FireFighters !!",
        //     language: "Java",
        //     context: "Programmation et Conception",
        //     team_size: "2 personnes",
        //     objective: "En partant d'une base de code fournie par l'enseignant, réaliser un refactor du code et ajouter des fonctionnalités tout en respectant les principes SOLID.",
        //     description: "Un automate cellulaire sur une grille où des pompiers tentent d'éteindre le feu qui se propage. Il y a différentes entités : des pompiers, des pompiers motorisés. Il y a aussi des obstacles : routes, montagnes et nuages",
        //     tools: [
        //         "Java"
        //     ]
        // },
        {
            name: "Flowers",
            language: "HTML, CSS, JavaScript, SQL",
            context: "Projet personnel",
            team_size: "1 personne",
            objective: "Apprendre et se familiariser avec le framework frontend : React.js. Apprendre et approfondir les compétences en backend avec Node.js et Express.js.",
            description: "Pseudo réseau social où chaque utilisateur peut poster une publication contenant une photo d'une fleur et une description.",
            tools: [
                "React",
                "Express",
                "Node",
                "Mongodb",
                "Json Web Token"
            ],
            link: "../../public/flowers.png"
        },
        {
            name: "Microblogage",
            languages: "Java, SQL",
            context: "Introduction à l'apprentissage automatique",
            team_size: "3 personnes",
            objective: "Créer une application réseaux de Microblogage en Java.",
            description: "Les utilisateurs peuvent poster des courts messages, lire les derniers messages postés, s'abonner à d'autres utilisateurs (auquel cas ils reçoivent les messages de ces utilisateurs) et s'en désabonner. Les messages peuvent contenir des mots-clés (tags), et l'on peut consulter les messages récents contenant un mot-clé donné, ainsi que s'abonner/se désabonner à des/de mots-clés.",
            tools: [
                "Java",
                "SQL"
            ],
            link: "../../public/reseaux.jpeg"
        }
    ];

    return (
        <div className="grid max-h-screen grid-cols-[1fr_3fr]">
            <Sidebar/>
            <div className="max-h-screen overflow-y-scroll">
                <Navbar/>
                <div className="my-10 flex flex-col gap-10">
                    <h1 className="text-white text-3xl text-center">Projets</h1>
                    <div className="grid grid-cols-2 gap-10 w-[80%] justify-items-center items-center m-auto">
                        {projects.map((project, index) => (
                            <Link to={project.name} key={index} className="relative transition-ease-in duration-300 hover:scale-105">
                                <img className="w-[60vh] h-[35vh] rounded-lg object-cover" src={project.link} alt="Project image"/>
                                <div
                                    className="absolute inset-0 rounded-lg flex text-center items-center justify-center bg-black bg-opacity-50 text-white">
                                    <span className="text-lg">{project.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;