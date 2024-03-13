import React, { useState } from "react";
import profile_img from "../../assets/images/main_profile_img.svg";
import status_available from "../../assets/images/headerIcons/status_available.svg";
import pro_info_img1 from "../../assets/images/pro_info_img1.svg";
import pro_info_img2 from "../../assets/images/pro_info_img2.svg";
import pro_info_img3 from "../../assets/images/pro_info_img3.svg";
import doc_img1 from "../../assets/images/doc_img1.svg";
import doc_img2 from "../../assets/images/doc_img2.svg";
import doc_img3 from "../../assets/images/doc_img3.svg";
import doc_img4 from "../../assets/images/doc_img4.svg";
import doc_img5 from "../../assets/images/doc_img5.svg";
import doc_img6 from "../../assets/images/doc_img6.svg";
import docs_icon from "../../assets/images/icons/docs_icon.svg";
import docs_icon_blue from "../../assets/images/icons/docs_icon_blue.svg";
import round_delete_icon from "../../assets/images/icons/round_delete_icon.svg";
import edit_icon from "../../assets/images/icons/edit_icon.svg";
import signature from "../../assets/images/signature.svg";
import { motion } from "framer-motion";
import { DarkButton, DonutChart } from "../commonComponents/commonComp";
import upload_icon from "../../assets/images/icons/upload_icon.svg";
import { useNavigate } from "react-router-dom";
import { Nav, NavItem, Tab } from "react-bootstrap";
import img_preview_delete_icon from "../../assets/images/icons/img_preview_delete_icon.svg";

const MyProfile = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [generalInfo, setGeneralInfo] = useState(false);
  const handleGeneralInfo = () => {
    setGeneralInfo(!generalInfo)
  }
  const [addInput, setAddInput] = useState(false);
  const handleAddInput = () => {
    setAddInput(!addInput)
  }
  const [addInput2, setAddInput2] = useState(false);
  const handleAddInput2 = () => {
    setAddInput2(!addInput2)
  }
  const [clinicEdit, setClinicEdit] = useState(false);
  const handleClinicEdit = () => {
    setClinicEdit(!clinicEdit)
  }
  const [teamEdit, setTeamEdit] = useState(false);
  const handleTeamEdit = () => {
    setTeamEdit(!teamEdit);
  }
  const [docEdit, setDocEdit] = useState(false);
  const handleDocEdit = () => {
    setDocEdit(!docEdit);
  }
  const [docEdit2, setDocEdit2] = useState(false);
  const handleDocEdit2 = () => {
    setDocEdit2(!docEdit2);
  }

  const [manageModal, setManageModal] = useState(1);

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
      className="myprofile_wrapper"
      id="cx-main"
    >
      <div className="myprofile">
        <div className="header_wrapper">
          <div className="header_top"></div>
          <div className="header_bottom">
            <img src={profile_img} alt="" />
            <div className="profile_name">
              <p className="name">
                Floyd Miles <img src={status_available} alt="" />
              </p>
              <p className="post">Orthopedic</p>
            </div>
          </div>

          <div className="profile_info_wrapper">
            <div className="daw_tabs">
              <Tab.Container defaultActiveKey="first">
                <div className="row">
                  <div className="col-lg-10">
                    <Nav variant="pills" className="">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Profile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Language Settings</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Bank Details</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <div className="col-lg-12">
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="profile_info_wrapper_inner">
                          <div className="info_title_wrapper">
                            <h3 className="info_title">Basic Information</h3>
                            <img src={edit_icon} alt="" />
                          </div>
                          <div className="profile_info_fields">
                            <div className="row mb-4">
                              <div className="col-lg-3">
                                <label htmlFor="">Name</label>
                                <p className="info_text">Floyd Miles</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Age</label>
                                <p className="info_text">35yrs</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Gender</label>
                                <p className="info_text">Male</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Contact Number</label>
                                <p className="info_text">+91 9999 9999 99</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Email</label>
                                <p className="info_text">floydmiles@xyz.com</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Registration No.</label>
                                <p className="info_text">12345667891000</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Known Languages</label>
                                <p className="info_text">
                                  English, Hindi, Marathi, Urdu
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="info_title_wrapper">
                            <h3 className="info_title">General Information</h3>
                            <img src={edit_icon} alt="" onClick={handleGeneralInfo} />
                          </div>

                          {generalInfo ?
                            <div className="profile_info_fields profile_info_field_state_change mb-3">
                              <div className="row">
                                <div className="col-lg-3">
                                  <label htmlFor="">Specialization</label>
                                  <ul>
                                    <li>Lorem Ipsum 1 <img src={round_delete_icon} alt="" /></li>
                                    <li>Lorem Ipsum 2<img src={round_delete_icon} alt="" /></li>
                                    <li>Lorem Ipsum 3<img src={round_delete_icon} alt="" /></li>
                                    <li>Lorem Ipsum 4<img src={round_delete_icon} alt="" /></li>
                                    <li>Lorem Ipsum 5<img src={round_delete_icon} alt="" /></li>
                                    <li>
                                      {addInput ?
                                        <>
                                          <button className="add_new_btn" onClick={handleAddInput}>+ Add New</button>
                                          <input type="text" className="form-control" />
                                        </>
                                        :
                                        <button className="add_new_btn" onClick={handleAddInput}>+ Add New</button>
                                      }
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Services</label>
                                  <ul>
                                    <li>Service-1<img src={round_delete_icon} alt="" /></li>
                                    <li>Service-2<img src={round_delete_icon} alt="" /></li>
                                    <li>Service-3<img src={round_delete_icon} alt="" /></li>
                                    <li>Service-4<img src={round_delete_icon} alt="" /></li>
                                    <li>Service-5<img src={round_delete_icon} alt="" /></li>
                                    <li>
                                      {addInput2 ?
                                        <>
                                          <button className="add_new_btn" onClick={handleAddInput2}>+ Add New</button>
                                          <input type="text" className="form-control" />
                                        </>
                                        :
                                        <button className="add_new_btn" onClick={handleAddInput2}>+ Add New</button>
                                      }
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Experience</label>
                                  <p className="info_text">4+ Years</p>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Education</label>
                                  <p className="info_text">
                                    Orthopedic & Research
                                  </p>
                                </div>
                              </div>
                            </div> :
                            <div className="profile_info_fields mb-3">
                              <div className="row">
                                <div className="col-lg-3">
                                  <label htmlFor="">Specialization</label>
                                  <ul>
                                    <li>Lorem Ipsum 1</li>
                                    <li>Lorem Ipsum 2</li>
                                    <li>Lorem Ipsum 3</li>
                                    <li>Lorem Ipsum 4</li>
                                    <li>Lorem Ipsum 5</li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Services</label>
                                  <ul>
                                    <li>Service-1</li>
                                    <li>Service-2</li>
                                    <li>Service-3</li>
                                    <li>Service-4</li>
                                    <li>Service-5</li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Experience</label>
                                  <p className="info_text">4+ Years</p>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Education</label>
                                  <p className="info_text">
                                    Orthopedic & Research
                                  </p>
                                </div>
                              </div>
                            </div>}
                          <div className="info_title_wrapper">
                            <h3 className="info_title">Clinic Information</h3>
                            <img src={edit_icon} alt="" onClick={handleClinicEdit} />
                          </div>
                          <div className="profile_info_fields">
                            <div className="row">
                              <div className="col-lg-3">
                                <label htmlFor="">Clinic Name</label>
                                <p className="info_text">David's Animal Care</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Facilities</label>
                                <ul>
                                  <li>OPD</li>
                                  <li>Surgery</li>
                                  <li>24 x 7 Oxygen</li>
                                  <li>Free Wifi</li>
                                  <li>Ambulance Support</li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Address</label>
                                <p className="info_text">
                                  125/2, Kalas Road, Vishrantwadi, Pune -
                                  411041. Maharashtra, India
                                </p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Photos</label>
                                <div className="info_img_wrapper">
                                  <ul>
                                    <li>

                                      <img src={pro_info_img1} alt="" />
                                      <img src={pro_info_img2} alt="" />
                                    </li>
                                    <li>

                                      <img src={pro_info_img3} alt="" />
                                      <div className="img_with_overlay">
                                        {/* <img src={pro_info_img2} alt="" /> */}
                                        <div className="img_overlay">
                                          <span>+3</span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="info_title_wrapper">
                            <h3 className="info_title">Clinic Information</h3>
                            <img src={edit_icon} alt="" />
                          </div> */}
                          <div className="profile_info_fields">
                            <div className="row">
                              <div className="col-lg-3">
                                <label htmlFor="">Clinic Name</label>
                                <p className="info_text">David's Animal Care</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Facilities</label>
                                <ul>
                                  <li>OPD</li>
                                  <li>Surgery</li>
                                  <li>24 x 7 Oxygen</li>
                                  <li>Free Wifi</li>
                                  <li>Ambulance Support</li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Address</label>
                                <p className="info_text">
                                  125/2, Kalas Road, Vishrantwadi, Pune -
                                  411041. Maharashtra, India
                                </p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Photos</label>
                                <div className="info_img_wrapper">
                                  <ul>
                                    <li>

                                      <img src={pro_info_img1} alt="" />
                                      <img src={pro_info_img2} alt="" />
                                    </li>
                                    <li>

                                      <img src={pro_info_img3} alt="" />
                                      <div className="img_with_overlay">
                                        {/* <img src={pro_info_img2} alt="" /> */}
                                        <div className="img_overlay">
                                          <span>+3</span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <div className="info_title_wrapper">
                            <h3 className="info_title">Clinic Information</h3>
                            <img src={edit_icon} alt="" />
                          </div> */}

                          {/* <div className="info_title_wrapper">
                            <h3 className="info_title">Clinic Information</h3>
                            <img src={edit_icon} alt="" />
                          </div> */}
                          <div className="profile_info_fields">
                            <div className="row">
                              <div className="col-lg-3">
                                <label htmlFor="">Clinic Name</label>
                                <p className="info_text">David's Animal Care</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Facilities</label>
                                <ul>
                                  <li>OPD</li>
                                  <li>Surgery</li>
                                  <li>24 x 7 Oxygen</li>
                                  <li>Free Wifi</li>
                                  <li>Ambulance Support</li>
                                </ul>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Address</label>
                                <p className="info_text">
                                  125/2, Kalas Road, Vishrantwadi, Pune -
                                  411041. Maharashtra, India
                                </p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Photos</label>
                                <div className="info_img_wrapper">
                                  <ul>
                                    <li>

                                      <img src={pro_info_img1} alt="" />
                                      <img src={pro_info_img2} alt="" />
                                    </li>
                                    <li>

                                      <img src={pro_info_img3} alt="" />
                                      <div className="img_with_overlay">
                                        {/* <img src={pro_info_img2} alt="" /> */}
                                        <div className="img_overlay">
                                          <span>+3</span>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          {clinicEdit ?
                            <div className="profile_info_fields clinic_edit">
                              <div className="row">
                                <div className="col-lg-3">
                                  <label htmlFor="">Clinic Name</label>
                                  <p className="info_text">David's Animal Care</p>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Facilities</label>
                                  <ul>
                                    <li>OPD</li>
                                    <li>Surgery</li>
                                    <li>24 x 7 Oxygen</li>
                                    <li>Free Wifi</li>
                                    <li>Ambulance Support</li>
                                    <li>
                                      {addInput ?
                                        <>
                                          <button className="add_new_btn2" onClick={handleAddInput}>+ Add New</button>
                                          <input type="text" className="form-control" />
                                        </>
                                        :
                                        <button className="add_new_btn2" onClick={handleAddInput}>+ Add New</button>
                                      }</li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Address</label>
                                  <p className="info_text">
                                    125/2, Kalas Road, Vishrantwadi, Pune -
                                    411041. Maharashtra, India
                                  </p>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Photos</label>
                                  <div className="info_img_wrapper">
                                    <ul>
                                      <li>

                                        <img src={pro_info_img1} alt="" />
                                        <img src={pro_info_img2} alt="" />
                                      </li>
                                      <li>

                                        <img src={pro_info_img3} alt="" />
                                        <div className="img_with_overlay">
                                          {/* <img src={pro_info_img2} alt="" /> */}
                                          <div className="img_overlay">
                                            <span>+3</span>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <DarkButton classbtn={
                                    "cx-btn-dark shadow_none font-14 mb-5"
                                  }
                                    onClick={() => navigate('/AddClinic')}

                                    btn={"+ Add Clinic"} />
                                </div>
                              </div>
                            </div> :
                            <div className="profile_info_fields">
                              <div className="row">
                                <div className="col-lg-3">
                                  <label htmlFor="">Clinic Name</label>
                                  <p className="info_text">David's Animal Care</p>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Facilities</label>
                                  <ul>
                                    <li>OPD</li>
                                    <li>Surgery</li>
                                    <li>24 x 7 Oxygen</li>
                                    <li>Free Wifi</li>
                                    <li>Ambulance Support</li>
                                  </ul>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Address</label>
                                  <p className="info_text">
                                    125/2, Kalas Road, Vishrantwadi, Pune -
                                    411041. Maharashtra, India
                                  </p>
                                </div>
                                <div className="col-lg-3">
                                  <label htmlFor="">Photos</label>
                                  <div className="info_img_wrapper">
                                    <ul>
                                      <li>

                                        <img src={pro_info_img1} alt="" />
                                        <img src={pro_info_img2} alt="" />
                                      </li>
                                      <li>

                                        <img src={pro_info_img3} alt="" />
                                        <div className="img_with_overlay">
                                          {/* <img src={pro_info_img2} alt="" /> */}
                                          <div className="img_overlay">
                                            <span>+3</span>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>}

                          <div className="info_title_wrapper">
                            <h3 className="info_title">Team</h3>
                            <img src={edit_icon} alt="" onClick={handleTeamEdit} />
                          </div>

                          {teamEdit ?
                            <div className="profile_info_fields team_edit">
                              <div className="team_wrapper">
                                <div className="add_team_item team_item" onClick={() => navigate('/AddTeam')}>
                                  <img src={round_delete_icon} alt="" />
                                  <p>Add  <br />
                                    Team Member</p>
                                </div>
                                <div className="team_item">
                                  <img src={doc_img6} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                  <img src={img_preview_delete_icon} className="team_delete_icon" alt="" />
                                </div> <div className="team_item">
                                  <img src={doc_img2} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                  <img src={img_preview_delete_icon} className="team_delete_icon" alt="" />
                                </div> <div className="team_item">
                                  <img src={doc_img3} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                  <img src={img_preview_delete_icon} className="team_delete_icon" alt="" />
                                </div> <div className="team_item">
                                  <img src={doc_img4} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                  <img src={img_preview_delete_icon} className="team_delete_icon" alt="" />
                                </div>
                              </div>
                              <div className="team_wrapper">
                                <div className="team_item">
                                  <img src={doc_img2} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                  <img src={img_preview_delete_icon} className="team_delete_icon" alt="" />
                                </div>
                                <div className="team_item">
                                  <img src={doc_img1} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                  <img src={img_preview_delete_icon} className="team_delete_icon" alt="" />
                                </div> <div className="team_item">
                                  <img src={doc_img3} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                  <img src={img_preview_delete_icon} className="team_delete_icon" alt="" />
                                </div> <div className="team_item">
                                  <img src={doc_img4} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                  <img src={img_preview_delete_icon} className="team_delete_icon" alt="" />
                                </div> <div className="team_item">
                                  <img src={doc_img5} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                  <img src={img_preview_delete_icon} className="team_delete_icon" alt="" />
                                </div>
                              </div>
                            </div> : <div className="profile_info_fields">
                              <div className="team_wrapper">
                                <div className="team_item">
                                  <img src={doc_img1} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div>
                                <div className="team_item">
                                  <img src={doc_img6} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div> <div className="team_item">
                                  <img src={doc_img2} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div> <div className="team_item">
                                  <img src={doc_img3} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div> <div className="team_item">
                                  <img src={doc_img4} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div>
                              </div>
                              <div className="team_wrapper">
                                <div className="team_item">
                                  <img src={doc_img2} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div>
                                <div className="team_item">
                                  <img src={doc_img1} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div> <div className="team_item">
                                  <img src={doc_img3} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div> <div className="team_item">
                                  <img src={doc_img4} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div> <div className="team_item">
                                  <img src={doc_img5} alt="" />
                                  <p className="info_text">Jane Cooper</p>
                                  <label htmlFor="">Orthopedic</label>
                                </div>
                              </div>
                            </div>}

                          <div className="info_title_wrapper">
                            <h3 className="info_title">Documents</h3>
                            <img src={edit_icon} alt="" onClick={handleDocEdit} />
                          </div>
                          {docEdit ?
                            <div className="profile_info_fields doc_edit">
                              <div className="profile_docs_wrapper">
                                <div className="doc_item">
                                  <div className="doc_img_wrapper">
                                    <img src={docs_icon} alt="" />
                                  </div>
                                  <p className="info_text">Registration Certificate</p>
                                </div>
                                <div className="doc_item">
                                  <div className="doc_img_wrapper">
                                    <img src={docs_icon_blue} alt="" />
                                  </div>
                                  <p className="info_text">Degree Certificate</p>
                                </div>
                                <div className="doc_item">
                                  <div className="doc_img_wrapper">
                                    <img src={docs_icon} alt="" />
                                  </div>
                                  <p className="info_text">Clinic Certificate</p>
                                </div>
                                <div className="doc_item upload_doc_item">
                                  <form className="form-container" enctype="multipart/form-data">
                                    <div className="upload-files-container">
                                      <div className="drag-file-area">
                                        <span className="material-icons-outlined upload-icon">
                                          <img src={upload_icon} />
                                        </span>
                                        <h3 className="dynamic-message">Drop your files here. <br />or</h3>
                                        <label className="label">
                                          <span className="browse-files">
                                            <input type="file" className="default-file-input" />
                                            <span className="browse-files-text"> Browse</span>
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div> : <div className="profile_info_fields">
                              <div className="profile_docs_wrapper">
                                <div className="doc_item">
                                  <div className="doc_img_wrapper">
                                    <img src={docs_icon} alt="" />
                                  </div>
                                  <p className="info_text">Registration Certificate</p>
                                </div>
                                <div className="doc_item">
                                  <div className="doc_img_wrapper">
                                    <img src={docs_icon_blue} alt="" />
                                  </div>
                                  <p className="info_text">Degree Certificate</p>
                                </div>
                                <div className="doc_item">
                                  <div className="doc_img_wrapper">
                                    <img src={docs_icon} alt="" />
                                  </div>
                                  <p className="info_text">Clinic Certificate</p>
                                </div>
                                <div className="doc_item">
                                  <div className="doc_img_wrapper">
                                    <img src={docs_icon} alt="" />
                                  </div>
                                  <p className="info_text">School Certificate</p>
                                </div>
                              </div>
                            </div>}

                          <div className="info_title_wrapper">
                            <h3 className="info_title">Signature</h3>
                            <img src={edit_icon} alt="" onClick={handleDocEdit2} />
                          </div>
                          {docEdit2 ? <div className="profile_info_fields ">
                            <div className="profile_docs_wrapper justify-content-start mb-0">
                              <div className="doc_item">
                                <img src={signature} alt="" />
                              </div>
                              <div className="doc_item upload_doc_item">
                                <form className="form-container" enctype="multipart/form-data">
                                  <div className="upload-files-container">
                                    <div className="drag-file-area">
                                      <span className="material-icons-outlined upload-icon">
                                        <img src={upload_icon} />
                                      </span>
                                      <h3 className="dynamic-message">Drop your files here. <br />or</h3>
                                      <label className="label">
                                        <span className="browse-files">
                                          <input type="file" className="default-file-input" />
                                          <span className="browse-files-text"> Browse</span>
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>

                          </div> : <div className="profile_info_fields ">
                            <div className="profile_docs_wrapper justify-content-start mb-0">
                              <div className="doc_item">
                                <img src={signature} alt="" />
                              </div>
                            </div>

                          </div>}

                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="profile_info_wrapper_inner">
                          <div className="info_title_wrapper">
                            <h3 className="info_title">Select Language</h3>
                          </div>
                          <div className="profile_info_fields">
                            <div className="language_wrapper">
                              <div>
                                <input type="radio" id="english" name="language" checked />
                                <label htmlFor="english">English</label>
                              </div>

                              <div>
                                <input type="radio" id="hindi" name="language" />
                                <label htmlFor="hindi">Hindi</label>
                              </div>
                              <div>
                                <input type="radio" id="marathi" name="language" />
                                <label htmlFor="marathi">Marathi</label>
                              </div>
                              <div>
                                <input type="radio" id="urdu" name="language" />
                                <label htmlFor="urdu">Urdu</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="profile_info_wrapper_inner">
                          <div className="info_title_wrapper">
                            <h3 className="info_title">Bank Details</h3>
                            <img src={edit_icon} alt="" />
                          </div>
                          <div className="profile_info_fields">
                            <div className="row">

                              <div className="col-lg-3">
                                <label htmlFor="">Bank Name</label>
                                <p className="info_text">State Bank of India</p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Account Number</label>
                                <p className="info_text">
                                  1234567891045630
                                </p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Account  Holder Name</label>
                                <p className="info_text">
                                  Floyd Miles
                                </p>
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">IFSC / SWIFT Code</label>
                                <p className="info_text">
                                  IFSC12345678 /  1234567892000
                                </p>
                              </div>
                            </div>
                          </div>
                          <DarkButton classbtn={
                            "cx-btn-dark shadow_none font-14 mb-3"
                          }
                            btn={"+ Add Bank"} />
                          <div className="profile_info_fields">
                            <div className="row">

                              <div className="col-lg-3">
                                <label htmlFor="">Bank Name</label>

                                <input type="text" placeholder="Enter Bank Name" className="form-control" />
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Account Number</label>
                                <input type="text" placeholder="Enter Account Number" className="form-control" />
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">Account  Holder Name</label>
                                <input type="text" placeholder="Enter Account Holder Name" className="form-control" />
                              </div>
                              <div className="col-lg-3">
                                <label htmlFor="">IFSC / SWIFT Code</label>
                                <input type="text" placeholder="Enter IFSC/ SWIFT Code" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
            </div>
          </div>

        </div>

      </div>
      <div className="btn_wrapper">
        <DarkButton classbtn={
          "cx-btn-light btn-width-50 font-14"
        }
          btn={"Cancel"} />
        <DarkButton classbtn={
          "cx-btn-dark  btn-width-50 font-14"
        }
          btn={"Update"} />
      </div>
    </motion.div>
  );
};

export default MyProfile;
