import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Portfolio = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await fetch('http://localhost:3001/project'); // Replace with your actual backend API URL
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    return (
        <div className="grid max-h-screen grid-cols-[1fr_3fr]">
                <Sidebar />
            <div className="h-screen overflow-y-scroll">
                <Navbar/>
                <div className=" flex flex-col gap-10">
                    <h1 className="text-white text-3xl text-center">Projets</h1>
                    <div className="desktop:grid desktop:grid-cols-2 gap-10 w-[80%] justify-items-center
                    items-center m-auto py-10 justify-items-center tablet:flex tablet:flex-col">
                        {projects.map((project, index) => (
                            <Link to={project.name} state={project} key={index} className="relative transition-ease-in duration-300 hover:scale-105">
                                <img className="w-[60vh] h-[35vh] rounded-lg object-cover" src={project.link} alt="Project image"/>
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
};

export default Portfolio;
