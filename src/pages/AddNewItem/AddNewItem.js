import React from 'react';

const AddNewItem = () => {
    return (
        <div>
            <h2 className='text-center my-3'>Please Add a new item</h2>
            <div >
                <form className='d-block mx-auto  w-50'>
                    <input className='w-50 mx-auto' type="text" name=" item-name" id="" placeholder='Please Add Item Name' /> <br />
                    <input className='w-50 mx-auto' type="number" name="number" id="" min="1" placeholder='Add Price' /> <br />
                    <input className='w-50 mx-auto' type="text" name="supplier-man" id="" placeholder='Supplier nam' /><br />
                    <input className='w-50 mx-auto' type="text" name="quantity" id="" placeholder='Qty' /><br />
                    <input className='w-50 mx-auto' type="text" name="description" id="" placeholder='Short description' /><br />
                    <input className='w-50 mx-auto' type="url" name="photo-url" id="" placeholder='please add photo url' />
                </form>
            </div>
        </div>
    );
};

export default AddNewItem;