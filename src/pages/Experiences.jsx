import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Education from "../components/Education.jsx";
import ProfessionalExperiences from "../components/ProfessionalExperiences.jsx";

const Experiences = () => {

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