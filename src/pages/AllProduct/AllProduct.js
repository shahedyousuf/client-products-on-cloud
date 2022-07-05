import React from 'react';

const AllProduct = ({ p }) => {
    const { name, image, description, price } = p;

    return (
        <div>
            <div className='container'>
                <div class="card ml-10 w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={image} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{name}</h2>
                        <p>{description}</p>
                        <p>Price: <b className='text-primary'>${price}</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;