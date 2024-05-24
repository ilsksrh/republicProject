import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import News from './News';
import Test from './Test';
import Info from './about/Info';
import LostAbout from './about/LostAbout';
import Lost from './Lost';
import About from './about/About';
import AboutPage from './about/AboutPage';
import Posts from './Posts';
import './css/main.css';
import CreatePost from './CreatePost';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Profile from './Profile';
import EditProfile from './EditProfile';
import PostOption from './PostOption';
import Message from './Message';
import Search from './Search';
import Chat from './Chat'
import AddAvatar from './AddAvatar';
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" />
        <Route path="/news" element={<News />} />
        <Route path="/post" element={<Posts />}>
          <Route path="/post/option/:postId" element={<PostOption />} />
        </Route>
        <Route path="/lost" element={<Lost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/profile" element={<Profile />} >
        <Route path='/profile/addAvatar' element={<AddAvatar/>}/>
        </Route>
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path='/message' element={<Chat/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/chat' element={<Chat/>}/>
      </Route>
      <Route path="/about" element={<AboutPage />}>
        <Route path="/about" element={<About />} />
        <Route path="/about/info" element={<Info />} />
        <Route path="/about/lost" element={<LostAbout />} />
      </Route>
      <Route path="/test" element={<Test />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
