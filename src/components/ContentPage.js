import React from 'react';
import cat1Image from '../images/cat1.png';
import cat2Image from '../images/cat2.png';
import cat3Image from '../images/cat3.png';
import cat4Image from '../images/cat4.png';
import { Link } from 'react-router-dom';

export default function ContentPage() {
  const cardsData = [
    { id: 1, image: cat1Image, text: 'Sara', buttonLabel: 'Узнать больше' },
    { id: 2, image: cat2Image, text: 'Danel', buttonLabel: 'Узнать больше' },
    { id: 3, image: cat3Image, text: 'Yasmine', buttonLabel: 'Узнать больше' },
    { id: 4, image: cat4Image, text: 'Indira', buttonLabel: 'Узнать больше' },
    { id: 1, image: cat1Image, text: 'Sara', buttonLabel: 'Узнать больше' },
    { id: 2, image: cat2Image, text: 'Danel', buttonLabel: 'Узнать больше' },
    { id: 3, image: cat3Image, text: 'Yasmine', buttonLabel: 'Узнать больше' },
    { id: 4, image: cat4Image, text: 'Indira', buttonLabel: 'Узнать больше' },
    { id: 1, image: cat1Image, text: 'Sara', buttonLabel: 'Узнать больше' },
    { id: 2, image: cat2Image, text: 'Danel', buttonLabel: 'Узнать больше' },
    { id: 3, image: cat3Image, text: 'Yasmine', buttonLabel: 'Узнать больше' },
    { id: 4, image: cat4Image, text: 'Indira', buttonLabel: 'Узнать больше' },
  ];

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-4xl mb-16'>Выбери, кого хочешь завести!</h1>
      <div className='flex'>
        <button className="bg-indira hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full mr-4">Коты</button>
        <button className="bg-indira hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full mr-4">Собаки</button>
        <button className="bg-indira hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full mr-4">Птицы</button>
        <button className="bg-indira hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full">Другое</button>
        </div>

                <div className="container mx-auto py-8">
      <div className="grid grid-cols-4 gap-8">
        {cardsData.map((card) => (
          <div key={card.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <img src={card.image} alt={`Image ${card.id}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.text}</h3>
              <button  className="bg-indira hover:bg-green-500 text-white font-semibold py-2 px-4 round-full" > <Link to="/card">{card.buttonLabel}</Link></button>
            </div>
          </div>
        ))}

        
      </div>
    </div>
    </div>
  );
  
};
