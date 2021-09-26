import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let name = '';

    for (const teacher of cart) {
        total = total + teacher.salary;
        name = name + " " + teacher.name + ',';
    }

    return (
        <div>
            <h1>Teachers Hired: {props.cart.length}</h1>
            <h2 className="cart-list">Teachers: {name}</h2>
            <div className="total-budget">
                <h1>Total Cost: {total}</h1>
            </div>
        </div>
    );
};

export default Cart;