import Axios from "./api.service.js"

const getProjects = async () => {
    return Axios.get("/project")
}

export const project_service = {
    getProjects
}