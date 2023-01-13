import {useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';

const Cart = () => {
    const {myCart, total, addToCart, setTotal} = useContext(CartContext)
    const navigate = useNavigate()

    const handleCheckout = ( ) => {
        setTotal(0)
        addToCart([{}])
    }

    const handleHome = () => {
        navigate("/dogs")
    }
    return (  
        <>
            <section className="cart-container">
                <div className="cart-header">Checkout:</div>
                <div className="cart-items">
                    {myCart.slice(1).map((item)=>{
                        return (
                            <div className="cart-item">
                                <img className='cart-item-img' src={item.imageUrl} alt='error'/>
                                {item.name} : ${item.price}
                            </div>
                        )
                    })}
                    <div className="cart-total">TOTAL: {total}$ </div>
                </div>
                <button className="cart-checkout" onClick={handleCheckout}> DONE </button>
                <button className="cart-gohome" onClick={handleHome}>RETURN DOGS</button>
            </section>
        </>
    );
}
 
export default Cart;