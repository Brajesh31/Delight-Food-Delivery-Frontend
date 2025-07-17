import { useContext, useEffect, useState } from "react";
import React from "react";
import { StoreContext } from "../../context/StoreContext";
import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount, deliveryFees } = useContext(StoreContext);
  // const [deliveryFees, setDeliveryFees] = useState(50)
  const navigate = useNavigate();

  // const [total, setTotal] = useState(0);   THIS WILL ALSO WORK IN CALCULATING TOTAL AMOUNT
  // let amount = 0;                          BUT WE WILL CALCULATE IT IN CONTEXT FILE, SO THAT IT COULD BE AVAILABLE TO EVERY PAGE
  // useEffect(() => {                        AND EVERY SECTION WITHOUT PROP DRILLING
  //   setTotal(amount);                      NOTE: THIS CODE IS WRITTEN BY ME 
  // });

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart_items}>
          <div className={styles.cart_items_title}>
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            // {amount += item.price * cartItems[item._id]}   THIS IS ALSO A PART OF MY LOGIC OF CALCULATING TOTAL
            return (
              <>
                <div
                  className={`${styles.cart_items_item} ${styles.cart_items_title}`}
                  key={index}
                >
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹ {item.price * cartItems[item._id]}</p>
                  <p
                    className={styles.cross}
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className={styles.cart_total}>
        <h2>Cart Totals</h2>
        <div>
          <div className={styles.cart_total_details}>
            <p>Subtotal</p>
            <p>₹ {getTotalAmount()}</p>
          </div>
          <hr />
          <div className={styles.cart_total_details}>
            <p>Delivery Fees</p>
            <p>₹ {deliveryFees}</p>
          </div>
          <hr />
          <div className={styles.cart_total_details}>
            <b>Total</b>
            <b>₹ {getTotalAmount()>0?getTotalAmount()+deliveryFees:getTotalAmount()}</b>
          </div>
        </div>
        <button onClick={()=>navigate('/orders')}>PROCEED TO CHECKOUT</button>
      </div>
    </>
  );
};

export default Cart;
