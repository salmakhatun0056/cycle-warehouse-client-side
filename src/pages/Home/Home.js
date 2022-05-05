import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import Item from './Item/Item';
import './Item/Item.css'

const Home = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('fackdata.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center text-white' style={{ height: '90vh', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: "url('https://i.ibb.co/b3mmLXn/homepage-tires-1600x800-1500x.webp')" }}>
                        <h2>Shop Online For Fresh Grocries</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center text-white' style={{ height: '90vh', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: "url('https://i.ibb.co/9wYG4jH/Bike01-e1563974702542.jpg')" }}>
                        <h2>Shop Online For Fresh Grocries</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center text-white' style={{ height: '90vh', backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundImage: "url('https://i.ibb.co/PWmgnBh/cycling-road-bicyclist-pexels.jpg')" }}>
                        <h2>Shop Online For Fresh Grocries</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
            <h2 className='my-4 text-info text-center'>Our Items</h2>
            <div className='item-container'>
                {
                    items.map(item => <Item key={item.key} item={item}>

                    </Item>)
                }
            </div>
        </div>
    );
};

export default Home;