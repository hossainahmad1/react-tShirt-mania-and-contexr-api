import React from 'react';
import Special from '../special/Special';

const Myself = ({ house }) => {
    return (
        <div>
            <h4>Myself</h4>
            <p><small>house:{house}</small></p>
            <section>
                <Special></Special>
            </section>
        </div>
    );
};

export default Myself;