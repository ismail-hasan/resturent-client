import React, { useEffect, useState } from 'react';
import useMenu from '../../Shared/useMenu';
import { Link, useParams } from 'react-router-dom';



const Manu = ({ categoryData, title }) => {


    // console.log("hii", categoryData)

    return (
        <div>

            <div className='grid  grid-cols-2 gap-5 my-20'>
                {
                    categoryData.map(singleMenu => (
                        <div key={singleMenu._id} className='flex gap-10 mb-5'>
                            <div>
                                <img style={{ borderRadius: " 0 200px 200px 200px" }} className='w-40' src={singleMenu.image} alt="" />
                            </div>

                            <div>
                                <h1 className='text-sm'>{singleMenu._id}</h1>
                                <h1 className='text-2xl'>{singleMenu.name}</h1>
                                <h1 className='text-base'>{singleMenu.recipe}</h1>
                            </div>

                            <div>
                                <h1 className='text-xl text-yellow-500'>${singleMenu.price}</h1>
                            </div>

                        </div>




                    ))
                }
            </div>

            <div className='max-w-fit mx-auto my-10'>
                <Link to={`/oder/${title}`}>
                    <button className="btn btn-active btn-primary">Oder Now</button>
                </Link>
            </div>
        </div >
    );
};

export default Manu;