import React, { useEffect, useState } from "react";
import { CheckMod } from "./services/checkRole";
import { fetchCategories, createCategory, deleteCategory, editCategory } from "./services/api";
import x from "./images/x-circle.svg";
import pen from "./images/pen-fill.svg";
import { Link } from "react-router-dom";

const ModBoard = () => {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState('');

  // Check moderator role
  const check = CheckMod();
  useEffect(() => {
    check();
  }, [check]);

  const loadCategories = async () => {
    const catData = await fetchCategories();
    setCategories(catData);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleEditClick = (category) => {
    setEditId(category.id);
    setEditName(category.name);
  };

  const handleSaveClick = async (categoryId) => {
    try {
      await editCategory(categoryId, { name: editName });
      setEditId(null);
      loadCategories();
    } catch (error) {
      console.error('Failed to edit category:', error.message);
    }
  };

  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="">
                      <button className="btn btn-light"><Link to="/mod/users">
                        Go to Users System
                      </Link></button>
                    </div>
        <div className="col-lg-8 col-xl-6">
          <div className="d-flex justify-content-between">
            <div className="card rounded-3">
              <div className="card-body p-4 p-md-5">
                <div className="">
                  <ul className="list-unstyled">
                    {categories.map(category => (
                      <div key={category.id} className="d-flex justify-content-between pt-2">
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
                            <button className="btn btn-success btn-sm ml-2" onClick={() => handleSaveClick(category.id)}>
                              Save
                            </button>
                          ) : (
                            <>
                              <button className="btn btn-primary btn-sm ml-2" onClick={() => handleEditClick(category)}>
                                <img src={pen} className="d-flex" alt="Edit" />
                              </button>
                              <button className="btn btn-danger btn-sm ml-2" onClick={() => deleteCategory(category.id)}>
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
  );
};

export default ModBoard;
