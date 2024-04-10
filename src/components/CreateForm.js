import React from 'react';

import { useState, useEffect } from 'react';
import { saveGood, getAllCategories } from './api';
import './index.css'; 

import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {useNavigate} from 'react-router-dom'

export default function CreateForm() {

    const navigate = useNavigate();


    const [good, setGood] = useState({
        name: '',
        city: '',
        price: 0,
        categoryId: '',
        image: null
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        };
        fetchData();
    }, []);

    const handleName = (ev) => { setGood({ ...good, name: ev.target.value }) };
    const handleCity = (ev) => { setGood({ ...good, city: ev.target.value }) };
    const handlePrice = (ev) => { setGood({ ...good, price: parseInt(ev.target.value) }) };
    const handleCategory = (ev) => { setGood({ ...good, categoryId: ev.target.value }) }; 
    const handleImageUpload = (ev) => {setGood({ ...good, image: ev.target.files[0] });
    };

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const savedGood = await saveGood(good);
        navigate("/goods", {state: { message: savedGood.name + " saved ", title: "Saved good" }})
    };    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="max-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
             <div className="max-w-md w-full space-y-8">
                <div>
                <h2 className=" text-2xl text-black mb-4">Name</h2>               
                  <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Name" value={good.name} onChange={handleName} />
                </div>
                <div>
                <h2 className=" text-2xl text-black mb-4">City</h2>               
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="City" type="text" value={good.city} onChange={handleCity} />
                 </div>
                <div>

                <h2 className=" text-2xl text-black mb-4">Price</h2>               
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Price" type="number" value={good.price} onChange={handlePrice} /> <br />
                </div>
                <div>
                <h2 className=" text-2xl text-black mb-4">Category</h2>
                <select value={good.categoryId} onChange={handleCategory} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm">
                 <option value="">Select Category</option>
                     {categories.map(category => (
                         <option key={category.id} value={category.id}>{category.name}</option>
                         ))}
                 </select>
                 
                </div>
                <div>
                    <h2 className="text-2xl text-black mb-4">Image</h2>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
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
