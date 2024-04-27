import React from 'react';
import './index.css'; 
import animalsImage from '../images/animals.png';
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <div className=" max-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className=" mb-2 text-center text-3xl text-black">Login</h2>
          <img src={animalsImage} alt="Animals" />
        </div>
        <div>
        <h2 className=" text-2xl text-black mb-4">Email</h2>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div >
            <h2 className=" text-2xl text-black mb-4">Password</h2>
              <label htmlFor="email-address" className="sr-only">Password</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" />
              <h2 className='text-sm text-end mt-2 text-green-800'>Forgot password?</h2>
            </div>

            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer" />
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              <span class="ms-3 text-sm font-medium text-black dark:text-gray-300">Remember me</span>
            </label>
            <div className='flex justify-between items-center'>
              <button className='bg-indira text-white text-sm'>
                Login
              </button>
              {/* <button className=" bg-white text-black border-solid border-green-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
                Register
              </button> */}
              <p className=''>Don't have an account?<Link to="/registration" className='text-green-600'> Register</Link></p>
            </div>
        
      </div>
    </div>
  );
}
