
import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import fon from '../images/phone-call-2.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import email from '../images/email.png';
import clock from '../images/clock.png';
import logo from '../images/logowhite.png';

import '../css/test.css';



export default function About() {
  
    return (
        <div>
        <div style={{backgroundColor: "rgb(38, 42, 43)", color: "white", width: "100%", height: "40px", fontSize: "14px", display: "flex", justifyContent: "center"}}>
            <div style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between" , alignItems: "center"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <div style={{paddingRight: "16px", display: "flex", alignItems: "center"}}>
                        <a><img src={instagram} height={16} /></a>
                    </div>
                    <div style={{paddingRight: "16px", display: "flex", alignItems: "center"}}>
                        <a><img src={whatsapp} height={16} /></a>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                    <div style={{paddingLeft: "36px"}}>
                        <img src={fon} width={14} height={14} />
                        <span style={{paddingLeft: "8px"}}>+7 747 886 7173</span>
                    </div>
                    <div style={{paddingLeft: "36px"}}>
                        <img src={email} width={14} height={14} />
                        <span style={{paddingLeft: "8px"}}>aephrodita@gmail.com</span>
                    </div>
                    <div style={{paddingLeft: "36px"}}>
                        <img src={clock} width={14} height={14} />
                        <span style={{paddingLeft: "8px"}}>Daily: 12:00pm - 7:00pm</span>
                    </div>
                </div>
            </div>
        </div>

        <div style={{position: "sticky", top: "0", backgroundColor: "#059666", display: "flex", zIndex: "1", justifyContent: "center", color: "white"}}>
            <div style={{display: "flex", width: "96%", justifyContent: "space-between"}}>
                <div style={{padding: "6px"}}><img src={logo} height={60}/></div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                    <Link to={'/about/'}><div style={{padding: "20px"}}>Главная</div></Link>
                    <Link to={'/about/info'}><div style={{padding: "20px"}}>Информация про животных</div></Link>
                    <Link to={'/about/lost'}><div style={{padding: "20px"}}>Потерянные животные</div></Link>
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                    <div style={{padding: "20px"}}>RU</div>
                    <div style={{padding: "20px"}}><Link to={'/login'}>Войти</Link></div>
                </div>
            </div>
        </div>

        <Outlet />

    </div>
    );
}
