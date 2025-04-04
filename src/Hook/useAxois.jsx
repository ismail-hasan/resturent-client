import axios from "axios";

const axiosSequire = axios.create({
    baseURL: "http://localhost:5000/"
})
const useAxois = () => {
    axiosSequire.interceptors.request.use(function (config) {
        const token = localStorage.getItem('authToken')
        config.headers.authorization = `bearerr ${token}`
        return config
    }, function (error) {
        return Promise.reject(error);
    })



    axiosSequire.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        const starus = error.response.status
        console.log('interseptor error', starus)
        return Promise.reject(error);
    });




    return axiosSequire




};

export default useAxois;