import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../../components/Loading/Loading';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(`/dashboard`);
    }

    let errorElement
    if (error) {
        errorElement = <div>
            <p className='text-red-500 ml-10'>Error: {error.message}</p>
        </div>
    }

    const handleName = event => {
        event.preventDefault()
        setName(event.target.value)
    }

    const handleEmail = event => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    const handleRegister = event => {
        event.preventDefault()
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password);
        }
        else if (password !== confirmPassword) {
            setErrors('Passwords do not match')
        }
        else {
            setErrors('Provide valid email')
        }
    }

    return (
        <div>
            <h2 className='text-accent text-center p-2 mb-2 text-2xl font-bold'>Register user</h2>
            <>
                <form onSubmit={handleRegister}>
                    <input onChange={handleName} className='mb-2 p-2 ml-10 border border-gray-400 w-3/4' type="text" name="name" placeholder='Enter your name' required />
                    <br />
                    <input onChange={handleEmail} className='mb-2 p-2 ml-10 border border-gray-400 w-3/4' type="email" name="email" placeholder='Enter email address' required />
                    <br />
                    <input onChange={handlePassword} className='mb-2 p-2 ml-10 border border-gray-400 w-3/4' type="password" name="password" placeholder='Enter password' required />
                    <br />
                    <input onChange={handleConfirmPassword} className='mb-2 p-2 ml-10 border border-gray-400 w-3/4' type="password" name="password" placeholder='Repeat password' required />
                    <br />
                    <input className='ml-10 bg-accent p-2 rounded text-center' type='submit' value="Register" />
                </form>
                {errorElement}
                <p className='text-red-500 ml-10'>{errors}</p>
                <p className='m-2 ml-10'>Already have an account? <Link className='text-accent font-bold' to='/login'>Login here.</Link></p>
            </>
        </div >
    );
};

export default Register;