
import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import foto1 from '../images/MM9753_210812_01985_3x2.jpg.avif';
import foto2 from '../images/MM9753_210811_01412_3x2.jpg';
import foto3 from '../images/MM9753_210813_02355_3x2.jpg';
import foto4 from '../images/MM9753_210811_01695_3x2.jpg.avif';
import foto from '../images/MM9753_210813_02386_3x2.jpg'
import paw from '../images/paw1.png';
import dog from '../images/dog-2810484_12801.png'
import info1 from '../images/edit.png';
import info2 from '../images/donate.png';
import info3 from '../images/location.png';
import info4 from '../images/pawprint.png';
import info5 from '../images/history.png';
import info6 from '../images/cpu.png';
import stat2 from '../images/multiple-users-silhouette.png';
import stat3 from '../images/volunteering.png';
import stat1 from '../images/pawprint-4.png';
import youtube from '../images/youtube-3.png';
import a from '../images/world-humanitarian-day-12.png';
import b from '../images/hourglass-2.png';
import c from '../images/operational-system.png';
import d from '../images/Frame 19.png';
import e from '../images/Cat Footprint.png';

import '../css/test.css';
import Footer from '../Footer';



export default function About() {
    const [fotoIndex, setFotoIndex] = useState(0);
    const fotos = [foto1, foto2, foto3, foto4];

    useEffect(() => {
    const interval = setInterval(() => {
        setFotoIndex(prevIndex => (prevIndex + 1) % fotos.length);
    }, 3000);

    return () => clearInterval(interval);
    }, [fotos.length]);
  
    return (
        <div>

            <div style={{height: "800px", display: "flex", flexDirection: "column", backgroundImage: `url(${fotos[fotoIndex]})`, backgroundSize: "cover", color: "white"}}>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", backgroundColor: "rgb(0,0,0,0.4)"}}>
                <div><h2>Делайте мир лучше вместе с нами</h2></div>
                <div>
                    <button style={{backgroundColor: "#059666", border: "none", borderRadius: "8px", padding: "8px 12px", color: "white", margin: "20px", fontSize: "20px"}}>
                        <Link to={'/about/signup'}>Зарегистрироваться</Link>
                    </button>
                </div>
                </div>
            </div>

            <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "400px", backgroundColor: "#F1F3F0"}}>
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

            <div style={{height: "360px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
                <div style={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
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
                        <img src={youtube} height={200} />
                    </div>
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

            <div style={{height: "560px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div style={{width: "100%", height: "100%", display: "flex", justifyContent: "space-around"}}>
                        <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "30%"}}>
                            <div style={{height: "180px", width: "180px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <img src={a} height={100} width={100}/>
                            </div>
                            <div style={{fontSize: "16px"}}>
                                Сеть приютов, охватывающая всю страну, обеспечивает доступ к безопасному убежищу и поддержке для всех, кто нуждается, гарантируя равные возможности и защиту в любой ситуации.
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "30%"}}>
                            <div style={{height: "180px", width: "180px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <img src={b} height={100} width={100}/>
                            </div>
                            <div style={{fontSize: "16px"}}>
                                Система быстрых пожертвований для поддержки животных обеспечивает легкость и оперативность в переводе средств для помощи нашим пушистым друзьям в нужное время. Всего несколько кликов, и вы можете обеспечить животным необходимую помощь и заботу в случае чрезвычайных ситуаций.
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "center", flexDirection: "column", width: "30%"}}>
                            <div style={{height: "180px", width: "180px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <img src={c} height={100} width={100}/>
                            </div>
                            <div style={{fontSize: "16px"}}>
                                Процесс приютить животное легко и быстро благодаря нашей системе. Мы обеспечиваем мгновенный доступ к информации о доступных приютах и простой процесс устройства нового члена семьи. Всего несколько шагов, и вы можете обрести верного друга и дать ему дом, который заслуживает.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: "500px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
                <div style={{width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100%", alignItems: "center"}}>
                    <div style={{height: "100%", backgroundImage: `url(${dog})`, backgroundSize: "cover", width: "44%"}}></div>
                    <div style={{display: "flex", flexDirection: "column", height: "60%", justifyContent: "space-around", width: "50%"}}>
                        <h2>Куда идут все пожертвования?</h2>
                        <div>Поддержка платформы</div>
                        <div>Помощь приютам на  покупку лекарств, наполнителей и корма</div>
                        <button style={{backgroundColor: "#059666", border: "none", borderRadius: "8px", padding: "8px 12px", color: "white", fontSize: "16px", width: "200px"}}>
                            <Link to={'/register'}>Пожертвовать</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div style={{height: "600px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{width: "90%", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <div style={{fontSize: "36px", paddingBottom: "40px"}}><p>Наша команда</p></div>
                    <div style={{width: "100%", display: 'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <div style={{width: "100%", display: "flex", justifyContent: "space-around"}}>
                            <div style={{backgroundColor: "#059666", borderRadius: "50%", height: "18vw", width: "18vw", display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                            <div style={{backgroundColor: "#059666", borderRadius: "50%", height: "18vw", width: "18vw", display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                            <div style={{backgroundColor: "#059666", borderRadius: "50%", height: "18vw", width: "18vw", display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                            <div style={{backgroundColor: "#059666", borderRadius: "50%", height: "18vw", width: "18vw", display: "flex", justifyContent: "center", alignItems: "center"}}></div>
                        </div>
                        <div style={{paddingLeft: "20px"}}><img src={d} width={80} /></div>
                    </div>
                </div>
            </div>

            

            <div style={{height: "400px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#D1E8D0"}}>
                <div style={{width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "80%", fontSize: "24px"}}>
                    <div><img src={e} height={80} /></div>
                    <div style={{padding: "30px 0", textAlign: "center"}}>С помощью одного клика, вы можете принять участие в защите животных </div>
                    <div>
                        <button style={{backgroundColor: "#059666", border: "none", borderRadius: "8px", padding: "8px 12px", fontSize: "20px", color: "white"}}>
                            <Link to={'/about/signup'}>Зарегистрироваться</Link>
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
            
            {/* <div style={{height: "600px", display: "flex", justifyContent: "center"}}>
                <div class="loader">
                    <i class="fas fa-paw paw-1"><img src={paw} height={40} width={40}/></i>
                    <i class="fas fa-paw paw-2"><img src={paw} height={40} width={40}/></i>
                    <i class="fas fa-paw paw-3"><img src={paw} height={40} width={40}/></i>
                </div>
            </div> */}

        </div>
    );
}
