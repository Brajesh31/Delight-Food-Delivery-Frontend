import React from "react";
import styles from "./Footer.module.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.footer_content}>
        <div className={styles.leftSection}>
          <img className={styles.footer_logo} src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A numquam
            aliquid nostrum necessitatibus nesciunt magni ipsum, sint quo
            aliquam officia nam veritatis, exercitationem autem odit. Natus
            velit distinctio eius aliquam!
          </p>
          <div className={styles.social_media}>
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className={styles.center_section}>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.right_section}>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-6204777069</li>
            <li>rksharma23082002@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={styles.copyright_section}>
        Copyright 2024 © Tomato.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
