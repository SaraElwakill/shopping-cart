import React,{ useState } from 'react'
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';
import "./Products.scss";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cartSlice';





const Products = () => {
    const [filter, setFilter] = useState(true);
    const [isModallVisible,setIsModallVisible] = useState(false);
    const [data,setData] = useState('');
    const products = useSelector(state=> state.products)
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()

    const onChange =(product)=>{
        setIsModallVisible(true);
        setFilter(false);
        setData(product);
    }

    const onClick = (e,product) => {
        const theProduct = cartItems.find(x => x._id === product._id)
    
        if (theProduct) {
          const filteredCart = cartItems.filter(x => x._id !== theProduct._id)
          theProduct.qty += 1
          dispatch(cartActions.addItem([...filteredCart, theProduct]))  
          
    
        } else {
          dispatch(cartActions.addItem([...cartItems, product]))  
        }
      }



    return (
        


            <div className="card-wrapper">
                {isModallVisible ? <ProductModal 
                    product ={data} 
                    setIsModallVisible= {setIsModallVisible} 
                    isModallVisible ={isModallVisible} 
                    setFilter={setFilter}
                /> 

            :
            
                products.map((product,index) =>(
                    
                    <ProductCard 
                        style={{animation: `fadding 0.5s ${index* 0.2}s`}} 
                        key={product._id}  
                        product = {product} 
                        onChange={onChange} 
                        onClick ={onClick} 
                    />           
                ))
            
            }  
            </div>
    )
}

export default Products
