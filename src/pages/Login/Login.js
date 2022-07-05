import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';
import './Login.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    if (loading) {
        return <Loading></Loading>
    }

    let errorElement
    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate(from, { replace: true })
    }

    const handleEmail = event => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    const handleSignIn = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <h2 className='text-accent ml-10 p-2 mb-2 text-2xl font-bold'>Login</h2>
            <>
                <form onSubmit={handleSignIn} className='form-container'>
                    <input onChange={handleEmail} className='mb-2 p-2 ml-10 border border-gray-400 w-1/2' type="email" name="email" placeholder='Enter email address' required />
                    <br />
                    <input onChange={handlePassword} className='mb-2 p-2 ml-10 border border-gray-400 w-1/2' type="password" name="password" placeholder='Enter password' required />
                    <br />
                    <input className='ml-10 bg-accent p-2 rounded text-center' type='submit' value="Login" />
                </form>
                {errorElement}
                <p className='m-2 ml-10'>Don't have an account? <Link className='text-accent font-bold' to='/register'>Register here.</Link></p>

            </>
        </div>
    );
};

export default Login;