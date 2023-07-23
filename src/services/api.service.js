import axios from "axios";

const Axios = axios.create({
    baseURL: "http://api.yacinetalhaoui.fr/",
});

export default Axios;
