import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Scientic from '../Scientic/Scientic';
import './Main.css'

const Main = () => {
    const[ scientists, setScientists] = useState([]);
    const[cart, setCart] = useState([])

    useEffect(()=>{
        fetch('./scientists.JSON')
        .then(res => res.json())
        .then(data => setScientists(data))
    },[]);

    const handleToAdd = scientic => {
        const newCart = [...cart, scientic];
        setCart(newCart)
    }

    return (
        <div className = 'scientic-box'>
           <div className="scientic">
           {
                scientists.map(scientic => <Scientic
                    key = {scientic.key}
                     scientic = {scientic}
                     handleToAdd = {handleToAdd}
                ></Scientic>)
            }
               
            </div> 

            <div className="cart">
                <Cart cart = {cart}></Cart>
            </div>
           

        </div>
    );
};

export default Main;