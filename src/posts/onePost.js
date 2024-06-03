import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { deletePost, fetchOnePost } from "../services/post_api";
import { getCurrentUser } from "../services/auth_service";

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function OnePost() {
  const [post, setPost] = useState('');
  const { postId } = useParams();
  const currentUser = getCurrentUser();
  const [isAuthorOrModerator, setIsAuthorOrModerator] = useState(false);
  
  const navigate= useNavigate()

  useEffect(() => {
    fetchOnePost(postId).then((postData) => {
      const toastEditPost = localStorage.getItem("toastEditPost")
      if (toastEditPost) {
        toast.success("Successfully edited post!");
        localStorage.removeItem("toastEditPost");
      }
      setPost(postData)
    });
  }, [postId]);

  useEffect(() => {
    if (post && currentUser) {
        const isAuthor = post.user.id === currentUser.id;
        const isModerator = currentUser.roles && currentUser.roles.includes("ROLE_MODERATOR")
        setIsAuthorOrModerator(isAuthor || isModerator)
    }
}, [post, currentUser]);

  const handleDelete = () => {
    deletePost(postId).then(() => {
      navigate("/home")
    
    })
  }


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          <article>
            <header className="mb-4">
              <h1 className="fw-bolder mb-1">{post.title}</h1>
              <div className="text-muted fst-italic mb-2">{post.createdAt}</div>
              <a
                className="badge bg-secondary text-decoration-none link-light"
                href="#!"
              >
                Animals
              </a>
              <a
                className="badge bg-secondary text-decoration-none link-light"
                href="#!"
              >
                {post.type}
              </a>
            </header>
            <figure className="mb-4">
              <img className="img-fluid rounded" src={post.photo} alt="..." />
            </figure>
            <section className="mb-5">
              <p className="fs-5 mb-4">{post.description}</p>
              <p className="fs-5 mb-4">Author: {post.user?.username}</p>
              {isAuthorOrModerator && (
                            <>
                                <button className="btn btn-primary me-2">
                                    <Link to={`/posts/${post.id}/edit`} className="text-white text-decoration-none">Edit</Link>
                                </button>
                                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
                            </>
                        )}
            </section>
          </article>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
