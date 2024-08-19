import React, { useState } from 'react'
import './Checkout.css'
import { LuLocate } from 'react-icons/lu'

const Checkout = () => {
    const [showUp, setShowUp] = useState(0)
    const food = [
        {
            id: 4,
            name: "Fried Rice and Turkey",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyL52dwSxiPfXmMn6Vbw71M8srMFV5YAZyrg&s",
            description: "",
            Category:"Food",
            price: 2000,
            vendorname: "Iya Bolu"
        },
        {
            id: 5,
            name: "Spaghetti and Turkey",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnthpx9j8a4rC-gQzFUVilxS0crIDqTvrFg&s",
            description: "",
            Category:"Food",
            price: 2000,
            vendorname: "Iya Bolu"
        },
    ]
    const snacks = [
        {
            id: 6,
            name: "Eggroll",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYEaKOhN0BJXWnNAHWenFsoxoBVooqxgf0DHXiOv9OJvscJXsigF0hy7d6rD-CM4FK2g&usqp=CAU",
            description: "",
            Category:"Snacks",
            price: 500,
            vendorname: "Iya Bolu"
        },
        {
            id: 7,
            name: "MeatPie",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7juDz5fwf6dOKGJgnZblCxRxYZMSRhJUeA&s",
            description: "",
            Category:"Snacks",
            price: 2000,
            vendorname: "Iya Bolu"
        },
    ]
  return (
    <div className='CheckoutBody'>
        {
            showUp == 0 ?
            <div className="CheckoutHolder">
            <div className="PaymentMethod">
                <div className="PaymentHeader">
                    <h3>Select Payment method:</h3>
                </div>
                
            </div>
            <div className="PaymentBody">
                <div className="VendorCheckoutBody">
                    <div className="VendHeader">
                        <h5>Mama Rita</h5>
                        <p>Total: ₦2800</p>
                    </div>
                    <div className="VendItems">
                    {
                        food.map((e)=> (
                            <div className="vendCard">
                        <div className="imageCircle">
                            <img src={e.image} alt="" />
                        </div>
                        <div className="pricename">
                            <h3>{e.name}</h3>
                            <p>₦{e.price}</p>
                        </div>
                        <div className="QuantityVend">
                            <div className="MainQty">
                                <h4>Quantity: 0</h4>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                    </div>
                    <div className="vendFooter">
                        <button className="paymentOnDelivery" onClick={()=> setShowUp(1)}>Pay on Delivery</button>
                        <button className="paymentOnPickUp" onClick={()=> setShowUp(2)}>Pay on PickUp</button>
                    </div>
                </div>
            </div>
            
        </div> : showUp === 1 ?
        <div className="CheckoutHolder">
        <div className="PaymentMethod">
            <div className="PaymentHeader">
                <h3>Select Payment method:</h3>
            </div>
            
        </div>
        <div className="PaymentBody">
            <div className="VendorCheckoutBody">
                <div className="VendHeader">
                    <h5>Mama Rita</h5>
                    <p>Total: ₦2800</p>
                </div>
                <div className="VendItems">
                    {
                        food.map((e)=> (
                            <div className="vendCard">
                        <div className="imageCircle"></div>
                        <div className="pricename">
                            <h3>Jollof rice</h3>
                            <p>₦800</p>
                        </div>
                        <div className="QuantityVend">
                            <div className="MainQty">
                                <h4>Quantity: 0</h4>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                </div>
                <div className="vendFooter">
                    <button className="paymentOnDelivery">Pay on Delivery</button>
                    <button className="paymentOnPickUp">Pay on PickUp</button>
                </div>
            </div>
        </div>
         <div className="Delivery">
            <div className="Input">
                <input type="text" placeholder='Address' required />
                <button type='Submit' onClick={()=> setShowUp(0)}>Submit</button>
            </div>
        </div> 
        
    </div> :  
            <div className="CheckoutHolder">
            <div className="PaymentMethod">
                <div className="PaymentHeader">
                    <h3>Select Payment method:</h3>
                </div>
                
            </div>
            <div className="PaymentBody">
                <div className="VendorCheckoutBody">
                    <div className="VendHeader">
                        <h5>Mama Rita</h5>
                        <p>Total: ₦2800</p>
                    </div>
                    <div className="VendItems">
                    {
                        food.map((e)=> (
                            <div className="vendCard">
                        <div className="imageCircle"></div>
                        <div className="pricename">
                            <h3>Jollof rice</h3>
                            <p>₦800</p>
                        </div>
                        <div className="QuantityVend">
                            <div className="MainQty">
                                <h4>Quantity: 0</h4>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                    </div>
                    <div className="vendFooter">
                        <button className="paymentOnDelivery">Pay on Delivery</button>
                        <button className="paymentOnPickUp">Pay on PickUp</button>
                    </div>
                </div>
            </div>
            {/* <div className="Delivery">
                <div className="Input">
                    <input type="text" placeholder='Address' required />
                    <button type='Submit'>Submit</button>
                </div>
            </div> */}
            <div className="Delivery">
                <div className="Input">
                    <div className="holdInputt">
                    <h4>Our Address:</h4>
                <p><LuLocate/> 123, Mokoya street, Lagos Nigeria.</p>
                    </div>
                    <div className="ok">
                        <button  onClick={()=> setShowUp(0)}>Ok</button>
                    </div>
                </div>
            </div>
            
        </div>
        }
        
        
    </div>
  )
}

export default Checkout