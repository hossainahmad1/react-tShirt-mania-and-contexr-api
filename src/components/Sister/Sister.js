import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Sister</h4>
            <p><small>house:{house}</small></p>
            <p><small>money:{money}</small></p>
            <button onClick={() => setMoney(money + 1000)}>add 1000</button>
        </div>
    );
};

export default Sister;