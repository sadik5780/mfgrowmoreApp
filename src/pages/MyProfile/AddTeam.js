import React, { useState } from "react";
import clinic_img_1 from "../../assets/images/clinic_img_1.svg";
import clinic_img_2 from "../../assets/images/clinic_img_2.svg";
import clinic_img_3 from "../../assets/images/clinic_img_3.svg";
import clinic_img_4 from "../../assets/images/clinic_img_4.svg";
import img_preview_delete_icon from "../../assets/images/icons/img_preview_delete_icon.svg";
import upload_icon from "../../assets/images/icons/upload_icon.svg";
import { motion } from "framer-motion";
import { DarkButton, DonutChart } from "../commonComponents/commonComp";
import { Link } from "react-router-dom";
import { Nav, NavItem, Tab } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

const AddTeam = () => {
    const navigate = useNavigate();
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
            <div className="addclinic">
                <div className="info_title_wrapper">
                    <h3 className="info_title">Add Team</h3>
                </div>
                <Form>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Member Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Designation</Form.Label>
                                <Form.Select >
                                    <option>Designation</option>
                                    <option>Designation</option>
                                    <option>Designation</option>
                                    <option>Designation</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <div className="docs_wrapper">
                                <label htmlFor="" className="emailLabel">
                                    Medicine Image
                                </label>
                                <form className="form-container" enctype="multipart/form-data">
                                    <div className="upload-files-container">
                                        <div className="drag-file-area">
                                            <span className=" upload-icon">
                                                <img src={upload_icon} />
                                            </span>
                                            <h3 className="dynamic-message">Drop your files here. or</h3>
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

                        <div className="col-md-6">
                            <div className="inputBox">
                                <label htmlFor="" className="emailLabel">
                                    Preview
                                </label>
                                <div className="clinic_images_wrapper">
                                    <div className="img_item">
                                        <img src={clinic_img_1} />
                                        <span>
                                            <img src={img_preview_delete_icon} />
                                        </span>
                                    </div>
                                    {/* <div className="img_item">
                                        <img src={clinic_img_2} />
                                        <span>
                                            <img src={img_preview_delete_icon} />
                                        </span>
                                    </div>
                                    <div className="img_item">
                                        <img src={clinic_img_3} />
                                        <span>
                                            <img src={img_preview_delete_icon} />
                                        </span>
                                    </div> */}
                                    {/* <div className="img_item">
                                        <div className="overlay"></div>
                                        <img src={clinic_img_4} />
                                        <span className="center_text">
                                            +4
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-2 mt-2">
                            <DarkButton classbtn={
                                "cx-btn-dark  btn-width-100 font-14"
                            }
                                btn={"+ Add more"} />
                        </div>
                    </div>
                </Form>


            </div>
            <div className="btn_wrapper">
                <DarkButton classbtn={
                    "cx-btn-light btn-width-50 font-14"
                }
                onClick={() => navigate('/MyProfile')}
                    btn={"Cancel"} />
                <DarkButton classbtn={
                    "cx-btn-dark  btn-width-50 font-14"
                }
                    btn={"Save"} />
            </div>

        </motion.div>
    );
};

export default AddTeam;
