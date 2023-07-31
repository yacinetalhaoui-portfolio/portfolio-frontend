import React, {useEffect, useState} from 'react';
import {experience_service} from "../services/experience.service.js";
import Loader from "./Loader.jsx";
import {date_service} from "../services/date.service.js";
import apiService from "../services/api.service.js";
import useMobile from "../utils/useMobile.js";

const Education = () => {
    const isMobile = useMobile();
    const [education, setEducation] = useState([]);

    useEffect(() => {
        fetchEducation();
    }, []);

    const fetchEducation = async () => {
        try {
            const response = await experience_service.getEducationExperiences();
            setEducation(response.data);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };



    const renderMobile = () => {
        if (education.length === 0) {
            return (
                <div className="flex flex-col p-10 gap-16 max-w-screen-sm">
                    <div>
                        <h1 className="text-2xl font-bold text-white">Expériences universitaires</h1>
                        <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
                    </div>
                    <Loader/>
                </div>
            )
        }

        return (
            <div className="flex flex-col p-10 gap-16 max-w-screen-sm">
                <div>
                    <h1 className="text-2xl font-bold text-white">Expériences universitaires</h1>
                    <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
                </div>
                {education.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="flex flex-col w-full">
                            <img src={item.image_url} alt={item.school} className="w-36 mb-6 "/>
                            <h1 className="text-lg text-white">{item.school}</h1>
                            <h2 className="text-base text-secondary">{item.degree}</h2>
                            <h3 className="text-base text-secondary">{date_service.createDateText(item.begin_date, item.end_date)}</h3>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const renderDesktop = () => {
        if (education.length === 0) {
            return (
                <div className="flex flex-col p-10 gap-16 w-[90%]">
                    <div>
                        <h1 className="text-4xl font-bold text-white">Expériences universitaires</h1>
                        <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
                    </div>
                    <Loader/>
                </div>
            )
        }

        return (
            <div className="flex flex-col p-10 gap-16 w-[90%]">
                <div>
                    <h1 className="text-4xl font-bold text-white">Expériences universitaires</h1>
                    <hr className="mt-4 border-t-2 border-gray-300 w-[80%]"/>
                </div>
                {education.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="flex flex-col w-full">
                            <img src={item.image_url} alt={item.school} className="w-48 mb-6 "/>
                            <h1 className="text-xl text-white">{item.school}</h1>
                            <h2 className="text-lg text-secondary">{item.degree}</h2>
                            <h3 className="text-lg text-secondary">{date_service.createDateText(item.begin_date, item.end_date)}</h3>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return isMobile ? renderMobile() : renderDesktop();
};

export default Education;