import Axios from "./api.service.js";

const getEducationExperiences = async () => {
    return Axios.get("/education");
}

const getProfessionalExperiences = async () => {
    return Axios.get("/experience")
}

export const experience_service = {
    getEducationExperiences, getProfessionalExperiences
}