import React from "react";
import styles from "./ExploreMenu.module.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className={styles.explore_menu} id="explore_menu">
      <h1>Explore Our Menu </h1>
      <p className={styles.explore_menu_text}>
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy and elevate your dining experience, one delicious
        meal at a time.
      </p>
      <div className={styles.explore_menu_list}>
        {
            menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className={styles.explore_menu_list_item}>
                        <img className={category===item.menu_name?`${styles.active}`:""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
        }
      </div>
      <hr/>
    </div>
  );
};

export default ExploreMenu;
