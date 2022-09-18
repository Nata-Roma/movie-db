import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';

const Movies = () => {
    let navigate = useNavigate();
    console.log('Movies');
    
    return (
        <div>
            <p>Movies</p>
            <div style={{display: 'flex'}}>
            <Link to={`/movies/${76341}`}>One  </Link>
            <div onClick={() => navigate(`/movies/${76341}`)}>Two</div>
            </div>
            <Outlet />
        </div>
    );
};

export default Movies;
