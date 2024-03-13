import React from "react";
import logo from "../../assets/images/logo.png";
import teleCall from "../../assets/images/ic_call1.svg";
import email_icon from "../../assets/images/icons/email.svg";
import user_icon from "../../assets/images/icons/user_icon.svg";
import otp_icon from "../../assets/images/icons/otp_icon.svg";
import telephone from "../../assets/images/icons/telephone.svg";
import login_img from "../../assets/images/login_img_1.svg";
import { Link, useNavigate } from "react-router-dom";
import { DarkButton } from "../commonComponents/commonComp";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="authMain">
        <div className="row">
          <div className="col-md-6 col-lg-6">
           <img src={logo} alt="" className="login_img"/>
            <div className="signinForm signUp">
              <h1 className="signInTxt">Sign up</h1>
              <p className="signInDesc">
                If you already have an account register <br /> You can
                <Link className="link_common" to="/">
                  Login here !
                </Link>
              </p>
              <div className="inputBox">
                <label htmlFor="" className="emailLabel">
                  First Name
                </label>
                <img src={user_icon} className="mailImg" alt="" />
                <input
                  type="text"
                  className="form-control formInput"
                  placeholder="Enter your First name"
                />
              </div>
              <div className="inputBox">
                <label htmlFor="" className="emailLabel">
                  Last Name
                </label>
                <img src={user_icon} className="mailImg" alt="" />
                <input
                  type="text"
                  className="form-control formInput"
                  placeholder="Enter your Last name"
                />
              </div>
              <div className="inputBox">
                <label htmlFor="" className="emailLabel">
                  Email
                </label>
                <img src={email_icon} className="mailImg" alt="" />
                <input
                  type="text"
                  className="form-control formInput"
                  placeholder="Enter your Email"
                />
              </div>
              <div className="inputBox">
                <label htmlFor="" className="emailLabel">
                  Phone Number
                </label>
                <img src={telephone} className="mailImg" alt="" />
                <input
                  type="text"
                  className="form-control formInput"
                  placeholder="Enter your phone number"
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
              <div className="inputBox">
                <div className="belowChecks">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      I agree with
                      <Link className="link_common" to="#">
                        terms and conditions
                      </Link>
                    </label>
                  </div>
                </div>
              </div>
              <div className="login btn-width-100">
                <DarkButton
                onClick={()=>navigate('/GeneralInfo')}
                  classbtn={"cx-btn-dark btn-width-100 btn-height font-17 mb-5"}
                  btn={"Register"}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
          <div className="landingImg">
              <div className="phone-no">
                <img src={teleCall} alt="" />
                <label htmlFor="">9999999999</label>
              </div>
              <div className="img-container">
                <div className="big-img">
                  <img src={login_img} alt="" />
                </div>
                <div>
                  <h2>Sign in to Veterianry App</h2>
                  <p>Lets get started !</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
