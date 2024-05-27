import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { getCurrentUser } from "./services/auth_service";
import pen from "./images/pen-fill.svg"
import { getUserInfo } from "./services/api";

const Profile = () => {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = getCurrentUser();
      if (!user) {
        setRedirect("/home");
      } else {
        try {
          const userInfo = await getUserInfo(user.id);
          setCurrentUser(userInfo);
          setUserReady(true);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
    };

    fetchCurrentUser();
  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }


  return (
    <>
    <form method="post">
    <div class="container py-5">
     <div class="row">
      <div class="col-lg-4">
        <div class="card mb-4">
          <div class="card-body text-center">
            <img src= {currentUser.avatar} alt="avatar"
              class="rounded-circle img-fluid" />
            <h5 class="my-3">{currentUser.username}</h5>
            <p class="text-muted mb-1">It's me!</p>
            <p class="text-muted mb-4">Hello</p>
          </div>
        </div>
        </div>
        <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-body">
            <div className="d-flex justify-content-end">

            <Link to = "/edit">
                <button className="btn btn-success"><img src = {pen} ></img></button>
            </Link>

            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">First Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{currentUser.firstName}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Last Name</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{currentUser.lastName}</p>
              </div>
            </div>
            <hr/>
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{currentUser.email}</p>
              </div>
            </div>
            <hr/>

            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Token</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">{currentUser.accessToken}</p>
              </div>    
            </div>
            
          </div>
        </div>        
        </div>
        </div>
        </div>

        </form>
      
     </>
  );
};

export default Profile;
