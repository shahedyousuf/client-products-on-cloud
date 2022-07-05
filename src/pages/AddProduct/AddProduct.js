import React from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };

    return (
        <div>
            <h2 className='text-accent ml-10 p-2 mb-2 text-2xl font-bold'>Add a product</h2>
            <div className='w-50 mx-auto'>

                <div className=''>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Name' className='mb-2 ml-10 p-1 border border-gray-400' {...register("name", { required: true, maxLength: 20 })} /> <br />
                        <textarea placeholder='Description' className='ml-10 mb-2 p-1 border border-gray-400' {...register("description")} /> <br />
                        <input placeholder='Price' className='ml-10 mb-2 p-1 border border-gray-400' type="number" {...register("price")} /> <br />
                        <input placeholder='Photo URL' className='ml-10 mb-2 p-1 border border-gray-400' type="text" {...register("image")} /> <br />
                        <input className='bg-accent ml-10 p-2 rounded text-center text-white' type="submit" value="Add item" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;