import React, {useEffect, useState} from 'react';
import {experience_service} from "../services/experience.service.js";
import Loader from "./Loader.jsx";
import {date_service} from "../services/date.service.js";
import useMobile from "../utils/useMobile.js";

const ProfessionalExperiences = () => {
    const isMobile = useMobile();
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

    const renderMobile = () => {
        if (experience.length === 0) {
            return (
                <div className="flex flex-col p-10 gap-16 max-w-screen-sm">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Expériences professionnelles</h1>
                        <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
                    </div>
                    <Loader/>
                </div>
            )
        }

        return (
            <div className="flex flex-col p-10 gap-16 max-w-screen-sm">
                <div>
                    <h1 className="text-2xl font-bold text-white">Expériences professionnelles</h1>
                    <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
                </div>
                {experience.map((item, index) => {

                    return (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <img src={item.image_url} alt={item.company}
                                     className={item.company === "BECOMTECH" ? "w-36 h-auto mb-6 invert" : "w-36 h-auto mb-6  "}/>
                                <h1 className="text-lg text-white">{item.company}, {item.title}</h1>
                                <h3 className="text-base text-secondary">{date_service.createDateText(item.begin_date, item.end_date)} | {item.city}</h3>
                                <ul className="list-disc ml-6 text-secondary mt-4">
                                    {item.responsabilities.map((responsibility, index) => (
                                        <li key={index} >{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderDesktop = () => {
        if (experience.length === 0) {
            return (
                <div className="flex flex-col p-10 gap-16 w-[90%]">
                    <div>
                        <h1 className="text-4xl font-bold text-white">Expériences professionnelles</h1>
                        <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
                    </div>
                    <Loader/>
                </div>
            )
        }

        return (
            <div className="flex flex-col p-10 gap-16 w-[90%]">
                <div>
                    <h1 className="text-4xl font-bold text-white">Expériences professionnelles</h1>
                    <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
                </div>
                {experience.map((item, index) => {

                    return (
                        <div key={index} className="flex flex-col gap-4">
                            <div className="flex flex-col">
                                <img src={item.image_url} alt={item.company}
                                     className={item.company === "BECOMTECH" ? "w-52 h-auto mb-6 invert" : "w-52 h-auto mb-6  "}/>
                                <h1 className="text-xl text-white">{item.company}, {item.title}</h1>
                                <h3 className="text-lg text-secondary">{date_service.createDateText(item.begin_date, item.end_date)} | {item.city}</h3>
                                <ul className="list-disc ml-6 text-secondary mt-4">
                                    {item.responsabilities.map((responsibility, index) => (
                                        <li key={index} >{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    return isMobile ? renderMobile() : renderDesktop();
};

export default ProfessionalExperiences;