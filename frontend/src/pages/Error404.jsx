import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from './BasePage';

function Error404() {
    return (
        <BasePage>
            Page Not Found! Head back <Link to='/'>Home</Link>
        </BasePage>
    );
}

export default Error404;
