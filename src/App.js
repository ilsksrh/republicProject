import React from "react";

import { BrowserRouter, createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from "react-router-dom";

import Main from "./Main";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Profile from "./Profile"; 
import EditProfile from "./editProfile";
import AdminBoard from "./AdminBoard";
import Header from "./Header";
import Home from "./Home";
import CreatePost from "./CreatePost";
import ModBoard from "./ModeratorBoard";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path = "/login"
        element = {<Login/>} />
        <Route path = "/profile" element = {<Profile/>} />
        <Route path = "edit" element = {<EditProfile />} />
        <Route path = "/admin" element = {<AdminBoard />} />
        <Route path = "/home" element = {<Home />} />
        <Route path = "/createPost" element = {<CreatePost />} />
        <Route path = "/mod" element = {<ModBoard />} />
      </Routes>
  );
};

export default App;
