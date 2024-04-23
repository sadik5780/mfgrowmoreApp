import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import logo from "../assets/images/logo.png";
import dashboard from "../assets/images/sidebarIcons/dashboard.svg";
import dashboardActive from "../assets/images/sidebarIcons/dashboardActive.svg";
import doctors from "../assets/images/sidebarIcons/Doctors.svg";
import doctorsActive from "../assets/images/sidebarIcons/DoctorsActive.svg";
import Pharmacy from "../assets/images/sidebarIcons/pharmacy.svg";
import PharmacyActive from "../assets/images/sidebarIcons/PharmacyActive.svg";
import vacinators from "../assets/images/sidebarIcons/tabler_vaccine.svg";
import vacinatorsActive from "../assets/images/sidebarIcons/tabler_vaccineActive.svg";
import deliveryBoy from "../assets/images/sidebarIcons/DeliveryBoy.svg";
import deliveryBoyActive from "../assets/images/sidebarIcons/DeliveryBoyActive.svg";
import double_arrow from "../assets/images/double_arrow.svg";
import activeImg from "../assets/images/sidebarIcons/highlightImg.svg";
import Accordion from "react-bootstrap/Accordion";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(AppContext);
  const location = useLocation();
  const currentRoute = location.pathname;

  const [pharmacy, setPharmacy] = useState(false);
  const [vetPets, setVetPets] = useState(false);
  const [adminS, setAdminS] = useState(false);
  const [report, setReport] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  useEffect(() => {
    isMobile ? setSidebar(false) : setSidebar(true);
    return () => {};
  }, [isMobile]);

  const mobileSidebarOff = () => {
    isMobile ? setSidebar(false) : setSidebar(true);
  };
  return (
    <>
      <div className="cx-sideBar">
        <div
          className={
            sidebar ? "cx-sidebar-wrapper" : "cx-sidebar-wrapper sidebarActive"
          }
        >
          <>
            <div className="logoMain">
              {sidebar ? (
                <img src={logo} alt="" />
              ) : (
                <span className="sm-logo">
                  <img src={logo} alt="" />
                </span>
              )}
            </div>

            <div className="arrow-wrapper">
              <button onClick={() => setSidebar(!sidebar)}>
                <img src={double_arrow} alt="" />
              </button>
            </div>

            {/* Dashboard */}
            <Accordion>
              <div className="sidebarLinks">
                <Link
                  to="/Dashboard"
                  className="targetLink"
                  onClick={mobileSidebarOff}
                >
                  <div className="dashboardLink">
                    <p
                      className={
                        currentRoute === "/Dashboard"
                          ? "activeTxt"
                          : "deActiveTxt"
                      }
                    >
                      Dashboard
                    </p>
                    <img
                      src={currentRoute === "/Dashboard" ? activeImg : null}
                      className="activelogo"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              {/* Customer Details */}
              <div className="sidebarLinks">
                <Link
                  to="/CustomerDetails"
                  className="targetLink"
                  onClick={mobileSidebarOff}
                >
                  <div className="dashboardLink">
                    <p
                      className={
                        currentRoute === "/Doctors" ||
                        currentRoute === "/CustomerDetails"
                          ? "activeTxt"
                          : "deActiveTxt"
                      }
                    >
                      Customer Details
                    </p>
                    <img
                      src={
                        currentRoute === "/CustomerDetails" ||
                        currentRoute === "/CustomerDetails"
                          ? activeImg
                          : null
                      }
                      className="activelogo"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              {/* Appointments */}

              {/* Reports */}
              <div className="sidebarLinks">
                <Link
                  to="/Reports"
                  className="targetLink"
                  onClick={mobileSidebarOff}
                >
                  <div className="dashboardLink">
                    <p
                      className={
                        currentRoute === "/Reports"
                          ? "activeTxt"
                          : "deActiveTxt"
                      }
                    >
                      Reports
                    </p>
                    <img
                      src={currentRoute === "/Reports" ? activeImg : null}
                      className="activelogo"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
              {/* Transaction Details */}
              {/* <div className="sidebarLinks">
                <Link to="/Agreement" className='targetLink' onClick={mobileSidebarOff}>
                  <div className="dashboardLink"> 
                    <p className={currentRoute === "/Agreement" ? "activeTxt" : "deActiveTxt"}>Agreements</p>
                    <img src={currentRoute === "/Agreement" ? activeImg : null} className='activelogo' alt="" />
                  </div>
                </Link>
              </div> */}

              <Accordion.Item eventKey="0">
                <Accordion.Header
                  onClick={() => {
                    setPharmacy(!pharmacy);
                    setAdminS(false);
                    setReport(false);
                    setVetPets(false);
                  }}
                >
                  <Link to="#" className="targetLink">
                    <div className="sidebarLinks">
                      <div className="dashboardLink">
                        <p
                          className={
                            currentRoute === "/PreInvestment" ||
                            currentRoute === "/Sip"
                              ? "activeTxt"
                              : "deActiveTxt"
                          }
                        >
                          Agreement
                        </p>
                        <img
                          src={
                            currentRoute === "/PreInvestment" ||
                            currentRoute === "/Sip"
                              ? activeImg
                              : null
                          }
                          className="activelogo"
                          alt=""
                        />
                        {/* <img src={pharmacy ? arrowAActive : rightArrow
                        } className='arrowSetting' alt="" /> */}
                      </div>
                    </div>
                  </Link>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="menu_items">
                    <Link
                      to="/PreInvestment"
                      className="menuLink"
                      onClick={mobileSidebarOff}
                    >
                      <div
                        className={
                          currentRoute === "/PreInvestment"
                            ? "activeTxt"
                            : "deActiveTxt"
                        }
                      >
                        Pre Investment
                      </div>
                    </Link>
                    <Link
                      to="/Sip"
                      className="menuLink"
                      onClick={mobileSidebarOff}
                    >
                      <div
                        className={
                          currentRoute === "/Sip" ? "activeTxt" : "deActiveTxt"
                        }
                      >
                        SIP
                      </div>
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header
                  onClick={() => {
                    setPharmacy(!pharmacy);
                    setAdminS(false);
                    setReport(false);
                    setVetPets(false);
                  }}
                >
                  <Link to="#" className="targetLink">
                    <div className="sidebarLinks">
                      <div className="dashboardLink">
                        <p
                          className={
                            currentRoute === "/Sequence" ||
                            currentRoute === "/TotalPayments" ||
                            currentRoute === "/InvestmentLifecycle" ||
                            currentRoute === "/PaymentSheet"
                              ? "activeTxt"
                              : "deActiveTxt"
                          }
                        >
                          Accounts
                        </p>
                        <img
                          src={
                            currentRoute === "/Sequence" ||
                            currentRoute === "/TotalPayments" ||
                            currentRoute === "/InvestmentLifecycle" ||
                            currentRoute === "/PaymentSheet"
                              ? activeImg
                              : null
                          }
                          className="activelogo"
                          alt=""
                        />
                        {/* <img src={pharmacy ? arrowAActive : rightArrow
                        } className='arrowSetting' alt="" /> */}
                      </div>
                    </div>
                  </Link>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="menu_items">
                    <Link
                      to="/Sequence"
                      className="menuLink"
                      onClick={mobileSidebarOff}
                    >
                      <div
                        className={
                          currentRoute === "/Sequence"
                            ? "activeTxt"
                            : "deActiveTxt"
                        }
                      >
                       Pre Sequence
                      </div>
                    </Link>
                    <Link
                      to="/PaymentSheet"
                      className="menuLink"
                      onClick={mobileSidebarOff}
                    >
                      <div
                        className={
                          currentRoute === "/PaymentSheet" ? "activeTxt" : "deActiveTxt"
                        }
                      >
                        Pre Payment Sheet
                      </div>
                    </Link>
                    <Link
                      to="/TotalPayments"
                      className="menuLink"
                      onClick={mobileSidebarOff}
                    >
                      <div
                        className={
                          currentRoute === "/TotalPayments" ? "activeTxt" : "deActiveTxt"
                        }
                      >
                        Total Payments
                      </div>
                    </Link>
                    <Link
                      to="/InvestmentLifecycle"
                      className="menuLink"
                      onClick={mobileSidebarOff}
                    >
                      <div
                        className={
                          currentRoute === "/InvestmentLifecycle" ? "activeTxt" : "deActiveTxt"
                        }
                      >
                        Investment Lifecycle
                      </div>
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              {/* Subscription */}
              {/* <div className="sidebarLinks">
                <Link to="/Subscription" className='targetLink' onClick={mobileSidebarOff}>
                  <div className="dashboardLink">
                    <img src={currentRoute === "/Subscription" ? deliveryBoyActive : deliveryBoy} alt="" />
                    <p className={currentRoute === "/Subscription" ? "activeTxt" : "deActiveTxt"}>Subscription</p>
                    <img src={currentRoute === "/Subscription" ? activeImg : null} className='activelogo' alt="" />
                  </div>
                </Link>
              </div> */}
            </Accordion>
          </>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
