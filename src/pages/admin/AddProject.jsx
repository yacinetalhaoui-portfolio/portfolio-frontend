import React, {useState} from 'react';
import { redirect } from "react-router-dom";
import AddListInput from "../../components/AddListInput.jsx";
import {project_service} from "../../services/project.service.js";

const AddProject = () => {

    const [formData, setFormData] = useState({
        name: '',
        language: '',
        context: '',
        team_size: '',
        objective: '',
        organization_description: '',
        description: '',
        image_url: '',
        github_link: '',
        github_org_link: '',
        tools: [],
        secretCode: ''
    });

    const textInputs = {
        name: 'Nom du projet',
        language: 'Language(s) utilisé(s)',
        context: 'Contexte du projet',
        team_size: 'Taille de l\'équipe',
        objective: 'Objectif du projet',
        organization_description: 'Description de l\'organisation (facultatif)',
        description: 'Description du projet',
        image_url: 'URL de l\'image/gif',
        github_link: 'Lien vers le projet',
        github_org_link: 'Lien vers l\'organisation (facultatif)',
        secretCode: "Code de validation"
    };

    const handleListUpdate = (newList) => {
        formData.tools = newList;
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const addProject = async (event) => {
        event.preventDefault();

        await project_service.addProject(formData);

        redirect("/");
    };

    return (
        <div className="h-screen text-white flex flex-col gap-16 items-center justify-center">
            <h1 className="text-3xl">Nouveau projet</h1>
            <form onSubmit={addProject} className="flex flex-col items-center">
                <div
                    className="justify-center tablet:grid-cols-1 desktop: grid desktop:grid-cols-2 big-desktop:grid big-desktop:grid-cols-3 gap-x-6">
                    {Object.entries(formData).map(([key, value]) => {
                        if (textInputs[key]) {
                            return (
                                <div key={key} className="mb-6 w-96">
                                    <label htmlFor={key} className="block mb-2 text-sm font-medium">
                                        {textInputs[key]}
                                    </label>
                                    <input
                                        type="text"
                                        id={key}
                                        placeholder={textInputs[key]}
                                        name={key}
                                        value={value}
                                        onChange={handleInputChange}
                                        className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    />
                                </div>
                            )
                        }
                    })}
                    <div className="mb-6 w-96">
                        <label className="block mb-2 text-sm font-medium">
                            Outils utilisé(s) (liste)
                        </label>
                        <AddListInput onListUpdate={handleListUpdate}/>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-56 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Valider !
                </button>
            </form>
        </div>
    );
};

export default AddProject;
