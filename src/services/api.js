import axios from 'axios';

//27263432/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;