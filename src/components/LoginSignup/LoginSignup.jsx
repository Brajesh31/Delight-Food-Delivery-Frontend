import React, { useState, useEffect} from "react";
import styles from "./LoginSignup.module.css";
import cross from "../../assets/cross_icon.png";

const LoginSignup = ({setShowLogin}) => {


  const [loggedIn, setLoggedIn] = useState("Sign Up");    //HELP TO FREEZE THE BACKGROUND WHEN THE LOGIN/SIGNUP FORM IS OPEN
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);


  return (
    <div className={styles.login_popup}>
      <form className={styles.login_popup_container}>
        <div className={styles.form_title}>
          <h2>{loggedIn}</h2>
          <img src={cross} alt="close" onClick={()=>setShowLogin(false)} />
        </div>
        <div className={styles.login_popup_inputs}>
          {loggedIn === "Sign Up" ? (
            <input placeholder="Your Name" type="text" required></input>
          ) : (
            <></>
          )}
          <input type="Email" placeholder="Your Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button>{loggedIn === "Sign Up" ? "Create Account" : "Login"}</button>
        {loggedIn === "Sign Up" ? (
          <div className={styles.login_popup_terms_conditions}>
            <input type="checkbox" required></input>
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
            <p>Already have an account?<span onClick={()=>setLoggedIn("Login")}>Login here</span></p>
          </div>
        ) : (
          <><p>Create a new account?<span onClick={()=>setLoggedIn("Sign Up")}>Click here</span></p></>
        )}    
      </form>
    </div>
  );
};

export default LoginSignup;
