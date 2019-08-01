import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="ui inverted vertical footer segment">
            <div className="ui container">
                <div className="ui stackable inverted divided equal height stackable grid">
                    <Link className="header item" to="/">SPARKS</Link>
                    <Link className="item" to="/">New</Link>
                    <Link className="item" to="/submit">Submit</Link>
                    <div className="right menu">
                        <Link className="item" to="/login">Login</Link>
                        <Link className="item" to="/about">About</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;