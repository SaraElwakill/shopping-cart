import React from 'react'
import Fade from 'react-reveal/Fade'


const ProductCard = ({product, onChange, onClick, style}) => {
    
    return (
        <Fade left cascade>

            <div style={style}  className="product-card">
                <div className="product-imgframe" onClick={(e)=>onChange(product)}>
                        <img src={product.imageUrl} alt={product.title} />
                </div>
            
                    <div className="product-info">
                        <p>{product.title}</p>
                        <p>{product.price}$</p>
                    </div>
            
                <div className="product-action">
                    <button className="btn" onClick={(e)=>onClick(e,product)}>
                        <span className="btnspan">Add to cart</span>
                    </button>
                </div>
            </div>   
        </Fade>
    );
}

export default ProductCard;
