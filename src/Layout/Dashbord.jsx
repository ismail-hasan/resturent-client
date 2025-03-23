import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


const Dashbord = () => {

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/5 bg-yellow-800 text-white h-screen p-5">
                <h1 className="text-2xl font-bold mb-8">BISTRO BOSS RESTAURANT</h1>
                <nav>
                    <ul className="space-y-4">
                        <li>User Home</li>
                        <li>Reservation</li>
                        <li>Payment History</li>
                        <li><NavLink to={"/dashbord/cart"}>My Cart</NavLink></li>
                        <li>My Booking</li>
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
