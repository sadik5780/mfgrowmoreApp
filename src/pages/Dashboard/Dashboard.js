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
        categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB", "MAR"],
      },
      yaxis: {
        min: 0,
        max: 10,
      },
      colors: ["#4318FF"],
    },
    series: [
      { 
        name: "",
        data: [3, 4, 2, 4.6, 1.8, 5.2, 5.10],
      },
    ],
  });
  const [clientBar, setClientBar] = useState({
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
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="line_chart_wrapper">
              <div className="lc_top">
                <div className="lct_header_wrapper">
                  <p>Pre-Investment Plan Overview</p>
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
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="line_chart_wrapper">
              <div className="lc_top">
                <div className="lct_header_wrapper">
                  <p>Monthly SIP Overview</p> 
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
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="line_chart_wrapper">
              <div className="lc_top">
                <div className="lct_header_wrapper">
                  <p>Daily SIP Overview</p>
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
          <div className="col-lg-6 col-md-6 mb-4">
            <div className="line_chart_wrapper">
              <div className="lc_top">
                <div className="lct_header_wrapper">
                  <p>Client Overview</p>
                  <div className="chart_labels">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="chart_label label_old">
                          <p>Old Clients</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="chart_label label_new">
                          <p>New Clients</p>
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
    </motion.div>
  );
};

export default Dashboard;
