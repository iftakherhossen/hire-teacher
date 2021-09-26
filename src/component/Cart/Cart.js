import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { name, subject, url, salary } = props.teacher;

    return (
        <div>
            <div className="cart-list">
                <img src={url} alt="teacher" className="cart-img" />
                <h2 className="name">{name}</h2>
                <h2>{salary}</h2>
            </div>
        </div>
    );
};

export default Cart;