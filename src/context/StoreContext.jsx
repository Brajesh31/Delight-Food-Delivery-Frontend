import { createContext, useEffect } from "react";
import { food_list } from "../assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const[cartItems, setCartItems] = useState({})

    const addToCart = (itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else
        {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId)=>{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    // useEffect((itemId)=>{        THIS IS ONLY FOR VERIFICATION PURPOSE
    //     console.log(cartItems)
    // },[cartItems])


    const getTotalAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const [deliveryFees, setDeliveryFees] = useState(50);

    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalAmount,
        deliveryFees
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider