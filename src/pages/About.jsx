import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Skills from "../components/Skills.jsx";

const About = () => {
    return (
        <div className="h-screen grid grid-cols-[1fr_3fr]">
            <Sidebar/>
            <div className=" overflow-y-scroll">
                <Navbar/>
                <div className="flex flex-col p-10 gap-8">
                    <h1 className="text-4xl font-bold text-white">Qui suis-je ?</h1>
                    <p className="text-[#7A7C80] text-xl w-[90%]">
                        Je suis étudiant en L3 Informatique à Marseille et j'ai récemment été accepté dans le parcours
                        MSc Pro en alternance à Epitech, je suis à la recherche d'une alternance de 24 mois commençant à
                        partir du 21 août 2023.
                        <br></br>
                        <br></br>
                        La data science est le domaine qui m'inspire le plus. J'aime la combinaison de compétences
                        analytiques et de créativité qui permet de découvrir des tendances et des modèles cachés dans
                        les données. Pour moi, le défi de résoudre des problèmes complexes en utilisant des techniques
                        de data science est ce qui rend ce domaine si passionnant
                        <br></br>
                        <br></br>
                        Le développement logiciel est un autre domaine qui me passionne énormément. J'aime le processus
                        de création, de conception et d'implémentation de logiciels qui résolvent des problèmes et
                        améliorent la vie des gens. Que ce soit pour le développement mobile ou web, j'apprécie l'aspect
                        créatif de ce domaine qui permet de construire des produits innovants et fonctionnels à partir
                        de zéro.
                    </p>
                </div>
                <Skills/>
            </div>
        </div>
    );
};

export default About;