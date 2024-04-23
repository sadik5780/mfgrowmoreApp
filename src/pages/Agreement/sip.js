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
import ic_back_arrow from "../../assets/images/ic_back_arrow.svg";
import IdCreateForm from "./IdCreateForm";

const Sip = () => {
  const [viewAgreementList, setviewAgreementList] = useState(true);
  const [showIdCreateForm, setshowIdCreateForm] = useState(false);
  const [showResultTitle, setshowResultTitle] = useState(false);
  const [showResultDaily, setshowResultDaily] = useState(false);
  const [showResultMonthly, setshowResultMonthly] = useState(false);

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
                <div className="row">
                  <div className="col-lg-5"> 
                    <input
                      type="text"
                      className="form-control serach-input"
                      placeholder="Search by Name, Email, Contact..."
                    />
                  </div>
                  <div className="col-lg-5">
                    <input
                      type="date"
                      className="form-control date-input"
                      // placeholder="Search by date"
                    />
                  </div>
                  <div className="col-lg-2">
                    <button className="fltr-btn">
                      <img src={ic_export} alt="" />
                    </button>
                  </div>
                </div>
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
                            <Nav.Link eventKey="1">Daily SIP</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="2">Monthly SIP</Nav.Link>
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
                                      <th>In Date</th>
                                      <th>Out Date</th>
                                      <th>Mature Date</th>
                                      <th>Amount</th>
                                      <th>Contact</th>
                                      <th>Address</th>
                                      <th>Email</th>
                                      <th>%</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr
                                      onClick={() => {
                                        setviewAgreementList(false);
                                        setshowResultTitle(true);
                                        setshowResultDaily(true);
                                      }}
                                    >
                                      <td>1</td>
                                      <td>Ronald Sharma</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>₹300</td>
                                      <td>7788991122</td>
                                      <td>Silk Mills Colony, Auranbagad</td>
                                      <td>john@mail.com</td>
                                      <td>30%</td>
                                    </tr>
                                    <tr>
                                      <td>2</td>
                                      <td>Ronald Sharma</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>₹200</td>
                                      <td>7788991122</td>
                                      <td>Silk Mills Colony, Auranbagad</td>
                                      <td>john@mail.com</td>
                                      <td>30%</td>
                                    </tr>
                                    <tr>
                                      <td>3</td>
                                      <td>Ronald Sharma</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>₹150</td>
                                      <td>7788991122</td>
                                      <td>Silk Mills Colony, Auranbagad</td>
                                      <td>john@mail.com</td>
                                      <td>30%</td>
                                    </tr>
                                    <tr>
                                      <td>4</td>
                                      <td>Ronald Sharma</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>₹200</td>
                                      <td>7788991122</td>
                                      <td>Silk Mills Colony, Auranbagad</td>
                                      <td>john@mail.com</td>
                                      <td>30%</td>
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
                                      <th>In Date</th>
                                      <th>Out Date</th>
                                      <th>Mature Date</th>
                                      <th>Amount</th>
                                      <th>Contact</th>
                                      <th>Plan</th>
                                      <th>Address</th>
                                      <th>Email</th>
                                      <th>%</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr onClick={() => {
                                        setviewAgreementList(false);
                                        setshowResultTitle(true);
                                        setshowResultMonthly(true);
                                        setshowResultDaily(false);
                                      }}>
                                      <td>1</td>
                                      <td>Ronald Sharma</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>02-02-2023</td>
                                      <td>₹5000</td>
                                      <td>7788991122</td>
                                      <td>24 months</td>
                                      <td>Silk Mills Colony, Auranbagad</td>
                                      <td>john@mail.com</td>
                                      <td>30%</td>
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
        {showResultTitle && (
          <>
            <div className="app-result-arrow-top">
              <img
                src={ic_back_arrow}
                alt=""
                onClick={() => {
                  setviewAgreementList(true);
                  setshowResultTitle(false); 
                  setshowResultMonthly(false);
                  setshowResultDaily(false);
                }}
              />
              <label htmlFor="">
                Showing result for : <span>Ronald Sharma</span>
              </label>
            </div>
          </>
        )}

        {showResultDaily && (
          <>
            <div className="app-details-wrapper">
              <div className="row gx-3">
                <div className="col-md-12">
                  <div className="left">
                    <div className="aap-heading">
                      <label htmlFor="">Ronald Sharma (Daily SIP)</label>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div>
                          <label htmlFor="" className="key">
                            Name
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          Ronald Miller
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Registration Date
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          02-02-2023, 04:30 PM
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Start Date
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          02-02-2023
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Exit Date
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          02-02-2023
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Plan
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          12 Months
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Maturity Date
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          02-02-2023
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Plan Amount
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          500
                        </label>
                      </div>
                    </div>
                    <div className="table-wrapper table_wrapper_pagination p-0 dasboard-cust-tb-wrapper">
                      <table>
                        <thead>
                          <tr>
                            <th>Sr. No</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Month</th>
                            <th>Remark</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>02-02-2023</td>
                            <td>₹300</td>
                            <td>March</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>02-02-2023</td>
                            <td>₹300</td>
                            <td>March</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>02-02-2023</td>
                            <td>₹300</td>
                            <td>March</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>02-02-2023</td>
                            <td>₹300</td>
                            <td>March</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="pagination_wrapper">
                      <p>Showing 1-10 of 100</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {showResultMonthly && (
          <>
            <div className="app-details-wrapper">
              <div className="row gx-3">
                <div className="col-md-12">
                  <div className="left">
                    <div className="aap-heading">
                      <label htmlFor="">Ronald Sharma (Monthly SIP)</label>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div>
                          <label htmlFor="" className="key">
                            Name
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          Ronald Miller
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Registration Date
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          02-02-2023, 04:30 PM
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Start Date
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          02-02-2023
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Exit Date
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          02-02-2023
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Plan
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          12/18/24/36 Months
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Maturity Date
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          02-02-2023
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Plan Amount
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          2000
                        </label>
                      </div>
                    </div>
                    <div className="table-wrapper table_wrapper_pagination p-0 dasboard-cust-tb-wrapper">
                      <table>
                        <thead>
                          <tr>
                            <th>Sr. No</th>
                            <th>Month</th>
                            <th>Amount</th>
                            <th>Receipt No.</th>
                            <th>Receipt</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>March</td>
                            <td>₹300</td>
                            <td>123</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>March</td>
                            <td>₹300</td>
                            <td>123</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>March</td>
                            <td>₹300</td>
                            <td>123</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>March</td>
                            <td>₹300</td>
                            <td>123</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="pagination_wrapper">
                      <p>Showing 1-10 of 100</p>
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

export default Sip;
