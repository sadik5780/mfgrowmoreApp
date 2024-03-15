import React from "react";
import logo from "../../assets/images/logo.png"; 
import mailBox from "../../assets/images/icons/emailSvg.svg";
import passBox from "../../assets/images/icons/lock.svg";
import eye from "../../assets/images/icons/eye.svg";
import { Link, Route, useNavigate } from "react-router-dom";
import { DarkButton } from "../commonComponents/commonComp";

const Login = () => {
  //  const handleNavigation = (route) => {
  //     // const navigate = useNavigate();
  //     return (
  //       navigate(route)
  //     )
  //   }
  const navigate = useNavigate();

  return (
    <>
      <div className="authMain">
        <div className="login-left">
          <img src={logo} alt="" className="login_img" />
          <div className="signinForm">
            <h1 className="signInTxt">Sign in</h1>
            <p className="signInDesc">
              If you don't have an account registered <br /> You can
              <Link className="link_common" to="/SignUp">
                Register here !
              </Link>
            </p>
            <div className="inputBox">
              <label htmlFor="" className="emailLabel">
                Email
              </label>
              <img src={mailBox} className="mailImg" alt="" />
              <input
                type="text"
                className="form-control formInput"
                placeholder="Enter your Password"
              />
            </div>
            <div className="inputBox">
              <label htmlFor="" className="emailLabel">
                Password
              </label>
              <img src={passBox} className="mailImg" alt="" />
              <img src={eye} className="eyeImg" alt="" />
              <input
                type="password"
                className="form-control formInput"
                placeholder="Enter your email address"
              />
              <div className="belowChecks">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
                <div className="forgetPass">
                  <Link to="/ForgotPass" className="">
                    Forgot Password ?
                  </Link>
                </div>
              </div>
            </div>
            <div className="login btn-width-100">
              <DarkButton
                onClick={() => navigate("/Dashboard")}
                // onClick={() => handleNavigation("/Dashboard")}

                classbtn={"cx-btn-dark btn-width-100 btn-height font-17"}
                btn={"Login"}
              />
            </div>

            {/* <div className="social-account-login">
                  <label htmlFor="">or continue with</label>
                  <div className="social-btns">
                    <Link className="fb">
                      <img src={fb} alt="" />
                    </Link>
                    <Link className="fb">
                      <img src={apple} alt="" />
                    </Link>
                    <Link className="fb">
                      <img src={google} alt="" />
                    </Link>
                  </div>
                </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
