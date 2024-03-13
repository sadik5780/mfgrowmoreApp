import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import logo from "../assets/images/logo.png";
import dashboard from "../assets/images/sidebarIcons/dashboard.svg";
import dashboardActive from "../assets/images/sidebarIcons/dashboardActive.svg";
import doctors from "../assets/images/sidebarIcons/Doctors.svg";
import doctorsActive from "../assets/images/sidebarIcons/DoctorsActive.svg";
import Pharmacy from "../assets/images/sidebarIcons/pharmacy.svg";
import PharmacyActive from "../assets/images/sidebarIcons/PharmacyActive.svg";
import vacinators from "../assets/images/sidebarIcons/tabler_vaccine.svg";
import vacinatorsActive from "../assets/images/sidebarIcons/tabler_vaccineActive.svg";
import Ambulance from "../assets/images/sidebarIcons/Ambulance.svg";
import AmbulanceActive from "../assets/images/sidebarIcons/AmbulanceActive.svg";
import deliveryBoy from "../assets/images/sidebarIcons/DeliveryBoy.svg";
import deliveryBoyActive from "../assets/images/sidebarIcons/DeliveryBoyActive.svg";
import double_arrow from "../assets/images/double_arrow.svg";
import activeImg from "../assets/images/sidebarIcons/highlightImg.svg";
import Accordion from 'react-bootstrap/Accordion';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
    return () => { };
  }, [isMobile]);

  const mobileSidebarOff = () => {
    isMobile ? setSidebar(false) : setSidebar(true);
  };
  return (
    <>
      <div className="cx-sideBar">
        <div className={
          sidebar ? "cx-sidebar-wrapper" : "cx-sidebar-wrapper sidebarActive"
        }>
          <>
            <div className="logoMain">
              {
                 sidebar ? <img src={logo} alt="" /> : <span className='sm-logo'>
                 <img src={logo} alt="" />
               </span>
              }
              
            </div>
            
            <div className="arrow-wrapper">
              <button onClick={()=>setSidebar(!sidebar)}>
              <img src={double_arrow} alt="" />
              </button>
            </div>

            {/* Dashboard */}
            <Accordion >
              <div className="sidebarLinks">
                <Link to="/Dashboard" className='targetLink' onClick={mobileSidebarOff}>
                  <div className="dashboardLink">
                    <img src={currentRoute === "/Dashboard" ? dashboardActive : dashboard} alt="" />
                    <p className={currentRoute === "/Dashboard" ? "activeTxt" : "deActiveTxt"}>Dashboard</p>
                    <img src={currentRoute === "/Dashboard" ? activeImg : null} className='activelogo' alt="" />
                  </div>
                </Link>
              </div>
              {/* Customer Details */}
              <div className="sidebarLinks">
                <Link to="/CustomerDetails" className='targetLink' onClick={mobileSidebarOff}>
                  <div className="dashboardLink">
                    <img src={currentRoute === "/CustomerDetails" 
                      ? doctorsActive : doctors} alt="" />
                    <p className={currentRoute === "/Doctors" ||
                      currentRoute === "/CustomerDetails" ? "activeTxt" : "deActiveTxt"}>Customer Details</p>
                    <img src={currentRoute === "/CustomerDetails" ||
                      currentRoute === "/CustomerDetails" ? activeImg : null} className='activelogo' alt="" />
                  </div>
                </Link>
              </div>
              {/* Appointments */}
              <Accordion.Item eventKey="0">
                <Accordion.Header onClick={() => {
                  setPharmacy(!pharmacy);
                  setAdminS(false);
                  setReport(false)
                  setVetPets(false);
                }}>
                  <Link to="#" className='targetLink'>
                    <div className="sidebarLinks">
                      <div className="dashboardLink">
                        <img src={currentRoute === "/AtClinic" ||
                          currentRoute === "/Video"
                          ? PharmacyActive : Pharmacy} alt="" />
                        <p className={currentRoute === "/AtClinic" ||
                          currentRoute === "/Video" ? "activeTxt" : "deActiveTxt"}>Appointments</p>
                        <img src={currentRoute === "/AtClinic" ||
                          currentRoute === "/Video" ? activeImg : null} className='activelogo' alt="" />
                        {/* <img src={pharmacy ? arrowAActive : rightArrow
                        } className='arrowSetting' alt="" /> */}
                      </div>
                    </div>
                  </Link>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="menu_items">
                    <Link to="/AtClinic" className='menuLink' onClick={mobileSidebarOff}>
                      <div className={currentRoute === "/AtClinic" ? "activeTxt" : "deActiveTxt"}>
                      At Clinic
                      </div>
                    </Link>
                    <Link to="/Video" className='menuLink' onClick={mobileSidebarOff}>
                      <div className={currentRoute === "/Video" ? "activeTxt" : "deActiveTxt"}>
                      Video
                      </div>
                    </Link>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              
              {/* Reports */}
              <div className="sidebarLinks">
                <Link to="/Reports" className='targetLink' onClick={mobileSidebarOff}>
                  <div className="dashboardLink">
                    <img src={currentRoute === "/Reports" ? vacinatorsActive : vacinators} alt="" />
                    <p className={currentRoute === "/Reports" ? "activeTxt" : "deActiveTxt"}>Reports</p>
                    <img src={currentRoute === "/Reports" ? activeImg : null} className='activelogo' alt="" />
                  </div>
                </Link>
              </div>
              {/* Transaction Details */}
              <div className="sidebarLinks">
                <Link to="/TransactionDetails" className='targetLink' onClick={mobileSidebarOff}>
                  <div className="dashboardLink">
                    <img src={currentRoute === "/TransactionDetails" ? AmbulanceActive : Ambulance} alt="" />
                    <p className={currentRoute === "/TransactionDetails" ? "activeTxt" : "deActiveTxt"}>Transaction Details</p>
                    <img src={currentRoute === "/TransactionDetails" ? activeImg : null} className='activelogo' alt="" />
                  </div>
                </Link>
              </div>
              {/* Subscription */}
              <div className="sidebarLinks">
                <Link to="/Subscription" className='targetLink' onClick={mobileSidebarOff}>
                  <div className="dashboardLink">
                    <img src={currentRoute === "/Subscription" ? deliveryBoyActive : deliveryBoy} alt="" />
                    <p className={currentRoute === "/Subscription" ? "activeTxt" : "deActiveTxt"}>Subscription</p>
                    <img src={currentRoute === "/Subscription" ? activeImg : null} className='activelogo' alt="" />
                  </div>
                </Link>
              </div>
              
            </Accordion>
          </>
        </div >
      </div >
    </>
  )
}

export default Sidebar
