import React, { useState } from 'react';
import { getUserByUsername } from "./api";
import { useNavigate } from 'react-router-dom';
import icon from './images/loupe_751463.png'
import avatar from './images/user.png';

export default function Search() {
    const [username, setUsername] = useState('');
    const [notFound, setNotFound] = useState(false);
    const [userData, setUserData] = useState('');
    const navigate = useNavigate();

    const handleAdd = async (event) => {
        event.preventDefault();
        if (!username.trim()) {
            return; // If username is empty or contains only whitespace, exit early
        }
        const response = await getUserByUsername(username);
        if(response.success){
        setUserData(response.data);
        setNotFound(false)
        }else{
            setNotFound(true)
            setUserData('')
        }
    }

    const handleMessage = (event) => {
        event.preventDefault();
        navigate('/chat', { state: { userData } });
    }

    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "center", color: "black" }}>
                <div style={{ height: "100px", width: "80%", display: "flex", alignItems: "center" }}>
                    <form method="post" onSubmit={handleAdd} style={{ display: 'flex', alignItems: "center" }}>
                        <div style={{ display: "flex" }}>
                            <input
                                type='search'
                                style={{
                                    height: "60px", width: "360px", borderRadius: "4px", padding: "8px 8px 8px 8px", border: "2px solid #ccc",
                                    fontSize: "12px", background: "none", fontSize: "14px"
                                }}
                                placeholder="Введите имя"
                                name="username"
                                value={username}
                                onChange={(ex) => { setUsername(ex.target.value) }}
                            />
                        </div>
                        <div style={{ display: "flex" }}>
                            <button className='pet-type-button' type="submit">
                                    <img src={icon} width="24" height="24" viewBox="0 0 24 24" fill="currentColor"/>                                
                                <p style={{ padding: "0 6px", margin: "0px" }}>Искать</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {
    userData && (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
                <img src={userData.image ? `http://localhost:8080/image/${userData.image.name}` : avatar} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{userData.firstName + " " + userData.lastName}</span>
                <form onSubmit={handleMessage}>
                    <input type="hidden" name="recipient" value={userData} />
                    <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#018749', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Сообщение</button>
                </form>
            </div>
        </div>
    )
}
{
    notFound &&(
        <div>
            <h3>Такой пользователь не найден!</h3>
        </div>
    )
}

        </div>
    )
}
