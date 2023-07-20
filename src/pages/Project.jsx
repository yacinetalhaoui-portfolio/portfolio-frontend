import React from "react";
import {useLocation} from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";

const Project = () => {

    const location = useLocation();
    const project = location.state;

    return (
        <div className="grid grid-cols-[1fr_3fr]">
            <Sidebar />
            <div className="h-screen overflow-y-scroll">
                <Navbar/>
                <div className="my-10 px-10">
                    <a href={project.github_link} className="text-white text-3xl text-left">
                        <div className="flex gap-2 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                                <g fill="#36c">
                                    <path d="M20.437 2.69c-3.37 0-5.778 3.05-8.186 5.297.322 0 .804-.16 1.285-.16.803 0 1.605.16 2.408.48 1.284-1.283 2.568-2.727 4.494-2.727.963 0 2.087.48 2.89 1.123 1.605 1.605 1.605 4.174 0 5.78l-4.174 4.172c-.642.642-1.926 1.124-2.89 1.124-2.246 0-3.37-1.446-4.172-3.212l-2.086 2.087c1.284 2.408 3.21 4.173 6.1 4.173 1.926 0 3.69-.802 4.815-2.086l4.172-4.174c1.445-1.444 2.408-3.21 2.408-5.297-.32-3.53-3.53-6.58-7.063-6.58z"/>
                                    <path d="M13.535 22.113l-1.444 1.444c-.64.642-1.925 1.124-2.89 1.124-.962 0-2.085-.48-2.888-1.123-1.605-1.605-1.605-4.334 0-5.778l4.174-4.175c.642-.642 1.926-1.123 2.89-1.123 2.246 0 3.37 1.605 4.172 3.21l2.087-2.087c-1.284-2.407-3.21-4.173-6.1-4.173-1.926 0-3.692.803-4.815 2.087L4.547 15.69c-2.73 2.73-2.73 7.063 0 9.63 2.568 2.57 7.062 2.73 9.47 0l3.05-3.05c-.482.162-.963.162-1.445.162-.803 0-1.445 0-2.087-.32z"/>
                                </g>
                            </svg>
                            <p>{project.name}</p>
                        </div>
                        <hr className="my-4 border-t-2 border-gray-300 w-[60%]"/>
                    </a>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <span className="text-secondary text-2xl">Contexte : {project.context}</span>
                            <span className="text-secondary text-xl">Taille de l'équipe : {project.team_size}</span>
                            <span className="text-secondary text-xl">Objectif : {project.objective}</span>
                            {project.github_org_link !== "" && project.organisation_description !== "" && (
                                <div className="my-3 text-secondary text-xl flex flex-col gap-4">
                                    <span>{project.organisation_description}</span>
                                </div>
                            )}
                            <span className="text-secondary text-xl">{project.description}</span>
                            {project.github_org_link !== "" && project.organisation_description !== "" && (
                                <a href={project.github_org_link} className="text-white text-2xl text-left">
                                    <div className="flex gap-2 items-center text-lg">
                                        <svg className="w-[2%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
                                            <g fill="#36c">
                                                <path d="M20.437 2.69c-3.37 0-5.778 3.05-8.186 5.297.322 0 .804-.16 1.285-.16.803 0 1.605.16 2.408.48 1.284-1.283 2.568-2.727 4.494-2.727.963 0 2.087.48 2.89 1.123 1.605 1.605 1.605 4.174 0 5.78l-4.174 4.172c-.642.642-1.926 1.124-2.89 1.124-2.246 0-3.37-1.446-4.172-3.212l-2.086 2.087c1.284 2.408 3.21 4.173 6.1 4.173 1.926 0 3.69-.802 4.815-2.086l4.172-4.174c1.445-1.444 2.408-3.21 2.408-5.297-.32-3.53-3.53-6.58-7.063-6.58z"/>
                                                <path d="M13.535 22.113l-1.444 1.444c-.64.642-1.925 1.124-2.89 1.124-.962 0-2.085-.48-2.888-1.123-1.605-1.605-1.605-4.334 0-5.778l4.174-4.175c.642-.642 1.926-1.123 2.89-1.123 2.246 0 3.37 1.605 4.172 3.21l2.087-2.087c-1.284-2.407-3.21-4.173-6.1-4.173-1.926 0-3.692.803-4.815 2.087L4.547 15.69c-2.73 2.73-2.73 7.063 0 9.63 2.568 2.57 7.062 2.73 9.47 0l3.05-3.05c-.482.162-.963.162-1.445.162-.803 0-1.445 0-2.087-.32z"/>
                                            </g>
                                        </svg>
                                        <p>Lien vers la page Github de l'organisation</p>
                                    </div>
                                </a>
                            )}
                            <p className="text-white text-2xl text-left">Technologies et outils utilisés</p>
                            <div className="flex w-[80%] 2big-desktop:w-[30%] big-desktop:w-[45%] mid-tablet:w-[50%] gap-6 rounded">
                                {project.tools.map((tool, index) => (
                                    <div key={index}>
                                        {React.createElement("div", {dangerouslySetInnerHTML: {__html: tool}, className: "fill-white text-xl w-12"})}
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