import React from 'react';
import Home from './Home';
import SectionTitle from '../../Componetns/SectionTitle';
import Catagory from './Catagory';
import Manu from './Manu';
import CheckOut from './CheckOut';


const HomeLayout = () => {
    return (
        <div>
            <Home></Home>

            <SectionTitle heading="---From 11:00am to 10:00pm---" subheading={"ORDER ONLINE"} ></SectionTitle>
            <Catagory></Catagory>

            <SectionTitle heading="---Check it out---" subheading={"FROM OUR MENU"} ></SectionTitle>

            <Manu></Manu>
            <CheckOut></CheckOut>
        </div>
    );
};

export default HomeLayout;