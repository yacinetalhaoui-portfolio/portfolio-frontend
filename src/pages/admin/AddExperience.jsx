import React, {useState} from 'react';
import {redirect} from 'react-router-dom';
import AddListInput from '../../components/AddListInput.jsx';
import DateInput from '../../components/DateInput.jsx'; // Replace this with the actual path to your DateInput component
import {experience_service} from '../../services/experience.service.js';

const AddExperience = () => {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        begin_date: '',
        end_date: '',
        city: '',
        responsabilities: [],
        image_url: '',
        secretCode: '',
    });

    const textInputs = {
        title: 'Intitulé du poste',
        company: 'Entreprise',
        city: 'Ville',
        image_url: 'URL de l\'image',
        secretCode: "Code de validation"
    };

    const handleListUpdate = (newList) => {
        setFormData({...formData, responsabilities: newList});
    };

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    const handleBeginDateChange = (date) => {
        setFormData({...formData, begin_date: date.month});
    };

    const handleEndDateChange = (date) => {
        setFormData({...formData, end_date: date.month});
    };

    const addExperience = async (event) => {
        event.preventDefault();

        await experience_service.addProfessionalExperience(formData);

        redirect('/');
    };

    return (
        <div className="h-screen text-white flex flex-col gap-16 items-center justify-center">
            <h1 className="text-3xl">Nouvelle expérience professionnelle</h1>
            <form onSubmit={addExperience} className="flex flex-col items-center">
                <div
                    className="justify-center tablet:grid-cols-1 desktop:grid desktop:grid-cols-2 big-desktop:grid big-desktop:grid-cols-3 gap-x-6">
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
                            );
                        }
                    })}
                    <div className="w-96">
                        <label className="block mb-2 text-sm font-medium">
                            Date de début
                        </label>
                        <DateInput value={formData.begin_date} onChange={handleBeginDateChange}/>
                    </div>
                    <div className="w-96">
                        <label className="block mb-2 text-sm font-medium">
                            Date de fin
                        </label>
                        <DateInput value={formData.end_date} onChange={handleEndDateChange}/>
                    </div>
                    <div className="mb-6 w-96">
                        <label className="block mb-2 text-sm font-medium">
                            Responsabilités (liste)
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

export default AddExperience;
