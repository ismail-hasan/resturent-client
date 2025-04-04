import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxois from '../../Hook/useAxois';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { FaUserAlt } from "react-icons/fa";

const AllUser = () => {

    const axiosSequire = useAxois()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSequire.get('users')
            return res.data
        }
    })


    const delteUser = (id) => {
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

                axiosSequire.delete(`users/${id}`)
                    .then(res => {

                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch()
                        console.log(res.data)
                    })
            }
        });
    }

    const handleAdmin = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: `admin is ${user.email}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSequire.patch(`users/admin/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        refetch()
                    })

            }
        });

    }



    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold">MANAGE ALL USERS</h2>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold mb-4">Total users: {users.length}</h3>
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-amber-600 text-white">
                            <th className="py-2 px-4">NAME</th>
                            <th className="py-2 px-4">EMAIL</th>
                            <th className="py-2 px-4">ROLE</th>
                            <th className="py-2 px-4">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="border-b">
                                <td className="py-2 px-4">{user.name}</td>
                                <td className="py-2 px-4">{user.email}</td>
                                <td className="py-2 px-4">
                                    {user?.role === 'admin' ? 'admin' : <button onClick={() => handleAdmin(user)} className="bg-amber-600 text-white p-2 rounded-full inline-block">
                                        <FaUserAlt />
                                    </button>
                                    }
                                </td>
                                <td className="py-2 px-4">


                                    {
                                        user?.role !== 'admin' && <button
                                            onClick={() => delteUser(user._id)}
                                            className="bg-red-600 text-white p-2 rounded-full"
                                        >
                                            <MdDelete />
                                        </button>
                                    }


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUser;
