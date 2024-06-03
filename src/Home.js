import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "./services/auth_service";
import { fetchCategories, fetchPosts } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import search from "./images/search-heart.svg";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const currentUser = getCurrentUser();



  useEffect(() => {
    const showToastCreatePost = localStorage.getItem("showToastCreatePost");
    if (showToastCreatePost) {
      toast.success("Successfully created post!");
      localStorage.removeItem("showToastCreatePost");
    }
    loadCategories();
    loadPosts();
  }, []);

  useEffect(() => {
    loadPosts();
  }, [selectedCategoryId, userId, searchTerm]);

  const loadCategories = async () => {
    try {
      const catData = await fetchCategories();
      setCategories(catData);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  };

  const loadPosts = async () => {
    try {
      const postData = await fetchPosts(selectedCategoryId, userId, searchTerm);
      setPosts(postData);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  };

  const handleShowMyPosts = () => {
    setUserId(currentUser.id);
    setSelectedCategoryId(null);
    setSearchTerm("");
  };

  const handleShowAllPosts = () => {
    setUserId(null);
    setSelectedCategoryId(null);
    setSearchTerm("");
  };

  const handleShowCategoryPosts = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setUserId(null);
    setSearchTerm("");
  };

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
    setSelectedCategoryId(null);
    setUserId(null);
  };
  const reset = () => {
    window.location.reload();
  };
  return (
    <div>
      <div className="container p-4">
        <div className="mb-4 d-flex">
          <button
            onClick={() => handleShowMyPosts(currentUser.id)}
            className="btn btn-success"
            style={{ marginRight: "10px" }}
          >
            My Posts
          </button>
          <div className="pl-4">
            <button
              onClick={() => {
                setSelectedCategoryId(null);
                setUserId(null);
                setSearchTerm("");
              }}
              className="btn btn-success"
            >
              All Posts
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {posts.length === 0 ? (
                <div className="col-lg-12">
                  <p>No posts yet</p>
                </div>
              ) : (
                posts.map((post) => (
                  <div className="col-lg-6" key={post.id}>
                    <div className="card mb-4">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          height: 200,
                        }}
                      >
                        <img
                          className="card-img-top"
                          src={post.photo}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                          }}
                          alt="Post"
                        />
                      </div>
                      <div className="card-body">
                        <div className="small text-muted">{post.createdAt}</div>
                        <h2 className="card-title h4">{post.title}</h2>
                        <p className="card-text">{post.description}</p>
                        <Link
                          to={`/posts/${post.id}`}
                          className="btn btn-outline-success"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-header">Search</div>
              <div className="card-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const searchValue = formData.get("searchTerm");
                    handleSearch(searchValue);
                  }}
                >
                  <div className="input-group">
                    <input
                      className="form-control rounded "
                      type="text"
                      name="searchTerm"
                      placeholder="Enter search term..."
                      aria-label="Enter search term..."
                      aria-describedby="button-search"
                    />
                    <button
                      className="btn btn-light"
                      id="button-search"
                      type="submit"
                    >
                      <img src={search}></img>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="card mb-4">
              <div className="card-header">Categories</div>
              <div className="card-body">
                <div className="row">
                  <ul className="list-unstyled mb-0">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          className="btn btn-success btn-light"
                          onClick={() => handleShowCategoryPosts(category.id)}
                        >
                          {category.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <Link to={`/createPost`} className="btn btn-success">
                Create Post
              </Link>
            </div>
            <div>
              <button className="btn btn-light" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
