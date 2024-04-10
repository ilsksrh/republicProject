import React, { useState } from 'react';
import animalsImage from '../images/animals.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Registration() {
  const [regData, setRegData] = useState({
    email: '',
    username: '',
    password: '',
    role: ['user', 'user']
  });
  
  const handleChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jsonData = JSON.stringify(regData);
      const contentLength = jsonData.length.toString();
      const encodedClientIdAndSecret = btoa('your_client_id:your_client_secret'); 

      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': contentLength,
          'Authorization': `Basic ${encodedClientIdAndSecret}` 
        },
        body: jsonData
      });
  
      if (response.status === 200) {
        console.log('ok');
      } else {
        console.error('fail');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="max-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className=" mb-2 text-center text-3xl text-black">Registration</h2>
          <img src={animalsImage} alt="Animals" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h2 className=" text-2xl text-black mb-4">Username</h2>
            <label className="sr-only">Username</label>
            <input 
              id="username" 
              value={regData.username} 
              onChange={handleChange} 
              name="username" 
              type="text"
              autoComplete="off"
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
              placeholder="Username" 
            />
          </div>
          <div>
            <h2 className=" text-2xl text-black mb-4">Email</h2>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input 
              id="email" 
              value={regData.email} 
              onChange={handleChange}  
              name="email" 
              type="email" 
              autoComplete="off"
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
              placeholder="Email address" 
            />
          </div>
          <div>
            <h2 className=" text-2xl text-black mb-4">Password</h2>
            <label className="sr-only">Password</label>
            <input 
              id="password" 
              value={regData.password} 
              onChange={handleChange} 
              name="password" 
              autoComplete="off" 
              type="password" 
              required 
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
              placeholder="Password" 
            />
          </div>
          
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-checkbox-1" type="checkbox" value="1" name="bordered-checkbox1" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="bordered-checkbox-1" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Я пользователь</label>
          </div>
          <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input id="bordered-checkbox-2" type="checkbox" value="2" name="bordered-checkbox2" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="bordered-checkbox-2" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Я работник</label>
          </div>
         

          
          <div className='flex flex-row-reverse'>
            <button type="submit" className='bg-indira text-white text-sm'>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
