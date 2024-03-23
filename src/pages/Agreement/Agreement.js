import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Tab, Tabs } from "react-bootstrap";
import wallet_icon from "../../assets/images/icons/wallet_icon.svg";
import export_icon from "../../assets/images/icons/export_icon.svg";
import ic_rejected from "../../assets/images/ic_rejected.svg";
import ic_completed from "../../assets/images/ic_completed.svg";
import cat from "../../assets/images/cat.png";
import ic_filter from "../../assets/images/ic_filter.svg";
import { motion } from "framer-motion";
import { DarkButton, DonutChart } from "../commonComponents/commonComp";
import { Link, useNavigate } from "react-router-dom";

const Agreement = () => {
  const [viewIdForm, setviewIdForm] = useState(false);
  const [viewOtp, setviewOtp] = useState(false);
  const [personalInfo, setpersonalInfo] = useState(true);

  const aninations = {
    initial: { opacity: 0, x: 400 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  const navigate = useNavigate();

  return (
    <motion.div
      variants={aninations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className="appointment-wrapper reports_wrapper transaction_details_wrapper"
      id="cx-main"
    >
      <div className="agreement" id="agreement">
        <div className="wrapper-main">
          {viewIdForm && (
            <div className="create_id">
              <div class="title_wrapper">
                <h3 class="title">Create Customer ID</h3>
              </div>
              <div class="reg_id_fields">
                <div class="row">
                  <div class="col-lg-12 mb-2">
                    <label for="" class="pass_text">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Name as per Aadhaar..."
                      class="form-control"
                    />
                  </div>
                  <div class="col-lg-6 mb-2">
                    <label for="" class="pass_text">
                      Aadhaar Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Aadhaar Number..."
                      class="form-control"
                    />
                  </div>
                  <div class="col-lg-6 mb-2">
                    <div class="d-flex justify-content-between">
                      <label for="" class="pass_text">
                        Mobile Number
                      </label>
                      {/* <button class="resend_btn">Resend</button> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your mobile number..."
                      class="form-control"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label for="" class="pass_text">
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter New Password"
                      class="form-control"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label for="" class="pass_text">
                      Confirm Password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Account Number"
                      class="form-control"
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="btn_wrapper mt-3 mb-3">
                      <button
                        className="cx-btn-dark ms-auto"
                        onClick={() => {
                          setviewIdForm(false);
                          setviewOtp(true);
                        }}
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {viewOtp && (
            <>
              <div className="otp_wrapper success">
                <img src={ic_completed} alt="" />
                <p className="success_message">
                  ID successfully created for{" "}
                  <span className="username">John Doe</span> <br /> User Id :{" "}
                  <span className="userId">User Id</span> &nbsp;
                  <br /> password :{" "}
                  <span className="userPassword">Password</span>
                </p>
                <button
                  className="cx-btn-dark"
                  onClick={() => {
                    setviewIdForm(false);
                    setviewOtp(false);
                  }}
                >
                  Continue
                </button>
              </div>
              <div className="otp_wrapper failure">
                <img src={ic_rejected} alt="" />
                <p className="failure_message">
                  ID creation failed, please try again !
                </p>
                <button
                  className="cx-btn-dark mb-3 mt-3"
                  onClick={() => {
                    setviewIdForm(true);
                    setviewOtp(false);
                  }}
                >
                  Try Again
                </button>
              </div>
            </>
          )}

          {personalInfo && (
            <>
              <div className="presonal_info_wrapper">
                <div class="title_wrapper">
                  <h3 class="title">Personal Info</h3>
                </div>
                <div class="reg_id_fields">
                  <div class="row">
                    <div class="col-lg-6 mb-2">
                      <label for="" class="pass_text">
                       First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Name as per Aadhaar..."
                        class="form-control"
                      />
                       <label for="" class="pass_text">
                       Middle Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Name as per Aadhaar..."
                        class="form-control"
                      />
                       <label for="" class="pass_text">
                       Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Name as per Aadhaar..."
                        class="form-control"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label for="" class="pass_text">
                       Upload Photo
                      </label>
                      <input
                        type="file"
                        placeholder="Enter your Name as per Aadhaar..."
                        class="form-control"
                      />
                    </div> 
                    <div class="col-lg-6 mb-2">
                    <label for="" class="pass_text">
                      PAN number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Name as per Aadhaar..."
                        class="form-control"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <label for="" class="pass_text">
                        Aadhaar Number
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your Aadhaar Number..."
                        class="form-control"
                      />
                    </div>
                    <div class="col-lg-6 mb-2">
                      <div class="d-flex justify-content-between">
                        <label for="" class="pass_text">
                         Age
                        </label>
                        {/* <button class="resend_btn">Resend</button> */}
                      </div>
                      <input
                        type="text"
                        placeholder="Enter your mobile number..."
                        class="form-control"
                      />
                    </div>
                    <div class="col-lg-6">
                      <label for="" class="pass_text">
                        Gender
                      </label>
                      <input
                        type="text"
                        placeholder="Enter New Password"
                        class="form-control"
                      />
                    </div>
                    <div class="col-lg-6">
                      <label for="" class="pass_text">
                        Confirm Password
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Account Number"
                        class="form-control"
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="btn_wrapper mt-3 mb-3">
                        <button
                          className="cx-btn-dark ms-auto"
                          onClick={() => {
                            // setviewIdForm(false);
                            // setviewOtp(true);
                          }}
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Agreement;
