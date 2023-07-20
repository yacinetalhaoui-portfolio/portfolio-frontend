import React from 'react';
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Education from "../components/Education.jsx";
import ProfessionalExperiences from "../components/ProfessionalExperiences.jsx";

const Experiences = () => {
    const education = [
        {
            "school": "EPITECH - European Institute of Technology",
            "degree": "MSc Pro",
            "year": "Octobre 2023 - Juillet 2025",
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png"
        },{
            "school": "Aix-Marseille Université",
            "degree": "Licence d'informatique",
            "year": "Septembre 2019 - Juin 2023",
            "image_url": "https://upload.wikimedia.org/wikipedia/fr/thumb/7/73/Univ_Aix-Marseille_-_Sciences.svg/1200px-Univ_Aix-Marseille_-_Sciences.svg.png"
        }
    ]

    return (
        <div className="grid grid-cols-[1fr_3fr]">
            <Sidebar />
            <div className="h-screen overflow-y-scroll">
                <Navbar/>
                <Education/>
                <ProfessionalExperiences/>
            </div>
        </div>
    );
};

export default Experiences;