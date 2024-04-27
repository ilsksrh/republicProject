import React from 'react';

import { useState, useEffect } from 'react';
import { saveAnimal, getAllCategories } from './api';
import './index.css'; 

import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {useNavigate} from 'react-router-dom'

export default function CreateForm() {

    const navigate = useNavigate();
    const [animal, setAnimal] = useState({
        name: '',
        city: '',
        price: 0,
        categoryId: '',
        // image: null
    });
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        };
        fetchData();
    }, []);

    

    const handleName = (ev) => { setAnimal({ ...animal, name: ev.target.value }) };
    const handleCity = (ev) => { setAnimal({ ...animal, city: ev.target.value }) };
    const handlePrice = (ev) => { setAnimal({ ...animal, price: parseInt(ev.target.value) }) };
    const handleCategory = (ev) => { setAnimal({ ...animal, categoryId: ev.target.value }) }; 
    // const handleImageUpload = (ev) => {setAnimal({ ...animal, image: ev.target.files[0] })};
    

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const savedAnimal = await saveAnimal(animal);
        navigate("/animals", {state: { message: savedAnimal.name + " saved ", title: "Saved animal" }})
    };    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="max-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
             <div className="max-w-md w-full space-y-8">
                <div>
                <h2 className=" text-2xl text-black mb-2">Name</h2>               
                  <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Name" value={animal.name} onChange={handleName} />
                </div>
                <div>
                <h2 className=" text-2xl text-black mb-2">City</h2>               
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="City" type="text" value={animal.city} onChange={handleCity} />
                 </div>
                <div>
                <h2 className=" text-2xl text-black mb-2">Price</h2>               
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Price" type="number" value={animal.price} onChange={handlePrice} /> <br />
                </div>
                <div>
                <h2 className=" text-2xl text-black mb-2">Category</h2>
                <select value={animal.categoryId} onChange={handleCategory} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm">
                 <option value="">Select Category</option>
                     {categories.map(category => (
                         <option key={category.id} value={category.id}>{category.name}</option>
                         ))}
                 </select>
                 
                </div>
                {/* <div>
                    <h2 className="text-2xl text-black mb-2">Image</h2>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                </div> */}
                <button className='bg-indira text-white font-semibold py-2 px-4 rounded-lg' type="submit">
                    Save
                </button>
                </div>
                </div>

            </form>
        </div>
    );
}
