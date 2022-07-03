import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useProducts();

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
            </div>
        </div>
    );
};

export default Products;