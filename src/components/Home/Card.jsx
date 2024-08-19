import React, { useEffect, useState } from 'react'
import './Buyers.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Global/Slice'

const Card = ({info}) => {
  const dispatch = useDispatch()
  
  return (
    <>
    <div className='Card'> 
        <div className="imageHolder">
            <img src={info.image} alt="" />
        </div>
        <div className="Text">
            <h2>{info.name}</h2>
            <div className="buttonHolder">
                <h4>₦{info.price}</h4>
                <button onClick={()=> dispatch(addToCart(info))}>Order</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Card