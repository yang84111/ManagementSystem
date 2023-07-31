import axios from "axios";

const http = axios.create({
    // 通全请求地址前缀
    baseURL: '/api',
    timeout: 10000,  // 超时时间
    // headers:{'X-Custom-Header': 'foobar'}
})

http.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})

export default http