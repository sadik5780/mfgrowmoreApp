import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Tab, Tabs } from "react-bootstrap";
import wallet_icon from "../../assets/images/icons/wallet_icon.svg";
import export_icon from "../../assets/images/icons/export_icon.svg";
import ic_rejected from "../../assets/images/ic_rejected.svg";
import ic_completed from "../../assets/images/ic_completed.svg";
import cat from "../../assets/images/cat.png";
import ic_filter from "../../assets/images/ic_filter.svg";
import ic_export from "../../assets/images/icons/export_icon.svg";
import { motion } from "framer-motion";
import { DarkButton, DonutChart } from "../commonComponents/commonComp";
import { Link, useNavigate } from "react-router-dom";
import PaginationComp from "../../sharedComponent/PaginationComp";
const IdCreateForm = () => {
  const [viewIdForm, setviewIdForm] = useState(true);
  const [viewOtp, setviewOtp] = useState(false);
  const [personalInfo, setpersonalInfo] = useState(false);
  const [bankinginfo, setbankinginfo] = useState(false);
  const [nomineeinfo, setnomineeinfo] = useState(false);
  const [uploadDocs, setuploadDocs] = useState(false);
  const [selectPlan, setselectPlan] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handlePlan = (event) => {
    setSelectedOption(event.target.value);
    setbankinginfo(false);
  };

  // Image Preview
  const [file, setFile] = useState();
  const [imagePreview, setImagePreview] = useState();

  function handleChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setImagePreview(URL.createObjectURL(selectedFile));
  }

  function removeImage() {
    setFile(null);
    setImagePreview(null);
  }

  const navigate = useNavigate();

  return (
    <>
      {viewIdForm && (
        <div className="wrapper-main">
          <div className="create_id">
            <div className="title_wrapper">
              <h3 className="title">Create Customer ID</h3>
            </div>
            <div className="reg_id_fields">
              <div className="row">
                <div className="col-lg-12 mb-2">
                  <label htmlFor="" className="pass_text">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Name as per Aadhaar..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <label htmlFor="" className="pass_text">
                    Aadhaar Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Aadhaar Number..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="" className="pass_text">
                      Mobile Number
                    </label>
                    {/* <button  className="resend_btn">Resend</button> */}
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your mobile number..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <label htmlFor="" className="pass_text">
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter New Password"
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <label htmlFor="" className="pass_text">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Account Number"
                    className="form-control"
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
        </div>
      )}

      {viewOtp && (
        <>
          <div className="wrapper-main">
            <div className="otp_wrapper success">
              <img src={ic_completed} alt="" />
              <p className="success_message">
                ID successfully created for{" "}
                <span className="username">John Doe</span> <br /> User Id :{" "}
                <span className="userId">User Id</span> &nbsp;
                <br /> password : <span className="userPassword">Password</span>
              </p>
              <button
                className="cx-btn-dark"
                onClick={() => {
                  setviewIdForm(false);
                  setviewOtp(false);
                  setpersonalInfo(true);
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
          </div>
        </>
      )}

      {personalInfo && (
        <>
          <div className="wrapper-main">
            <div className="presonal_info_wrapper">
              <div className="title_wrapper">
                <h3 className="title">Personal Info</h3>
              </div>
              <div className="reg_id_fields">
                <div className="row">
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name as per Aadhaar..."
                      className="form-control"
                    />
                    <label htmlFor="" className="pass_text">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your middle name as per Aadhaar..."
                      className="form-control"
                    />
                    <label htmlFor="" className="pass_text">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name as per Aadhaar..."
                      className="form-control"
                    />
                  </div>
                  {!imagePreview && (
                    <div className="col-lg-6 mb-2">
                      <label htmlFor="" className="pass_text">
                        Upload Photo
                      </label>
                      <input
                        type="file"
                        accept=".jpg, .jpeg, .png"
                        placeholder="Enter your Name as per Aadhaar..."
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  )}
                  {/* Other input fields */}
                  {imagePreview && (
                    <div className="col-lg-6 mb-2">
                      <div className="imgPre_wrapper">
                        <img src={imagePreview} alt="" />
                        {/* <button onClick={removeImage} className="cx-btn-dark mt-2">Remove</button> */}
                        <img
                          src={ic_rejected}
                          onClick={removeImage}
                          className="removebtn"
                          alt=""
                        />
                      </div>
                    </div>
                  )}
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      PAN number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your PAN number..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Aadhaar Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your Aadhaar Number..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="" className="pass_text">
                        Age
                      </label>
                      {/* <button  className="resend_btn">Resend</button> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Enter your age..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Gender
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your gender"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-12 mb-2">
                    <div className="row">
                      <div className="col-lg-12">
                        <label htmlFor="" className="pass_text">
                          Address for communication
                        </label>
                      </div>

                      <div className="col-lg-6">
                        {" "}
                        <input
                          type="text"
                          placeholder="Enter address line 1"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6">
                        <input
                          type="text"
                          placeholder="Enter city"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6">
                        {" "}
                        <input
                          type="text"
                          placeholder="Enter pincode"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6">
                        {" "}
                        <input
                          type="text"
                          placeholder="Enter address line 2"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6">
                        {" "}
                        <input
                          type="text"
                          placeholder="Enter state"
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6"></div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn_wrapper mt-3 mb-3">
                      <button
                        className="cx-btn-dark ms-auto"
                        onClick={() => {
                          setviewIdForm(false);
                          setviewOtp(false);
                          setpersonalInfo(false);
                          setnomineeinfo(true);
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {nomineeinfo && (
        <>
          <div className="wrapper-main">
            <div className="title_wrapper">
              <h3 className="title">Nominee Details</h3>
            </div>
            <div className="reg_id_fields">
              <div className="row">
                <div className="col-lg-6 mb-2">
                  <label htmlFor="" className="pass_text">
                    Nominee Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter nominee name..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <label htmlFor="" className="pass_text">
                    AADHAAR Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter nominee aadhaar number..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <div className="d-flex justify-content-between">
                    <label htmlFor="" className="pass_text">
                      Age
                    </label>
                    {/* <button  className="resend_btn">Resend</button> */}
                  </div>
                  <input
                    type="text"
                    placeholder="Enter nominee age..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <label htmlFor="" className="pass_text">
                    Gender
                  </label>
                  <input
                    type="text"
                    placeholder="Enter nominee gender..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <label htmlFor="" className="pass_text">
                    Relation
                  </label>
                  <input
                    type="text"
                    placeholder="Enter nominee relation..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <label htmlFor="" className="pass_text">
                    Pan no.
                  </label>
                  <input
                    type="text"
                    placeholder="Enter nominee pan no..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-6 mb-2">
                  <label htmlFor="" className="pass_text">
                    Nominee Address
                  </label>
                  <input
                    type="text"
                    placeholder="Enter nominee address..."
                    className="form-control"
                  />
                </div>
                <div className="col-lg-12">
                  <div className="btn_wrapper mt-3 mb-3">
                    <button
                      className="cx-btn-dark ms-auto"
                      onClick={() => {
                        setnomineeinfo(false);
                        setuploadDocs(true);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {uploadDocs && (
        <>
          <div className="wrapper-main">
            <div className="title_wrapper">
              <h3 className="title">Upload Documents</h3>
            </div>
            <div className="reg_id_fields">
              <div className="row">
                {!imagePreview && (
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Select all the documents to upload
                    </label>
                    <input
                      type="file"
                      multiple
                      accept=".jpg, .jpeg, .png"
                      placeholder="Enter your Name as per Aadhaar..."
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                )}
                {/* Other input fields */}
                {imagePreview && (
                  <div className="col-lg-6 mb-2">
                    <div className="imgPre_wrapper">
                      <img src={imagePreview} alt="" />
                      {/* <button onClick={removeImage} className="cx-btn-dark mt-2">Remove</button> */}
                      <img
                        src={ic_rejected}
                        onClick={removeImage}
                        className="removebtn"
                        alt=""
                      />
                    </div>
                  </div>
                )}
                <div className="col-lg-12">
                  <div className="btn_wrapper mt-3 mb-3">
                    <button
                      className="cx-btn-dark ms-auto"
                      onClick={() => {
                        setuploadDocs(false);
                        setselectPlan(true);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {selectPlan && (
        <>
          <div className="wrapper-main">
            <div className="title_wrapper">
              <h3 className="title">Investment Plans</h3>
            </div>
            <div className="planSelect">
              <select value=""
                className="form-select"
                aria-label="Default select example"
                value={selectedOption}
                onChange={handlePlan}
              >
                <option value="">Please select an option</option>
                <option value="pre">Pre Investment</option>
                <option value="daily">Daily SIP</option>
                <option value="monthly">Monthly SIP</option>
              </select>
            </div>

            {/* {selectedOption === '1' && <></>} */}
            {selectedOption === "pre" && (
              <div className="reg_id_fields mt-3">
                <div className="title_wrapper">
                  <h3 className="title">Pre Investment Details</h3>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Investment Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Enter investment amount..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Mode of payment
                    </label>
                    <select value="cash"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="cash">Cash</option>
                      <option value="rtgs">RTGS</option>
                      <option value="upi">UPI</option>
                      <option value="cheque">Cheque</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="" className="pass_text">
                        Investment Tenure (In months)
                      </label>
                      {/* <button  className="resend_btn">Resend</button> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Enter investment tenure..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Cheque no.
                    </label>
                    <input
                      type="text"
                      placeholder="Enter cheque number..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Agreement start date
                    </label>
                    <input
                      type="date"
                      //   placeholder="Enter nominee relation..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Agreement end date
                    </label>
                    <input
                      type="date"
                      //   placeholder="Enter nominee pan no..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="row">
                      <div className="col-lg-6">
                        <label htmlFor="" className="pass_text">
                          Profit upto
                        </label>
                        <input
                          type="text"
                          placeholder="Enter nominee address..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="" className="pass_text">
                          One time / per month
                        </label>
                        <select value=""
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="" selected>
                            Select Frequency
                          </option>
                          <option value="">One Time</option>
                          <option value="">Per Month</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Principle amount
                    </label>
                    <input
                      type="text"
                      placeholder="Enter nominee address..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Mode of payment (OUT)
                    </label>
                    <select value="cash"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="cash">Cash</option>
                      <option value="rtgs">RTGS</option>
                      <option value="upi">UPI</option>
                      <option value="cheque">Cheque</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Offer
                    </label>
                    <input
                      type="text"
                      placeholder="Enter offer name..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="btn_wrapper">
                      <button
                        className="cx-btn-dark ms-auto"
                        onClick={() => {
                          setSelectedOption(false);
                          setbankinginfo(true);
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {selectedOption === "daily" && (
              <div className="reg_id_fields mt-3">
                <div className="title_wrapper">
                  <h3 className="title">Daily SIP Investment Details</h3>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Investment Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Enter investment amount..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Mode of payment
                    </label>
                    <select value="cash"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="cash">Cash</option>
                      <option value="rtgs">RTGS</option>
                      <option value="upi">UPI</option>
                      <option value="cheque">Cheque</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="" className="pass_text">
                        Investment Tenure (In months)
                      </label>
                      {/* <button  className="resend_btn">Resend</button> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Enter investment tenure..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Agreement start date
                    </label>
                    <input
                      type="date"
                      //   placeholder="Enter nominee relation..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Agreement end date
                    </label>
                    <input
                      type="date"
                      //   placeholder="Enter nominee pan no..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Maturity Date
                    </label>
                    <input
                      type="date"
                      //   placeholder="Enter nominee address..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Profit upto
                    </label>
                    <input
                      type="text"
                      placeholder="Enter nominee address..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Principle amount
                      {/* Note for developer */}
                      {/* This should be calculated using investment amount times days */}
                    </label>
                    <input
                      type="text"
                      placeholder="Enter nominee address..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Mode of payment (OUT)
                    </label>
                    <select value="cash"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="cash">Cash</option>
                      <option value="rtgs">RTGS</option>
                      <option value="upi">UPI</option>
                      <option value="cheque">Cheque</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Total amount (Profit + Principal)
                    </label>
                    {/* <output
                      type="text"
                      placeholder="Enter nominee address..."
                      className="form-control"
                    /> */}
                    <p className="output">20,000 Rs.</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn_wrapper">
                      <button
                        className="cx-btn-dark ms-auto"
                        onClick={() => {
                          setSelectedOption(false);
                          setbankinginfo(true);
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedOption === "monthly" && (
              <div className="reg_id_fields mt-3">
                <div className="title_wrapper">
                  <h3 className="title">Monthly SIP Investment Details</h3>
                </div>
                <div className="row mt-4">
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Investment Amount
                    </label>
                    <input
                      type="text"
                      placeholder="Enter investment amount..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Mode of payment
                    </label>
                    <select value="cash"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="cash">Cash</option>
                      <option value="upi">UPI</option>
                      <option value="cheque">
                        Pre Investment principal amount
                      </option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="" className="pass_text">
                        Investment Tenure (In months)
                      </label>
                      {/* <button  className="resend_btn">Resend</button> */}
                    </div>
                    <input
                      type="text"
                      placeholder="Enter investment tenure..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Agreement start date
                    </label>
                    <input
                      type="date"
                      //   placeholder="Enter nominee relation..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Agreement end date
                    </label>
                    <input
                      type="date"
                      //   placeholder="Enter nominee pan no..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Maturity Date
                    </label>
                    <input
                      type="date"
                      //   placeholder="Enter nominee address..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Profit upto
                    </label>
                    <input
                      type="text"
                      placeholder="Enter nominee address..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Principle amount
                      {/* Note for developer */}
                      {/* This should be calculated using investment amount times days */}
                    </label>
                    <input
                      type="text"
                      placeholder="Enter nominee address..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Mode of payment (OUT)
                    </label>
                    <select value="cash"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="cash">Cash</option>
                      <option value="rtgs">RTGS</option>
                      <option value="upi">UPI</option>
                      <option value="cheque">Cheque</option>
                    </select>
                  </div>
                  <div className="col-lg-6 mb-2">
                    <label htmlFor="" className="pass_text">
                      Total amount (Profit + Principal)
                    </label>
                    {/* <output
                  type="text"
                  placeholder="Enter nominee address..."
                  className="form-control"
                /> */}
                    <p className="output">20,000 Rs.</p>
                  </div>
                  <div className="col-lg-12">
                    <div className="btn_wrapper">
                      <button
                        className="cx-btn-dark ms-auto"
                        onClick={() => {
                          setSelectedOption(false);
                          setbankinginfo(true);
                        }}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {bankinginfo && (
              <>
                <div className="reg_id_fields mt-3">
                  <div className="title_wrapper">
                    <h3 className="title">Bank Account Details</h3>
                  </div>
                  <div className="reg_id_fields">
                    <div className="row">
                      <div className="col-lg-6 mb-2">
                        <label htmlFor="" className="pass_text">
                          Account Number
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your account number..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <label htmlFor="" className="pass_text">
                          Name of Bank
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your bank name..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <div className="d-flex justify-content-between">
                          <label htmlFor="" className="pass_text">
                            Branch
                          </label>
                          {/* <button  className="resend_btn">Resend</button> */}
                        </div>
                        <input
                          type="text"
                          placeholder="Enter your branch name..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-6 mb-2">
                        <label htmlFor="" className="pass_text">
                          IFSC Code
                        </label>
                        <input
                          type="text"
                          placeholder="Enter ifsc code..."
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-12">
                        <div className="btn_wrapper mt-3 mb-3">
                          <button
                            className="cx-btn-dark ms-auto"
                            onClick={() => {
                              setselectPlan(false);
                              // navigate("/Sip")
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default IdCreateForm;
