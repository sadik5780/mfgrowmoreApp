import React, { useContext, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Tab, Tabs } from "react-bootstrap";
import CalenderComp from "./CalenderComp";
import ic_hospital from "../../assets/images/ic_hospital.svg";
import dog from "../../assets/images/dog.svg";
import ic_clock from "../../assets/images/ic_clock.svg";
import ic_video from "../../assets/images/ic_video.svg";
import cat from "../../assets/images/cat.png";
import cat_1 from "../../assets/images/cat_1.png";
import cat_2 from "../../assets/images/cat_2.png";

import chat_bg from "../../assets/images/chat_bg.png";
import video_bg from "../../assets/images/video_bg.png";

import Modal from "react-bootstrap/Modal";
import dog_1 from "../../assets/images/dog_1.png";
import dog_2 from "../../assets/images/dog_2.png";
import dog_3 from "../../assets/images/dog_3.png";
import CreatableSelect from "react-select/creatable";
import ic_filter from "../../assets/images/ic_filter.svg";
import ic_notepad from "../../assets/images/ic_notepad.svg";
import ic_recipt from "../../assets/images/ic_recipt.svg";
import ic_clock_pending from "../../assets/images/ic_clock_pending.svg";
import ic_completed from "../../assets/images/ic_completed.svg";
import ic_rejected from "../../assets/images/ic_rejected.svg";
import ic_pending from "../../assets/images/ic_pending.svg";
import ic_play_video from "../../assets/images/ic_play_video.svg";
import ic_back_arrow from "../../assets/images/ic_back_arrow.svg";
import PaginationComp from "../../sharedComponent/PaginationComp";
import { AppContext } from "../../context/AppContext";
import PrescriptionComp from "../../sharedComponent/PrescriptionComp";

const Video = () => {
  const { Prescription, setPrescription } = useContext(AppContext);

  const [viewCalender, setviewCalender] = useState(true);
  const [viewList, setviewList] = useState(false);
  const [reqList, setreqList] = useState(false);
  const [completedList, setCompletedList] = useState(false);
  const [clickedOrder, setClickedOrder] = useState(false);
  const [viewAppointment, setviewAppointment] = useState(false);
  const [startdigno, setStartdigno] = useState(false);
  const [videosec, setVideosec] = useState(false);
  const allTab = ()=>{
    setreqList(false);
    setviewCalender(true);
    setviewList(false);
    setviewAppointment(false);
    setCompletedList(false);
    setVideosec(false);
  }
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
    <div className="appointment-wrapper" id="cx-main">
      <div className="reportsTabs">
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Nav variant="pills" id="newTabMai" className="tob_nav_pills">
            <Nav.Item>
              <Nav.Link eventKey="1" onClick={allTab}>All Appointments</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" onClick={allTab}>Requests</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" onClick={allTab}>Completed</Nav.Link>
            </Nav.Item>
          </Nav>
          {viewCalender && (
            <div className="dark-btns-wrapper search-filter">
              <button
                className="dark-btns"
                onClick={() => {
                  setviewList(true);
                  setreqList(true);
                  setCompletedList(true);
                  setviewCalender(false);
                }}
              >
                List View
              </button>
            </div>
          )}
          {viewList && (
            <div className="search-filter-wrapper">
              <div className="search-filter-left">
                <input
                  type="text"
                  className="form-control serach-input"
                  placeholder="Search by Name, Specialist, Ratings, Visits..."
                />
                <button className="fltr-btn">
                  <img src={ic_filter} alt="" />
                </button>
              </div>
              <div className="search-filter-right">
                <div className="dark-btns-wrapper search-filter">
                  <button
                    className="dark-btns"
                    onClick={() => {
                      setviewCalender(true);
                      setviewList(false);
                      setreqList(false);
                    }}
                  >
                    Calendar View
                  </button>
                </div>
              </div>
            </div>
          )}
          {viewAppointment && (
            <div className="app-result-arrow-top">
              <img
                src={ic_back_arrow}
                alt=""
                onClick={() => {
                  setviewList(true);
                  setviewAppointment(false);
                  setreqList(true);
                  setCompletedList(true);
                }}
              />
              <label htmlFor="">
                Showing result for : <span>Appointment -1</span>
              </label>
            </div>
          )}
          {/* ======================= CALENDER COMP START ===================== */}
          {viewCalender && (
            <div className="all-appoimt-wrapper">
              <div className="row gx-3">
                <div className="col-md-8">
                  <div className="left">
                    <CalenderComp />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="right">
                    <div className="top-heading">
                      <div className="left-heading">
                        <label htmlFor="">Today's Visits</label>
                      </div>
                      <div className="right-date">
                        <label htmlFor="">
                          02-02-2023, <span>Monday</span>
                        </label>
                      </div>
                    </div>
                    <div className="check-up-card">
                      <div className="left-check-up">
                        <div className="left-img">
                          <img src={dog} alt="" />
                        </div>
                        <div className="right-check-up-details">
                          <h5>Check Up</h5>
                          <label htmlFor="">Patient Name</label>
                          <p>
                            <img src={ic_clock} alt="" />
                            <span>02:30 PM - 03:30 PM</span>
                          </p>
                        </div>
                      </div>
                      <div className="right-check-up">
                        <img src={ic_hospital} alt="" />
                      </div>
                    </div>
                    <div className="check-up-card">
                      <div className="left-check-up">
                        <div className="left-img">
                          <img src={cat} alt="" />
                        </div>
                        <div className="right-check-up-details">
                          <h5>Check Up</h5>
                          <label htmlFor="">Patient Name</label>
                          <p>
                            <img src={ic_clock} alt="" />
                            <span>02:30 PM - 03:30 PM</span>
                          </p>
                        </div>
                      </div>
                      <div className="right-check-up">
                        <img src={ic_video} alt="" />
                      </div>
                    </div>
                    <div className="check-up-card">
                      <div className="left-check-up">
                        <div className="left-img">
                          <img src={dog} alt="" />
                        </div>
                        <div className="right-check-up-details">
                          <h5>Check Up</h5>
                          <label htmlFor="">Patient Name</label>
                          <p>
                            <img src={ic_clock} alt="" />
                            <span>02:30 PM - 03:30 PM</span>
                          </p>
                        </div>
                      </div>
                      <div className="right-check-up">
                        <img src={ic_hospital} alt="" />
                      </div>
                    </div>
                    <div className="check-up-card">
                      <div className="left-check-up">
                        <div className="left-img">
                          <img src={cat} alt="" />
                        </div>
                        <div className="right-check-up-details">
                          <h5>Check Up</h5>
                          <label htmlFor="">Patient Name</label>
                          <p>
                            <img src={ic_clock} alt="" />
                            <span>02:30 PM - 03:30 PM</span>
                          </p>
                        </div>
                      </div>
                      <div className="right-check-up">
                        <img src={ic_video} alt="" />
                      </div>
                    </div>
                    <div className="check-up-card">
                      <div className="left-check-up">
                        <div className="left-img">
                          <img src={dog} alt="" />
                        </div>
                        <div className="right-check-up-details">
                          <h5>Check Up</h5>
                          <label htmlFor="">Patient Name</label>
                          <p>
                            <img src={ic_clock} alt="" />
                            <span>02:30 PM - 03:30 PM</span>
                          </p>
                        </div>
                      </div>
                      <div className="right-check-up">
                        <img src={ic_hospital} alt="" />
                      </div>
                    </div>
                    <div className="check-up-card">
                      <div className="left-check-up">
                        <div className="left-img">
                          <img src={cat} alt="" />
                        </div>
                        <div className="right-check-up-details">
                          <h5>Check Up</h5>
                          <label htmlFor="">Patient Name</label>
                          <p>
                            <img src={ic_clock} alt="" />
                            <span>02:30 PM - 03:30 PM</span>
                          </p>
                        </div>
                      </div>
                      <div className="right-check-up">
                        <img src={ic_video} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* ======================= CALENDER COMP END ===================== */}
          <Tab.Content>
            <Tab.Pane eventKey="1">
              {viewList && (
                <div>
                  <div className="table-wrapper scroll-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Photo / Video</th>
                        <th>Pet Type</th>
                        <th>Description</th>
                        <th>Time</th>
                        <th>Fees</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_clock_pending}
                            className="status-ic"
                            alt=""
                          />
                          <label htmlFor="" className="pending-txt">
                            Pending
                          </label>
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setStartdigno(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo video-ic">
                            <img src={cat} alt="" />
                            <img
                              src={ic_play_video}
                              alt=""
                              className="ic-play"
                            />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setStartdigno(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img src={ic_rejected} className="status-ic" alt="" />
                          Rejected
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setStartdigno(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>

                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setStartdigno(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>

                        <td>
                          <img src={ic_pending} className="status-ic" alt="" />
                          In Progress
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setStartdigno(false);
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

                </div>
                
                
              )}
              {videosec && (
                <div className="main-vd-sec">
                <div className="video-call-wrapper row">
                  <div className="col-md-8">
                    <div className="left-video">
                      <div>
                        <img src={video_bg} alt="" className="w-100" />
                      </div>
                      <div className="text-center mt-3">
                        <button
                          onClick={() => {
                            setVideosec(false);
                            setviewAppointment(true);
                            setStartdigno(true);
                          }}
                          className="btn bg-danger text-light"
                        >
                          End Call
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="right-video">
                      <img src={chat_bg} alt="" className="w-100" />
                    </div>
                  </div>
                </div></div>
              )}
              {viewAppointment && (
                <div className="app-details-wrapper">
                  <div className="row gx-3">
                    <div className="col-md-8 ">
                      <div className="left">
                        <div className="aap-heading">
                          <label htmlFor="">Appointment -1</label>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div>
                              <label htmlFor="" className="key">
                                Name
                              </label>
                            </div>
                            <label htmlFor="" className="value">
                              Ronald Miller
                            </label>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <label htmlFor="" className="key">
                                Appointment Date & Time
                              </label>
                            </div>
                            <label htmlFor="" className="value">
                              02-02-2023, 04:30 PM
                            </label>
                          </div>
                          <div className="col-12">
                            <div>
                              <label htmlFor="" className="key">
                                Description
                              </label>
                            </div>
                            <label htmlFor="" className="value">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              to Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque
                            </label>
                          </div>
                          <div className="col-12">
                            <label htmlFor="" className="key">
                              Photos / Videos
                            </label>
                            <div className="photo-video-wrapper">
                              <div className="row">
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={dog_1} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={dog_2} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={dog_3} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={cat_1} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={cat_2} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 photo-ic_video">
                                  <img src={dog_1} alt="" className="photo" />
                                  <img
                                    src={ic_play_video}
                                    alt=""
                                    className="ic-video"
                                  />
                                </div>
                              </div>
                              {startdigno && (
                                <div className="start-wrapper">
                                  <div className="digno-type-select col-md-6">
                                    <label htmlFor="" className="key">
                                      Diagnosis
                                    </label>
                                    <select className="form-select formInput">
                                      <option value="" selected>Select Gender</option>
                                      <option value="">Male</option>
                                      <option value="">Female</option>
                                      <option value="">Other</option>
                                    </select>
                                  </div>
                                  <div className="table-start-wrapper">
                                    <label htmlFor="" className="key">
                                      Prescription
                                    </label>
                                    <table>
                                      <thead>
                                        <tr>
                                          <th>Sr No.</th>
                                          <th>Medicine Name</th>
                                          <th>Frequency</th>
                                          <th>Duration</th>
                                          <th>Instruction</th>
                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>Vitamin C</td>
                                          <td>1 - 0 - 1</td>
                                          <td>5 Days</td>
                                          <td>After Meal</td>
                                          <td>
                                            <img src={ic_rejected} alt="" />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>
                                            <CreatableSelect
                                              isClearable
                                              options={option}
                                              styles={SelectStyles}
                                              placeholder={"Search Medicine"}
                                            />
                                          </td>
                                          <td>
                                            <CreatableSelect
                                              isClearable
                                              options={option}
                                              styles={SelectStyles}
                                              placeholder={"Select..."}
                                            />
                                          </td>
                                          <td>
                                            <CreatableSelect
                                              isClearable
                                              options={option}
                                              styles={SelectStyles}
                                              placeholder={"Select..."}
                                            />
                                          </td>
                                          <td>
                                            <CreatableSelect
                                              isClearable
                                              options={option}
                                              styles={SelectStyles}
                                              placeholder={"Select..."}
                                            />
                                          </td>
                                          <td></td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="btn-wrapper">
                              <button className="btn-blue-blank">Cancel</button>
                              <button className="btn-yellow-filled">
                                Re-Schedule
                              </button>
                              <button
                                className="btn-blue-filled"
                                onClick={() => {
                                  setviewAppointment(false);
                                  setVideosec(true);
                                }}
                              >
                                {startdigno ? "Mark Complete" : "Start"}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="message-payment">
                        <img src={ic_pending} alt="" />
                        <label htmlFor="">
                          15 day Payment Cycle for payment deposit to your
                          account.
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="right">
                        <Tab.Container
                          id="left-tabs-example"
                          defaultActiveKey="1"
                        >
                          <Nav
                            variant="pills"
                            id="newTabMai"
                            className="tob_nav_pills"
                          >
                            <Nav.Item>
                              <Nav.Link eventKey="1">
                                Visits <span>(10)</span>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="2">
                                Invoices <span>(10)</span>
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content>
                            <Tab.Pane eventKey="1">
                              <div className="visits-tab-wrapper">
                                <div className="today-heading">
                                  <label htmlFor="" className="key">
                                    Today
                                  </label>
                                  <div className="line"></div>
                                </div>
                                <div className="app-time-date">
                                  <div className="left-app-time-date">
                                    <label htmlFor="" className="value">
                                      02-02-2023, 04:30 PM
                                    </label>
                                  </div>
                                  <div className="right-app-time-date">
                                    <img src={ic_notepad} alt="" />
                                  </div>
                                </div>
                                <div className="today-heading">
                                  <label htmlFor="" className="key line-style">
                                    28-06-2023
                                  </label>
                                  <div className="line"></div>
                                </div>
                                <div className="app-time-date">
                                  <div className="left-app-time-date">
                                    <label htmlFor="" className="value">
                                      02-02-2023, 04:30 PM
                                    </label>
                                  </div>
                                  <div className="right-app-time-date">
                                    <img src={ic_notepad} alt="" />
                                  </div>
                                </div>
                                <div className="app-time-date">
                                  <div className="left-app-time-date">
                                    <label htmlFor="" className="value">
                                      02-02-2023, 04:30 PM
                                    </label>
                                  </div>
                                  <div className="right-app-time-date">
                                    <img src={ic_notepad} alt="" />
                                  </div>
                                </div>
                                <div className="app-time-date">
                                  <div className="left-app-time-date">
                                    <label htmlFor="" className="value">
                                      02-02-2023, 04:30 PM
                                    </label>
                                  </div>
                                  <div className="right-app-time-date">
                                    <img src={ic_notepad} alt="" />
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                              <div className="invoices-tab-wrapper">
                                <div className="table-wrapper">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Sr. No</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_pending}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Pending
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_completed}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Complete
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_pending}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Pending
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_completed}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Complete
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_pending}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Pending
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_completed}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Complete
                                          </label>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Tab.Pane>
            <Tab.Pane eventKey="2">
              <div className="requests-wrapper">
                {reqList && (
                  <div className="table-wrapper scroll-table">
                    <table>
                      <thead>
                        <tr>
                          <th>Sr. No</th>
                          <th>Name</th>
                          <th>Photo / Video</th>
                          <th>Pet Type</th>
                          <th>Description</th>
                          <th>Time</th>
                          <th>Fees</th>
                          <th className="center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Ronald Sharma</td>
                          <td>
                            <label htmlFor="" className="photo">
                              <img src={cat} alt="" />
                            </label>
                          </td>
                          <td>dog</td>
                          <td>Drogo is having fever...</td>
                          <td>02:30 PM - 03:30 PM</td>
                          <td>100₹</td>

                          <td className="center">
                            <button className="reject-btn">Reject</button>
                            <button
                              className="accept-btn"
                              onClick={() => {
                                setviewAppointment(true);
                                setreqList(false);
                                setviewCalender(false);
                                setviewList(false);
                              }}
                            >
                              Accept
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Ronald Sharma</td>
                          <td>
                            <label htmlFor="" className="photo video-ic">
                              <img src={cat} alt="" />
                              <img
                                src={ic_play_video}
                                alt=""
                                className="ic-play"
                              />
                            </label>
                          </td>
                          <td>dog</td>
                          <td>Drogo is having fever...</td>
                          <td>02:30 PM - 03:30 PM</td>
                          <td>100₹</td>

                          <td className="center">
                            <button className="reject-btn">Reject</button>
                            <button
                              className="accept-btn"
                              onClick={() => {
                                setviewAppointment(true);
                                setreqList(false);
                                setviewCalender(false);
                                setviewList(false);
                              }}
                            >
                              Accept
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Ronald Sharma</td>
                          <td>
                            <label htmlFor="" className="photo">
                              <img src={cat} alt="" />
                            </label>
                          </td>
                          <td>dog</td>
                          <td>Drogo is having fever...</td>
                          <td>02:30 PM - 03:30 PM</td>
                          <td>100₹</td>

                          <td className="center">
                            <button className="reject-btn">Reject</button>
                            <button
                              className="accept-btn"
                              onClick={() => {
                                setviewAppointment(true);
                                setreqList(false);
                                setviewCalender(false);
                                setviewList(false);
                              }}
                            >
                              Accept
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Ronald Sharma</td>
                          <td>
                            <label htmlFor="" className="photo video-ic">
                              <img src={cat} alt="" />
                              <img
                                src={ic_play_video}
                                alt=""
                                className="ic-play"
                              />
                            </label>
                          </td>
                          <td>dog</td>
                          <td>Drogo is having fever...</td>
                          <td>02:30 PM - 03:30 PM</td>
                          <td>100₹</td>

                          <td className="center">
                            <button className="reject-btn">Reject</button>
                            <button
                              className="accept-btn"
                              onClick={() => {
                                setviewAppointment(true);
                                setreqList(false);
                                setviewCalender(false);
                                setviewList(false);
                              }}
                            >
                              Accept
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Ronald Sharma</td>
                          <td>
                            <label htmlFor="" className="photo">
                              <img src={cat} alt="" />
                            </label>
                          </td>
                          <td>dog</td>
                          <td>Drogo is having fever...</td>
                          <td>02:30 PM - 03:30 PM</td>
                          <td>100₹</td>

                          <td className="center">
                            <button className="reject-btn">Reject</button>
                            <button
                              className="accept-btn"
                              onClick={() => {
                                setviewAppointment(true);
                                setreqList(false);
                                setviewCalender(false);
                                setviewList(false);
                              }}
                            >
                              Accept
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Ronald Sharma</td>
                          <td>
                            <label htmlFor="" className="photo video-ic">
                              <img src={cat} alt="" />
                              <img
                                src={ic_play_video}
                                alt=""
                                className="ic-play"
                              />
                            </label>
                          </td>
                          <td>dog</td>
                          <td>Drogo is having fever...</td>
                          <td>02:30 PM - 03:30 PM</td>
                          <td>100₹</td>

                          <td className="center">
                            <button className="reject-btn">Reject</button>
                            <button
                              className="accept-btn"
                              onClick={() => {
                                setviewAppointment(true);
                                setreqList(false);
                                setviewCalender(false);
                                setviewList(false);
                              }}
                            >
                              Accept
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Ronald Sharma</td>
                          <td>
                            <label htmlFor="" className="photo">
                              <img src={cat} alt="" />
                            </label>
                          </td>
                          <td>dog</td>
                          <td>Drogo is having fever...</td>
                          <td>02:30 PM - 03:30 PM</td>
                          <td>100₹</td>

                          <td className="center">
                            <button className="reject-btn">Reject</button>
                            <button
                              className="accept-btn"
                              onClick={() => {
                                setviewAppointment(true);
                                setreqList(false);
                                setviewCalender(false);
                                setviewList(false);
                              }}
                            >
                              Accept
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
                      <div className="col-md-8 ">
                        <div className="left">
                          <div className="aap-heading">
                            <label htmlFor="">Appointment -1</label>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div>
                                <label htmlFor="" className="key">
                                  Name
                                </label>
                              </div>
                              <label htmlFor="" className="value">
                                Ronald Miller
                              </label>
                            </div>
                            <div className="col-md-6">
                              <div>
                                <label htmlFor="" className="key">
                                  Appointment Date & Time
                                </label>
                              </div>
                              <label htmlFor="" className="value">
                                02-02-2023, 04:30 PM
                              </label>
                            </div>
                            <div className="col-12">
                              <div>
                                <label htmlFor="" className="key">
                                  Description
                                </label>
                              </div>
                              <label htmlFor="" className="value">
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium, to Sed ut perspiciatis unde omnis
                                iste natus error sit voluptatem accusantium
                                doloremque
                              </label>
                            </div>
                            <div className="col-12">
                              <label htmlFor="" className="key">
                                Photos / Videos
                              </label>
                              <div className="photo-video-wrapper">
                                <div className="row">
                                  <div className="col-xl-2 col-lg-3 col-md-4 ">
                                    <img src={dog_1} alt="" className="photo" />
                                  </div>
                                  <div className="col-xl-2 col-lg-3 col-md-4 ">
                                    <img src={dog_2} alt="" className="photo" />
                                  </div>
                                  <div className="col-xl-2 col-lg-3 col-md-4 ">
                                    <img src={dog_3} alt="" className="photo" />
                                  </div>
                                  <div className="col-xl-2 col-lg-3 col-md-4 ">
                                    <img src={cat_1} alt="" className="photo" />
                                  </div>
                                  <div className="col-xl-2 col-lg-3 col-md-4 ">
                                    <img src={cat_2} alt="" className="photo" />
                                  </div>
                                  <div className="col-xl-2 col-lg-3 col-md-4 photo-ic_video">
                                    <img src={dog_1} alt="" className="photo" />
                                    <img
                                      src={ic_play_video}
                                      alt=""
                                      className="ic-video"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="btn-wrapper acc-rej-btn">
                                <button className="btn-blue-blank">
                                  Reject
                                </button>
                                <button className="btn-blue-filled ms-3">
                                  Accept
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="right">
                          <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="1"
                          >
                            <Nav
                              variant="pills"
                              id="newTabMai"
                              className="tob_nav_pills"
                            >
                              <Nav.Item>
                                <Nav.Link eventKey="1">
                                  Visits <span>(10)</span>
                                </Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="2">
                                  Invoices <span>(10)</span>
                                </Nav.Link>
                              </Nav.Item>
                            </Nav>
                            <Tab.Content>
                              <Tab.Pane eventKey="1">
                                <div className="visits-tab-wrapper">
                                  <div className="today-heading">
                                    <label htmlFor="" className="key">
                                      Today
                                    </label>
                                    <div className="line"></div>
                                  </div>
                                  <div className="app-time-date">
                                    <div className="left-app-time-date">
                                      <label htmlFor="" className="value">
                                        02-02-2023, 04:30 PM
                                      </label>
                                    </div>
                                    <div className="right-app-time-date">
                                      <img src={ic_notepad} alt="" />
                                    </div>
                                  </div>
                                  <div className="today-heading">
                                    <label
                                      htmlFor=""
                                      className="key line-style"
                                    >
                                      28-06-2023
                                    </label>
                                    <div className="line"></div>
                                  </div>
                                  <div className="app-time-date">
                                    <div className="left-app-time-date">
                                      <label htmlFor="" className="value">
                                        02-02-2023, 04:30 PM
                                      </label>
                                    </div>
                                    <div className="right-app-time-date">
                                      <img src={ic_notepad} alt="" />
                                    </div>
                                  </div>
                                  <div className="app-time-date">
                                    <div className="left-app-time-date">
                                      <label htmlFor="" className="value">
                                        02-02-2023, 04:30 PM
                                      </label>
                                    </div>
                                    <div className="right-app-time-date">
                                      <img src={ic_notepad} alt="" />
                                    </div>
                                  </div>
                                  <div className="app-time-date">
                                    <div className="left-app-time-date">
                                      <label htmlFor="" className="value">
                                        02-02-2023, 04:30 PM
                                      </label>
                                    </div>
                                    <div className="right-app-time-date">
                                      <img src={ic_notepad} alt="" />
                                    </div>
                                  </div>
                                </div>
                              </Tab.Pane>
                              <Tab.Pane eventKey="2">
                                <div className="invoices-tab-wrapper">
                                  <div className="table-wrapper">
                                    <table>
                                      <thead>
                                        <tr>
                                          <th>Sr. No</th>
                                          <th>Date</th>
                                          <th>Amount</th>
                                          <th>Status</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>1</td>
                                          <td>02-02-2023</td>
                                          <td>₹300</td>
                                          <td>
                                            <img
                                              src={ic_pending}
                                              className="status-ic"
                                              alt=""
                                            />
                                            <label
                                              htmlFor=""
                                              className="pending-txt"
                                            >
                                              Pending
                                            </label>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>2</td>
                                          <td>02-02-2023</td>
                                          <td>₹300</td>
                                          <td>
                                            <img
                                              src={ic_completed}
                                              className="status-ic"
                                              alt=""
                                            />
                                            <label
                                              htmlFor=""
                                              className="pending-txt"
                                            >
                                              Complete
                                            </label>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>3</td>
                                          <td>02-02-2023</td>
                                          <td>₹300</td>
                                          <td>
                                            <img
                                              src={ic_pending}
                                              className="status-ic"
                                              alt=""
                                            />
                                            <label
                                              htmlFor=""
                                              className="pending-txt"
                                            >
                                              Pending
                                            </label>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>4</td>
                                          <td>02-02-2023</td>
                                          <td>₹300</td>
                                          <td>
                                            <img
                                              src={ic_completed}
                                              className="status-ic"
                                              alt=""
                                            />
                                            <label
                                              htmlFor=""
                                              className="pending-txt"
                                            >
                                              Complete
                                            </label>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>5</td>
                                          <td>02-02-2023</td>
                                          <td>₹300</td>
                                          <td>
                                            <img
                                              src={ic_pending}
                                              className="status-ic"
                                              alt=""
                                            />
                                            <label
                                              htmlFor=""
                                              className="pending-txt"
                                            >
                                              Pending
                                            </label>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>6</td>
                                          <td>02-02-2023</td>
                                          <td>₹300</td>
                                          <td>
                                            <img
                                              src={ic_completed}
                                              className="status-ic"
                                              alt=""
                                            />
                                            <label
                                              htmlFor=""
                                              className="pending-txt"
                                            >
                                              Complete
                                            </label>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </Tab.Pane>
                            </Tab.Content>
                          </Tab.Container>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="3">
              {completedList && (
                <div className="table-wrapper scroll-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Photo / Video</th>
                        <th>Pet Type</th>
                        <th>Description</th>
                        <th>Time</th>
                        <th>Fees</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo video-ic">
                            <img src={cat} alt="" />
                            <img
                              src={ic_play_video}
                              alt=""
                              className="ic-play"
                            />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo video-ic">
                            <img src={cat} alt="" />
                            <img
                              src={ic_play_video}
                              alt=""
                              className="ic-play"
                            />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo video-ic">
                            <img src={cat} alt="" />
                            <img
                              src={ic_play_video}
                              alt=""
                              className="ic-play"
                            />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo video-ic">
                            <img src={cat} alt="" />
                            <img
                              src={ic_play_video}
                              alt=""
                              className="ic-play"
                            />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo video-ic">
                            <img src={cat} alt="" />
                            <img
                              src={ic_play_video}
                              alt=""
                              className="ic-play"
                            />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo">
                            <img src={cat} alt="" />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
                              setCompletedList(false);
                            }}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>Ronald Sharma</td>
                        <td>
                          <label htmlFor="" className="photo video-ic">
                            <img src={cat} alt="" />
                            <img
                              src={ic_play_video}
                              alt=""
                              className="ic-play"
                            />
                          </label>
                        </td>
                        <td>dog</td>
                        <td>Drogo is having fever...</td>
                        <td>02:30 PM - 03:30 PM</td>
                        <td>100₹</td>
                        <td>
                          <img
                            src={ic_completed}
                            className="status-ic"
                            alt=""
                          />
                          Completed
                        </td>
                        <td>
                          <button
                            className="view-details-btn"
                            onClick={() => {
                              setviewAppointment(true);
                              setviewList(false);
                              setviewCalender(false);
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
                    <div className="col-md-8 ">
                      <div className="left">
                        <div className="aap-heading">
                          <label htmlFor="">Appointment -1</label>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div>
                              <label htmlFor="" className="key">
                                Name
                              </label>
                            </div>
                            <label htmlFor="" className="value">
                              Ronald Miller
                            </label>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <label htmlFor="" className="key">
                                Appointment Date & Time
                              </label>
                            </div>
                            <label htmlFor="" className="value">
                              02-02-2023, 04:30 PM
                            </label>
                          </div>
                          <div className="col-12">
                            <div>
                              <label htmlFor="" className="key">
                                Description
                              </label>
                            </div>
                            <label htmlFor="" className="value">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              to Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque
                            </label>
                          </div>
                          <div className="col-12">
                            <label htmlFor="" className="key">
                              Photos / Videos
                            </label>
                            <div className="photo-video-wrapper">
                              <div className="row">
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={dog_1} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={dog_2} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={dog_3} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={cat_1} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 ">
                                  <img src={cat_2} alt="" className="photo" />
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 photo-ic_video">
                                  <img src={dog_1} alt="" className="photo" />
                                  <img
                                    src={ic_play_video}
                                    alt=""
                                    className="ic-video"
                                  />
                                </div>
                              </div>
                              <div className="start-wrapper mt-3">
                                <label htmlFor="" className="key">
                                  Prescription
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
                            <div className="btn-wrapper">
                              <button className="btn-blue-blank">Cancel</button>
                              <button className="btn-yellow-filled">
                                Re-Schedule
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="right">
                        <Tab.Container
                          id="left-tabs-example"
                          defaultActiveKey="1"
                        >
                          <Nav
                            variant="pills"
                            id="newTabMai"
                            className="tob_nav_pills"
                          >
                            <Nav.Item>
                              <Nav.Link eventKey="1">
                                Visits <span>(10)</span>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="2">
                                Invoices <span>(10)</span>
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content>
                            <Tab.Pane eventKey="1">
                              <div className="visits-tab-wrapper">
                                <div className="today-heading">
                                  <label htmlFor="" className="key">
                                    Today
                                  </label>
                                  <div className="line"></div>
                                </div>
                                <div className="app-time-date">
                                  <div className="left-app-time-date">
                                    <label htmlFor="" className="value">
                                      02-02-2023, 04:30 PM
                                    </label>
                                  </div>
                                  <div className="right-app-time-date">
                                    <img src={ic_notepad} alt="" />
                                  </div>
                                </div>
                                <div className="today-heading">
                                  <label htmlFor="" className="key line-style">
                                    28-06-2023
                                  </label>
                                  <div className="line"></div>
                                </div>
                                <div className="app-time-date">
                                  <div className="left-app-time-date">
                                    <label htmlFor="" className="value">
                                      02-02-2023, 04:30 PM
                                    </label>
                                  </div>
                                  <div className="right-app-time-date">
                                    <img src={ic_notepad} alt="" />
                                  </div>
                                </div>
                                <div className="app-time-date">
                                  <div className="left-app-time-date">
                                    <label htmlFor="" className="value">
                                      02-02-2023, 04:30 PM
                                    </label>
                                  </div>
                                  <div className="right-app-time-date">
                                    <img src={ic_notepad} alt="" />
                                  </div>
                                </div>
                                <div className="app-time-date">
                                  <div className="left-app-time-date">
                                    <label htmlFor="" className="value">
                                      02-02-2023, 04:30 PM
                                    </label>
                                  </div>
                                  <div className="right-app-time-date">
                                    <img src={ic_notepad} alt="" />
                                  </div>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                              <div className="invoices-tab-wrapper">
                                <div className="table-wrapper">
                                  <table>
                                    <thead>
                                      <tr>
                                        <th>Sr. No</th>
                                        <th>Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_pending}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Pending
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>2</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_completed}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Complete
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>3</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_pending}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Pending
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>4</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_completed}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Complete
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>5</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_pending}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Pending
                                          </label>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>6</td>
                                        <td>02-02-2023</td>
                                        <td>₹300</td>
                                        <td>
                                          <img
                                            src={ic_completed}
                                            className="status-ic"
                                            alt=""
                                          />
                                          <label
                                            htmlFor=""
                                            className="pending-txt"
                                          >
                                            Complete
                                          </label>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <PrescriptionComp />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default Video;
