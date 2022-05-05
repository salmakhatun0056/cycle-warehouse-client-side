import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, img } = service
    return (
        <div>
            <div className=' service-container'>
                <div>
                    <h5>{name}</h5>
                    <p><small>{description}</small></p>
                </div>
                <div className='ms-2 service-img'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Service;