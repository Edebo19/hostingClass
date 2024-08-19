import React from 'react'
import './Cart.css'
import { FaCartArrowDown } from "react-icons/fa";
import { MdNoFood } from "react-icons/md";
const CartNone = () => {
  return (
    <div className='CartNone'>
        <MdNoFood size={170}/>
         <h3>You don't have any orders. Please, select an item.</h3>
    </div>
  )
}

export default CartNone