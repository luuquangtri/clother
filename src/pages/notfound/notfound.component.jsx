import React from 'react';
import "./notfound.styles.scss"
import { Link } from 'react-router-dom';
function NotFoundPage(props) {
    return (
        <div className="not-found">
            <h1>Page Not Found</h1>
            <p>Please redirect to <Link to="/" className="go-home">Home</Link> </p>
        </div>
    );
}

export default NotFoundPage;