import React from 'react';
import {redirect} from "react-router-dom";

const AddProject = () => {

    const addProject = async () => {
        redirect("/admin");
    }

    return (
        <div className="h-screen text-white flex flex-col gap-16 items-center justify-center">
            <h1 className="text-3xl">Nouveau projet</h1>
            <form onSubmit={addProject} className="items-center grid grid-cols-2 gap-x-14">
                <div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            Nom du projet
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            Language(s) utilisé(s)
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            Contexte du projet
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            Taille de l'équipe
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            Objectif du projet
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                </div>
                <div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            Description de l'organisation (facultatif)
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            Description du projet
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            URL de l'image/gif
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            Lien vers le projet
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                    <div className="mb-6 w-96">
                        <label htmlFor="base-input"
                               className="block mb-2 text-sm font-medium">
                            Lien vers l'organisation (facultatif)
                        </label>
                        <input type="text" id="base-input"
                               className="bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></input>
                    </div>
                </div>
                <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Valider !
                </button>
            </form>
        </div>
    );
};

export default AddProject;