import React from "react";
import logo from "../../assets/images/logo.png";
import teleCall from "../../assets/images/ic_call1.svg";
import telephone from "../../assets/images/icons/telephone.svg";
import otp_icon from "../../assets/images/icons/otp_icon.svg";
import lock from "../../assets/images/lock.svg";
import { Link, useNavigate } from "react-router-dom";
import { DarkButton, HandleRoute } from "../commonComponents/commonComp";

const ForgotPass = () => {
  const navigate = useNavigate("");

  const handleRoute = (route) => {
    navigate(route);
  };

  return (
    <>
      <div className="authMain">
        <div className="login-left">
          <img src={logo} alt="" className="login_img" />
          <div className="signinForm">
            <h1 className="signInTxt">Forgot your password ?</h1>
            <p className="signInDesc">
              If you forgot your password, Don't Worry ! <br /> You can request
              <Link className="link_common" to="/SignUp">
                {" "}
                New here !
              </Link>
            </p>
            <div className="inputBox">
              <button className="otpbtn">Request OTP</button>
              <button className="resendotpbtn">Re send OTP (26)</button>
              <label htmlFor="" className="emailLabel">
                Phone Number / Email
              </label>
              <img src={telephone} className="mailImg" alt="" />
              <input
                type="text"
                className="form-control formInput"
                placeholder="Enter your phone number / Email ID"
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
