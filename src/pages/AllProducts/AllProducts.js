import React from 'react';
import Product from '../../components/Products/Product';
import useProducts from '../../hooks/useProducts';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const [products, setProducts] = useProducts();

    return (
        <div>
            <h2 className='text-accent text-center p-2 mb-2 text-2xl font-bold'>All products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                {
                    products.map(p => <AllProduct
                        key={p._id}
                        p={p}
                    ></AllProduct>)
                }
            </div>
        </div>
    );
};

export default AllProducts;