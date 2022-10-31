import React from 'react';
import './Input.scss';

const Input = ({ clas, type, name, placeholder  }) => {
    return <input className={clas}  type={type} id={name} name={name} placeholder={placeholder} />
}

export default Input;