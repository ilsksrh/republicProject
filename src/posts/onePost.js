import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { deletePost, fetchOnePost } from "../services/post_api";
import { getCurrentUser } from "../services/auth_service";

import { addExistingTagForPost, getPostsbyTag, getAllTags, addTagToPost, editTag, deleteTagFromPost, getTagsForPost } from "../services/tags_api";
import redHeart from "../images/like.jpg";
import blackHeart from "../images/unlike.jpg";
import x from "../images/x-circle.svg";
import pen from "../images/pen-fill.svg";


export default function OnePost() {
  const [post, setPost] = useState(null);
  const [tags, setTags] = useState([]);
  const [isAuthorOrModerator, setIsAuthorOrModerator] = useState(false);
  const [isModerator, setIsModerator] = useState(false);
  const [allTags, setAllTags] = useState([]);
  const [message, setMessage] = useState({ text: "", type: "" });

  const { postId } = useParams();
  const currentUser = getCurrentUser();
  const navigate = useNavigate();

  const loadTags = async () => {
    try {
      const tagsData = await getAllTags();
      setAllTags(Array.isArray(tagsData) ? tagsData : []);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
      setAllTags([]);
    }
  };

  useEffect(() => {
    async function fetchPostAndTags() {
      try {
        const postData = await fetchOnePost(postId);
        setPost(postData);
        const tagData = await getTagsForPost(postId);
        setTags(tagData);
        const allTagsData = await getAllTags();
        setAllTags(allTagsData);
      } catch (error) {
        console.error("Error fetching post or tags:", error.message);
      }
    }

    fetchPostAndTags();
    loadTags();
  }, [postId]);


  useEffect(() => {
    if (post && currentUser) {
      const isAuthor = post.user.id === currentUser.id;
      const isMod = currentUser.roles && currentUser.roles.includes("ROLE_MODERATOR");
      setIsAuthorOrModerator(isAuthor || isMod);
      setIsModerator(isMod);
    }
  }, [post, currentUser]);

  const handleDelete = async () => {
    try {
      await deletePost(postId);
      navigate("/home");
    } catch (error) {
      if (error.message.includes('401')) {
        navigate('/unauthorized');
      } else {
        console.error("Error deleting post:", error.message);
      }
    }
  };

  const handleShowTagsPosts = async (postId) => {
    try {
      const tags = await getTagsForPost(postId);
      setTags(tags)
    } catch (error) {
      if (error.message.includes('401')) {
        navigate('/unauthorized');
      } else {
        console.error("Error showing tags for post:", error.message);
      }
      console.log("success")
    }
  };

  const handleAddTag = async () => {
    const tagNames = allTags.map(tag => tag.name);
    const tagName = prompt(`Enter the tag name from the list: \n${tagNames.join("\n")}`);
    if (tagName) {
      const selectedTag = allTags.find(tag => tag.name === tagName);
      if (selectedTag) {
        const tagExists = tags.some(tag => tag.id === selectedTag.id);
        if (tagExists) {
          setMessage({ text: `Tag "${tagName}" is already set for this post.`, type: "error" });
        } else {
          try {
            await addExistingTagForPost(postId, selectedTag.id);
            const updatedTags = await getTagsForPost(postId);
            setTags(updatedTags);
            setMessage({ text: `Tag "${tagName}" added successfully.`, type: "success" });
          } catch (error) {
            console.error("Error adding existing tag:", error.message);
          }
        }
      } else {
        setMessage({ text: `Tag "${tagName}" is wrong.`, type: "error" });
      }
    }
  };

  const handleDeleteTag = async (tagId, tagName) => {
    try {
      await deleteTagFromPost(postId, tagId);
      const updatedTags = await getTagsForPost(postId);
      setTags(updatedTags);
      setMessage({ text: `Tag "${tagName}" deleted successfully.`, type: "success" });
    } catch (error) {
      console.error("Error deleting tag:", error.message);
    }
  };

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
    </div>
  );
}
