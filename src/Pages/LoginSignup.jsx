// import React from 'react'
import "./CSS/LoginSignup.css";
const LoginSignup=()=> {
  return (
 <div className="loginsignup">
  <div className="loginsignnup-container">
    <h1>Sign Up</h1>
    <div className="loginsignup-fields">
      <input type="text" placeholder="Your Name"/>
      <input type="email" placeholder="Your Email"/>
      <input type="Password" placeholder="You Password"/>
    </div>
    <button>Continue</button>
    <div className="loginsignup-login">
      Already have an account?<span>LOGIN HERE</span>
  <div className="loginsignup-agree">
    <input type="checkbox" name="" id=""/>
    <p>By continuing, i agree to the terms of use and privacy policy</p>
  </div>
    </div>
  </div>
 </div>
  )
}

export default LoginSignup