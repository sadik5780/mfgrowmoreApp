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

const Agreement = () => {
  const [viewAgreementList, setviewAgreementList] = useState(true);
  const [viewIdForm, setviewIdForm] = useState(false);
  const [viewOtp, setviewOtp] = useState(false);
  const [personalInfo, setpersonalInfo] = useState(false);
  const [bankinginfo, setbankinginfo] = useState(false);
  const [nomineeinfo, setnomineeinfo] = useState(false);
  const [uploadDocs, setuploadDocs] = useState(false);

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
        {viewAgreementList && (
          <>
            <div className="search-filter-wrapper">
              <div className="search-filter-left">
                <input
                  type="text"
                  className="form-control serach-input"
                  placeholder="Search by Name, Email, Contact..."
                />
                <input
                  type="date"
                  className="form-control date-input mx-3"
                  // placeholder="Search by date"
                />
                <button className="fltr-btn">
                  <img src={ic_export} alt="" />
                </button>
              </div>
              <div className="dark-btns-wrapper search-filter">
                <button
                  className="dark-btns"
                  onClick={() => {
                    setviewIdForm(true);
                    setviewAgreementList(false);
                  }}
                >
                  Create Id
                </button>
              </div>
            </div>
            <div className="wrapper-main">
              <div className="table-wrapper left-table ">
                <table>
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Name</th>
                      <th>Contact No.</th>
                      <th>Investment Amt.</th>
                      <th>In Date</th>
                      <th>Out Date</th>
                      <th>Plan</th>
                      <th>%</th>
                      <th>PR Amt</th>
                      <th>Profit</th>
                      <th>Total</th>
                      <th>Address</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>{" "}
                    <tr>
                      <td>3</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>{" "}
                    <tr>
                      <td>4</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>{" "}
                    <tr>
                      <td>5</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>{" "}
                    <tr>
                      <td>6</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>{" "}
                    <tr>
                      <td>7</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>{" "}
                    <tr>
                      <td>8</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>{" "}
                    <tr>
                      <td>9</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%</td>
                      <td>4200</td>
                      <td>10,000</td>
                      <td>20,000</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                      <td>simmons@mail.com</td>
                    </tr>
                  </tbody>
                </table>
                <PaginationComp />
              </div>
            </div>
          </>
        )}

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
                  <div className="col-lg-6">
                    <label htmlFor="" className="pass_text">
                      Password
                    </label>
                    <input
                      type="text"
                      placeholder="Enter New Password"
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6">
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
                  <br /> password :{" "}
                  <span className="userPassword">Password</span>
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
                    <div className="col-lg-6">
                      <label htmlFor="" className="pass_text">
                        Gender
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your gender"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="" className="pass_text">
                        Address for communication
                      </label>
                      <input
                        type="text"
                        placeholder="Enter address line 1"
                        className="form-control"
                      />
                      <input
                        type="text"
                        placeholder="Enter city"
                        className="form-control"
                      />
                      <input
                        type="text"
                        placeholder="Enter pincode"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-6">
                      <label htmlFor="" className="pass_text"></label>
                      <input
                        type="text"
                        placeholder="Enter address line 2"
                        className="form-control"
                      />
                      <input
                        type="text"
                        placeholder="Enter state"
                        className="form-control"
                      />
                    </div>
                    <div className="col-lg-12">
                      <div className="btn_wrapper mt-3 mb-3">
                        <button
                          className="cx-btn-dark ms-auto"
                          onClick={() => {
                            setviewIdForm(false);
                            setviewOtp(false);
                            setpersonalInfo(false);
                            setbankinginfo(true);
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
          </>
        )}

        {bankinginfo && (
          <>
            <div className="wrapper-main">
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
                  <div className="col-lg-6">
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
                          setviewIdForm(false);
                          setviewOtp(false);
                          setpersonalInfo(false);
                          setbankinginfo(false);
                          setnomineeinfo(true);
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
                  <div className="col-lg-6">
                    <label htmlFor="" className="pass_text">
                      Gender
                    </label>
                    <input
                      type="text"
                      placeholder="Enter nominee gender..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="" className="pass_text">
                      Relation
                    </label>
                    <input
                      type="text"
                      placeholder="Enter nominee relation..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="" className="pass_text">
                      Pan no.
                    </label>
                    <input
                      type="text"
                      placeholder="Enter nominee pan no..."
                      className="form-control"
                    />
                  </div>
                  <div className="col-lg-6">
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
                          // setnomineeinfo(false);
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
    </motion.div>
  );
};

export default Agreement;