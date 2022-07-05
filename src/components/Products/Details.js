import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { name, image, description, price } = product;

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const navigate = useNavigate();
    const handleCart = () => {
        navigate('/login')
    }

    return (
        <div>
            <h2 className='text-center text-2xl font-bold m-4'>Details of <span className='text-accent'>{name}</span></h2>
            <div className=''>
                <div class="card ml-20 w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img src={image} alt="products" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}!</h2>
                        <p>{description}</p>
                        <p>Price: <span className='text-primary'>${price}</span> </p>
                        <div class="card-actions justify-end">
                            <button onClick={handleCart} class="btn btn-accent">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;