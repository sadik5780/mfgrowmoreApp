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
import IdCreateForm from "../Agreement/IdCreateForm";
import ic_back_arrow from "../../assets/images/ic_back_arrow.svg";

const PreInvestment = () => {
  const [viewAgreementList, setviewAgreementList] = useState(true); 
  const [showIdCreateForm, setshowIdCreateForm] = useState(false);
  const [showResultPreInvestment, setshowResultPreInvestment] = useState(false);
  const [showResultTitle, setshowResultTitle] = useState(false);




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
                    setviewAgreementList(false);
                    setshowIdCreateForm(true);
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
                      <th>Principal Amt</th>
                      <th>Profit</th>
                      <th>Total</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Account No.</th>
                      <th>IFSC Code</th>
                      <th>Cheque No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr  onClick={() => {
                                        setviewAgreementList(false);
                                        setshowResultTitle(true);
                                        setshowResultPreInvestment(true);
                                      }}
                                      className="offer1">
                      <td>1</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>
                    <tr className="newCust">
                      {/* This class should be removed after 1 month for New Customer  */}
                      <td>2</td>
                      <td>Brooklyn Simmons</td>

                      <td></td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>{" "}
                    <tr className="profitUp">
                      <td>3</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>{" "}
                    <tr className="profitDown">
                      <td>4</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>{" "}
                    <tr className="offer4">
                      <td>5</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>{" "}
                    <tr className="offer3">
                      <td>6</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>{" "}
                    <tr className="offer2">
                      <td>7</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>{" "}
                    <tr>
                      <td>8</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>{" "}
                    <tr>
                      <td>9</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Brooklyn Simmons</td>

                      <td>+91 9999 9999 99</td>
                      <td>1,00,000</td>
                      <td>01-01-2023</td>
                      <td>01-01-2024</td>
                      <td>24</td>
                      <td>5%-6%</td>
                      <td>4200</td>
                      <td>5000 - 6000</td>
                      <td>9200 - 10200</td>
                      <td>Silk Mills Colony, Aurangabad</td>
                       <td>simmons@mail.com</td>
                      <td>1234567890</td>
                      <td>SBIN0123456</td>
                      <td>11223344556677</td>
                    </tr>
                  </tbody>
                </table>
                <PaginationComp />
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
                  setshowResultPreInvestment(false); 
                }}
              />
              <label htmlFor="">
                Showing result for : <span>Ronald Sharma</span>
              </label>
            </div>
          </>
        )}

        {showResultPreInvestment && (
          <>
            <div className="app-details-wrapper">
              <div className="row gx-3">
                <div className="col-md-12">
                  <div className="left">
                    <div className="aap-heading">
                      <label htmlFor="">Ronald Sharma (Pre Investment)</label>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div>
                          <label htmlFor="" className="key">
                            Name of Investor
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                          Ronald Miller
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Investment Amount
                          </label>
                        </div>
                        <label htmlFor="" className="value">
                         1 Lakh
                        </label>
                      </div>
                      <div className="col-md-4">
                        <div>
                          <label htmlFor="" className="key">
                            Investment Date
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
                          02-02-2025
                        </label>
                      </div>
                    </div>
                    <div className="table-wrapper table_wrapper_pagination p-0 dasboard-cust-tb-wrapper">
                      <table>
                        <thead>
                          <tr>
                            <th>Sr. No</th>
                            <th>Month</th>
                            <th>Principal Amount</th>
                            <th>Profit Amount</th>
                            <th>Total Amount</th>
                            <th>Transaction No.</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>02-02-2023</td>
                            <td>₹5500</td>
                            <td>₹5000</td>
                            <td>₹10,500</td>
                            <td>4312</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>02-03-2023</td>
                            <td>₹5500</td>
                            <td>₹5000</td>
                            <td>₹10,500</td>
                            <td>4312</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>02-04-2023</td>
                            <td>₹5500</td>
                            <td>₹5000</td>
                            <td>₹10,500</td>
                            <td>4312</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>02-05-2023</td>
                            <td>₹5500</td>
                            <td>₹5000</td>
                            <td>₹10,500</td>
                            <td>4312</td>
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

export default PreInvestment;
