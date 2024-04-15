import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Registration from "./components/Registration";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import Animals from './components/Animals';
import AnimalItem from './components/AnimalItem';
import Page404 from './components/Page404';
import { getAllAnimals, getOneAnimal } from './components/api';
import CreateForm from './components/CreateForm';
import EditForm from './components/EditForm';
import CreateCategories from './components/CreateCategories';

import BlogPage from './components/Blog.js';
import OnePost from "./components/OnePost.js";
import CreatePost from "./components/CreatePost.js";
import EditPost from "./components/EditPost.js";
const root = ReactDOM.createRoot(document.getElementById('root'));

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            ResQ Tails
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<CreateForm />} />
            <Route path="/animal/add" element={<CreateForm />} />
            <Route path="/categories" element={<CreateCategories />} />
            <Route path="/categories/create" element={<CreateCategories />} />
            <Route path="/animals/category/:catId?" element={<Animals />} />
            <Route path="/animals/" element={<Animals />} loader={getAllAnimals}>
              <Route path="/animals/:animalId" element={<AnimalItem />} loader={async ({params}) => getOneAnimal(params.animalId)} />
            </Route>
            <Route path="/animals/:animalId" element={<AnimalItem />} />
            <Route path="/animals/:animalId/edit" element={<EditForm />} />
            <Route path="/animal-item" element={<AnimalItem />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/posts/:postId" element={<OnePost/>} />
            <Route path="/post/create" element={<CreatePost/>} />
            <Route path="/posts/:postId/edit" element={<EditPost />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
