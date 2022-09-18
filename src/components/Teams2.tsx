import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet, useNavigate } from 'react-router-dom';

const Teams2 = () => {
    let navigate = useNavigate();
    console.log('Teams2');
    
    return (
        <div>
            <p>Teams2</p>
            <div style={{display: 'flex'}}>
            <Link to='1'>One</Link>
            <div onClick={() => navigate(`/teams2/${2}`)}>Two</div>
            <div onClick={() => navigate(`/teams2/${3}`)}>Three</div>
            </div>
            <Outlet />
        </div>
    );
};

export default Teams2;
