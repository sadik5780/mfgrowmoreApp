import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import roundCircle from "../assets/images/headerIcons/headerCircle.svg";
import bell from "../assets/images/headerIcons/bell.svg";
import profile_img from "../assets/images/profile_img.svg";
import status_offline from "../assets/images/headerIcons/status_offline.svg";
import profile_setting_icon from "../assets/images/headerIcons/profile_setting_icon.svg";
import logout_icon from "../assets/images/headerIcons/logout_icon.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import { motion } from "framer-motion";
import { cubicBezier } from "framer-motion"

const Header = () => {
  const navigate = useNavigate();

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);


  const [status, setStatus] = useState({
    imageName: status_offline,
    status_title: "Offline"
  });

  const [isHovering, setIsHovering] = useState(false);


  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          // setIsHovering(!isHovering)
          setClicked(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const aninations = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },

  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const { sidebar, setSidebar } = useContext(AppContext);
  const [clicked, setClicked] = useState(false);
  const location = useLocation();
  const currentRoute = location.pathname;
  return (
    <>
      <main className="mainHeader" ref={wrapperRef}>
        <header className="top-header">
          {/* <div className="d-flex flex-column">
            <div className="breadCrumbsTop">
              <label className={sidebar ? "leftSideBread" : "leftHeadBread"}>
                {(currentRoute === "/Doctors" && "Doctors") ||
                  (currentRoute === "/DoctorDetails" && (
                    <>
                      {" "}
                      <Link to="/Doctors">Doctor /</Link> Doctor Details{" "}
                    </>
                  ))}

                {(currentRoute === "/RevenueReports" && "RevenueReports") ||
                  (currentRoute === "/RevenueReports" && (
                    <>
                      {" "}
                      <Link to="/RevenueReports">Doctor /</Link> Doctor Details{" "}
                    </>
                  ))}
              </label>
            </div>
            <div className="headingBreads">
              <label className={sidebar ? "leftSideCloseBar" : "leftHeadTxt"}>
                {(currentRoute === "/Dashboard" && "Dashboard") ||
                  (currentRoute === "/Doctors" && "Doctors") ||
                  (currentRoute === "/DoctorDetails" && "Doctor Details")}
              </label>
            </div>
          </div> */}
          <div className="left-breadcurm">
            {/* <label className="page-name-heading" htmlFor="">Dashboard<Link to="#" ></Link></label> */}
            {(currentRoute === "/Dashboard" && (
              <label className="page-name-heading" htmlFor="">Dashboard<Link to="#" ></Link></label>)) ||
              (currentRoute === "/CustomerDetails" && (
                <label className="page-name-heading" htmlFor="">Customer Details<Link to="#" ></Link></label>
              )) ||
              (currentRoute === "/AtClinic" && (
                <label className="page-name-heading" htmlFor="">Appointments/ <Link to="#" >At Clinic</Link></label>
              )) ||
              (currentRoute === "/Video" && (
                <label className="page-name-heading" htmlFor="">Appointments/ <Link to="#" >Video</Link></label>
              )) ||
              (currentRoute === "/Reports" && (
                <label className="page-name-heading" htmlFor="">Reports<Link to="#" ></Link></label>
              )) ||
              (currentRoute === "/TransactionDetails" && (
                <label className="page-name-heading" htmlFor="">Transaction Details<Link to="#" ></Link></label>
              )) ||
              (currentRoute === "/Subscription" && (
                <label className="page-name-heading" htmlFor="">Subscription<Link to="#" ></Link></label>
              )) ||
              (currentRoute === "/MyProfile" && (
                <label className="page-name-heading" htmlFor="">My Profile<Link to="#" ></Link></label>
              )) ||
              (currentRoute === "/AddClinic" && (
                <label className="page-name-heading" htmlFor=""><Link to="/MyProfile" >My Profile</Link> / Add Clinic</label>
              )) ||
              (currentRoute === "/AddTeam" && (
                <label className="page-name-heading" htmlFor=""><Link to="/MyProfile" >My Profile</Link> / Add Team</label>
              ))
            }

          </div>
          <div className="searchBlog"  onMouseOver={() => setIsHovering(true)} onMouseOut={handleMouseOut}>
            <div className="innerSearch">
              {/* <input
                type="text"
                className="form-control innerForm"
                placeholder="search"
              /> */}
              {/* <img src={searchIcon} className="searchInside" alt="" /> */}
              <img src={bell} className="insideIcons" alt="" /> 

              <img
                src={roundCircle}
                onClick={() => setClicked(!clicked)}
                className="rounded-circle circleImg"
                alt=""
              // onMouseOver={() => setIsHovering(true)}
              // onMouseOut={handleMouseOut}
              />
            </div>
          </div>
          {clicked && (
                <motion.div variants={aninations}
                  initial="initial"
                  animate="animate"
                  onMouseOver={() => setClicked(true)}
                  onMouseOut={() => setClicked(false)}
                  transition={{ duration: 0.4, delay: 0 }} className="profile_dropdown"
                >
                  <div className="pd_profile_description_wrapper">
                    <div className="pdf_img">
                      <img src={profile_img} alt="" />
                    </div>
                    <div className="pdf_name_status">
                      <p className="name" >Am Shaikh</p>
                      <p className="post">Super Admin</p>
                    </div>
                  </div> 
                  <div className="pd_status_selection mt-2 border_bottom2">
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                        <div onClick={() => navigate('/MyProfile')}>
                          <img src={profile_setting_icon} alt="" />
                          My Profile settings </div>
                      </Dropdown.Toggle>
                    </Dropdown>
                  </div>
                  <div className="logout_btn_wrapper">
                    <button onClick={() => navigate('/')}> <img src={logout_icon} alt="" /> Logout</button>
                  </div>
                </motion.div>
              )}
        </header>
      </main>
    </>
  );
};

export default Header;
