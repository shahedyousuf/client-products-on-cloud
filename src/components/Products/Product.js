import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, image, description, price } = product;

    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate(`/details/${id}`);
    }

    return (
        <div className='container'>
            <div class="card w-75 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>Price: <b className='text-primary'>${price}</b></p>
                    <div class="card-actions">
                        <button onClick={() => handleDetails(_id)} class="btn btn-accent">Details</button>
                        <button class="btn btn-accent">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;