import React, { useContext, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Tab, Tabs } from "react-bootstrap";
import ic_hospital from "../../assets/images/ic_hospital.svg";
import dog from "../../assets/images/dog.svg";
import ic_clock from "../../assets/images/ic_clock.svg";
import ic_right_arrow from "../../assets/images/ic_right_arrow.svg";
import cat from "../../assets/images/cat.png";
import cat_1 from "../../assets/images/cat_1.png";
import cat_2 from "../../assets/images/cat_2.png";
import Modal from "react-bootstrap/Modal";
import dog_1 from "../../assets/images/dog_1.png";
import dog_2 from "../../assets/images/dog_2.png";
import dog_3 from "../../assets/images/dog_3.png";
import CreatableSelect from "react-select/creatable";
import ic_export from "../../assets/images/icons/export_icon.svg";
import ic_notepad from "../../assets/images/ic_notepad.svg";
import ic_recipt from "../../assets/images/ic_recipt.svg";
import ic_rating from "../../assets/images/ic_rating.svg";
import ic_completed from "../../assets/images/ic_completed.svg";
import ic_pending from "../../assets/images/ic_pending.svg";
import ic_play_video from "../../assets/images/ic_play_video.svg";
import ic_back_arrow from "../../assets/images/ic_back_arrow.svg";
import PaginationComp from "../../sharedComponent/PaginationComp";
import { AppContext } from "../../context/AppContext";
import PrescriptionComp from "../../sharedComponent/PrescriptionComp";

const CustomerDetails = () => {
  const { Prescription, setPrescription } = useContext(AppContext);
  const [customerList, setcustomerList] = useState(true);
  const [customerForm, setcustomerForm] = useState(false);
  const [viewList, setviewList] = useState(false);
  const [completedList, setCompletedList] = useState(true);
  const [clickedOrder, setClickedOrder] = useState(false);
  const [viewAppointment, setviewAppointment] = useState(false);
  const [startdigno, setStartdigno] = useState(false);
  const [option, setoption] = useState([
    { value: "vanilla", label: "Vanilla", rating: "safe" },
    { value: "chocolate", label: "Chocolate", rating: "good" },
    { value: "strawberry", label: "Strawberry", rating: "wild" },
    { value: "salted-caramel", label: "Salted Caramel", rating: "crazy" },
  ]);
  const SelectStyles = {
    control: (styles) => ({
      ...styles,
      borderRadius: "10px",
      border: "1px solid #A3AED0",
    }),
  };
  return (
    <div className="appointment-wrapper CustomerDetails-wrapper" id="cx-main">
      {customerList && (
        <div className="reportsTabs">
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
                  setcustomerList(false);
                  setcustomerForm(true);
                }}
              >
                Add Customer
              </button>
            </div>
          </div>

          {viewAppointment && (
            <div className="app-result-arrow-top">
              <img
                src={ic_back_arrow}
                alt=""
                onClick={() => {
                  setviewList(true);
                  setviewAppointment(false);
                  setCompletedList(true);
                }}
              />
              <label htmlFor="">
                Showing result for : <span>Brooklyn Simmons</span>
              </label>
            </div>
          )}

          <div>
            {completedList && (
              <div className="table-wrapper left-table ">
                <table>
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Name</th>
                      <th>Type</th>
                      <th>Contact No.</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>3</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>4</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>5</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>6</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>7</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>8</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>{" "}
                    <tr>
                      <td>9</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Brooklyn Simmons</td>

                      <td>Daily SIP</td>
                      <td>+91 9999 9999 99</td>
                      <td>jackson.graham@example.com</td>
                      <td>
                        <button
                          className="view-details-btn"
                          onClick={() => {
                            setviewAppointment(true);
                            setviewList(false);
                            setCompletedList(false);
                          }}
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <PaginationComp />
              </div>
            )}
            {viewAppointment && (
              <div className="app-details-wrapper">
                <div className="row gx-3">
                  <div className="col-md-12 ">
                    <div className="left">
                      <div className="row">
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Investor Name
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            Ronald Miller
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Aadhaar No.
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            1111 2222 3333 4444
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Contact No.
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            7788993322
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Bank Account No.
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            3177889933220982
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Bank Name
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            State Bank Of India
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              IFSC Code
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            SBIN0123456
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Nominee Name
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            Nominee Shaikh
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Relationship
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            Mother
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Email Id.
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            nominee@gmail.com
                          </label>
                        </div>
                        <div className="col-md-12">
                          <div>
                            <label htmlFor="" className="key">
                              Address
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            XYZ Appart, Hno.22, Railway Station, Aurangabad
                          </label>
                        </div>
                        <hr />
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Received Investment
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            Rs. 1,00,000 /- (Rupees ONE LAKH Only)
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Mode of Payment
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            UPI
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Investment Tenure
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            18 Months
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Agreement Start Date
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            01-01-2023
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Agreement End Date
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            01-06-2024
                          </label>
                        </div>
                        <div className="col-md-4">
                          <div>
                            <label htmlFor="" className="key">
                              Transaction Reff No.
                            </label>
                          </div>
                          <label htmlFor="" className="value">
                            XYZ8979847397
                          </label>
                        </div>
                        <hr />
                        <div className="col-md-12">
                          <div className="photo-video-wrapper">
                            <div className="start-wrapper">
                              <label htmlFor="" className="key">
                                Agreement
                              </label>
                              <div
                                className="prescription-btn-wrapper mt-2 row"
                                onClick={() => setPrescription(true)}
                              >
                                <div className="col-md-3">
                                  <div className="prescription-btn">
                                    <div className="wrapper">
                                      <div className="ic_wrapper">
                                        <img src={ic_recipt} alt="" />
                                      </div>
                                      <div className="date mt-2">
                                        02-02-2023
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <PrescriptionComp />
          </div>
        </div>
      )}

      {customerForm && (
        <div className="all-appoimt-wrapper">
          <div className="row gx-3">
            <div className="col-md-4">
              <p>Customer Form</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
