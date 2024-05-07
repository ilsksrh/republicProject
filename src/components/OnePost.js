import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import authHeader from '../services/auth-header';
import AuthService from "../services/auth.service";

export default function OnePost() {
    const [post, setPost] = useState(null);
    const { postId } = useParams();
    const navigate = useNavigate();
    const currentUser = AuthService.getCurrentUser();
    const [isAuthorOrModerator, setIsAuthorOrModerator] = useState(false);

    useEffect(() => {
        fetchPost(postId); 
    }, [postId]);
    
    const fetchPost = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
                headers: authHeader()
            });
            if (response.ok) {
                const postData = await response.json();
                console.log(postData);
                console.log(currentUser);
                setPost(postData);
                if (currentUser && currentUser.roles && currentUser.roles.length > 0) {
                    const userRole = currentUser.roles[0];
                    if (userRole === 'ROLE_MODERATOR') {
                        setIsAuthorOrModerator(true);
                        console.log("YES");
                    }if (userRole === 'ROLE_USER' && currentUser.id == postData.user.id) {
    
                        setIsAuthorOrModerator(true);
                        console.log("YES");
                    }
                }
            } else {
                console.error('Failed to fetch post:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching post:', error.message);
        }
    };

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/posts/${postId}`, {
                method: 'DELETE',
                headers: authHeader()
            });
            if (response.ok) {
                console.log('Post deleted successfully');
                navigate('/user');
            } else {
                console.error('Failed to delete post:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting post:', error.message);
        }
    };
    
    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-8">
                    <article>
                        <header className="mb-4">
                            <h1 className="fw-bolder mb-1">{post.title}</h1>
                            <div className="text-muted fst-italic mb-2">{post.createdAt}</div>
                            <a className="badge bg-secondary text-decoration-none link-light" href="#!">Animals</a>
                            <a className="badge bg-secondary text-decoration-none link-light" href="#!">{post.type}</a>
                        </header>
                        <figure className="mb-4"><img className="img-fluid rounded" src={post.photo} alt="..." /></figure>
                        <section className="mb-5">
                            <p className="fs-5 mb-4">{post.description}</p>
                            {post && (
                                <p className="fs-5 mb-4">Author: {post.user.username}</p>
                            )}

                            {isAuthorOrModerator && (
                                <>
                                    <button className="btn btn-primary me-2">
                                        <Link to={`/posts/${post.id}/edit`}>Edit</Link>
                                    </button>
                                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                                </>
                            )}
                        </section>
                    </article>
                    <section className="mb-5">
                        <div className="card bg-light">
                            <div className="card-body">
                                <form className="mb-4">
                                    <textarea className="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea>
                                </form>
                                <div className="d-flex mb-4">
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="flex-shrink-0"><img className="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div className="ms-3">
                                        <div className="fw-bold">Commenter Name</div>
                                        When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-header">Search</div>
                        <div className="card-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Categories</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Side Widget</div>
                        <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
