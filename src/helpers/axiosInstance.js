import axios from "axios";

const axiosInstace = axios.create() // it will create an axios instance

axiosInstace.defaults.baseURL = import.meta.env.VITE_BACKEND_URL; // base url for backend

axiosInstace.defaults.withCredentials = true; //It will sent cookies with every requests

export default axiosInstace;
