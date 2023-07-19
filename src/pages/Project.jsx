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
                            <a className="text-white flex items-center gap-3 bg-secondary md:w-[40vw] lg:w-[40%] w-[30%] p-3 rounded-full" href={project.github_link}>
                                <svg className="w-[10%] fill-white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                <p> Lien vers le dépôt Github </p>
                            </a>
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