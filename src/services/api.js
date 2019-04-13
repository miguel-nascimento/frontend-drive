import axios from "axios";

const api = axios.create({
    baseURL: "https://backend-curso-omnistack.herokuapp.com"
});

export default api;
