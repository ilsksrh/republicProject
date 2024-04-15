import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TokenService from '../services/token.service';
import AuthService from '../services/auth.service';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const [type, setType] = useState('post');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const userId = AuthService.getCurrentUser()?.id; // Retrieve the current user's ID

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newPost = {
            title,
            userId,
            photo,
            description,
            status,
            type
        };

        try {
            const token = TokenService.getLocalAccessToken(); // Retrieve access token
            await axios.post('http://localhost:8080/api/posts', newPost, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            setTitle('');
            setPhoto('');
            setDescription('');
            setStatus('pending');
            setType('post');
            setError(null);
            console.log('Post created successfully');
            navigate("/blog");
        } catch (error) {
            setError(error.message);
            console.error('Error creating post:', error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div>
                    <h2 className="text-center mb-4" style={{fontWeight: 'bold', fontSize: '24px'}}>Create New Post</h2>

            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="photo" className="form-label">Photo URL</label>
                    <input type="url" className="form-control" id="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select className="form-select" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type</label>
                    <select className="form-select" id="type" value={type} onChange={(e) => setType(e.target.value)} required>
                        <option value="post">Post</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="news">News</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Create Post</button>
            </form>
        </div>
        </div>
        </div>
        </div>
    );
};

export default CreatePost;
