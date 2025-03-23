import axios from "axios";

const axiosSequire = axios.create({
    baseURL: "http://localhost:5000/"
})
const useAxois = () => {
    return axiosSequire
};

export default useAxois;