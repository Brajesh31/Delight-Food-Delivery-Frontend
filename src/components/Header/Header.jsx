import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_content}>
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted ewith the finest ingredients and cuilinary expertise. Our
          mission is to satisfy and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
