import React from 'react';
import SingleCard from './SingleCard';

const TabItm = ({ item }) => {

    return <div className='grid grid-cols-4 gap-5'>
        {
            item.map(singleCard => <SingleCard
                key={singleCard._id}
                singleCard={singleCard}
            ></SingleCard>)
        }
    </div>



};

export default TabItm;