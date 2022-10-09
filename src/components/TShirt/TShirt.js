import React from 'react';
import './TShirt.css'
const TShirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price:${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy this</button>
        </div>
    );
};

export default TShirt; 