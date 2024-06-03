import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { getCurrentUser } from "./services/auth_service";
import pen from "./images/pen-fill.svg";
import { getUserInfo } from "./services/api";
import defaultPhoto from "./images/avatar.jpg";

const Profile = () => {
  const [redirect, setRedirect] = useState(null);
  const [currentUser, setCurrentUser] = useState({ username: "" });
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = getCurrentUser();
      console.log(user);
      if (!user) {
        setRedirect("/home");
      } else {
        try {
          const userInfo = await getUserInfo(user.id);
          const currentUserInfo = await getCurrentUser();

          setCurrentUser(userInfo);
          setUser(currentUserInfo);
          console.log("User Info:", userInfo);
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

  if (!currentUser.username) {
    return null;
  }

  return (
    <>
      <form method="post">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src={currentUser.avatar || defaultPhoto}
                    alt="avatar"
                    className="rounded-circle img-fluid"
                  />
                  <h5 className="my-3">{currentUser.username}</h5>
                  <p className="text-muted mb-1">It's me!</p>
                  <p className="text-muted mb-4">Hello</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-end">
                    <Link to="/edit">
                      <button className="btn btn-success">
                        <img src={pen} alt="pen icon" />
                      </button>
                    </Link>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">First Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentUser.firstName}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Last Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentUser.lastName}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{currentUser.phone}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Token</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.accessToken}</p>
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
