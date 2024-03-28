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

const PreInvestment = () => {
  const [viewAgreementList, setviewAgreementList] = useState(true); 
  const [showIdCreateForm, setshowIdCreateForm] = useState(false);




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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
                    <tr>
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
      </div>
    </motion.div>
  );
};

export default PreInvestment;
