import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [user] = useAuthState(auth);
    const [products, setProducts] = useProducts();

    const navigate = useNavigate();
    const showAll = () => {
        navigate(`/allProducts`)
    }

    return (
        <div>
            <h2 className='text-accent text-center text-2xl font-bold m-4'>Available products</h2>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1'>
                {
                    products.slice(0, 4).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
                {
                    user &&
                    <button onClick={showAll} className='btn btn-link'>Show all products</button>
                }
            </div>
        </div>
    );
};

export default Products;