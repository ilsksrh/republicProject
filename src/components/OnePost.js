import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import authHeader from '../services/auth-header';

export default function OnePost() {
    const [post, setPost] = useState(null);
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetchPost(postId); 
    }, [postId]);
    
    const fetchPost = async (id) => {
        try {

            const response = await fetch(`http://localhost:8080/api/posts/${id}`, {
                headers: authHeader()
            });
            if (response.ok) {
                const data = await response.json();
                setPost(data);
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
                navigate('/blog');
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


    return(
    
    <div class="container mt-5">
    <div class="row">
        <div class="col-lg-8">
            {/* <!-- Post content--> */}
            <article>
                {/* <!-- Post header--> */}
                <header class="mb-4">
                    {/* <!-- Post title--> */}
                    <h1 class="fw-bolder mb-1">{post.title}</h1>
                    {/* <!-- Post meta content--> */}
                    <div class="text-muted fst-italic mb-2">{post.createdAt}</div>
                    {/* <!-- Post categories--> */}
                    <a class="badge bg-secondary text-decoration-none link-light" href="#!">Animals</a>
                    <a class="badge bg-secondary text-decoration-none link-light" href="#!">{post.type}</a>
                </header>
                {/* <!-- Preview image figure--> */}
                <figure class="mb-4"><img class="img-fluid rounded" src={post.photo} alt="..." /></figure>
                {/* <!-- Post content--> */}
                <section class="mb-5">
                    <p class="fs-5 mb-4">{post.description}</p>
                    <p class="fs-5 mb-4">Author:{post.user_id}</p>
                    <button className="btn btn-primary me-2"><Link to = {'/posts/'+post.id + '/edit'}>Edit</Link></button>
                    <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                </section>
            </article>
            {/* <!-- Comments section--> */}
            <section class="mb-5">
                <div class="card bg-light">
                    <div class="card-body">
                        {/* <!-- Comment form--> */}
                        <form class="mb-4"><textarea class="form-control" rows="3" placeholder="Join the discussion and leave a comment!"></textarea></form>
                        {/* <!-- Comment with nested comments--> */}
                        <div class="d-flex mb-4">
                            {/* <!-- Parent comment--> */}
                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                            <div class="ms-3">
                                <div class="fw-bold">Commenter Name</div>
                                If you're going to lead a space frontier, it has to be government; it'll never be private enterprise. Because the space frontier is dangerous, and it's expensive, and it has unquantified risks.
                                {/* <!-- Child comment 1--> */}
                                <div class="d-flex mt-4">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Commenter Name</div>
                                        And under those conditions, you cannot establish a capital-market evaluation of that enterprise. You can't get investors.
                                    </div>
                                </div>
                                {/* <!-- Child comment 2--> */}
                                <div class="d-flex mt-4">
                                    <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                                    <div class="ms-3">
                                        <div class="fw-bold">Commenter Name</div>
                                        When you put money directly to a problem, it makes a good headline.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single comment--> */}
                        <div class="d-flex">
                            <div class="flex-shrink-0"><img class="rounded-circle" src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
                            <div class="ms-3">
                                <div class="fw-bold">Commenter Name</div>
                                When I look at the universe and all the ways the universe wants to kill us, I find it hard to reconcile that with statements of beneficence.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        {/* <!-- Side widgets--> */}
        <div class="col-lg-4">
            {/* <!-- Search widget--> */}
            <div class="card mb-4">
                <div class="card-header">Search</div>
                <div class="card-body">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                        <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                    </div>
                </div>
            </div>
            {/* <!-- Categories widget--> */}
            <div class="card mb-4">
                <div class="card-header">Categories</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-sm-6">
                            <ul class="list-unstyled mb-0">
                                <li><a href="#!">Web Design</a></li>
                                <li><a href="#!">HTML</a></li>
                                <li><a href="#!">Freebies</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-6">
                            <ul class="list-unstyled mb-0">
                                <li><a href="#!">JavaScript</a></li>
                                <li><a href="#!">CSS</a></li>
                                <li><a href="#!">Tutorials</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mb-4">
                <div class="card-header">Side Widget</div>
                <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
            </div>
        </div>
    </div>
</div>
);
}
