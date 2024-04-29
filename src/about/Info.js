import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../css/test.css'; // файл стилей
import info from '../images/info.png';
import Footer from '../Footer';



export default function Info() {

    const [textIndex, setTextIndex] = useState(0);
    const texts = ["Потерянных животных", "Найденных животных", "Чипированных животных", "Счастливых животных"];

    useEffect(() => {
        const interval = setInterval(() => {
        setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [texts.length]);

    const colors = ["blue", "red", "green", "orange"];
    const currentColor = colors[textIndex];
    
    return (
        <div>

            <div style={{height: "360px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
                <div style={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                    <div style={{width: "40%", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                        <div style={{fontSize: "32px", padding: "10px"}}>
                            <div style={{color: "red"}}>Любовь</div>
                            <div>начинается с заботы </div>
                            <div style={{color: "#059666"}}>о животных</div>
                        </div>
                        <div style={{padding: "10px"}}>Мы помогаем каждому хвостатому найти свое жилище. Хозяевам, найти своих потерянные питомцев.</div>
                        <div>
                            <button style={{backgroundColor: "#059666", border: "none", borderRadius: "8px", padding: "8px 12px", color: "white", margin: "10px", fontSize: "16px"}}>
                                <Link to={'/about/signup'}>Начать сейчас</Link>
                            </button>
                        </div>
                    </div>
                    <div style={{width: "30%"}}>
                        <img src={info} style={{width: "80%", height: "100%"}} />
                    </div>
                    <div style={{width: "20%", display: "flex", justifyContent: "space-beetwen", flexDirection: "column"}}>
                        <div style={{padding: "10px"}}>
                            <div style={{color: "#059666", fontSize: "28px"}}>355</div>
                            <div style={{fontSize: "18px"}}>Ждут дома</div>
                        </div>
                        <div style={{padding: "10px"}}>
                            <div style={{color: "#059666", fontSize: "28px"}}>1000</div>
                            <div style={{fontSize: "18px"}}>Нашли хозяев</div>
                        </div>
                        <div style={{padding: "10px"}}>
                            <div style={{color: "#059666", fontSize: "28px"}}>1000</div>
                            <div style={{fontSize: "18px"}}>Чипированы</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{height: "360px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F1F3F0"}}>
                <div style={{width: "80%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div style={{width: "40%"}}>
                        <p>Данные за 2015 год показывают, что на реализацию этой программы было израсходовано около 230 миллионов тенге, и к 2020 году рост превысил на 53% и составило 352млн тенге. Согласно статистике до 2020 года, количество бродячих животных, включая собак и кошек, продолжало расти, несмотря на отлов и увеличение бюджетных средств. В 2015 году оценочное количество таких животных составляло примерно 126 130, а к 2019 году увеличилось на 21%, достигнув примерно 153 113.</p>
                    </div>
                    <div style={{width: "42%"}}>
                        <div><h2>У нас можно найти информацию об</h2></div>
                        <div className="changing-text" style={{color: currentColor}}>
                            <h1>{texts[textIndex]}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    );
}
