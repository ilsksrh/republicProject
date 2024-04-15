 import { Link, Outlet, useLoaderData, useLocation, useParams} from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import { useEffect, useState } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { deleteCat, deleteAnimal, getAllAnimalsAndCat } from "./api";
import './index.css'

export default function Animals(){
    // const allAnimals = useLoaderData();
    const location = useLocation();
    const params = useParams();

    console.log(params)
    const [categories, setCategories] = useState([]);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        let url = params.catId ? 'http://localhost:4000/animals?categoryId='+params.catId : 'http://localhost:4000/animals'
        const getAllData = async () => {
        const [cats, animals] = await getAllAnimalsAndCat(url);
        setCategories(cats)
        setAnimals(animals)

    }
    getAllData()

        if(location.state)
            NotificationManager.success(location.state.message, location.state.title, 3000);
    }, [location])

    const handleClick = async (animalId, catId) => {
        const resp = await deleteAnimal(animalId)
        window.location.reload()
    }
    const handleDeleteCat = async ( catId) => {
        const resp2 = await deleteCat(catId)
        window.location.reload()
    }

    return(
        <div className='container mx-auto py-8'>
                  <h1 className='text-4xl mb-16'>Выбери, кого хочешь завести!</h1>
                  <div className="flex items-center mb-16">
                    <p className="text-lg mr-4">Хочешь добавить животное?</p>
                    <button className="bg-indira text-white font-semibold py-2 px-2 rounded-full"><Link to="/animal/add">Добавить</Link></button>
                    </div>
                    <div className="flex items-center mb-16">
                    <p className="text-lg mr-4">Твоей категории нет?</p>
                    <button className="bg-indira text-white font-semibold py-2 px-2 rounded-full"><Link to="/categories/create">Добавить</Link></button>
                    </div>


        <div>
            <NotificationContainer />
            <div className='flex'>
  {
    categories.map((cat) => {
      return (
        <div key={cat.id}>
          <Link to={'/animals/category/' + cat.id}>
            <button className="bg-indira text-white font-semibold py-2 px-2 rounded-full mr-4">{cat.name}</button>
          </Link>
          <br/>
          <button type="button" class="btn btn-danger" onClick={() => handleDeleteCat(cat.id)}>Delete</button>
        </div>
        
      )
    })
  }
</div>


            <br></br>
            {
                animals.map((animal) => {
                    return (
                        <div key = {animal.id} >
                             <h1 className="text-4xl font-semibold pb-4"> <Link to = {'/animals/'+animal.id}>
                                 {animal.name}</Link></h1>
                            <button className = "bg-indira text-white font-semibold py-2 px-4 rounded-lg mr-4"><Link to = {'/animals/'+animal.id + '/edit'}>
                                Edit</Link></button>
                            <button className = "bg-indira text-white font-semibold py-2 px-4 rounded-lg mr-4" onClick={() => handleClick(animal.id)}>Delete</button>
                            </div>
                    )
                })
            }

            <Outlet />
        </div>
        </div>
    )
}