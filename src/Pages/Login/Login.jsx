import React from 'react';
import { useForm } from 'react-hook-form';
import loginImage from '/login-image.png'

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={loginImage} alt="" />
      </div>

      <div className='bg-primary flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto rounded-lg bg-secondary p-8 px-8' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-4xl text-white font-bold text-center'>SIGN IN</h2>
          <div className='flex flex-col text-white py-2'>
            <label>Email</label>
            <input
              className='rounded-lg text-black bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
              type="text"
              {...register('email')}
            />
          </div>
          <div className='flex flex-col text-white py-2'>
            <label>Password</label>
            <input
              className='rounded-lg text-black bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
              type="password"
              {...register('password')}
            />
          </div>

          <button className='w-full my-5 py-2 bg-primary shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/40 text-white font-semibold rounded-lg'>SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
