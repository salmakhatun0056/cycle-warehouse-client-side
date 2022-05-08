import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className=' footers-container mt-5'>
            <div className='container footer-container text-white mx-auto'>
                <div className='mt-5 ms-5'>
                    <h5 className='mb-3 fw-4'>CONTACT US</h5>
                    <a href=""><img className='me-3' src="https://i.ibb.co/WBF6L8N/images-9-1.png" alt="" /></a>

                    <a href=""><img className='me-3' src="https://i.ibb.co/6nnLNnp/353-3530547-twitter-icon-black-social-media-icons-twitter-1.png" alt="" /></a>
                    <a href=""><img src="https://i.ibb.co/zNxSWs1/152810-1.png" alt="" /></a>
                </div>
                <div className='footer-services mt-5 mb-5'>
                    <h5 className='mb-3 fw-4'>OUR SERVICES</h5>
                    <a href=""><p>All services</p></a>
                    <a href=""><p>Ground transport</p></a>
                    <a href=""><p>Warehousing</p></a>
                    <a href=""><p>Tracking Services</p></a>
                    <a href=""><p>Storage</p></a>
                </div>
                <div className='mt-5 mb-5 me-5 buy-container'>
                    <h5 className='mb-3 fw-4'>BUY NOW</h5>
                    <p>But i must explain to you how all this mistaken idea pleasure and praising pain was born and i will give you. But i explain to you how all this mistaken idea.</p>
                    <button className='btn btn-light text-info'>Buy them for $80</button>
                </div>
            </div>
            <div className='text-center mt-3 text-white mb-3'>
                <p ><small className=' '>copyright &#169; {year} CycleCornerPress. All rights reserves</small></p>
            </div>
        </div>
    );
};

export default Footer;