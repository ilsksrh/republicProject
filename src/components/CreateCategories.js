import React from 'react';

import { useState } from 'react';
import { createCat } from './api';
import './index.css'; 

import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {useNavigate} from 'react-router-dom'

export default function CreateCategories() {

    const navigate = useNavigate();


    const [cat, setCat] = useState({
        name: '',
    });

    const handleName = (ev) => { setCat({ ...cat, name: ev.target.value }) };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const savedCat = await createCat(cat);
        navigate("/goods", {state: { message: savedCat.name + " saved ", title: "Saved cat" }})
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="max-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
             <div className="max-w-md w-full space-y-8">
                <div>
                <h2 className=" text-2xl text-black mb-4">Name</h2>               
                  <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Name" value={cat.name} onChange={handleName} />
                </div>
                
                <button className='bg-indira text-white font-semibold py-2 px-4 rounded-lg' type="submit">
                    Save
                </button>
                </div>
                </div>

            </form>
        </div>
    );
}
