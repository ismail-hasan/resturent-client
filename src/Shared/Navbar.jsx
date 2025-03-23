import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FiShoppingCart } from "react-icons/fi";
import useCart from '../Hook/useCart';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [cart] = useCart()
    console.log("cart", cart)

    const handleLogout = () => {
        console.log("dsf")
        logoutUser()
            .then(() => { })
            .catch(err => console.log(err))
    }


    const link =
        <>

            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/menu"}>menu</Link></li>
            <li><Link to={"/oder/salad"}>Order</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/signup"}>Sign Up</Link></li>
            <li><Link to={"/secret"}>Secret</Link></li>
            <li><Link>Dashbord</Link></li>
            <li>

                <Link to={"/dashbord/cart"} className="btn">
                    <FiShoppingCart />
                    <div className="badge badge-sm badge-secondary">{cart?.length}</div>
                </Link>
            </li>
            <li><Link>{user?.email}</Link></li>
        </>

    return (
        <div className="navbar fixed z-10  text-white shadow-sm mb-10 max-w-7xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.email ?
                        <>
                            <button onClick={handleLogout} className="btn btn-outline">Log Out</button>
                        </>
                        :
                        <>


                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;