import axios from "axios";

const Axios = axios.create({
    baseURL: "https://portfolio-backend-production-494b.up.railway.app/",
});

export default Axios;