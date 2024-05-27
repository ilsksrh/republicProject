import React from 'react';
import { Link } from 'react-router-dom';

const Unauthorized = () => {
    return (
        <div className="container">
            <h1>Unauthorized</h1>
            <p>You do not have permission to view this page.</p>
            <Link to="/">Go back to the homepage</Link>
        </div>
    );
};

export default Unauthorized;
