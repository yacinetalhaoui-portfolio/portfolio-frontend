import React, {useEffect, useState} from 'react';

const Education = () => {
    const [education, setEducations] = useState([]);

    useEffect(() => {
        fetchEducations();
    }, []);

    const fetchEducations = async () => {
        try {
            const response = await fetch('http://localhost:3001/education'); // Replace with your actual backend API URL
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setEducations(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    return (
        <div className="flex flex-col p-10 gap-16 w-[90%]">
            <div>
                <h1 className="text-4xl font-bold text-white">Expériences universitaires</h1>
                <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
            </div>
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