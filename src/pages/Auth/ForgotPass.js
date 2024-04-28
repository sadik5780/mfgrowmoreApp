import React, { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import telephone from "../../assets/images/icons/telephone.svg";
import otp_icon from "../../assets/images/icons/otp_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { DarkButton, HandleRoute } from "../commonComponents/commonComp";
import { useState } from "react";

const ForgotPass = () => {
  const navigate = useNavigate("");
 const handleRoute = (route) => {
    navigate(route);
  };
  const [seconds, setSeconds] = useState(60);
const [emailornumber, setEmailornumber] = useState("")
const[verifyOtp,setVerifyOtp] = useState("")
const[errMsg, setErrMsg] = useState({
  emailornumber:"",
  verifyOtp:"",
})
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Clean up the interval when the component unmounts or when seconds reach 0
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures that this effect runs only once

  const verifyOtpHandler=() => {
    if(verifyOtp.length=== 0) {
setErrMsg({...errMsg,verifyOtp:"please enter valid otp" })
  }
}


  return (
    <>
      <div className="authMain">
        <div className="login-left">
          <img src={logo} alt="" className="login_img" />
          <div className="signinForm">
            <h1 className="signInTxt">Forgot your password ?</h1> 
            <div className="inputBox">
              <button className="otpbtn" disabled={seconds > 0} onClick={()=>{setSeconds(60)}}>{seconds > 0 ?seconds:"Request OTP"}</button>
   
              {/* <button className="resendotpbtn">    {seconds > 0 ? (
        <p>Resend OTP in {seconds} seconds</p>
      ) : (
        <p>Time's up! Resending OTP...</p>
      )}</button> */}
              <label htmlFor="" className="emailLabel">
                Phone Number / Email
              </label>
              <img src={telephone} className="mailImg" alt="" />
              <input
                type="text"
                className="form-control formInput"
                placeholder="Enter your phone number / Email ID"
                onChange={(e)=>{
                  setErrMsg("")
                  setEmailornumber(e.target.value)
                }}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="" className="emailLabel">
                OTP
              </label>
              <img src={otp_icon} className="mailImg" alt="" />
              <input
                type="text"
                className="form-control formInput"
                placeholder="Enter OTP here..."
                onClick={(e)=>{setVerifyOtp(e.target.value)}}
              />
            </div>
            <div className="login btn-width-100">
              <DarkButton
                onClick={() => handleRoute("/ResetPass")}
                classbtn={"cx-btn-dark btn-width-100 btn-height font-17 mb-5"}
                btn={"Reset Password"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
