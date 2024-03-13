import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Tab, Tabs } from "react-bootstrap";
import earn_icon from "../../assets/images/icons/earn_icon.svg";
import patient_icon from "../../assets/images/icons/patient_icon.svg";
import total_appoint_icon from "../../assets/images/icons/total_appoint_icon.svg";
import complete_icon from "../../assets/images/icons/complete_icon.svg";
import cancelled_icon from "../../assets/images/icons/cancelled_icon.svg";
import wallet_icon from "../../assets/images/icons/wallet_icon.svg";
import export_icon from "../../assets/images/icons/export_icon.svg";
import ic_completed from "../../assets/images/ic_completed.svg";
import ic_rejected from "../../assets/images/ic_rejected.svg";
import cat from "../../assets/images/cat.png";
import ic_filter from "../../assets/images/ic_filter.svg";
import { motion } from "framer-motion";
import { DarkButton, DonutChart } from "../commonComponents/commonComp";
import { Link } from "react-router-dom";

const TransactionDetails = () => {
  const [viewChange, setviewChange] = useState(true);
  const aninations = {
    initial: { opacity: 0, x: 400 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };
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
      <div className="transaction_details" id="TransactionDetails">
        <div className="search-filter-wrapper mb-4">
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
        <div className="wrapper-main">
          <div className="row">
            <div className="col-lg-8">
              <div className="table-wrapper table_wrapper_pagination py-4">
                <div className="reportsTabs">
                  <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                    <Nav variant="pills" id="newTabMai" className="tob_nav_pills d-flex">
                      <Nav.Item>
                        <Nav.Link eventKey="1">Recent Transactions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="2">Upcoming Payments</Nav.Link>
                      </Nav.Item>


                    </Nav>
                    <Link to="#" className="export_button custom_border">
                      <img src={export_icon} alt="" /></Link>
                    <Tab.Content>
                      <Tab.Pane eventKey="1">
                        <div className="dashboard_wrapper">
                          <div className="table-wrapper table_wrapper_pagination p-0 dasboard-cust-tb-wrapper">
                            <table>
                              <thead>
                                <tr>
                                  <th>Sr. No</th>
                                  <th>Name</th>
                                  <th>Date</th>
                                  <th>Transaction ID</th>
                                  <th>Description</th>
                                  <th>Amount</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <label htmlFor="" className="photo">
                                      <img src={cat} alt="" />
                                      Ronald Sharma
                                    </label>
                                  </td>
                                  <td>02-02-2023</td>
                                  <td>12345678900</td>
                                  <td>Clinic</td>
                                  <td>₹500</td>
                                  <td>
                                    <img
                                      src={ic_completed}
                                      className="status-ic"
                                      alt=""
                                    />
                                    Completed
                                  </td>

                                </tr>
                                <tr>
                                  <td>2</td>
                                  <td>
                                    <label htmlFor="" className="photo">
                                      <img src={cat} alt="" />
                                      Ronald Sharma
                                    </label>
                                  </td>
                                  <td>02-02-2023</td>
                                  <td>12345678900</td>
                                  <td>Video Call</td>
                                  <td>₹500</td>
                                  <td>
                                    <img
                                      src={ic_completed}
                                      className="status-ic"
                                      alt=""
                                    />
                                    Completed
                                  </td>

                                </tr>
                                <tr>
                                  <td>3</td>
                                  <td>
                                    <label htmlFor="" className="photo">
                                      <img src={cat} alt="" />
                                      Ronald Sharma
                                    </label>
                                  </td>
                                  <td>02-02-2023</td>
                                  <td>12345678900</td>
                                  <td>Service Charge</td>
                                  <td>₹500</td>
                                  <td>
                                    <img src={ic_rejected} className="status-ic" alt="" />
                                    Cancelled
                                  </td>

                                </tr>
                                <tr>
                                  <td>4</td>
                                  <td>
                                    <label htmlFor="" className="photo">
                                      <img src={cat} alt="" />
                                      Ronald Sharma
                                    </label>
                                  </td>
                                  <td>02-02-2023</td>
                                  <td>12345678900</td>
                                  <td>Clinic</td>
                                  <td>₹500</td>
                                  <td>
                                    <img
                                      src={ic_completed}
                                      className="status-ic"
                                      alt=""
                                    />
                                    Completed
                                  </td>

                                </tr>
                                <tr>
                                  <td>5</td>
                                  <td>
                                    <label htmlFor="" className="photo">
                                      <img src={cat} alt="" />
                                      Ronald Sharma
                                    </label>
                                  </td>
                                  <td>02-02-2023</td>
                                  <td>12345678900</td>
                                  <td>Clinic</td>
                                  <td>₹500</td>
                                  <td>
                                    <img
                                      src={ic_completed}
                                      className="status-ic"
                                      alt=""
                                    />
                                    Completed
                                  </td>

                                </tr>
                                <tr>
                                  <td>6</td>
                                  <td>
                                    <label htmlFor="" className="photo">
                                      <img src={cat} alt="" />
                                      Ronald Sharma
                                    </label>
                                  </td>
                                  <td>02-02-2023</td>
                                  <td>12345678900</td>
                                  <td>Clinic</td>
                                  <td>₹500</td>
                                  <td>
                                    <img src={ic_rejected} className="status-ic" alt="" />
                                    Cancelled
                                  </td>

                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="pagination_wrapper">
                            <p>Showing 1-10 of 100</p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="2">
                        <div className="dashboard_wrapper">
                          <div className="table-wrapper table_wrapper_pagination p-0 dasboard-cust-tb-wrapper">
                            <table>
                              <thead>
                                <tr>
                                  <th>Sr. No</th>
                                  <th>Name</th>
                                  <th>Due Date</th>
                                  <th>Description</th>
                                  <th>Amount</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>
                                    <label htmlFor="" className="photo">
                                      <img src={cat} alt="" />
                                      Ronald Sharma
                                    </label>
                                  </td>
                                  <td>02-02-2023</td>
                                  <td>Service Charge</td>
                                  <td>₹500</td>
                                  <td style={{ cursor: "pointer" }}>
                                    <img
                                      src={wallet_icon}
                                      className="status-ic"
                                      alt=""
                                    />
                                    Pay Now
                                  </td>

                                </tr>
                              </tbody>
                            </table>

                          </div>
                          <div className="pagination_wrapper">
                            <p>Showing 1-10 of 100</p>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="patient_stat_wrapper">
                <div className="lc_top">
                  <div className="lct_header_wrapper">
                    <p>My Earnings</p>
                  </div>
                  <div className="earning_amount">
                    <p>₹35,000</p>
                    <p>Bank- State Bank Of India</p>
                    <p>*Early withdrawal charges may apply.</p>
                    <DarkButton
                      classbtn={
                        "cx-btn-dark me-auto  btn-width-100 btn-height font-17"
                      }
                      btn={"Withdraw"}
                    />

                  </div>
                </div>
              </div>

              <div className="donut_chart_wrapper">
                <div className="dc_header">
                  <p>Payment Analytics</p>
                  <div className="selection">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected disabled>
                        Month
                      </option>
                      <option value="1">JAN</option>
                      <option value="2">FEB</option>
                      <option value="3">MAR</option>
                      <option value="3">APR</option>
                      <option value="3">MAY</option>
                      <option value="3">JUN</option>
                      <option value="3">JUL</option>
                      <option value="3">AUG</option>
                      <option value="3">SEP</option>
                      <option value="3">OCT</option>
                      <option value="3">NOV</option>
                      <option value="3">DEC</option>
                    </select>
                  </div>
                </div>
                <DonutChart />
                <div className="Chart_labels">
                  <div className="cl_item">
                    <p>Received</p>
                    <p>25%</p>
                  </div>
                  <div className="cl_item">
                    <p>Subscriptions</p>
                    <p>25%</p>
                  </div>
                  <div className="cl_item">
                    <p>Withdrawl</p>
                    <p>50%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TransactionDetails;
