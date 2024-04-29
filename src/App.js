import Aside from "./Aside";
import { Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import './css/test.css';



export default function App() {
  
  return (
    <div style={{display: "flex", height: "100%", width: "100%"}}>
      <div style={{width: "295px", height: "100%", zIndex: 2}}>
          <Aside />
      </div>
      <div style={{height: "100%", width: "100%", display: "flex"}}>
          <Outlet/>
      </div>
    </div>
  );
}
