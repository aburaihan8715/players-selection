import React from 'react';
import './BudgetCart.css';

const BudgetCart = (props) => {
    const cart = props.cart;
    const totalSalary = cart.reduce((total, player) => total + player.salary, 0)

    return (
        <div className="budget_cart">
            <h3>Summary</h3>
            <h5>Total Players : {cart.length}</h5>
            <h5>Following Players Are Selected</h5>
            <ul>
                {
                    cart.map(element => <li>{element.name}</li>)
                }
            </ul>
            <h4>Total Budget : ${totalSalary}</h4>
        </div>
    );
};

export default BudgetCart;