import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Carts/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);


    const handleAddToCart = tshirt => {
        const exits = cart.find(ts => ts._id === tshirt._id)
        if (exits) {
            alert('alreafy added')
        }
        else {

            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
    }

    const handleRemoveItem = tshirt => {
        const remaining = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remaining)
    }



    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;