import React from "react";
import ic_export from "../../assets/images/icons/export_icon.svg";
import { motion } from "framer-motion";
import PaginationComp from "../../sharedComponent/PaginationComp";

const PaymentSheet = () => {
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
      <div className="agreement" id="agreement">
        <div className="search-filter-wrapper">
          <div className="search-filter-left">
            <div className="row">
              <div className="col-lg-4 d-flex flex-column">
                <label htmlFor="search">Search</label>
                <input
                  type="text"
                  className="form-control serach-input"
                  placeholder="Search by Name, Email, Contact..."
                />
              </div>

              <div className="col-lg-4 d-flex flex-column">
                <label htmlFor="search">Date from</label>
                <input
                  type="date"
                  className="form-control date-input"
                  // placeholder="Search by date"
                />
              </div>
              <div className="col-lg-4 d-flex flex-column">
                <label htmlFor="search">Date to</label>
                <input
                  type="date"
                  className="form-control date-input"
                  // placeholder="Search by date"
                />
              </div>
            </div>

            <button className="fltr-btn">
              <img src={ic_export} alt="" />
            </button>
          </div>
        </div>
        <div className="wrapper-main">
          <div className="table-wrapper left-table ">
            <table className="">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Day</th>
                  <th>Agreement No.</th>
                  <th>Name</th>
                  <th>Investment</th>
                  <th>In Date</th>
                  <th>Out Date</th>
                  <th>Plan (Tenure)</th>
                  <th>%</th>
                  <th>Principal Amt</th>
                  <th>Last Month Payment</th>
                  <th>Total Months</th>
                  <th>Pay</th>
                  <th>Amount</th>
                  <th>Transaction ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>
                <tr className="newCust">
                  {/* This class should be removed after 1 month for New Customer  */}
                  <td>2</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>{" "}
                <tr className="profitUp">
                  <td>3</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>{" "}
                <tr className="profitDown">
                  <td>4</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>{" "}
                <tr className="offer4">
                  <td>5</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>{" "}
                <tr className="offer3">
                  <td>6</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>{" "}
                <tr className="offer2">
                  <td>7</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>{" "}
                <tr>
                  <td>8</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>{" "}
                <tr>
                  <td>9</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Friday</td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>100000</td>
                  <td>01-01-2024</td>
                  <td>01-01-2025</td>
                  <td>24</td>
                  <td>7%</td>
                  <td>4200</td>
                  <td>10900</td>
                  <td>8 Months</td>
                  <td>
                    <button className="cx-btn-dark-2">Pay</button>
                  </td>
                  <td>10000</td>
                  <td>TRID651762576</td>
                </tr>
              </tbody>
            </table>
            <PaginationComp />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentSheet;
