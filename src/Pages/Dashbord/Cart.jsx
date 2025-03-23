import React from 'react';
import { MdDelete } from "react-icons/md";
import useCart from '../../Hook/useCart';
import useAxois from '../../Hook/useAxois';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSequire = useAxois()
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

    const dleteItem = (id) => {
        console.log(id)


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSequire.delete(`carts/${id}`)
                    .then(res => {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    })
            }
        });


    }

    return (
        <div>
            <div className="w-full p-8">
                <div className="text-center mb-6">
                    <h2 className="text-3xl mb-2">---Excellent Ambience---</h2>
                    <h1 className="text-4xl font-bold">MY BOOKINGS</h1>
                </div>

                {/* Booking Table */}
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Item</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, idx) => <tr>
                                    <th>
                                        {idx + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>

                                    <td>${item.price}</td>
                                    <th>
                                        <button onClick={() => dleteItem(item._id)} className="btn "><MdDelete /></button>
                                    </th>
                                </tr>)
                            }




                        </tbody>


                    </table>
                    <div className="flex justify-between items-center mt-5">
                        <div>
                            <span className="text-xl">Total Bookings: {cart.length} </span>
                        </div>
                        <div>
                            <span className="text-xl">Total Price: $ {totalPrice}</span>
                        </div>
                        <button className="bg-yellow-700 text-white px-4 py-2 rounded">Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;