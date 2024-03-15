import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext"; 
import tc_patient_img1 from "../../assets/images/tc_patient_img1.svg";
import tc_patient_img2 from "../../assets/images/tc_patient_img2.svg";
import tc_patient_img3 from "../../assets/images/tc_patient_img3.svg";
import tc_patient_img4 from "../../assets/images/tc_patient_img4.svg";
import tc_patient_img5 from "../../assets/images/tc_patient_img5.svg";
import tc_patient_img6 from "../../assets/images/tc_patient_img6.svg";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { TabView, TabPanel } from "primereact/tabview";
import { Nav, NavItem, Tab } from "react-bootstrap";
import { DonutChart } from "../commonComponents/commonComp";

const Dashboard = () => {
  const [revenueBar, setRevenueBar] = useState({
    options: {
      chart: {
        type: "line",
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
      },
      yaxis: {
        min: 0,
        max: 800,
      },
      colors: ["#6AD2FF", "#4318FF"],
    },
    series: [
      {
        // name: "New Patient",
        name: " ",
        data: [80, 140, 30, 80, 50, 120, 200],
      },
      {
        // name: "Old Patient",
        name: "",
        data: [300, 340, 280, 460, 180, 520, 510],
      },
    ],
  });

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
      id="cx-main"
    >
      <div className="dashboard_wrapper">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div className="row">
              <div className="col-md-12">
                <div className="line_chart_wrapper">
                  <div className="lc_top">
                    <div className="lct_header_wrapper">
                      <p>Patient Overview</p>
                      <div className="chart_labels">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="chart_label label_old">
                              <p>Old Patient</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="chart_label label_new">
                              <p>New Patient</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lc_bottom">
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
                  <Chart
                    options={revenueBar.options}
                    series={revenueBar.series}
                    type="line"
                    width="90%"
                    height="260"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="dashboard_appointments_wrapper">
              <div className="lc_top">
                <div className="lct_header_wrapper">
                  <p>Appointments</p>
                  <div className="appoint_link">
                    <Link to="/AtClinic">View All</Link>
                  </div>
                </div>
              </div>
              <div className="daw_tabs">
                <Tab.Container defaultActiveKey="first">
                  <div className="row">
                    <div className="col-lg-12">
                      <Nav variant="pills" className="">
                        <Nav.Item>
                          <Nav.Link eventKey="first">At Clinic</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Video</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                </Tab.Container>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mb-4">
            <div className="top_customer_table_wrapper">
              <div className="lc_top">
                <div className="lct_header_wrapper">
                  <p>Appointments</p>
                  <div className="appoint_link">
                    <Link to="/CustomerDetails">View All</Link>
                  </div>
                </div>
              </div>
              {/* <div className="tct_header_wrapper">
                <h3 className="tct_header">Top Customer's</h3>
                <Link to="/CustomerDetails" className="tct_view">
                  View All
                </Link>
              </div> */}
              <div className="dasboard-cust-tb-wrapper">
                <table className="top_customer_table">
                  <thead>
                    <tr>
                      <th>Sr. No</th>
                      <th>Owner</th>
                      <th>Patient</th>
                      <th>Pet Type</th>
                      <th>Case</th>
                      <th>Vaterinarian</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>David Millan</td>
                      <td>
                        <div className="tct_patient_wrapper">
                          <img src={tc_patient_img1} alt="" />
                          <p className="tct_patient_name">Drogo</p>
                        </div>
                      </td>
                      <td>Dog</td>
                      <td>
                        <div className="case_type case1">Check Up</div>
                      </td>
                      <td>Sam Billings</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>David Millan</td>
                      <td>
                        <div className="tct_patient_wrapper">
                          <img src={tc_patient_img2} alt="" />
                          <p className="tct_patient_name">Simba</p>
                        </div>
                      </td>
                      <td>Cow</td>
                      <td>
                        <div className="case_type case2">Vaccine</div>
                      </td>
                      <td>Sam Billings</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>David Millan</td>
                      <td>
                        <div className="tct_patient_wrapper">
                          <img src={tc_patient_img3} alt="" />
                          <p className="tct_patient_name">Jelly</p>
                        </div>
                      </td>
                      <td>Fish</td>
                      <td>
                        <div className="case_type case3">Surgery</div>
                      </td>
                      <td>Sam Billings</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>David Millan</td>
                      <td>
                        <div className="tct_patient_wrapper">
                          <img src={tc_patient_img4} alt="" />
                          <p className="tct_patient_name">Stuart</p>
                        </div>
                      </td>
                      <td>Parrot</td>
                      <td>
                        <div className="case_type case1">Check Up</div>
                      </td>
                      <td>Sam Billings</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>David Millan</td>
                      <td>
                        <div className="tct_patient_wrapper">
                          <img src={tc_patient_img5} alt="" />
                          <p className="tct_patient_name">Max</p>
                        </div>
                      </td>
                      <td>Cat</td>
                      <td>
                        <div className="case_type case4">Test</div>
                      </td>
                      <td>Sam Billings</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>David Millan</td>
                      <td>
                        <div className="tct_patient_wrapper">
                          <img src={tc_patient_img6} alt="" />
                          <p className="tct_patient_name">Giant</p>
                        </div>
                      </td>
                      <td>Elephant</td>
                      <td>
                        <div className="case_type case2">Vaccine</div>
                      </td>
                      <td>Sam Billings</td>
                    </tr>
                  </tbody>
                </table>
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
    </motion.div>
  );
};

export default Dashboard;
