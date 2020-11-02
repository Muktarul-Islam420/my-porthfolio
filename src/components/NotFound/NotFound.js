import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <h1 className="not-found">Your page was not found</h1>
            <br/>
            <Link to="/" id="back">Back to Home</Link>
        </div>
    );
};

export default NotFound;