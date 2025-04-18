import axios from "axios";


const useAxoisPublic = () => {
    const axiosPublic = axios.create({
        baseURL: "http://localhost:5000/"
    })
    return axiosPublic
};

export default useAxoisPublic;