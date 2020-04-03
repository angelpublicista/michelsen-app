import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost/api_rest_michelsen/public/api/'
})

export default http;