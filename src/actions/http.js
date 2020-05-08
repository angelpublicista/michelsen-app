import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost/api-rest/public/api/'
})

export default http;