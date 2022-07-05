import React from 'react';
import useProducts from '../../hooks/useProducts';

const ManageProduct = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div >
            <h2 className='text-accent p-2 mb-2 text-2xl font-bold'>Manage products</h2>
            <div>
                {
                    products.map(product => <div key={product._id}>
                        <h5 className='m-2'>{product.name} <button className='btn btn-sm btn-accent' onClick={() => handleDelete(product._id)}>X</button> </h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProduct;