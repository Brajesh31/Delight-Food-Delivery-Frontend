import React, { useContext } from "react";
import styles from "./FoodDisplayItem.module.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplayItem = ({ id, name, image, price, description }) => {
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className={styles.food_display_item}>
      <div className={styles.food_display_item_imgContainer}>
        <img className={styles.food_display_item_img} src={image} alt="" />
        {
            !cartItems[id]?
            <img className={styles.add} onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
            :<div className={styles.food_display_item_counter}>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className={styles.food_display_item_info}>
        <div className={styles.food_display_item_rating}>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className={styles.food_display_item_desc}>{description}</p>
        <p className={styles.food_display_item_price}>₹{price}</p>
      </div>
    </div>
  );
};

export default FoodDisplayItem;
