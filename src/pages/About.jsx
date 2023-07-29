import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Skills from "../components/Skills.jsx";
import Education from "../components/Education.jsx";
import React, {useEffect, useState} from "react";
import useMobile from "../utils/useMobile.js";

const About = () => {

    const isMobile = useMobile();

    const renderMobile = () => {
        return (
            <div>
                <Navbar/>
                <div className="flex flex-col p-10 gap-8 mt-14 h-screen">
                    <div>
                        <h1 className="text-4xl font-bold text-white">Qui suis-je ?</h1>
                        <hr className="mt-4 border-t-2 border-gray-300 w-[55%]"/>
                    </div>
                    <p className="text-[#7A7C80] text-xl w-[90%]">
                        J'ai récemment obtenu une Licence d'informatique à l'université d'Aix-Marseille et je suis
                        actuellement étudiant en MSc Pro à Epitech Paris.
                        En parallèle de mes études, je travaille en tant que Data Engineer en alternance chez
                        Affluences, basé à Paris, France, depuis septembre 2023.
                        <br></br>
                        <br></br>
                        La data science est le domaine qui m'inspire le plus. J'aime la combinaison de compétences
                        analytiques et de créativité qui permet de découvrir des tendances et des modèles cachés dans
                        les données. Pour moi, le défi de résoudre des problèmes complexes en utilisant des techniques
                        de data science est ce qui rend ce domaine si passionnant.
                        <br></br>
                        <br></br>
                        Le développement logiciel est un autre domaine qui me passionne énormément. J'aime le processus
                        de création, de conception et d'implémentation de logiciels qui résolvent des problèmes et
                        améliorent la vie des gens. Que ce soit pour le développement mobile ou web, j'apprécie l'aspect
                        créatif de ce domaine qui permet de construire des produits innovants et fonctionnels à partir
                        de zéro.
                    </p>
                </div>
            </div>
        );
    }

    const renderDesktop = () => {
        return (
            <div className="h-screen grid grid-cols-[1fr_3fr]">
                <Sidebar/>
                <div className=" overflow-y-scroll">
                    <Navbar/>
                    <div className="flex flex-col p-10 gap-8">
                        <div>
                            <h1 className="text-4xl font-bold text-white">Qui suis-je ?</h1>
                            <hr className="mt-4 border-t-2 border-gray-300 w-[55%]"/>
                        </div>
                        <p className="text-[#7A7C80] text-xl w-[90%]">
                            J'ai récemment obtenu une Licence d'informatique à l'université d'Aix-Marseille et je suis
                            actuellement étudiant en MSc Pro à Epitech Paris.
                            En parallèle de mes études, je travaille en tant que Data Engineer en alternance chez
                            Affluences, basé à Paris, France, depuis septembre 2023.
                            <br></br>
                            <br></br>
                            La data science est le domaine qui m'inspire le plus. J'aime la combinaison de compétences
                            analytiques et de créativité qui permet de découvrir des tendances et des modèles cachés dans
                            les données. Pour moi, le défi de résoudre des problèmes complexes en utilisant des techniques
                            de data science est ce qui rend ce domaine si passionnant.
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
    }

    return isMobile ? renderMobile() : renderDesktop();
};

export default About;