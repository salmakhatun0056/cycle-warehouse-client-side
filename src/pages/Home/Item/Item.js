import React from 'react';

const Item = ({ item }) => {
    const { name, img } = item
    return (
        <div className='mb-5'>
            <img className='item-img' src={img} alt="" />
            <h4 className='item-name'>{name}</h4>

        </div>
    );
};

export default Item;