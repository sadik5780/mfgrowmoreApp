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
import ic_filter from "../../assets/images/ic_filter.svg";
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

  const [viewCalender, setviewCalender] = useState(true);
  const [viewList, setviewList] = useState(false);
  const [reqList, setreqList] = useState(true);
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
      <div className="reportsTabs">
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
        </div>

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

        <div>
          {completedList && (
            <div className="table-wrapper left-table ">
              <table>
                <thead>
                  <tr>
                    <th>Sr. No</th>
                    <th>Name</th>
                    <th>Pet Name & Photo</th>
                    <th>Pet Type</th>
                    <th>Contact No.</th>
                    <th>Email</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr> <tr>
                    <td>3</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr> <tr>
                    <td>4</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr> <tr>
                    <td>5</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr> <tr>
                    <td>6</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr> <tr>
                    <td>7</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr> <tr>
                    <td>8</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr> <tr>
                    <td>9</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr><tr>
                    <td>11</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr><tr>
                    <td>12</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr><tr>
                    <td>13</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr><tr>
                    <td>14</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                  </tr><tr>
                    <td>15</td>
                    <td>Brooklyn Simmons</td>
                    <td>
                      <label htmlFor="" className="photo me-2">
                        <img src={cat} alt="" />
                      </label>
                      Max
                    </td>
                    <td>Cat</td>
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
                <div className="col-md-8 ">
                  <div className="left">
                    <div className="top-btn-heading-wrapper">
                      <div className="aap-heading ">
                        <label htmlFor="">Appointment -1</label>
                      </div>
                      <div className="btn-wrapper">

                        <button className="btn-yellow-filled">
                          Re-Schedule
                        </button>
                      </div>
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
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, to Sed
                          ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque
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
                                    <div className="date mt-2">02-02-2023</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="rating-wrapper">
                            <label htmlFor="" className="key">
                              Ratings & Review
                            </label>
                            <div className="rating-card">
                              <div className="header-section">
                                <div className="left-rating">
                                  <p className="value">Regular health check up.</p>
                                  <label htmlFor="">Dr. Rohit Sharma</label>
                                </div>
                                <div className="right-rating">
                                  <img src={ic_rating} alt="" /><span>4.2</span>
                                </div>
                              </div>
                              <div className="paragraph">
                                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="right">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="1">
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
                            <div className="app-time-date active">
                              <div className="left-app-time-date">
                                <label htmlFor="" className="value">
                                  Appointment- 1
                                </label>
                                <div>
                                  <label htmlFor="" className="time">02-02-2023, 04:30 PM</label>

                                </div>
                              </div>
                              <div className="right-app-time-date">
                                <img src={ic_right_arrow} alt="" />
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
                                  Appointment- 1
                                </label>
                                <div>
                                  <label htmlFor="" className="time">02-02-2023, 04:30 PM</label>

                                </div>
                              </div>
                              <div className="right-app-time-date">
                                <img src={ic_right_arrow} alt="" />
                              </div>

                            </div>
                            <div className="app-time-date">
                              <div className="left-app-time-date">
                                <label htmlFor="" className="value">
                                  Appointment- 1
                                </label>
                                <div>
                                  <label htmlFor="" className="time">02-02-2023, 04:30 PM</label>

                                </div>
                              </div>
                              <div className="right-app-time-date">
                                <img src={ic_right_arrow} alt="" />
                              </div>

                            </div><div className="app-time-date">
                              <div className="left-app-time-date">
                                <label htmlFor="" className="value">
                                  Appointment- 1
                                </label>
                                <div>
                                  <label htmlFor="" className="time">02-02-2023, 04:30 PM</label>

                                </div>
                              </div>
                              <div className="right-app-time-date">
                                <img src={ic_right_arrow} alt="" />
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
                                      <label htmlFor="" className="pending-txt">
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
                                      <label htmlFor="" className="pending-txt">
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
                                      <label htmlFor="" className="pending-txt">
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
                                      <label htmlFor="" className="pending-txt">
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
                                      <label htmlFor="" className="pending-txt">
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
                                      <label htmlFor="" className="pending-txt">
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
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
