import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="ui menu">
            <Link className="header item" to="/">SPARKS</Link>
            <Link className="item" to="/">New</Link>
            <Link className="item" to="/submit">Submit</Link>
            <div className="right menu">
                <Link className="item" to="/login">Login</Link>
                <Link className="item" to="/about">About</Link>
            </div>
        </div>
    );
};

export default Navbar;