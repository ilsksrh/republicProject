import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "../css/profil.css";

const UserProfile = () => {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    avatar: "",
    phone: ""
  });

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const currentUser = AuthService.getCurrentUser();
      if (!currentUser) {
        setRedirect("/home");
      } else {
        try {
          const response = await fetch(`http://localhost:8080/api/users/${currentUser.id}`, {
            headers: {
              Authorization: `Bearer ${currentUser.accessToken}`
            }
          });
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userData = await response.json();
          setCurrentUser({
            username: userData.username,
            email: userData.email,
            firstName: userData.firstName,
            lastName: userData.lastName,
            avatar: userData.avatar,
            phone: userData.phone
          });
          console.log(userData);
          console.log(currentUser)
          setUserReady(true);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setRedirect("/home");
        }
      }
    };

    fetchCurrentUser();

    return () => {
      // Cleanup logic if necessary
    };
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle file upload logic here if needed
      // Example: Upload to server and get the URL, then update currentUser state
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src={
                  currentUser.avatar ||
                  "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png"
                }
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" onChange={handleFileChange} />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{currentUser.username}</h5>
              <h6>Top Donators Rank:</h6>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <Link to={"/profile"}>About</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <Link to={"/profile/edit"}>Edit profile</Link>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-2">
            <input
              type="submit"
              className="profile-edit-btn"
              name="btnAddMore"
              value="Donate!"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work"></div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Username</label>
                  </div>
                  <div className="col-md-6">
                    <p>{currentUser.username}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{currentUser.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{currentUser.firstName}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Last Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{currentUser.lastName}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{currentUser.phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Token</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {AuthService.getCurrentUser()?.accessToken
                        ? `${AuthService.getCurrentUser().accessToken.substring(0, 20)} ... ${
                            AuthService.getCurrentUser().accessToken.substr(
                              AuthService.getCurrentUser().accessToken.length - 20
                            )
                          }`
                        : 'Access Token Not Available'}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              ></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
