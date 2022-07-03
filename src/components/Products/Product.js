import React from 'react';

const Product = ({ product }) => {
    const { _id, name, image, description, price } = product;

    return (
        <div className='container'>
            <div class="card w-75 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>Price: <b className='text-accent'>${price}</b></p>
                    <div class="card-actions">
                        <button class="btn btn-accent">Details</button>
                        <button class="btn btn-accent">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;