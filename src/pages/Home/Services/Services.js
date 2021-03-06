import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const services = [
        {
            _id: 1001,
            name: "Package and storage",
            description: "We can package and stor your thing .",
            img: "https://i.ibb.co/bNGTMR1/images-5-1.png"
        },
        {
            _id: 1002,
            name: "WorldWide Transport",
            description: "We can transport your things anywhere in the world .",
            img: "https://i.ibb.co/nrKy0fD/images-8-1.png"
        },
        {
            _id: 1003,
            name: "Cargo",
            description: " Let us transport your things form point A to point B fast and securely.",
            img: "https://i.ibb.co/NCvfSvp/linear-cargo-truck-icon-industry-outline-collection-thin-line-isolated-white-background-trendy-illus.png"
        },
        {
            _id: 1004,
            name: "Door to door delivery",
            description: "Do you need something delivered? We are what you are looking for !!.",
            img: "https://i.ibb.co/HhPBL8K/images-7-1.png"
        },
        {
            _id: 1005,
            name: "Warehousing",
            description: "We have top notch security and loads of space. Store your stuff at our warehouse",
            img: "https://i.ibb.co/JRNXt30/images-6-1.png"
        },
        {
            _id: 1006,
            name: "Warehousing",
            description: "We have top notch security and loads of space. Store your stuff at our warehouse",
            img: "https://i.ibb.co/wQ9cNJ6/29f243c26b0663cb4d46148f669235aa.png"
        }
    ]
    return (
        <div className='container'>
            <h2 className='services-title mb-4'>OUR SERVICES</h2>
            <div className='services-container mb-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;