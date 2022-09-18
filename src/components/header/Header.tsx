import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='container'>
            <div>Logo</div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='movies'>Movies</Link>
            </nav>
            <hr />
        </div>
    );
};

export default Header;
