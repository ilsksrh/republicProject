import { useState, useEffect } from 'react';
import TokenService from '../services/token.service';
import { Link } from 'react-router-dom';

export default function Blog(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const token = TokenService.getLocalAccessToken();
            const response = await fetch('http://localhost:8080/api/posts', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                setPosts(data);
            } else {
                console.error('Failed to fetch posts:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching posts:', error.message);
        }
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
                            {posts.map(post => (
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
                            ))}
                        </div>
                        {/* <!-- Pagination--> */}
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
                    {/* <!-- Side widgets--> */}
                    <div className="col-lg-4">
                        {/* <!-- Search widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Search</div>
                            <div className="card-body">
                                <div className="input-group">
                                    <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                    <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Categories widget--> */}
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
                        {/* <!-- Side widget--> */}
                        <div className="card mb-4">
                            <div className="card-header">Side Widget</div>
                            <Link to={`/post/create`} className="btn btn-primary">Create Post</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

