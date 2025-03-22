import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const Layout = () => {

    const loginLocation = useLocation()

    const noLoginRegister = loginLocation.pathname === "/login" || loginLocation.pathname === "/signup"

    return (
        <div>

            {noLoginRegister || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noLoginRegister || <Footer></Footer>}
        </div>
    );
};

export default Layout;