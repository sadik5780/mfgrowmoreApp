import React, { useState } from "react";
import clinic_img_1 from "../../assets/images/clinic_img_1.svg";
import clinic_img_2 from "../../assets/images/clinic_img_2.svg";
import clinic_img_3 from "../../assets/images/clinic_img_3.svg";
import clinic_img_4 from "../../assets/images/clinic_img_4.svg";
import img_preview_delete_icon from "../../assets/images/icons/img_preview_delete_icon.svg";
import clinic_info_img from "../../assets/images/clinic_info_img.svg";
import { motion } from "framer-motion";
import { DarkButton, DonutChart } from "../commonComponents/commonComp";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';

const AddClinic = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <div className="addclinic">
                <div className="info_title_wrapper">
                    <h3 className="info_title">Add New Clinic</h3>
                </div>
                <Form>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Clinic Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Facilities</Form.Label>
                                <Form.Select >
                                    <option>Enter Facilities</option>
                                    <option>Enter Facilities</option>
                                    <option>Enter Facilities</option>
                                    <option>Enter Facilities</option>
                                    <option>Enter Facilities</option>
                                    <option>Enter Facilities</option>
                                </Form.Select>
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Enter Address" />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <div className="inputBox">
                                <label htmlFor="" className="emailLabel">
                                    Photos
                                </label>
                                <div className="file-input">
                                    <input
                                        type="file"
                                        name="file-input"
                                        id="file-input2"
                                        className="file-input__input"
                                        // onChange={handleFileInput2}
                                        multiple
                                    />
                                    <label className="file-input__label2" htmlFor="file-input2">
                                        Drop your files here or <b>
                                            Browse
                                        </b>                                    </label>
                                </div>
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
                                    <div className="img_item">
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
                                    </div>
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
                    </div>
                </Form>


            </div>
            <div className="btn_wrapper">
                <DarkButton classbtn={
                    "cx-btn-light btn-width-50 font-14"
                }
                onClick={()=>navigate('/MyProfile')}
                    btn={"Cancel"} />
                <DarkButton classbtn={
                    "cx-btn-dark  btn-width-50 font-14"
                }
                    btn={"Save"} />
            </div>

        </motion.div>
    );
};

export default AddClinic;
