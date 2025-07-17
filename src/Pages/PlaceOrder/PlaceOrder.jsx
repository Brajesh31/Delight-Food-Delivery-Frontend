import React, { useContext } from 'react';
import styles from "./PlaceOrder.module.css";
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const {getTotalAmount, deliveryFees} = useContext(StoreContext);
  return (
    <form className={styles.place_order}>
      <div className={styles.place_order_left}>

        <p className={styles.title}>
          Delivery Information
        </p>

        <div className={styles.multi_fields}>
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />

        <div className={styles.multi_fields}>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className={styles.multi_fields}>
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone' />
      </div>

      <div className={styles.place_order_right}>
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
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder