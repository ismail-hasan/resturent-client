import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';

const SingleCard = ({ singleCard }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const { image, name, price, recipe, _id } = singleCard

    const handleAddToCart = (e) => {

        if (user && user.email) {
            // send to database cart data
            const cartInfo = {
                cartId: _id,
                email: user.email,
                name,
                price
            }

            // use fetch method 
            
            console.log("cartInfo", cartInfo)
        }
        else {
            Swal.fire({
                title: "You Are Not Log In?",
                text: "please login fast!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }


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
                    <button onClick={() => handleAddToCart(singleCard)} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;