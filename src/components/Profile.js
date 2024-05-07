import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import "../css/profil.css";

const UserProfile = () => {
  const [redirect, setRedirect] = useState(null);
  const [userReady, setUserReady] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: "" });

  useEffect(() => {
    const fetchCurrentUser = () => {
      const currentUser = AuthService.getCurrentUser();
      if (!currentUser) {
        setRedirect("/home");
      } else {
        setCurrentUser(currentUser);
        setUserReady(true);
      }
    };

    fetchCurrentUser();

    // Clean up function to cancel any pending requests or timers
    return () => {
      // Implement any cleanup logic here if necessary
    };
  }, []);

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  const editProfileMessage = (
    <p>
      To fill in your name, surname, or phone number, or change your photo go to edit{" "}
      
    </p>
  );

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                alt=""
              />
              <div className="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{currentUser.username}</h5>
              <h6>Top Donators Rank:</h6>
              {/* Include the edit profile message */}
              {editProfileMessage}
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
                    {/* <Link to = {'/posts/'+post.id + '/edit'}> */}
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
                {/* Add more fields for saving in the database */}
                <div className="row">
                  <div className="col-md-6">
                    <label>Token</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {currentUser.accessToken
                        ? `${currentUser.accessToken.substring(0, 20)} ... ${
                            currentUser.accessToken.substr(
                              currentUser.accessToken.length - 20
                            )
                          }`
                        : "Access Token Not Available"}
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
