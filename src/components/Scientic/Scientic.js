import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import './Scientic.css'


const Scientic = (props) => {
    // console.log(props)
    const{name, constant, nationatity, img, life, salary} = props.scientic;
    const element = <FontAwesomeIcon icon={faUserAstronaut} />
    return (
        <div className = 'scientic-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2>Name : {name}</h2>
                <h4>Constant : {constant}</h4>
                <h4>Nationatity : {nationatity}</h4>
                <h5>Life : {life}</h5>
                <h5>Salary : $ {salary}</h5>
            </div>
            
            <button 
                onClick = {()=>props.handleToAdd(props.scientic)}
            className = 'button'> {element} Add Scientic</button>
  
        </div>
    );
};

export default Scientic;