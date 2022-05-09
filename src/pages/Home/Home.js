import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ExtraSection from './ExtraSection/ExtraSection';
import './Home.css'
import Item from './Item/Item';
import './Item/Item.css'
import Services from './Services/Services';

const Home = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center text-white' style={{ height: '90vh', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: "url('https://i.ibb.co/b3mmLXn/homepage-tires-1600x800-1500x.webp')" }}>
                        <h2>Shop Online For Best Cycle </h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center text-white' style={{ height: '90vh', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: "url('https://i.ibb.co/9wYG4jH/Bike01-e1563974702542.jpg')" }}>
                        <h2>Shop Online For Best Cycle</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center text-white' style={{ height: '90vh', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: "url('https://i.ibb.co/PWmgnBh/cycling-road-bicyclist-pexels.jpg')" }}>
                        <h2>Shop Online For Best Cycle</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
            <h2 className='my-4 items-title text-center'>OUR ITEMS</h2>
            <div className='items-container container'>
                {
                    items.slice(0 - 6).map(item => <Item key={item._id} item={item}>

                    </Item>)
                }
            </div>
            <div className='mb-3 mt-3'>
                <Link style={{ textDecoration: "none" }} to='/inventories'><button className='btn btn-info  text-white mx-auto d-block'>Manage All  Inventories</button></Link>
            </div>
            <Services></Services>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;