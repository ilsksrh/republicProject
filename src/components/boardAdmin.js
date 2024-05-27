import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { Link } from "react-router-dom";
import "../css/boardAdmin.css"; // Import your CSS file

const BoardAdmin = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getAdminBoard();
        setContent(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        } else {
          setError(
            error.response?.data?.message ||
              error.message ||
              "An error occurred while fetching data."
          );
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <Link to="/calendar">Go to calendar</Link>
            <br />
            <Link to="/map">See animals on the map</Link>
          </>
        )}
      </header>
    </div>
  );
};

export default BoardAdmin;
