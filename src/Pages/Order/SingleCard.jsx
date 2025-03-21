import React from 'react';

const SingleCard = ({ singleCard }) => {

    console.log(singleCard)
    const { image, name, price, recipe } = singleCard
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title absolute right-5 bg-red-500 px-3 py-1 text-white top-5">${price}</h2>
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;