import React, {useEffect, useState} from 'react';

const ProfessionalExperiences = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetchExperiences();
    }, []);

    const fetchExperiences = async () => {
        try {
            const response = await fetch('http://localhost:3001/experience'); // Replace with your actual backend API URL
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setExperiences(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <div className="flex flex-col p-10 gap-16 w-[90%]">
            <div>
                <h1 className="text-4xl font-bold text-white">Expériences professionnelles</h1>
                <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
            </div>
            {experiences.map((item, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <img src={item.image_url} alt={item.company} className="w-52 h-auto mb-6 fill-white"/>
                        <h1 className="text-xl text-white">{item.company}, {item.job}</h1>
                        <h3 className="text-lg text-secondary">{item.year}</h3>
                        <h3 className="text-lg text-secondary">{item.description}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProfessionalExperiences;