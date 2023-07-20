import React from 'react';

const Education = () => {
    const education = [
        {
            "school": "EPITECH - European Institute of Technology",
            "degree": "MSc Pro",
            "year": "Octobre 2023 - Juillet 2025",
            "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png"
        }, {
            "school": "Aix-Marseille Université",
            "degree": "Licence d'informatique",
            "year": "Septembre 2019 - Juin 2023",
            "image_url": "https://upload.wikimedia.org/wikipedia/fr/thumb/7/73/Univ_Aix-Marseille_-_Sciences.svg/1200px-Univ_Aix-Marseille_-_Sciences.svg.png"
        }
    ]

    return (
        <div className="flex flex-col p-10 gap-16 w-[90%]">
            <h1 className="text-4xl font-bold text-white">Parcours universitaire</h1>
            {education.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <div className="flex flex-col w-full">
                        <img src={item.image_url} alt={item.school} className="w-48 mb-6"/>
                        <h1 className="text-xl text-white">{item.school}</h1>
                        <h2 className="text-lg text-secondary">{item.degree}</h2>
                        <h3 className="text-lg text-secondary">{item.year}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Education;