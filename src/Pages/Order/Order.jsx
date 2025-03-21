import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../Shared/Cover';
import img from "../../assets/shop/banner2.jpg"
import useMenu from '../../Shared/useMenu';
import TabItm from './TabItem';
import { useParams } from 'react-router-dom';

const Order = () => {
    const [menu] = useMenu()
    const { category } = useParams()
    const categoryData = ["salad", 'pizza', 'soups', 'dessert', 'drinks']
    const inisialData = categoryData.indexOf(category)

    console.log(category)
    const [tabIndex, setTabIndex] = useState(inisialData);

    const offered = menu.filter(p => p.category === "offered")
    const dessert = menu.filter(p => p.category === "dessert")
    const pizza = menu.filter(p => p.category === "pizza")
    const salad = menu.filter(p => p.category === "salad")
    const soup = menu.filter(p => p.category === "soup")
    const drinks = menu.filter(p => p.category === "drinks")
    return (

        <div>
            <div>
                <Cover title={"OUR SHOP"} details={"would you like the try this"} coverImg={img} ></Cover>
            </div>


            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>salad</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soups</Tab>
                    <Tab>dessert</Tab>
                    <Tab>drinks</Tab>
                </TabList>

                <TabPanel>
                    <TabItm item={salad}></TabItm>
                </TabPanel>

                <TabPanel>
                    <TabItm item={pizza}></TabItm>
                </TabPanel>

                <TabPanel>
                    <TabItm item={soup}></TabItm>
                </TabPanel>

                <TabPanel>
                    <TabItm item={dessert}></TabItm>
                </TabPanel>

                <TabPanel>
                    <TabItm item={drinks}></TabItm>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default Order;