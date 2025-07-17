import React, { useContext } from "react";
import styles from "./FoodDisplay.module.css";
import { StoreContext } from "../../context/StoreContext";
import FoodDisplayItem from "../FoodDisplayItem/FoodDisplayItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className={styles.food_display} id={styles.food_display}>
      <h2>Top Dishes for You</h2>
      <div className={styles.food_display_list}>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {   //IT DISPLAYS ALL ITEMS WHEN CATEGORY IS ALL, OTHERWISE IT CHECK IF THE
            return (                                                //CATEGORY OF THAT PARTICULAR INDEXED ITEM(MAP) IS SAME AS CATEGORY STATE 
              <FoodDisplayItem                                      //IF YES THEN IT WILL DISPLAY THAT, OTHERWISE IT DON'T DISPLAY.
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
