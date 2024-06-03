import React, { useEffect, useState } from "react";

import { CheckMod } from "./services/checkRole";

import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "./services/auth_service";
import {  fetchCategories, createCategory, deleteCategory, editCategory } from './services/category_api';
import { deleteTag, createTag, getAllTags, addTagToPost, editTag, deleteTagFromPost, getTagsForPost } from "./services/tags_api";
import x from "./images/x-circle.svg";
import pen from "./images/pen-fill.svg";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const ModBoard = () => {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const [tags, setTags] = useState([]);
  const [editTagId, setEditTagId] = useState(null);
  const [editTagName, setEditTagName] = useState('');
  
  const navigate = useNavigate();

  const currentUser = getCurrentUser();
  const checkMod = CheckMod();



  useEffect(() => {
    if (currentUser) {
      checkMod();
      loadCategories();
      loadTags();
    }
  }, [currentUser, checkMod]);

  const loadCategories = async () => {
    const catData = await fetchCategories();
    setCategories(catData);
  };

  const loadTags = async () => {
    try {
      const tagsData = await getAllTags();
      setTags(Array.isArray(tagsData) ? tagsData : []);
    } catch (error) {
      console.error('Error fetching tags:', error.message);
      setTags([]);
    }
  };

  const handleEditClick = (category) => {
    setEditId(category.id);
    setEditName(category.name);
  };

  const handleEditTagClick = (tag) => {
    setEditTagId(tag.id);
    setEditTagName(tag.name);
  };

  const handleSaveClick = async (categoryId) => {
    try {
      await editCategory(categoryId, { name: editName });
      setEditId(null);
      loadCategories();
    } catch (error) {
      console.error("Failed to edit category:", error.message);
    }
  };

  const handleTagSaveClick = async (tagId) => {
    try {
      await editTag(tagId, { name: editTagName });
      setEditTagId(null);
      const updatedTags = await getAllTags();
      setTags(updatedTags);
    } catch (error) {
      console.error('Failed to edit tag:', error.message);
    }
  };

 
  if (!currentUser) return null;

  return (
    <div>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="">
          <Link to="/mod/users">
            <button className="btn btn-light">Go to Users System</button>{" "}
          </Link>
        </div>
        <div className="col-lg-8 col-xl-6">
          <div className="d-flex justify-content-between">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <div className="">
                  <ul className="list-unstyled">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="d-flex justify-content-between pt-2"
                      >
                        <li>
                          {editId === category.id ? (
                            <input
                              type="text"
                              value={editName}
                              onChange={(e) => setEditName(e.target.value)}
                              className="form-control"
                            />
                          ) : (
                            category.name
                          )}
                        </li>
                        <div className="d-flex justify-content-center pr-2">
                          {editId === category.id ? (
                            <button
                              className="btn btn-success btn-sm ml-2"
                              onClick={() => handleSaveClick(category.id)}
                            >
                              Save
                            </button>
                          ) : (
                            <>
                              <button
                                className="btn btn-primary btn-sm ml-2"
                                onClick={() => handleEditClick(category)}
                              >
                                <img src={pen} className="d-flex" alt="Edit" />
                              </button>
                              <button className="btn btn-danger btn-sm ml-2" onClick={() => deleteCategory(category.id).then(() => loadCategories())}>
                                <img src={x} className="d-flex" alt="Delete" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <div className="">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get("name");
                      createCategory({ name }).then(() => loadCategories());
                    }}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="New category name"
                        required
                      />
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="btn btn-success">
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6">
          <div className="d-flex justify-content-between">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <div className="">
                  <ul className="list-unstyled">
                    {tags.map(tag => (
                      <div key={tag.id} className="d-flex justify-content-between pt-2">
                        <li>
                          {editTagId === tag.id ? (
                            <input
                              type="text"
                              value={editTagName}
                              onChange={(e) => setEditTagName(e.target.value)}
                              className="form-control"
                            />
                          ) : (
                            tag.name
                          )}
                        </li>
                        <div className="d-flex justify-content-center pr-2">
                          {editTagId === tag.id ? (
                            <button className="btn btn-success btn-sm ml-2" onClick={() => handleTagSaveClick(tag.id)}>
                              Save
                            </button>
                          ) : (
                            <>
                              <button className="btn btn-primary btn-sm ml-2" onClick={() => handleEditTagClick(tag)}>
                                <img src={pen} className="d-flex" alt="Edit" />
                              </button>
                              <button className="btn btn-danger btn-sm ml-2" onClick={() => deleteTag(tag.id).then(() => loadTags())}>
                                <img src={x} className="d-flex" alt="Delete" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <div className="">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.target);
                      const name = formData.get("name");
                      createTag({ name }).then(() => loadTags());
                    }}
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="New category name"
                        required
                      />
                    </div>
                    <div className="pt-4">
                      <button type="submit" className="btn btn-success">
                        Create
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    </div>
    
    
  );
};

export default ModBoard;
