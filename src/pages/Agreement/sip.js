import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Tab, Tabs } from "react-bootstrap";
import wallet_icon from "../../assets/images/icons/wallet_icon.svg";
import export_icon from "../../assets/images/icons/export_icon.svg";
import ic_completed from "../../assets/images/ic_completed.svg";
import ic_rejected from "../../assets/images/ic_rejected.svg";
import cat from "../../assets/images/cat.png";
import ic_filter from "../../assets/images/ic_filter.svg";
import ic_export from "../../assets/images/icons/export_icon.svg";
import { motion } from "framer-motion";
import { DarkButton, DonutChart } from "../commonComponents/commonComp";
import { Link } from "react-router-dom";
import IdCreateForm from "./IdCreateForm";

const Sip = () => {
  const [viewAgreementList, setviewAgreementList] = useState(true);
  const [showIdCreateForm, setshowIdCreateForm] = useState(true);

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
      <div className="transaction_details agreement" id="TransactionDetails">
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
                {/* <button className="fltr-btn">
                  <img src={ic_export} alt="" />
                </button> */}
              </div>
              <div className="dark-btns-wrapper search-filter">
                <button
                  className="dark-btns"
                  onClick={() => {
                    setviewAgreementList(false);
                    setshowIdCreateForm(true);
                  }}
                >
                  Create Id
                </button>
              </div>
            </div>
            <div className="wrapper-main">
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-wrapper table_wrapper_pagination py-4">
                    <div className="reportsTabs">
                      <Tab.Container
                        id="left-tabs-example"
                        defaultActiveKey="1"
                      >
                        <Nav
                          variant="pills"
                          id="newTabMai"
                          className="tob_nav_pills d-flex"
                        >
                          <Nav.Item>
                            <Nav.Link eventKey="1">
                              Recent Transactions
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="2">Upcoming Payments</Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Link to="#" className="export_button custom_border">
                          <img src={export_icon} alt="" />
                        </Link>
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
                                      <td>Ronald Sharma</td>
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
                                      <td>Ronald Sharma</td>
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
                                      <td>Ronald Sharma</td>
                                      <td>02-02-2023</td>
                                      <td>12345678900</td>
                                      <td>Service Charge</td>
                                      <td>₹500</td>
                                      <td>
                                        <img
                                          src={ic_rejected}
                                          className="status-ic"
                                          alt=""
                                        />
                                        Cancelled
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>Ronald Sharma</td>
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
                                      <td>Ronald Sharma</td>
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
                                      <td>Ronald Sharma</td>
                                      <td>02-02-2023</td>
                                      <td>12345678900</td>
                                      <td>Clinic</td>
                                      <td>₹500</td>
                                      <td>
                                        <img
                                          src={ic_rejected}
                                          className="status-ic"
                                          alt=""
                                        />
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
                                      <td>Ronald Sharma</td>
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
              </div>
            </div>
          </>
        )}
        {showIdCreateForm && <IdCreateForm />}
      </div>
    </motion.div>
  );
};

export default Sip;
