import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import cat from '../images/cat.png';
import dog from '../images/dog.png';
import etc from '../images/etc.png';
import location from '../images/Location-3.png';
import foto from '../images/MM9753_210811_01412_3x2.jpg';

export default function LostAbout() {
  
    return (
        <div>
            <div style={{width: "320px", height: "100%", padding: "20px", position: "fixed", top: "72px", zIndex: "0", borderRight: "1px solid #059666"}}>
                <div style={{height: "30px"}}></div>
                <div style={{display: "flex", flexDirection: "column", height: "100px", justifyContent: "space-around"}}>
                    <div style={{fontSize: "18px"}}>Фильтр</div>
                    <div style={{fontSize: "14px"}}>Локация</div>
                    <div>
                        <img src={location} height={16} style={{position: "absolute", left: "30px", top: "120px"}} />
                        <input type='search' style={{width: "100%" , borderRadius: "8px", padding: "8px 8px 8px 30px", border: "1px solid #ccc", fontSize: "12px"}} placeholder="Введите город" />
                    </div>
                </div>
                <div>
                    <div style={{padding: "10px 0"}}>Вид животного</div>
                    <div style={{display: "flex", flexWrap: "wrap"}}>
                        <div style={{padding: "4px 4px", borderRadius: "6px", border: "2px solid #059666", boxShadow: "1px 1px 1px lightblue", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", margin: "4px 6px 4px 0"}}>
                            <p style={{padding: "0 6px", margin: "0px"}}>Собака</p>
                            <img src={dog} height={16} style={{paddingRight: "6px"}} />
                        </div>
                        <div style={{padding: "4px 4px", borderRadius: "6px", border: "2px solid #059666", boxShadow: "1px 1px 1px lightblue", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", margin: "4px 6px 4px 0"}}>
                            <p style={{padding: "0 6px", margin: "0px"}}>Кот</p>
                            <img src={cat} height={16} style={{paddingRight: "6px"}} />
                        </div>
                        <div style={{padding: "4px 4px", borderRadius: "6px", border: "2px solid #059666", boxShadow: "1px 1px 1px lightblue", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "12px", margin: "4px 6px 4px 0"}}>
                            <p style={{padding: "0 6px", margin: "0px"}}>Другое</p>
                            <img src={etc} height={16} style={{paddingRight: "6px"}} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{padding: "30px 30px 30px 360px"}}>
                <div style={{display: "flex", flexWrap: "wrap"}}>

                    <div style={{fontSize: "14px", padding: "20px"}}>
                        <div style={{backgroundColor: "white", borderRadius: "8px"}}>
                            <div><img src={foto} width={320} height={240} style={{borderRadius: "8px"}} /></div>
                            <div style={{padding: "20px"}}>
                                <div style={{fontSize: "18px"}}>Рекс</div>
                                <div style={{padding: "10px 0"}}>информация о животном</div>
                                <div style={{display: "flex", justifyContent: "end"}}>
                                    <button style={{backgroundColor: "#059666", border: "none", margin: "6px", borderRadius: "8px", padding: "6px 8px", color: "white", fontSize: "12px"}}>
                                        <Link to={'/about/signup'}>Написать владельцу</Link>
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
