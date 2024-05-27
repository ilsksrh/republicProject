import React from "react";
import { useEffect } from "react";
import { CheckMod } from "./services/checkRole";
import { useState } from "react";
import { fetchCategories, createCategory, deleteCategory } from "./services/api";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import x from "./images/x-circle.svg"

const ModBoard = () => {
  const [categories, setCategories] = useState([]);
  //check admin role
  const check = CheckMod();
  useEffect(() => {
    check();
  }, [check]);

  
  const loadCategories = async () => {
      const catData = await fetchCategories();
      setCategories(catData)
    }
    
    loadCategories();


  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-8 col-xl-6 ">
            <div className=" d-flex justify-content-between ">


            <div className="card rounded-3">
            <div className="card-body p-4 p-md-5">

        <div className="">
                <ul className="list-unstyled">
                  {categories.map(category => (
                    <div className="d-flex justify-content-between pt-2 pr-2">
                      <li key={category.id}>{category.name}</li>
                    <button className="btn btn-danger btn-sm ml-2" onClick={() => deleteCategory(category.id)}><img src = {x} className="d-flex"></img></button>
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
                      createCategory({ name });
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
