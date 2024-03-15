import React, { useState } from "react";
import modal_close_btn from "../../assets/images/icons/modal_close_btn.svg"
import { motion } from "framer-motion";
import { DarkButton, DonutChart } from "../commonComponents/commonComp";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Subscription = () => {

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
      className="Subscription_wrapper"
      id="cx-main"
    >
      <div className="Subscription">
        <div className="subscription_title">
          <p> Current Plan</p>
        </div>
        <div className="subscription_item">
          <div className="row">
            <div className="col-lg-10">
              <div className="sub_item_left">

                {/* <img src={professional_plan_icon} alt="" /> */}
                <div className="title_text_wrapper">
                  <p className="plan_title">Professional Plan</p>
                  <p className="sub_date">Subscription Date : <span>02-02-2023</span>
                  </p>
                </div>
                <div className="renew_date">
                  <p>Renewal Date : <span>02-02-2023</span></p>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="sub_item_right">
                <Link to="#" onClick={() => {
                  setManageModal(1)
                  handleShow()
                }}>View Details</Link>
              </div>
            </div>
          </div>


        </div>

        <div className="subscription_title">
          <p>Recommended Plan</p>
        </div>
        <div className="subscription_item1">
          <div className="row">
            <div className="col-lg-9">
              <div className="sub_item_left">
                {/* <img src={professional_pro_plan_icon} alt="" /> */}
                <div className="title_text_wrapper">
                  <p className="plan_title">Professional Pro Plan</p>
                  <p className="sub_date mb-2">Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, ... <Link onClick={() => {
                    setManageModal(2)
                    handleShow()
                  }}>Read more</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sub_item_right">
                <DarkButton
                  classbtn={
                    "cx-btn-dark me-auto  btn-width-100 btn-height1 font-14"
                  }

                  btn={"Upgrade Plan"}
                />
              </div>
            </div>
          </div>


        </div>
        <div className="subscription_item1">
          <div className="row">
            <div className="col-lg-9">
              <div className="sub_item_left">
                {/* <img src={premium_plan_icon} alt="" /> */}
                <div className="title_text_wrapper">
                  <p className="plan_title">Premium Plan</p>
                  <p className="sub_date mb-2">Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, ... <Link onClick={() => {
                    setManageModal(3)
                    handleShow()
                  }}>Read more</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sub_item_right">
                <DarkButton
                  classbtn={
                    "cx-btn-dark me-auto  btn-width-100 btn-height1 font-14"
                  }

                  btn={"Upgrade Plan"}
                />
              </div>
            </div>
          </div>


        </div>
        <div className="subscription_item1">
          <div className="row">
            <div className="col-lg-9">
              <div className="sub_item_left">
                {/* <img src={expert_plan_icon} alt="" /> */}
                <div className="title_text_wrapper">
                  <p className="plan_title">Expert Plan</p>
                  <p className="sub_date mb-2">Aliquam porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, ... <Link onClick={() => {
                    setManageModal(4)
                    handleShow()
                  }}>Read more</Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="sub_item_right">
                <DarkButton
                  classbtn={
                    "cx-btn-dark me-auto  btn-width-100 btn-height1 font-14"
                  }

                  btn={"Upgrade Plan"}
                />
              </div>
            </div>
          </div>


        </div>
      </div>


     

    </motion.div>

  );
};

export default Subscription;
