import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardModerator = () => {
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await UserService.getModeratorBoard();
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
    };
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <Link to="/animals">Go to Animals</Link>
      </header>
    </div>
  );
};

export default BoardModerator;
