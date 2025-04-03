import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Dashbord = () => {

    const isAdmin = true

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/5 bg-yellow-800 text-white h-screen p-5">
                <h1 className="text-2xl font-bold mb-8">BISTRO BOSS RESTAURANT</h1>
                <nav>
                    <ul className="space-y-4">
                        {
                            isAdmin ?
                                <>
                                    <li>Admin Home</li>
                                    <li>Add Items</li>
                                    <li>Mange Items</li>
                                    <li>Mange Booking</li>
                                    <li><NavLink to={'/dashbord/users'}>All Users</NavLink></li>
                                </>
                                :
                                <>
                                    <li><NavLink to={"/dashbord/cart"}>User Home</NavLink></li>
                                    <li><NavLink to={"/dashbord/cart"}>Reservation</NavLink></li>
                                    <li><NavLink to={"/dashbord/cart"}>Payment History</NavLink></li>
                                    <li><NavLink to={"/dashbord/cart"}>My Cart</NavLink></li>
                                    <li><NavLink to={"/dashbord/cart"}>Add Revire</NavLink></li>
                                    <li><NavLink to={"/dashbord/cart"}>My Booking</NavLink></li>

                                </>
                        }


                        <div className="divider divider-success"></div>

                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li>Menu</li>
                        <li>Shop</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>

            {/* Content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;
