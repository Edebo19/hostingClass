import React, { useEffect, useState } from 'react'
import './Cart.css'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../Global/Slice'
import CartNone from './CartNone'
import { useNavigate } from 'react-router-dom'


const Cart = ({setCheckout}) => {
    const {cartArr, total} = useSelector((state)=> state)
    const dispatch = useDispatch()
    const [TotalQuantity, setTotalQuantity] = useState(0)
    useEffect(()=>{
        setTotalQuantity(cartArr.reduce((p, e)=>p + e.Quantity, 0))
    },[cartArr])
    const Nav = useNavigate()
    const Proceed =()=>{
        setCheckout(true),
        Nav("/checkout")
    }
  return (
 <>
 {
    cartArr.length !== 0 ?
    <div className='Cart'>
    <div className="CartMainHeader">
        <div className="QandTotal">
            <p>Quantity: {TotalQuantity}</p>
            <p>Total: ${total}</p>
        </div>
        <div className="clearOrder">
            <button onClick={()=> dispatch(clearCart(cartArr))}>Clear Order</button>
        </div>
    </div>
    <div className='MainCartBody'>
        
    {
        cartArr.map((e)=>(
            <CartItem item={e} key={e.id}/>
        ))
    }
    </div>
    <div className="Footer">
        <button onClick={Proceed}>Proceed to Checkout</button>
    </div>
        
</div> :
<CartNone/>
 }
 </>
  )
}

export default Cart