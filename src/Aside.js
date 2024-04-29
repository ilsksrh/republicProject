import React, { useEffect } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import avatar from './images/user.png';
import lost from './images/animal-care-2.png';
import './css/aside.css';
import logo from './images/logowhite.png';
export default function Aside () {
    const navigate=useNavigate()
    const user=localStorage.getItem("user")
    useEffect(() => {
        if (!user) {
            navigate("/about");
        }
    }, []);
    const logout =()=>{
        localStorage.removeItem("user")
        navigate("/login")
    }
    return (
        <div class="aside">
            <div class="aside-container">
            <div class="aside-main">
                <img src={logo} height={60} width={120}/>
            </div>
                <div class="aside-menu">
                    {/* <div class="aside-field-group">
                        <span>
                            <Link to={"/"}>
                                <div class="center">
                                    <svg aria-label="Home" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Home</title><path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                                    <span class="pg-16">Главная</span>
                                </div>
                            </Link>
                        </span>
                    </div> */}
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/news"}>
                                <div class="center">
                                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.8 3.96a.87.87 0 0 0-.66.12l-.01.01-3.63 2.3v6.21l3.64 2.3a.88.88 0 0 0 1.1-.12.94.94 0 0 0 .27-.66V4.88a.95.95 0 0 0-.14-.51.9.9 0 0 0-.56-.4zM11 12.54V6.46H5.48c-.82 0-1.56.34-2.1.89a3.06 3.06 0 0 0-.86 2.15c0 .84.33 1.6.87 2.15a2.92 2.92 0 0 0 2.09.88H11zm.96-7.57 3.36-2.13a2.37 2.37 0 0 1 1.82-.33 2.4 2.4 0 0 1 1.5 1.07c.24.4.37.85.37 1.3v9.25c0 .66-.26 1.27-.7 1.71a2.38 2.38 0 0 1-2.99.34l-3.37-2.14h-2.3l.19 1.04a2.43 2.43 0 0 1-.42 1.85 2.52 2.52 0 0 1-3.47.6 2.46 2.46 0 0 1-1.03-1.59l-.36-2a4.44 4.44 0 0 1-2.24-1.23 4.56 4.56 0 0 1-1.3-3.2c0-1.25.5-2.38 1.3-3.2a4.42 4.42 0 0 1 3.16-1.34h6.48zM6.1 14.03l.3 1.64a.96.96 0 0 0 .4.62 1.02 1.02 0 0 0 1.4-.24.93.93 0 0 0 .16-.71l-.23-1.31H6.1z" fill="currentColor"></path></svg>
                                    <span class="pg-16">Новости</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/post"}>
                                <div class="center">
                                    <svg fill="none" height="24" viewBox="0 0 20 20" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M11.84 2H8.16c-.93 0-1.67 0-2.26.05-.62.05-1.15.15-1.63.4a4.15 4.15 0 0 0-1.82 1.82 4.26 4.26 0 0 0-.4 1.63C2 6.5 2 7.23 2 8.16v3.68c0 .93 0 1.67.05 2.26.05.62.15 1.15.4 1.63.4.78 1.04 1.42 1.82 1.82.48.25 1.01.35 1.63.4.6.05 1.33.05 2.26.05h3.68c.93 0 1.67 0 2.26-.05a4.26 4.26 0 0 0 1.63-.4 4.15 4.15 0 0 0 1.82-1.82c.25-.48.35-1.01.4-1.63.05-.6.05-1.33.05-2.26V8.16c0-.93 0-1.67-.05-2.26a4.26 4.26 0 0 0-.4-1.63 4.15 4.15 0 0 0-1.82-1.82 4.26 4.26 0 0 0-1.63-.4C13.5 2 12.77 2 11.84 2zm-6.9 1.79c.25-.12.56-.2 1.08-.25.53-.04 1.2-.04 2.17-.04h3.62c.96 0 1.64 0 2.17.04.52.05.83.13 1.07.25.5.25.9.66 1.16 1.16.12.24.2.55.25 1.07l.02.48H3.52l.02-.48c.05-.52.13-.83.25-1.07.25-.5.66-.9 1.16-1.16zM3.5 8v3.81c0 .96 0 1.64.04 2.17.05.52.13.83.25 1.07.25.5.66.9 1.16 1.16.24.12.55.2 1.07.25.53.04 1.2.04 2.17.04h3.62c.96 0 1.64 0 2.17-.04a2.8 2.8 0 0 0 1.07-.25c.5-.25.9-.66 1.16-1.16.12-.24.2-.55.25-1.07.04-.53.04-1.2.04-2.17V8z" fill="currentColor" fill-rule="evenodd"></path></svg>
                                    <span class="pg-16">Посты</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/"}>
                                <div class="center">
                                <svg aria-label="Search" class="" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Search</title><path d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
                                    <span class="pg-16">Поисковый запрос</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/lost"}>
                                <div class="center">
                                    <img src={lost} height={24} width={24}/>
                                    <span class="pg-16">Потерянные животные</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/"}>
                                <div class="center">
                                    <svg aria-label="Messenger" class="" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Messenger</title><path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="1.739"></path><path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fill-rule="evenodd"></path></svg>
                                    <span class="pg-16">Сообщения</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/create"}>
                                <div class="center">
                                    <svg aria-label="Новая публикация" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Новая публикация</title><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
                                    <span class="pg-16">Создать</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                    <div class="aside-field-group">
                        <span>
                            <Link to={"/profile"}>
                                <div class="center">
                                    <img src={avatar} class="profile_img" />
                                    <span class="pg-16">Профиль</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>
                <div class="aside-more">
                    <div class="aside-field-group">
                        <span>
                            <Link onClick={logout} type="button" >
                                <div class="center">
                                    <svg aria-label="Settings" class="" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Settings</title><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="4" y2="4"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="12" y2="12"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="3" x2="21" y1="20" y2="20"></line></svg>
                                    <span class="pg-16">Еще</span>
                                </div>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}