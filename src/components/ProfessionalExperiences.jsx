import React, {useEffect, useState} from 'react';
import {experience_service} from "../services/experience.service.js";

const ProfessionalExperiences = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetchExperience();
    }, []);

    const fetchExperience = async () => {
        try {
            const response = await experience_service.getProfessionalExperiences();
            setExperience(response.data);
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
            {experience.map((item, index) => (
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