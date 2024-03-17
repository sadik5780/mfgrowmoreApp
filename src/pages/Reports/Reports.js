import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import { Tab, Tabs } from "react-bootstrap";
import export_icon from "../../assets/images/icons/export_icon.svg";
import ic_completed from "../../assets/images/ic_completed.svg";
import ic_rejected from "../../assets/images/ic_rejected.svg";
import cat from "../../assets/images/cat.png";
import { motion } from "framer-motion";
import { DonutChart } from "../commonComponents/commonComp";
import { Link } from "react-router-dom";

const Reports = () => {
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
      className="appointment-wrapper reports_wrapper"
      id="cx-main"
    >
      <div className="reportsTabs">
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
          <Nav variant="pills" id="newTabMai" className="tob_nav_pills d-flex">
            <Nav.Item>
              <Nav.Link eventKey="1">Daily</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2">Monthly</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3">Pre Investment</Nav.Link>
            </Nav.Item>


          </Nav>
          <Link to="#" className="export_button">
            <img src={export_icon} alt="" /></Link>
          <Tab.Content>
            <Tab.Pane eventKey="1">
              <div className="dashboard_wrapper" id="reports-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="dashboard_statistics_wrapper">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={total_appoint_icon} /> */}
                                <div className="stat_text stat_4">
                                  <label>Total Customers</label>
                                  <p>200</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={complete_icon} /> */}
                                <div className="stat_text stat_1">
                                  <label>New Customers</label>
                                  <p>190</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={cancelled_icon} /> */}
                                <div className="stat_text stat_5">
                                  <label>Old Customers</label>
                                  <p>10</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={revenue_icon} /> */}
                                <div className="stat_text stat_6">
                                  <label>Total Revenue</label>
                                  <p>₹25000</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 mb-3">
                    <div className="dashboard_wrapper2">
                      <div className="table-wrapper table_wrapper_pagination dasboard-cust-tb-wrapper">
                        <table>
                          <thead>
                            <tr>
                              <th>Sr. No</th>
                              <th>Name</th>
                              <th>Transaction ID</th>
                              <th>Date</th>
                              <th>Amount</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>2</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>3</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>4</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>5</td>
                              <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>6</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                          </tbody>
                        </table>

                      </div>
                      <div className="pagination_wrapper">
                        <p>Showing 1-10 of 100</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    

                    <div className="donut_chart_wrapper">
                      <div className="dc_header">
                        <p>Payment Analytics</p>
                      </div>
                      <DonutChart />
                      <div className="Chart_labels">
                        <div className="cl_item">
                          <p>Pre-Investment</p>
                          <p>25%</p>
                        </div>
                        <div className="cl_item">
                          <p>Daily SIP</p>
                          <p>25%</p>
                        </div>
                        <div className="cl_item">
                          <p>Monthly SIP</p>
                          <p>50%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="2">
            <div className="dashboard_wrapper" id="reports-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="dashboard_statistics_wrapper">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={total_appoint_icon} /> */}
                                <div className="stat_text stat_4">
                                  <label>Total Customers</label>
                                  <p>200</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={complete_icon} /> */}
                                <div className="stat_text stat_1">
                                  <label>New Customers</label>
                                  <p>190</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={cancelled_icon} /> */}
                                <div className="stat_text stat_5">
                                  <label>Old Customers</label>
                                  <p>10</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={revenue_icon} /> */}
                                <div className="stat_text stat_6">
                                  <label>Total Revenue</label>
                                  <p>₹25000</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 mb-3">
                    <div className="dashboard_wrapper2">
                      <div className="table-wrapper table_wrapper_pagination dasboard-cust-tb-wrapper">
                        <table>
                          <thead>
                            <tr>
                              <th>Sr. No</th>
                              <th>Name</th>
                              <th>Transaction ID</th>
                              <th>Date</th>
                              <th>Amount</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>2</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>3</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>4</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>5</td>
                              <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>6</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                          </tbody>
                        </table>

                      </div>
                      <div className="pagination_wrapper">
                        <p>Showing 1-10 of 100</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    

                    <div className="donut_chart_wrapper">
                      <div className="dc_header">
                        <p>Payment Analytics</p>
                      </div>
                      <DonutChart />
                      <div className="Chart_labels">
                        <div className="cl_item">
                          <p>Pre-Investment</p>
                          <p>25%</p>
                        </div>
                        <div className="cl_item">
                          <p>Daily SIP</p>
                          <p>25%</p>
                        </div>
                        <div className="cl_item">
                          <p>Monthly SIP</p>
                          <p>50%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="3">
            <div className="dashboard_wrapper" id="reports-wrapper">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="dashboard_statistics_wrapper">
                          <div className="row">
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={total_appoint_icon} /> */}
                                <div className="stat_text stat_4">
                                  <label>Total Customers</label>
                                  <p>200</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={complete_icon} /> */}
                                <div className="stat_text stat_1">
                                  <label>New Customers</label>
                                  <p>190</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={cancelled_icon} /> */}
                                <div className="stat_text stat_5">
                                  <label>Old Customers</label>
                                  <p>10</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="stat_item">
                                {/* <img src={revenue_icon} /> */}
                                <div className="stat_text stat_6">
                                  <label>Total Revenue</label>
                                  <p>₹25000</p>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 mb-3">
                    <div className="dashboard_wrapper2">
                      <div className="table-wrapper table_wrapper_pagination dasboard-cust-tb-wrapper">
                        <table>
                          <thead>
                            <tr>
                              <th>Sr. No</th>
                              <th>Name</th>
                              <th>Transaction ID</th>
                              <th>Date</th>
                              <th>Amount</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>2</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>3</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>4</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>5</td>
                              <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                            <tr>
                              <td>6</td>
                               <td>
                                <label htmlFor="" className="photo">
                                  Ronald Sharma
                                </label>
                              </td>
                              <td>12345678900</td>
                              <td>02-02-2023</td>
                              <td>₹500</td>
                              

                            </tr>
                          </tbody>
                        </table>

                      </div>
                      <div className="pagination_wrapper">
                        <p>Showing 1-10 of 100</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    

                    <div className="donut_chart_wrapper">
                      <div className="dc_header">
                        <p>Payment Analytics</p>
                      </div>
                      <DonutChart />
                      <div className="Chart_labels">
                        <div className="cl_item">
                          <p>Pre-Investment</p>
                          <p>25%</p>
                        </div>
                        <div className="cl_item">
                          <p>Daily SIP</p>
                          <p>25%</p>
                        </div>
                        <div className="cl_item">
                          <p>Monthly SIP</p>
                          <p>50%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </motion.div>
  );
};

export default Reports;
