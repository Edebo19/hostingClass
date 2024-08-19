import React from 'react'
import './Vendors.css'
import { useNavigate } from 'react-router-dom'

const Vendors = ({info}) => {
  console.log(info.Goods.toLowerCase())
  const Nav = useNavigate()
  return (
    <div className='Vendors' onClick={()=>Nav(`/menu-page/${info.Goods.toLowerCase()}`)}>
        <div className="VendorsLeft">
            <h3>{info.vendorname}</h3>
            <p>{info.Goods}</p>
        </div>
        <div className="VendorsRight">
            <img src={info.image} alt="" />
        </div>
    </div>
  )
}

export default Vendors