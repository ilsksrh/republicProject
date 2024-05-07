import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const EditProfile = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        avatar: '',
        phone: ''
    });
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUserProfile(); // Fetch user profile data when component mounts
    }, []);

    const fetchUserProfile = async () => {
        try {
            const currentUser = AuthService.getCurrentUser(); // Get current user
            setUser({
                username: currentUser.username,
                email: currentUser.email,
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                avatar: currentUser.avatar,
                phone: currentUser.phone
            });
        } catch (error) {
            console.error('Error fetching user profile:', error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put('/api/users/profile', user);
            setError(null);
            console.log('User profile updated successfully');
            navigate("/profile"); // Redirect to profile page
        } catch (error) {
            setError(error.message);
            console.error('Error updating user profile:', error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div>
                        <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '24px' }}>Edit Profile</h2>

                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="avatar" className="form-label">Avatar URL</label>
                                <input type="url" className="form-control" id="avatar" value={user.avatar} onChange={(e) => setUser({ ...user, avatar: e.target.value })} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="text" className="form-control" id="phone" value={user.phone} onChange={(e) => setUser({ ...user, phone: e.target.value })} required />
                            </div>
                            <button type="submit" className="btn btn-primary">Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
