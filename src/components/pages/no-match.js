import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <div>
            <h2>this is not the page you are looking for.</h2>
            <Link to="/">Return to HomePage</Link>
        </div>
    );
}