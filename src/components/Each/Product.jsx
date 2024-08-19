import React, { useEffect, useState } from 'react'
import ProductHeader from '../Home/ProductHeader'
import './Prodct.css'
import Card from '../Home/Card'
import { food } from '../JS/Data'
import { CgClose } from 'react-icons/cg'
import 'animate.css'; 
import { useParams } from 'react-router-dom'
import Cart from './Cart'
import Checkout from '../Checkout/Checkout'


const Product = () => {
    const [show, setShow] = useState(false)
    const [checkOut, setCheckout] = useState(false)
    const [category, setCategory] = useState([])
    const {catname} = useParams()
   

  useEffect(()=>{
    const cat = food.filter((e)=> e.Category.toLowerCase() === catname)
    setCategory(food.filter((e)=> e.Category.toLowerCase() === catname))
  },[catname])


  return (
    <div className='Product'>
        {
          show ? 
          <>
            <ProductHeader setShow ={setShow}/>
          <div className="ProductCardHolder">
              {
                  category.map((e)=>(
                      <Card info={e} key={e.id}  />
                  ))
              }
          </div>
          <div className="CartHolder">
            <div className="CartHeader">
              <CgClose onClick={()=>setShow(false)} className='logo' color='white' cursor="pointer" size={35}/>
            </div>
            <div className="CartWhole">
              {
                checkOut ? <Checkout setCheckout= {setCheckout}/> : <Cart setCheckout= {setCheckout}/>
              }
            </div>

          </div>
          </>
          :
          <>
            <ProductHeader setShow={setShow}/>
          <div className="ProductCardHolder">
              {
                  category.map((e)=>(
                      <Card info={e} key={e.id} />
                  ))
              }
          </div>
          </>

        }
    </div>
  )
}

export default Product