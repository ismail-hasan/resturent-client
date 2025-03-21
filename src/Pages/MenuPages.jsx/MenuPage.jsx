import React from 'react';
import Cover from '../../Shared/Cover';
import Img from "../../assets/menu/banner3.jpg"
import SectionTitle from '../../Componetns/SectionTitle';
import useMenu from '../../Shared/useMenu';
import Manu from '../HomePage/Manu';


import dessertmg from "../../assets/menu/dessert-bg.jpeg"
import pizzartmg from "../../assets/menu/pizza-bg.jpg"
import saladtmg from "../../assets/menu/salad-bg.jpg"
import SoupsImg from "../../assets/menu/soup-bg.jpg"

const MenuPage = () => {

    const [menu] = useMenu()
    const offered = menu.filter(p => p.category === "offered")
    const dessert = menu.filter(p => p.category === "dessert")
    const pizza = menu.filter(p => p.category === "pizza")
    const salad = menu.filter(p => p.category === "salad")
    const soup = menu.filter(p => p.category === "soup")


    return (
        <div>
            {/* <h5>kaomn asen sobai</h5> */}
            <Cover details={"lorem is the best title for ever lorem is the best title for ever"} title={"OUR MENU"} coverImg={Img}></Cover>


            {/* {offered} */}
            <SectionTitle subheading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
            <Manu categoryData={offered}></Manu>



            {/* {dessert} */}
            <Cover details={"lorem is the best title for ever lorem is the best title for ever"} title={"Desserts"} coverImg={dessertmg}></Cover>
            <Manu categoryData={dessert}></Manu>

            {/* {Pixxa} */}
            <Cover details={"lorem is the best title for ever lorem is the best title for ever"} title={"Pizza"} coverImg={pizzartmg}></Cover>
            <Manu categoryData={pizza}></Manu>


            {/* {Salaad} */}
            <Cover details={"lorem is the best title for ever lorem is the best title for ever"} title={"Salaad"} coverImg={saladtmg}></Cover>
            <Manu categoryData={salad}></Manu>


            {/* {Soups} */}
            <Cover details={"lorem is the best title for ever lorem is the best title for ever"} title={"Salaad"} coverImg={SoupsImg}></Cover>
            <Manu categoryData={soup}></Manu>

        </div>
    );
};

export default MenuPage;