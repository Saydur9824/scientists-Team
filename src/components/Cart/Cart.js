import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const{cart} = props;
    let total = 0;
    let name =[]
    for(const scientic of cart){
        total = total + scientic.salary;
        name = name + scientic.name
    }
    
    return (
        <div className = 'cart-style'>
            <h2>Scientists Team</h2>
            <h2>Members : {props.cart.length}</h2>
            <h4>Total Salary : $ {total}</h4>
            <h4> Name :
                {
                     props.cart.map(single => <li>{single.name}</li>)
                }

            </h4>
          
        </div>
    );
};

export default Cart;