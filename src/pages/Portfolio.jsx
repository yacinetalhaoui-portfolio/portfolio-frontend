import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {project_service} from "../services/project.service.js";
import Loader from "../components/Loader.jsx";
import useMobile from "../utils/useMobile.js";

const Portfolio = () => {

    const isMobile = useMobile();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = "Portfolio |  Yacine Talhaoui";
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await project_service.getProjects();
            setProjects(response.data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    const renderMobile = () => {
        return (
            <div className="mt-14 min-h-screen">
                <Navbar/>
                <div className=" flex flex-col gap-10">
                    <div className="mb-16 flex flex-col gap-10 w-[80%] justify-items-center
                    items-center m-auto py-10 justify-items-center">
                        {projects.map((project, index) => (
                            <Link to={project.name} state={project} key={index}
                                  className="relative transition-ease-in duration-300 hover:scale-105">
                                <img className="w-[60vh] h-[35vh] rounded-lg object-cover" src={project.image_url}
                                     alt="Project image"/>
                                <div
                                    className="absolute inset-0 rounded-lg flex text-center items-center justify-center bg-black bg-opacity-50 text-white">
                                    <span className="text-lg">{project.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    const renderDesktop = () => {
        return (
            <div className="grid max-h-screen grid-cols-[1fr_3fr]">
                <Sidebar/>
                <div className="h-screen overflow-y-scroll">
                    <Navbar/>
                    <div className=" flex flex-col gap-10">
                        <div className="desktop:grid desktop:grid-cols-2 gap-10 w-[80%] justify-items-center
                                items-center m-auto py-10 justify-items-center tablet:flex tablet:flex-col">
                            {projects.map((project, index) => (
                                <Link to={project.name} state={project} key={index}
                                      className="relative transition-ease-in duration-300 hover:scale-105">
                                    <img className="w-[60vh] h-[35vh] rounded-lg object-cover" src={project.image_url}
                                         alt="Project image"/>
                                    <div
                                        className="absolute inset-0 rounded-lg flex text-center items-center justify-center bg-black bg-opacity-50 text-white">
                                        <span className="text-lg">{project.name}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        );
    }

    if (projects.length === 0 && !isMobile) {
        return (
            <div className="grid max-h-screen grid-cols-[1fr_3fr]">
                <Sidebar/>
                <div className="h-screen overflow-y-scroll">
                    <Navbar/>
                    <Loader/>
                </div>
            </div>
        )
    }

    if (projects.length === 0 && isMobile) {
        return (
            <div className="mt-14 h-screen overflow-y-scroll">
                <Navbar/>
                <Loader/>
            </div>
        )
    }

    return isMobile ? renderMobile() : renderDesktop();
};

export default Portfolio;
