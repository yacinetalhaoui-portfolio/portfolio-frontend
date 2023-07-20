import React from 'react';

const ProfessionalExperiences = () => {
    const experiences = [
        {
            "company": "Affluences",
            "job": "Data Engineer (Alternance)",
            "year": "Septembre 2023 - Août 2025",
            "image_url": "https://static.wixstatic.com/media/537498_a31bb0de4add4ef4ba3fc0abb6c8e994~mv2.png",
            "description": "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
        }, {
            "company": "BECOMTECH",
            "job": "Formateur en informatique",
            "year": "Juin 2023 - Août 2023",
            "image_url": "https://www.senan.eu/wp-content/uploads/2019/06/BECOMTECH-Partenaire-Association-Senan.png",
            "description": "Animer des ateliers d’initiation à l’informatique et à la programmation web pour un groupe diversifié de 15 filles issues principalement de classes de 3ème et de 2nde."
        }
    ]

    return (
        <div className="flex flex-col p-10 gap-16 w-[90%]">
            <h1 className="text-4xl font-bold text-white">Expériences professionnelles</h1>
            {experiences.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <img src={item.image_url} alt={item.company} className="w-52 h-auto mb-6 fill-white"/>
                        <h1 className="text-xl text-white">{item.company}</h1>
                        <h2 className="text-lg text-white">{item.job}</h2>
                        <h3 className="text-lg text-secondary">{item.year}</h3>
                        <h3 className="text-lg text-secondary">{item.description}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfessionalExperiences;