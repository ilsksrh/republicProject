 import { Link, Outlet, useLoaderData, useLocation, useParams} from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import { useEffect, useState } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { deleteCat, deleteGood, getAllGoodsAndCat } from "./api";
import './index.css'

export default function Goods(){
    // const allGoods = useLoaderData();
    const location = useLocation();
    const params = useParams();

    console.log(params)
    const [categories, setCategories] = useState([]);
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        let url = params.catId ? 'http://localhost:4000/goods?categoryId='+params.catId : 'http://localhost:4000/goods'
        const getAllData = async () => {
        const [cats, goods] = await getAllGoodsAndCat(url);
        setCategories(cats)
        setGoods(goods)

    }
    getAllData()

        if(location.state)
            NotificationManager.success(location.state.message, location.state.title, 3000);
    }, [location])

    const handleClick = async (goodId, catId) => {
        const resp = await deleteGood(goodId)
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
                    <button className="bg-indira text-white font-semibold py-2 px-2 rounded-full"><Link to="/goods/create">Добавить</Link></button>
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
                        <div key = {cat.id}>
                            <Link to = {'/goods/category/'+cat.id}>
                            <button className="bg-indira text-white font-semibold py-2 px-2 rounded-full mr-4"> {cat.name}</button>
                            </Link>
                            <button className = "bg-indira text-white font-semibold py-2 px-4 rounded-lg mr-4" onClick={() => handleDeleteCat(cat.id)}>Delete</button>

                            </div>
                    )
                })
            }
            </div>
            <br></br>
            {
                goods.map((good) => {
                    return (
                        <div key = {good.id} >
                             <h1 className="text-4xl font-semibold pb-4"> <Link to = {'/goods/'+good.id}>
                                 {good.name}</Link></h1>
                            <button className = "bg-indira text-white font-semibold py-2 px-4 rounded-lg mr-4"><Link to = {'/goods/'+good.id + '/edit'}>
                                Edit</Link></button>
                            <button className = "bg-indira text-white font-semibold py-2 px-4 rounded-lg mr-4" onClick={() => handleClick(good.id)}>Delete</button>
                            </div>
                    )
                })
            }

            <Outlet />
        </div>
        </div>
    )
}