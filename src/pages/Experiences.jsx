import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Education from "../components/Education.jsx";
import ProfessionalExperiences from "../components/ProfessionalExperiences.jsx";

const Experiences = () => {

    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetchExperience();
    }, []);

    const fetchExperience = async () => {
        try {
            const response = await fetch('http://localhost:3001/experience'); // Replace with your actual backend API URL
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setExperience(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

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