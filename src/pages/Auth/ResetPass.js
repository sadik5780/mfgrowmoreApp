import React from "react";
import logo from "../../assets/images/logo.png";
import teleCall from "../../assets/images/icons/telephone.svg";
import insiderImg from "../../assets/images/icons/landigIcon.svg";
import lock from "../../assets/images/icons/lock.svg";
import otp_icon from "../../assets/images/icons/otp_icon.svg";
import eye from "../../assets/images/icons/eye.svg";
import reset_pass from "../../assets/images/reset_pass.svg";
import fb from "../../assets/images/fb.svg";
import apple from "../../assets/images/apple.svg";
import google from "../../assets/images/google.svg";
import { Link, useNavigate } from "react-router-dom";
import { DarkButton,HandleRoute } from "../commonComponents/commonComp";

const ResetPass = () => {
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
            <h1 className="signInTxt">Reset your password ?</h1>
            <p className="signInDesc">
              If you forgot your password, Don't Worry ! <br /> You can request
              <Link className="link_common" to="/ForgotPass"> 
                New here !
              </Link>
            </p>
            <div className="inputBox">
              <label htmlFor="" className="emailLabel">
                Create New Password
              </label>
              <img src={lock} className="mailImg" alt="" /> 
              <img src={eye} className="eyeImg" alt="" />
              <input
                type="text"
                className="form-control formInput"
                placeholder="Enter your new password"
              />
            </div>
            <div className="inputBox">
              <label htmlFor="" className="emailLabel">
                Re-enter Password
              </label>
              <img src={lock} className="mailImg" alt="" />
              <img src={eye} className="eyeImg" alt="" />
              <input
                type="text"
                className="form-control formInput"
                placeholder="Re-enter your Password"
              />
            </div>
            <div className="login btn-width-100">
              <DarkButton
                 onClick={() => handleRoute("/")}
                classbtn={"cx-btn-dark btn-width-100 btn-height font-17"}
                btn={"Reset Password"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
