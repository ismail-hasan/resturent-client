import { useQuery } from "@tanstack/react-query";
import useAxois from "./useAxois";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useCart = () => {
    const axiosSequire = useAxois()
    const { user } = useContext(AuthContext)

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSequire.get(`carts/?email=${user?.email}`)
            return res.data
        }

    })
    return [cart, refetch]



};

export default useCart;