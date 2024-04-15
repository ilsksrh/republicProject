import React, { useEffect } from 'react';

import { useState } from 'react';
import { getOneAnimal, saveAnimal, updateAnimal, getAllCategories } from './api';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {useNavigate, useParams} from 'react-router-dom'

export default function EditForm() {

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const getAnimal = async () => {
            const resp = await getOneAnimal(params.animalId);
            setAnimal(resp)
        }
      getAnimal()
    }, [])
    const [categories, setCategories] = useState([]);

    const [animal, setAnimal] = useState({
        name: '',
        city: '',
        price: 0,
        categoryId: ''
    });

    useEffect(() => {
        const fetchCategories = async () => {
            const categoriesData = await getAllCategories();
            setCategories(categoriesData);
        };
        fetchCategories();
    }, []);

    const handleName = (ev) => { setAnimal({ ...animal, name: ev.target.value }) };
    const handleCity = (ev) => { setAnimal({ ...animal, city: ev.target.value }) };
    const handlePrice = (ev) => { setAnimal({ ...animal, price: parseInt(ev.target.value) }) };
    const handleCategory = (ev) => { setAnimal({ ...animal, categoryId: ev.target.value }) }; 


    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const updatedAnimal = await updateAnimal(animal);
        navigate("/animals", {state: { message: updatedAnimal.name + " updated ", title: "Updated animal" }})
    };

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <div className="max-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
             <div className="max-w-md w-full space-y-8">
                <div>
                <h2 className=" text-2xl text-black mb-4">Name</h2>               
                  <input type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Name" value={animal.name} onChange={handleName} />
                </div>
                <div>
                <h2 className=" text-2xl text-black mb-4">City</h2>               
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="City" type="text" value={animal.city} onChange={handleCity} />
                 </div>
                <div>

                <h2 className=" text-2xl text-black mb-4">Price</h2>               
                 <input className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Price" type="number" value={animal.price} onChange={handlePrice} /> <br />
                </div>
                <div>
                <h2 className=" text-2xl text-black mb-4">Category</h2>
                <select value={animal.categoryId} onChange={handleCategory} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm">
                 <option value="">Select Category</option>
                     {categories.map(category => (
                         <option key={category.id} value={category.id}>{category.name}</option>
                         ))}
                 </select>
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
