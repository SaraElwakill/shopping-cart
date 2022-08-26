import React from 'react'
import './products/Products.scss'
const Button = ({ title, onClick, info }) => {
    return (
        <button className="btn" onClick={(e) => onClick(info)}>
            <span className="btnspan">{title}</span>
        </button>
    )
}

export default Button