import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import RegisterImage from '/register-image.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const { register, handleSubmit } = useForm();
    const { registerWithPass,  updateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data); 
    if(data.password !== data.confirmPassword){
        return alert('Passwords do not match')
        // todo: use toast 
    }

    //creating a new user
    registerWithPass(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);


            // add additional information of user   
            updateUserProfile(data.name, data.photoURL)
                .then(()=> {
                    const saveUser = {name: data.name, email: data.email }
                    fetch('http://localhost:5000/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                })
        })

  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full mt-4'>
      <div className='hidden sm:block'>
        <img className='max-w-[600px] mx-auto mt-16' src={RegisterImage} alt="" />
      </div>

      <div className='bg-white flex flex-col justify-center'>
        <form className='max-w-[450px] w-full mx-auto rounded-lg bg-gray-300 p-8 px-8' onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-4xl text-gray-800 font-bold text-center'>Register</h2>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Name</label>
            <input
              className='rounded-lg text-black bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
              type="text"
              {...register('name')}
            />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Email</label>
            <input
              className='rounded-lg text-black bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
              type="text"
              {...register('email')}
            />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Photo URL</label>
            <input
              className='rounded-lg text-black bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
              type="text"
              {...register('photoURL')}
            />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Password</label>
            <input
              className='rounded-lg text-black bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
              type="text"
              {...register('password')}
            />
          </div>
          <div className='flex flex-col text-gray-800 py-2'>
            <label>Confirm Password</label>
            <input
              className='rounded-lg text-black bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 focus:outline-none'
              type="password"
              {...register('confirmPassword')}
            />
          </div>

          <button className='w-full my-5 py-2 bg-primary shadow-lg shadow-indigo-500/50 hover:shadow-indigo-400/40 text-white font-semibold rounded-lg'>Register</button>
          <p className='text-gray-800 text-center'>Already have an account? Please 
          <Link to="/login" className='text-primary'> Log In</Link> </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
