import Axios from "./api.service.js"

const getProjects = async () => {
    return Axios.get("/project")
}

const addProject = async (project) => {
    try {
        const response = await Axios.post('/project', project);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la requête POST :', error);
        throw error;
    }
}

export const project_service = {
    getProjects, addProject
}