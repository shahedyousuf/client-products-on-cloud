import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const addProduct = () => {
        navigate(`/addProduct`)
    }
    const manageProduct = () => {
        navigate(`/manageProduct`)
    }

    return (
        <div>
            <h2 className='text-accent ml-10 p-2 mb-2 text-2xl font-bold'>Dashboard</h2>
            <button onClick={addProduct} className='btn btn-accent ml-10'>Add a product</button>
            <button onClick={manageProduct} className='btn btn-accent ml-10'>Manage product</button>
        </div>
    );
};

export default Dashboard;