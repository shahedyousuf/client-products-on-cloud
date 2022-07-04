import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Details = () => {
    const { id } = useParams();

    return (
        <div>
            <h2 className='text-accent text-center text-2xl font-bold m-4'>Details of {id}</h2>
        </div>
    );
};

export default Details;