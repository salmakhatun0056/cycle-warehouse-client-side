import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container notfound-container mt-5'>
            <div className='notfount-text'>
                <h1>Oooops!!</h1>
                <p>The page you requested was not found,and we have a fine guess why . If you type the URL directly please make sure the spelling is correct. If you clicked on a link to get here, the link is outdated. What can you do? Have no fear, help is near.</p>
                <button className='btn btn-info w-50'><a style={{ textDecoration: 'none' }} className='text-white ' href="/home">Go Home</a></button>
            </div>
            <div className='ms-5 notfound-img'>
                <img style={{ width: '450px' }} src="https://i.ibb.co/92x44PR/cute-astronaut-meditation-yoga-rocket-cartoon-vector-icon-illustration-science-sport-icon-concept-is.png" alt="" />
            </div>
        </div>
    );
};

export default NotFound;