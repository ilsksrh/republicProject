
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import '../css/map.css'; 

const Map = () => {
  return (
    <div className="background">
      <div className="App">
        <div className="search-container">
          <h2>Поиск животного по Чипу</h2>
          <div className="input-container">
            <input type="text" placeholder="Введите запрос" />
            <button>Найти</button>
          </div>
        </div>
        <div className="Map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.764686335583!2d76.86866537597788!3d43.214424671126416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368581d609ad9%3A0xe1f0af0b0d83729e!2z0YPQuy4g0JbQsNC90LTQvtGB0L7QstCwIDU1!5e0!3m2!1sru!2skz!4v1716501889305!5m2!1sru!2skz"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
