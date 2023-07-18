// eslint-disable-next-line react/prop-types
import React from "react";
import {useLocation} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";

const Project = () => {

    const location = useLocation();
    const project = location.state;

    return (
        <div className="grid max-h-screen grid-cols-[1fr_3fr]">
            <Sidebar/>
            <div className="max-h-screen overflow-y-scroll">
                <Navbar/>
                <div className="my-10 px-10">
                    <h1 className="mb-10 text-white text-3xl text-left">{project.name}
                        <hr className="my-4 border-t-2 border-gray-300 w-[60%]"/>
                    </h1>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <span className="text-secondary text-2xl">Contexte : {project.context}</span>
                            <span className="text-secondary text-xl">Taille de l'équipe : {project.team_size}</span>
                            <span className="text-secondary text-xl">Objectif : {project.objective}</span>
                            <span className="text-secondary text-xl">Description : {project.description}</span>
                            <div className="grid grid-cols-5 w-[60vw] lg:w-[27vw] md:w-[50vw] gap-6 rounded">
                                {project.tools.map((tool, index) => (
                                    <div className="max-w-full fill-white bg-secondary rounded-full p-2" key={index}>
                                        {React.createElement("div", {dangerouslySetInnerHTML: {__html: tool}})}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;