import React from 'react'
import {words} from '../../words'

const ProductModal = ({product, setIsModallVisible, setFilter}) => {

    const handleOk = () => {
        setIsModallVisible(false);
        setFilter(true);
    };
    
    
    return (
        
        <div className="modal-card">
            <div className="modal-imgframe">
                <img src={product.imageUrl} alt={product.title} />
                <div className="modal-info">
                    <p><span>{words.description }</span> { product.description}</p>
                    <p><span>{words.price}</span> {product.price}$</p>
                </div>
            </div>
            
            <div className="product-action">
                <button className="btn" onClick={handleOk}>
                    <span className="btnspan">Return</span>
                </button>
            </div>
        </div>
    
    )
}

export default ProductModal
