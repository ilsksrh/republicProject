import {Link,useNavigate} from 'react-router-dom';
import cat from './images/cat.png';
import dog from './images/dog.png';
import etc from './images/etc.png';
import foto from './images/MM9753_210811_01412_3x2.jpg';
import { useEffect } from 'react';

export default function Lost() {
    const navigate = useNavigate();
    const user=JSON.parse(localStorage.getItem('user'))
        useEffect(() => {
            if (!user) {
                navigate("/about");
            }
        }, []);
    return (
        <div className='main' style={{paddingLeft: "15px"}}>
            <div style={{width: "100%"}}>
                <div style={{display: "flex", justifyContent: "center", color: "black"}}>
                    <div style={{height: "100px", width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <div style={{display: "flex" ,flexDirection: "column"}}>
                            <input type='search' style={{height: "60px", width: "360px" , borderRadius: "4px", padding: "8px 8px 8px 8px", border: "2px solid #ccc", fontSize: "12px", background: "none", fontSize: "14px"}} placeholder="Введите город" />
                        </div>
                        <div style={{display: "flex" ,flexDirection: "row"}}>
                            <button className='pet-type-button'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.5H17.5L17.25 6.0625C17.125 5.75 16.7188 5.5 16.375 5.5H13.5L13.4688 5.03125C13.4688 4.75 13.25 4.5 13 4.5C12.7188 4.5 12.5 4.75 12.5 5V10.5H9C8.40625 10.5 7.8125 10.6875 7.34375 11H6.5C5.65625 11 5 10.3438 5 9.5C5 9.25 4.75 9 4.5 9C4.21875 9 4 9.25 4 9.5C4 10.875 5.0625 11.9688 6.40625 12C6.125 12.4688 6 12.9688 6 13.5V18C6 18.8438 6.65625 19.5 7.5 19.5H8.5C9.3125 19.5 10 18.8438 10 18V15.5H13V18C13 18.8438 13.6562 19.5 14.5 19.5H15.5C16.3125 19.5 17 18.8438 17 18V11L18 11.0312C19.0938 11.0312 20 10.125 20 9.03125V7.5C20 6.96875 19.5312 6.5 19 6.5ZM16 18C16 18.2812 15.75 18.5 15.5 18.5H14.5C14.2188 18.5 14 18.2812 14 18V15C14 14.75 13.75 14.5 13.5 14.5H9.5C9.21875 14.5 9 14.75 9 15V18C9 18.2812 8.75 18.5 8.5 18.5H7.5C7.21875 18.5 7 18.2812 7 18V13.5C7 12.4062 7.875 11.5 9 11.5H12.9062L16 12.5312V18ZM19 9C19 9.5625 18.5312 10 18 10H16V11.5L13.5 10.6562V6.5H16.375L16.875 7.5H19V9ZM15.5 7C15.2188 7 15 7.25 15 7.5C15 7.78125 15.2188 8 15.5 8C15.75 8 16 7.78125 16 7.5C16 7.25 15.75 7 15.5 7Z" fill="currentColor"></path></svg>
                                <p style={{padding: "0 6px", margin: "0px"}}>Собака</p>
                            </button>
                            <button className='pet-type-button'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20 4C19.6875 4 19.4062 4.15625 19.2188 4.375L17.8438 6H17.125L15.75 4.375C15.4688 4.03125 14.9688 3.90625 14.5312 4.125C14.1875 4.28125 14 4.65625 14 5.0625V9H13.5C10.25 9 7.40625 10.8438 6 13.5312V9.5C6 8.125 4.875 7 3.5 7C3.21875 7 3 7.25 3 7.5C3 7.78125 3.21875 8 3.5 8C4.3125 8 5 8.6875 5 9.5V17.5C5 18.9062 6.09375 20 7.5 20H13.9688C14.5312 20 15 19.5312 15 18.9688C14.9688 17.9688 14.1875 17.1562 13.1875 17.0312L16 15.7812V18.5C16 19.3438 16.6562 20 17.5 20C18.3125 20 19 19.3438 19 18.5V12.1562C20.1562 11.5938 21 10.4062 21 9.03125V5C21 4.46875 20.5312 4 20 4ZM18 18.5C18 18.7812 17.75 19 17.5 19C17.2188 19 17 18.7812 17 18.5V15.0312C17 14.6875 16.625 14.4375 16.2812 14.5938L12.4688 16.2812C12.3438 15.1875 11.6875 14.2188 10.6875 13.75C10.4062 13.625 10.0625 13.7812 9.96875 14.0938C9.90625 14.3125 10.0312 14.5625 10.25 14.6562C10.9375 15 11.5 15.625 11.5 16.4062V18H13C13.5312 18 14 18.4688 14 19H7.5C6.6875 19 6 18.4062 6 17.5938C5.9375 13.4375 9.3125 10 13.5 10H14.1562C14.5938 11.4688 15.9062 12.5 17.5 12.5C17.6562 12.5 17.8125 12.5 18 12.4688V18.5ZM20 9C20 10.4062 18.875 11.5 17.5 11.5C16.0938 11.5 15 10.4062 15 9V5L16.6562 7H18.3125L20 5V9ZM16.5 8C16.2188 8 16 8.25 16 8.5C16 8.78125 16.2188 9 16.5 9C16.75 9 17 8.78125 17 8.5C17 8.25 16.75 8 16.5 8ZM18 8.5C18 8.78125 18.2188 9 18.5 9C18.75 9 19 8.78125 19 8.5C19 8.25 18.75 8 18.5 8C18.2188 8 18 8.25 18 8.5Z" fill="currentColor"></path></svg>
                                <p style={{padding: "0 6px", margin: "0px"}}>Собака</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width: "90%"}}>
                <div style={{display: "flex", flexWrap: "wrap"}}>

                    <div style={{fontSize: "14px", padding: "8px", backgroundColor: "#059666", borderRadius: "10px"}}>
                        <div style={{borderRadius: "8px"}}>
                            <div><img src={foto} width={320} height={240} style={{borderRadius: "8px"}} /></div>
                            <div style={{padding: "6px"}}>
                                <div style={{fontSize: "18px"}}>Рекс</div>
                                <div style={{padding: "10px 0"}}>информация о животном</div>
                                <div style={{display: "flex", justifyContent: "end"}}>
                                    <button style={{backgroundColor: "#059666", border: "none", margin: "6px", borderRadius: "8px", padding: "6px 8px", color: "white", fontSize: "12px"}}>
                                        <Link to={'/'}>Написать владельцу</Link>
                                    </button>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: "10px", fontSize: "12px"}}>
                                    <div>Опубликовано: 8.04.2024</div>
                                    <div>Город: Алматы</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}