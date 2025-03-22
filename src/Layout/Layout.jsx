import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Layout = () => {

    const loginLocation = useLocation()
    console.log(loginLocation)

    return (
        <div>

            {loginLocation.pathname === "/login" || <Navbar></Navbar>}
            <Outlet></Outlet>
            {loginLocation.pathname === "/login" || <Footer></Footer>}
        </div>
    );
};

export default Layout;