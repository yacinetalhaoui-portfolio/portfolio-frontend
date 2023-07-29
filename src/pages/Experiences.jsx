import Sidebar from "../components/Sidebar.jsx";
import Navbar from "../components/Navbar.jsx";
import Education from "../components/Education.jsx";
import ProfessionalExperiences from "../components/ProfessionalExperiences.jsx";
import useMobile from "../utils/useMobile.js";
import {useEffect} from "react";

const Experiences = () => {

    const isMobile = useMobile();

    useEffect(() => {
        document.title = "Expériences |  Yacine Talhaoui";
    }, []);

    const renderMobile = () => {
        return (
            <div className="mt-14 h-screen overflow-y-scroll">
                <Navbar/>
                <ProfessionalExperiences/>
                <Education/>
            </div>
        );
    }

    const renderDesktop = () => {
        return (
            <div className="grid grid-cols-[1fr_3fr]">
                <Sidebar/>
                <div className="h-screen overflow-y-scroll">
                    <Navbar/>
                    <ProfessionalExperiences/>
                    <Education/>
                </div>
            </div>
        )
    }

    return isMobile ? renderMobile() : renderDesktop();
};

export default Experiences;
