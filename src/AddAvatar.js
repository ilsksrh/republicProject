import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { addAvatar } from "./api";
import closeIcon from './images/free-icon-close-4096127.png'
export default function AddAvatar() {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);

    const handleAdd = async () => {
        const formData = new FormData();
        formData.append('file', image);

        try {
            const userId = JSON.parse(localStorage.getItem('user')).id;
            await addAvatar(userId, formData);
            navigate('/profile');
        } catch (error) {
            // Handle error
            console.error('Error adding avatar:', error);
        }
    };

    const handleFileChange = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <div className='addAvatar'>
            <div className='form' style={{ position: 'relative' }}>
            <Link to="/profile" style={{ position: 'absolute', top: '0', right: '0', width: '8%', margin: '4px 4px' }}>
                    <img src={closeIcon} alt="Close" style={{ width: '100%' }}/>
                </Link>
                <input type="file" name="file" onChange={handleFileChange} />
                <button onClick={handleAdd}>Добавить аватар</button>
            </div>
        </div>
    );
}
