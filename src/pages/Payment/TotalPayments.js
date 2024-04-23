import React from "react";
import ic_export from "../../assets/images/icons/export_icon.svg";
import { motion } from "framer-motion";
import PaginationComp from "../../sharedComponent/PaginationComp";

const TotalPayments = () => {
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
            <table className="sequenceTable">
              {/* This data is for whole month (1-30) */}
              <thead>
                <tr>
                  <th colSpan={2}>Feb - 2024</th>
                  <th>Agree No.</th>
                  <th>Name</th>
                  <th>Principal Amt</th>
                  <th>Profit+PR</th>
                  <th>Total Principal</th>
                  <th>Total Profit</th>
                  <th>Total Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowspan="7" scope="rowgroup">
                    1
                  </td>
                  <td rowspan="7" scope="rowgroup" className="day">
                    Thursday
                  </td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                  <td rowspan="7" scope="rowgroup" className="ttpr">
                    1,02,250
                  </td>
                  <td rowspan="7" scope="rowgroup" className="ttprf">
                    1,21,250
                  </td>
                  <td rowspan="7" scope="rowgroup" className="ttamt">
                    2,02,250
                  </td>
                </tr>
                <tr className="newCust">
                  {/* This class should be removed after 1 month for New Customer  */}
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                </tr>{" "}
                <tr className="profitUp">
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                </tr>{" "}
                <tr className="profitDown">
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                </tr>{" "}
                <tr className="offer4">
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                </tr>{" "}
                <tr className="offer3">
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                </tr>{" "}
                <tr className="offer2">
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                </tr>{" "}
                <tr>
                  <td rowspan="3" scope="rowgroup">
                    2
                  </td>
                  <td rowspan="3" scope="rowgroup" className="day">
                    Friday
                  </td>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                  <td rowspan="3" scope="rowgroup" className="ttpr">
                    1,02,250
                  </td>
                  <td rowspan="3" scope="rowgroup" className="ttprf">
                    1,21,250
                  </td>
                  <td rowspan="3" scope="rowgroup" className="ttamt">
                    2,02,250
                  </td>
                </tr>{" "}
                <tr>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                </tr>
                <tr>
                  <td>123213</td>
                  <td>Brooklyn Simmons</td>
                  <td>4200</td>
                  <td>11200</td>
                </tr>
                <tr>
                  <td colSpan={6} className="monthly_total">Monthly Total : -</td>
                  <td className="ttpr">1,02,250</td>
                  <td className="ttprf">1,21,250</td>
                  <td className="ttamt">2,02,250</td>
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
export default TotalPayments;
