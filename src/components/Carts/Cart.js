import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveItem }) => {


    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item....!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <h2>Tomar jonno akta nao</h2>
            <p>amar jonno ekta nio</p>

        </div>
    }
    else {
        message = <p>Thanks for buying</p>
    }

    return (
        <div>
            <h3 className={cart.length === 2 ? 'orange' : 'purple'}>Order Sumury</h3>
            <h5 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity:{cart.length}</h5>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >
                    {tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>ki jigaisi seta bolo</p> : <p> na hole breakup</p>
            }
            <p>and operator</p>
            {
                cart.length === 2 && <p>Double Items</p>
            }
            <p>or operator</p>
            {cart.length === 4 || <p>carta items na</p>}
        </div>
    );
};

export default Cart;



/* 
condisonal renduring
1.use element in a varriable  and then use if-else to set value;
2.ternary operator condition ? true: false;
3.&& operator (if condition is true, i want to something)
4.|| operator (if condition is false, i want to somethig)
5.

*/