import React, { useState } from 'react'
import './Buyers.css'
import BuyersHeader from './BuyersHeader'
import Card from './Card'
import Vendors from './Vendors'
import { Vendor } from '../JS/Vendors'
import Cart from '../Each/Cart'
import { CgClose } from 'react-icons/cg'

const BuyersPage = () => {
  const [show, setShow] = useState(false)
  console.log()
  
  return (
    <div className='Buyers'>
       {
        show ? 
        <>
           <BuyersHeader/>
        <div className="CardHolder">
           {
            Vendor.map((e)=>(
                <Vendors info = {e} key={e.id}/>
            ))
           }
        </div>
        <div className="CartHolder">
            <div className="CartHeader">
              <CgClose onClick={()=>setShow(false)} className='logo' color='white' cursor="pointer" size={35}/>
            </div>
            <div className="CartWhole">
              <Cart/>
            </div>

          </div>
        </> 
        :
        <>
          <BuyersHeader setShow={setShow}/>
        <div className="CardHolder">
           {
            Vendor.map((e)=>(
                <Vendors info = {e} key={e.id}/>
            ))
           }
        </div>
        </>
       }
    </div>
  )
}

export default BuyersPage