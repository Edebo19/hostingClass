import React from 'react'
import './CartItem.css'
import { MdDelete, MdDeleteForever, MdDeleteOutline, MdDeleteSweep } from 'react-icons/md'
import { FaDeleteLeft } from 'react-icons/fa6'
import { LuDelete } from 'react-icons/lu'
import { useDispatch } from 'react-redux'
import { decrease, deleteItem, increase } from '../../Global/Slice'

const CartItem = ({item}) => {
    const dispatch = useDispatch()
  return (
    <div className='CartItem'>
        <div className="Image">
            <img src={item.image} alt="" />
        </div>
        <div className="NameTag">
            <h3>{item.name}</h3>
            <p>₦{item.price}</p>
        </div>
        <div className="DeletenQuantit">
            <div className="Top"><MdDelete onClick={()=> dispatch(deleteItem(item))} color='red' cursor="pointer" size={22}/></div>
            <div className="Holdquantity">
            <div className="Quantity">
                <p onClick={()=> dispatch(decrease(item))}>-</p>
                <h2>{item.Quantity}</h2>
                <p onClick={()=> dispatch(increase(item))}>+</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem