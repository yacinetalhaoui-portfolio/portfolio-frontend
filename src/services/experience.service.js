import Axios from "./api.service.js";

const getEducationExperiences = async () => {
    return Axios.get("/education");
}

const getProfessionalExperiences = async () => {
    return Axios.get("/experience")
}

const addEducationExperience = async (education) => {
    try {
        const response = await Axios.post('/education', education);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la requête POST :', error);
        throw error;
    }
}

const addProfessionalExperience = async (experience) => {
    try {
        const response = await Axios.post('/experience', experience);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la requête POST :', error);
        throw error;
    }
}

export const experience_service = {
    getEducationExperiences, getProfessionalExperiences, addEducationExperience, addProfessionalExperience
}