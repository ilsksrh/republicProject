import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import authHeader from '../services/auth-header';

const EditPost = () => {
    const { postId } = useParams();
    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPost();
        fetchCategories();
    }, []);

    const fetchPost = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/posts/${postId}`, {
                headers: authHeader()
            });
            const postData = response.data;
            setTitle(postData.title);
            setPhoto(postData.photo);
            setDescription(postData.description);
            setCategoryId(postData.categoryId);
        } catch (error) {
            console.error('Error fetching post:', error.message);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/categories', {
                headers: authHeader()
            });
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = JSON.parse(localStorage.getItem('user')).id;

        const updatedPost = {
            title,
            photo,
            description,
            userId,
            categoryId
        };

        try {
            await axios.put(`http://localhost:8080/api/posts/${postId}`, updatedPost, {
                headers: authHeader()
            });
            setError(null);
            console.log('Post updated successfully');
            navigate("/user");
        } catch (error) {
            setError('Error updating post. Please try again.');
            console.error('Error updating post:', error);
        }
    };

    const handleCategoryChange = (e) => {
        setCategoryId(e.target.value);
        console.log("category is changed");
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div>
                        <h2 className="text-center mb-4" style={{fontWeight: 'bold', fontSize: '24px'}}>Edit Post</h2>
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
                                <label htmlFor="category" className="form-label">Category</label>
                                <select className="form-select" id="category" value={categoryId} onChange={handleCategoryChange} required>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Update Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPost;
