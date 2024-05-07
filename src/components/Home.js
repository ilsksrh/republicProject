import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import foto1 from '../images/MM9753_210812_01985_3x2.jpg.avif';
import foto2 from '../images/MM9753_210811_01412_3x2.jpg';
import foto3 from '../images/MM9753_210813_02355_3x2.jpg';
import foto4 from '../images/MM9753_210811_01695_3x2.jpg.avif';
import foto from '../images/MM9753_210813_02386_3x2.jpg'
import paw from '../images/paw1.png';
import info1 from '../images/edit.png';
import info2 from '../images/donate.png';
import info3 from '../images/location.png';
import info4 from '../images/pawprint.png';
import info5 from '../images/history.png';
import info6 from '../images/cpu.png';
import stat2 from '../images/multiple-users-silhouette.png';
import stat3 from '../images/volunteering.png';
import stat1 from '../images/pawprint-4.png';
import youtube from '../images/youtube.png';

import AuthService from '../services/auth.service';


const Main = () => {
  const [content, setContent] = useState('');
  const [fotoIndex, setFotoIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const fotos = [foto1, foto2, foto3, foto4];

  useEffect(() => {
    axios.get('http://localhost:8080/api/test/all')
      .then(response => {
        setContent(response.data);
      })
      .catch(error => {
        console.error('Error fetching content:', error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFotoIndex(prevIndex => (prevIndex + 1) % fotos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [fotos.length]);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <div>
      <div style={{height: "800px", display: "flex", flexDirection: "column", backgroundImage: `url(${fotos[fotoIndex]})`, backgroundSize: "cover", color: "white"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "rgb(0,0,0,0.4)"}}>
          <div><h2>Делайте мир лучше вместе с нами</h2></div>
          {!isLoggedIn && (
            <div>
              <button style={{backgroundColor: "#059666", border: "none", borderRadius: "8px", padding: "8px 12px", color: "white", margin: "20px", fontSize: "20px"}}>
                <Link to={'/register'}>Зарегистрироваться</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "500px", backgroundColor: "#F1F3F0"}}>
                <div style={{display: "flex", flexDirection: "column", width: "80%"}}>
                    <div style={{display: "flex", justifyContent: "center"}}><h3>Что можно делать на ResQ Tails?</h3></div>
                    <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
                        <div style={{width: "28%", height: "60px", padding: "8px 12px", borderRadius: "8px", border: "2px solid #059666", boxShadow: "1px 1px 1px lightblue", display: "flex", alignItems: "center", margin: "20px"}}>
                            <img src={info1} height={32} width={32}/>
                            <p style={{paddingLeft: "12px", margin: "0px"}}>Опубликовать пост о пропаже</p>
                        </div>
                        <div style={{width: "28%", height: "60px", padding: "8px 12px", borderRadius: "8px", border: "2px solid #059666", boxShadow: "1px 1px 1px lightblue", display: "flex", alignItems: "center", margin: "20px"}}>
                            <img src={info2} height={32} width={32}/>
                            <p style={{paddingLeft: "12px", margin: "0px"}}>Делать пожертвования</p>
                        </div>
                        <div style={{width: "28%", height: "60px", padding: "8px 12px", borderRadius: "8px", border: "2px solid #059666", boxShadow: "1px 1px 1px lightblue", display: "flex", alignItems: "center", margin: "20px"}}>
                            <img src={info3} height={32} width={32}/>
                            <p style={{paddingLeft: "12px", margin: "0px"}}>Наблюдать на карте животного</p>
                        </div>
                        <div style={{width: "28%", height: "60px", padding: "8px 12px", borderRadius: "8px", border: "2px solid #059666", boxShadow: "1px 1px 1px lightblue", display: "flex", alignItems: "center", margin: "20px"}}>
                            <img src={info4} height={32} width={32}/>
                            <p style={{paddingLeft: "12px", margin: "0px"}}>Приютить животного</p>
                        </div>
                        <div style={{width: "28%", height: "60px", padding: "8px 12px", borderRadius: "8px", border: "2px solid #059666", boxShadow: "1px 1px 1px lightblue", display: "flex", alignItems: "center", margin: "20px"}}>
                            <img src={info5} height={32} width={32}/>
                            <p style={{paddingLeft: "12px", margin: "0px"}}>Смотреть историю животного</p>
                        </div>
                        <div style={{width: "28%", height: "60px", padding: "8px 12px", borderRadius: "8px", border: "2px solid #059666", boxShadow: "1px 1px 1px lightblue", display: "flex", alignItems: "center", margin: "20px"}}>
                            <img src={info6} height={32} width={32}/>
                            <p style={{paddingLeft: "12px", margin: "0px"}}>Получить код чипа животного</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: "500px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", height: "200px"}}>
                        <div><h3>Как пользоваться нашим сайтом?</h3></div>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <div style={{borderRadius: "50%", backgroundColor: "#059666", height: "25px", width: "25px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", marginRight: "10px"}}>1</div>
                            <span>Пройти регистрацию</span>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <div style={{borderRadius: "50%", backgroundColor: "#059666", height: "25px", width: "25px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", marginRight: "10px"}}>2</div>
                            <span>Заполнить анкету о своем животном</span>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <div style={{borderRadius: "50%", backgroundColor: "#059666", height: "25px", width: "25px", display: "flex", justifyContent: "center", alignItems: "center", color: "white", marginRight: "10px"}}>3</div>
                            <span>Ждать одобрение модератора</span>
                        </div>
                    </div>
                    <div style={{backgroundColor: "rgba(38, 42, 43,0.8)", display: "flex", justifyContent: "center", alignItems: "center", height: "`80px", width: "360px", borderRadius: "20px"}}>
                        <img src={youtube} height={200} style={{borderRadius: '15%'}}/>
                    </div>
                </div>
            </div>

            <div style={{height: "150px", display: "flex", justifyContent: "center", alignItems: "center", background: "white"}}>
                <div style={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                
                </div>
            </div>

            <div style={{height: "600px", display: "flex", justifyContent: "center", alignItems: "center", backgroundAttachment: "fixed", backgroundImage: `url(${foto})`, backgroundSize: "cover", color: "white"}}>
                <div style={{backgroundColor: "rgba(0,0,0,0.1)", width: "100%", height: "100%"}}>
                    <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)"}}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                            <div style={{backgroundColor: "#059666", borderRadius: "50%", height: "180px", width: "180px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <img src={stat1} height={100} width={100}/>
                            </div>
                            <div style={{fontSize: "60px"}}>
                                3,609
                            </div>
                            <div style={{fontSize: "20px"}}>
                                Pets Adopted
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                            <div style={{backgroundColor: "#059666", borderRadius: "50%", height: "180px", width: "180px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <img src={stat2} height={100} width={100}/>
                            </div>
                            <div style={{fontSize: "60px"}}>
                                14,847
                            </div>
                            <div style={{fontSize: "20px"}}>
                                People are registered
                            </div>
                        </div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                            <div style={{backgroundColor: "#059666", borderRadius: "50%", height: "180px", width: "180px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <img src={stat3} height={100} width={100}/>
                            </div>
                            <div style={{fontSize: "60px"}}>
                                1,771
                            </div>
                            <div style={{fontSize: "20px"}}>
                                Volunteer Hours
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: "600px", display: "flex", justifyContent: "center"}}>
                <div class="loader">
                    <i class="fas fa-paw paw-1"><img src={paw} height={40} width={40}/></i>
                    <i class="fas fa-paw paw-2"><img src={paw} height={40} width={40}/></i>
                    <i class="fas fa-paw paw-3"><img src={paw} height={40} width={40}/></i>
                </div>
            </div>
            </div>
  );
};

export default Main;
