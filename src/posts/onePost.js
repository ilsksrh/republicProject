import React, { useEffect } from "react";
import { useState } from "react";
import { authHeader } from "../services/auth_service";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { deletePost, fetchOnePost } from "../services/post_api";
import { getCurrentUser } from "../services/auth_service";


export default function OnePost() {
  const [post, setPost] = useState(null);
  const [tags, setTags] = useState([]);
  const [isAuthorOrModerator, setIsAuthorOrModerator] = useState(false);
  const [isModerator, setIsModerator] = useState(false);
  const [allTags, setAllTags] = useState([]);
  const [message, setMessage] = useState({ text: "", type: "" });

  const { postId } = useParams();
  const currentUser = getCurrentUser();

  
  useEffect(() => {
    // fetchPost(postId)
    fetchOnePost(postId).then((postData) => {
      setPost(postData);
      console.log(postData);
      console.log("hi")
      console.log(postData.user?.username)
    });
  }, [postId]);


  useEffect(() => {
    if (post && currentUser) {
        const isAuthor = post.user.id === currentUser.id;
        const isModerator = currentUser.roles && currentUser.roles.includes("ROLE_MODERATOR");
        setIsAuthorOrModerator(isAuthor || isModerator);
    }
  }, [post, currentUser]);

  const handleDelete = () => {
    deletePost(postId).then(() => {
    })
  }

 

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8">
          {post && (
            <article>
              <header className="mb-4">
                <h1 className="fw-bolder mb-1">{post.title}</h1>
                <div className="text-muted fst-italic mb-2">
                  {post.createdAt}
                </div>
              </header>
              <figure className="mb-4">
                <img
                  className="img-fluid rounded"
                  src={post.photo}
                  alt="Post"
                />
              </figure>
              <section className="mb-5">
                <p className="fs-5 mb-4">{post.description}</p>
                <p className="fs-5 mb-4">Author: {post.user?.username}</p>
                {isAuthorOrModerator && (
                  <>
                    <button className="btn btn-primary me-2">
                      <Link
                        to={`/posts/${post.id}/edit`}
                        className="text-white text-decoration-none"
                      >
                        Edit
                      </Link>
                    </button>
                    <button className="btn btn-danger" onClick={handleDelete}>
                      Delete
                    </button>
                  </>
                )}
              </section>
            </article>
          )}
          
        </div>
        <div className="col-lg-4">
          <div className="card mb-4">
            <div className="card-header">Tags</div>
            <div className="card-body">
              <div className="row">
                <ul className="list-unstyled mb-0">
                  {tags.map(tag => (
                    <li key={tag.id} className="d-flex justify-content-between align-items-center">
                      <button className='btn btn-success btn-light' onClick={() => handleShowTagsPosts(tag.id)}>{tag.name}</button>
                      {isModerator && (
                        <div className="d-flex align-items-center">
                          <button className="btn btn-danger btn-sm ml-2" onClick={() => handleDeleteTag(tag.id, tag.name)}>
                            <img src={x} className="d-flex" alt="Delete" />
                          </button>
                          
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
                {message.text && (
                            <p className={`text-${message.type === "error" ? "danger" : "success"} mb-0 ml-2`}>{message.text}</p>
                          )}
                <button className="btn btn-primary me-2" onClick={handleAddTag}>
                  Add tags <img src={pen} className="d-flex" alt="Edit" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
