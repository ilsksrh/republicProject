import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { updateUser,getOneUser } from './api';
import { useNavigate } from 'react-router-dom';
export default function EditProfile() {
    const navigate=useNavigate()
    const user=JSON.parse(localStorage.getItem('user'))
    const [localUser,setLocalUser]=useState({})
    useEffect(() => {
        const fetchData = async () => {
        
                if (!user) {
                    navigate("/about");
                }else{
                    setLocalUser(user)
                }

            
        }
        fetchData()
    },[])
    const [userData, setUserData] = useState({
        id: localUser.id,
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!user) {
                    navigate("/about");
                } else {
                    const response = await getOneUser(user.id);
                    setUserData(response);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle error or navigate to another page if needed
            }
        };
        fetchData()
    }, []);
    console.log(userData)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setUserData(prevState => ({
            ...prevState,
            avatarFile: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username', userData.username);
        formData.append('firstName', userData.firstName);
        formData.append('lastName', userData.lastName);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('gender', userData.gender);

        try {
            const response = await updateUser(userData.id,formData)
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    return (
        <div className='login-page-redac'>
            <div className='form'>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={userData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={userData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={userData.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={userData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={userData.password} onChange={handleChange} />
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" value={userData.gender} onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <button type="submit">Save</button>
            </form>
            </div>
        </div>
    );
}
