import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import loginImage from '/login-image.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { register, handleSubmit } = useForm();

    const { logIn } = useContext(AuthContext);

    const onSubmit = (data) => {
        console.log(data);

        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })

    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block md:mt-28'>
                <img className='w-full h-96 object-cover' src={loginImage} alt="" />
            </div>

            <div className=' flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-gray-300 p-8 px-8' onSubmit={handleSubmit(onSubmit)}>
                    <h2 className='text-4xl text-gray-800 font-bold text-center'>Log In</h2>
                    <div className='flex flex-col black py-2'>
                        <label>Email</label>
                        <input
                            className='rounded-lg text-black bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="email"
                            {...register('email')}
                        />
                    </div>
                    <div className='flex flex-col text-gray-800 py-2'>
                        <label>Password</label>
                        <input
                            className='rounded-lg text-black bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
                            type="password"
                            {...register('password')}
                        />
                    </div>

                    <button className='w-full my-5 py-2 bg-primary shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/40 text-white font-semibold rounded-lg'>Log In</button>
                    <p className='text-gray-800 text-center'>Don't have an account? Please
                        <Link to="/register" className='text-primary'> Register</Link> </p>
                </form>

            </div>
        </div>
    );
};

export default Login;
