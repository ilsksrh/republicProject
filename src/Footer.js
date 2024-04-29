import logo from './images/logo 1-2.png';
import fon from './images/image 44.png';
import email from './images/image 45.png';

export default function Footer() {
    return (
        <div style={{height: "200px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
            <div style={{width: "96%", display: "flex", flexDirection: "row", height: "80%", fontSize: "18px"}}>
                <div style={{width: "20%"}}><img src={logo} height={80} width={160} /></div>
                <div style={{width: "40%", display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
                    <div>Сотрудничество</div>
                    <div>Пожертвование</div>
                    <div>Объявление</div>
                    <div>Приюты</div>
                </div>
                <div style={{width: "40%"}}>
                    <div style={{fontSize: "24px"}}>Контакты</div>
                    <div style={{paddingTop: "20px", fontSize: "16px"}}>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img src={fon} width={16} height={16} />
                            <span style={{paddingLeft: "6px"}}>+7 700 555 5391</span>
                        </div>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <img src={email} width={20} height={14} />
                            <span style={{paddingLeft: "6px"}}>resq.tail@kz</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}