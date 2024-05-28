import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import authHeader from '../services/auth-header';
import AuthService from "../services/auth.service";
import '../css/blog.css'; 

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const [userId, setUserId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const currentUser = AuthService.getCurrentUser();
    const isModerator = currentUser &&  currentUser.roles && currentUser.roles.includes('ROLE_MODERATOR');

    useEffect(() => {
        fetchPosts();
        fetchCategories();
    }, [selectedCategoryId, userId, searchTerm]);

    const fetchPosts = async () => {
        try {
            let url = 'http://localhost:8080/api/posts';
            if (selectedCategoryId) {
                url += `?categoryId=${selectedCategoryId}`;
            } else if (userId) {
                url += `?userId=${userId}`;
            } else if (searchTerm) {
                url += `?keyword=${searchTerm}`;
                console.log("sent");
            }
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    ...authHeader()
                }
            });
            if (response.ok) {
                const data = await response.json();
                const filteredPosts = data.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
                setPosts(filteredPosts);
            } else {
                console.error('Failed to fetch posts:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching posts:', error.message);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/categories', {
                headers: authHeader()
            });
            if (response.ok) {
                const data = await response.json();
                setCategories(data);
            } else {
                console.error('Failed to fetch categories:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching categories:', error.message);
        }
    };

    const createCategory = async (categoryData) => {
        try {
            const response = await fetch('http://localhost:8080/api/categories', {
                method: 'POST',
                headers: {
                    ...authHeader(),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(categoryData),
            });
            if (response.ok) {
                fetchCategories();
            } else {
                console.error('Failed to create category:', response.statusText);
            }
        } catch (error) {
            console.error('Error creating category:', error.message);
        }
    };

    const deleteCategory = async (categoryId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/categories/${categoryId}`, {
                method: 'DELETE',
                headers: authHeader()
            });
            if (response.ok) {
                fetchCategories();
            } else {
                console.error('Failed to delete category:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting category:', error.message);
        }
    };

    const handleShowMyPosts = (userId) => {
        setUserId(userId);
        setSelectedCategoryId(null);
        setSearchTerm('');
    };

    const handleShowCategoryPosts = (categoryId) => {
        setSelectedCategoryId(categoryId);
        setUserId(null);
        setSearchTerm('');
    };

    const handleSearch = (searchValue) => {
        setSelectedCategoryId(null);
        setUserId(null);
        setSearchTerm(searchValue); // Update the searchTerm state with the searchValue
        fetchPosts(searchValue);
    };

    return (
        <div>
            {/* <!-- Page content--> */}
            <div className="container">
                <div className="row">
                    {/* <!-- Blog entries--> */}
                    <div className="col-lg-8">
                        {/* <!-- Nested row for non-featured blog posts--> */}
                        <div className="row">
                            {posts.length === 0 ? (
                                <div className="col-lg-12">
                                    <p>No posts yet</p>
                                </div>
                            ) : (
                                posts.map(post => (
                                    <div className="col-lg-6" key={post.id}>
                                        {/* Blog post */}
                                        <div className="card mb-4">
                                            <img className="card-img-top" src={post.photo} alt="Post" />
                                            <div className="card-body">
                                                <div className="small text-muted">{post.createdAt}</div>
                                                <h2 className="card-title h4">{post.title}</h2>
                                                <p className="card-text">{post.description}</p>
                                                <Link to={`/posts/${post.id}`} className="btn btn-primary">Read more →</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    {/* <!-- Side widgets--> */}
                    <div className="col-lg-4">
                        {/* <!-- Search widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Search</div>
                            <div className="card-body">
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    const formData = new FormData(e.target);
                                    const searchValue = formData.get('searchTerm');
                                    handleSearch(searchValue);
                                }}>
                                    <div className="input-group">
                                        <input 
                                            className="form-control" 
                                            type="text" 
                                            name="searchTerm" // Add name attribute to the input field
                                            placeholder="Enter search term..." 
                                            aria-label="Enter search term..." 
                                            aria-describedby="button-search" 
                                        />
                                        <button 
                                            className="btn btn-primary" 
                                            id="button-search" 
                                            type="submit" // Change the type to submit
                                        >
                                            Go!
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- Categories widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Categories</div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <ul className="list-unstyled mb-0">
                                            {categories.map(category => (
                                                <li key={category.id}>
                                                    <span>{category.name}</span>
                                                    <button 
                                                        onClick={() => handleShowCategoryPosts(category.id)} 
                                                        className="btn btn-primary btn-sm ml-2"
                                                    >
                                                        Show
                                                    </button>
                                                    {isModerator && (
                                                        <button 
                                                            onClick={() => deleteCategory(category.id)} 
                                                            className="btn btn-danger btn-sm ml-2"
                                                        >
                                                            Delete
                                                        </button>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {/* Add new category */}
                                    {isModerator && (
                                        <div className="col-sm-6">
                                            <form onSubmit={(e) => {
                                                e.preventDefault();
                                                const formData = new FormData(e.target);
                                                const name = formData.get('name');
                                                createCategory({ name });
                                            }}>
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" placeholder="New category name" required />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Create</button>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* Show my posts button */}
                        <button onClick={() => handleShowMyPosts(currentUser.id)} className="btn btn-primary">Show My Posts</button>
                        <button onClick={() => {
                            setSelectedCategoryId(null);
                            setUserId(null);
                            setSearchTerm('');
                        }} className="btn btn-primary">Show All Posts</button>
                        {/* <!-- Side widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Side Widget</div>
                            <Link to={`/post/create`} className="btn btn-primary">Create Post</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pagination */}
            <nav aria-label="Pagination">
                <hr className="my-0" />
                <ul className="pagination justify-content-center my-4">
                    <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Newer</a></li>
                    <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
                    <li className="page-item"><a className="page-link" href="#!">2</a></li>
                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                    <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                    <li className="page-item"><a className="page-link" href="#!">15</a></li>
                    <li className="page-item"><a className="page-link" href="#!">Older</a></li>
                </ul>
            </nav>
        </div>
    );
}
