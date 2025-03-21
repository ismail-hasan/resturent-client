import React, { useEffect, useState } from 'react';



const Manu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const pupularMenu = data.filter(p => p.category === "popular")
                console.log(pupularMenu)
                setMenu(pupularMenu)
            })
    }, [])


    return (
        <div className='grid  grid-cols-2 gap-5 my-20'>
            {
                menu.map(singleMenu => (
                    <div key={singleMenu._id} className='flex gap-10 mb-5'>
                        <div>
                            <img style={{ borderRadius: " 0 200px 200px 200px" }} className='w-40' src={singleMenu.image} alt="" />
                        </div>

                        <div>
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
    );
};

export default Manu;