import React from "react";
import styles from "./ScrollTop.module.css";
import { useState, useEffect } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // Function to handle showing/hiding the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button onClick={scrollToTop} className={`${isVisible===true?styles.visible:styles.nonVisible} + ${styles.scrollButton}`}>
      ↑
    </button>
  );
};

export default ScrollTop;
