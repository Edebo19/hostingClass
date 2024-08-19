import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartArr: [], 
    total: 0,
    userBox:{
        vendors: [],
        buyers: [],
    },
    loginInfo:{
        isLoggedIn: false,
        loggedInUser:{} 
    }
}
const FoodApp = createSlice({
    name: "App",
    initialState,
    reducers:{
        signup: (state, { payload }) => {
            if (payload.role === "vendor") {
              state.userBox.vendors.push(payload);
            } else {
              state.userBox.buyers.push(payload); 
            }
          },
        buyerLogin:(state, {payload})=>{
            const CheckBuyer = state.userBox.buyers.findIndex((e)=> e.email === payload.email)
            if (CheckBuyer !== -1) {
                if (state.userBox.buyers[CheckBuyer].password === payload.password) {
                    state.loginInfo.isLoggedIn = true
                    state.loginInfo.loggedInUser = payload
                    state.userBox.buyers = payload
                    
                } else {
                    throw new Error("Incorrect Password")
                }

            } else {
                throw new Error("User not found, Check email")
                
            }
        },
        vendorLogin:(state, {payload})=>{
            const checkVendor = state.userBox.vendors.findIndex((e)=> e.email === payload.email)
            if (checkVendor !== -1) {
                if (state.userBox.vendors[checkVendor].password === payload.password) {
                    state.loginInfo.isLoggedIn = true
                    state.loginInfo.loggedInUser =  payload
                    state.userBox.vendors = payload
                } else {
                    throw new Error("Incorrect Password")
                }
            } else {
                throw new Error("User not found, check email")
            }
        },
        addToCart:(state, {payload})=>{
            // state.cartArr.push(payload)
            const Iterate = state.cartArr.findIndex((e)=> e.id === payload.id)
            if (Iterate === -1) {
                state.cartArr.push({...payload, Quantity: 1})
                state.total = state.cartArr.reduce((p, e) => p + (e.Quantity* e.price),0)
            } else {
                let AlreadyExisting = state.cartArr[Iterate]
                AlreadyExisting.Quantity += 1;
                state.total = state.cartArr.reduce((p, e) => p + (e.Quantity* e.price),0)
            }
        },
        clearCart:(state)=>{
            state.cartArr =[]
            state.total = 0
        },
        deleteItem:(state, {payload})=>{
            const remove = state.cartArr.filter((e)=> e.id !== payload.id)
            // state.total = 0
            state.cartArr = remove
        },
        increase: (state, {payload})=>{
            state.cartArr = state.cartArr.map((e)=>{
                if (e.id === payload.id) {
                    e.Quantity +=1;
                    // e.totalPrice = e.Quantity * e.price;
                    state.total = state.cartArr.reduce((p, e)=> p + (e.Quantity*e.price), 0)

                    return e
                } else {
                    return e
                }
                
            })  
        },
        decrease: (state, {payload})=>{
            const check= state.cartArr.findIndex((e)=> e.id === payload.id)
            if (state.cartArr[check].Quantity=== 1) {
                state.cartArr= state.cartArr.filter((e)=> e.id !== payload.id);
            } else{
                 state.cartArr = state.cartArr.map((e)=>{
                if (e.id === payload.id) {
                    e.Quantity -=1
                    // e.totalPrice = e.Quantity * e.price;
                    state.total = state.cartArr.reduce((p, e)=> p + (e.Quantity*e.price), 0)
                    return e
                } else {
                    return e
                }
                
            })
            }
           
        },
        logout:(state)=>{
            state.cartArr=[]
            state.loginInfo.isLoggedIn = false
            state.total = 0
            state.loginInfo.loggedInUser = {}
        }
    }
})

export const { addToCart, logout, clearCart, signup, vendorLogin, buyerLogin, deleteItem, increase, decrease} = FoodApp.actions
export default FoodApp.reducer