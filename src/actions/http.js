import axios from 'axios';

const http = axios.create({
    baseURL: 'https://univercity.com.co/demo/michelsen/api_rest_michelsen/public/api/'
})

export default http;