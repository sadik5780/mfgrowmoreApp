import React, { useState } from "react";
import expert_plan_icon from "../../assets/images/icons/expert_plan_icon.svg"
import premium_plan_icon from "../../assets/images/icons/premium_plan_icon.svg"
import professional_plan_icon from "../../assets/images/icons/professional_plan_icon.svg"
import professional_pro_plan_icon from "../../assets/images/icons/professional_pro_plan_icon.svg"
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

                <img src={professional_plan_icon} alt="" />
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
                <img src={professional_pro_plan_icon} alt="" />
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
                <img src={premium_plan_icon} alt="" />
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
                <img src={expert_plan_icon} alt="" />
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


      {/* Modal Start */}
      <Modal
        show={show} onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="common_modal"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <div className="modal_header_wrapper">
              <div className="modal_left">
                <img src={manageModal == 1 ? professional_plan_icon : manageModal == 2 ? professional_pro_plan_icon : manageModal == 3 ? premium_plan_icon : expert_plan_icon} alt="" />
                <p>{manageModal == 1 ? "Professional Plan" : manageModal == 2 ? "Professional Pro Plan" : manageModal == 3 ? "Premium Plan" : "Expert Plan"}</p>
              </div>
              <div className="modal_close_btn">
                <img src={modal_close_btn} alt="" onClick={handleClose} />
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal_body_inner_wrapper">
            <p className="description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to
            </p>
            <div className="benefits_wrapper">
              <p className="benefit_tittle">
                Benefits
              </p>

              <ul>
                <li>Benefits 1</li>
                <li>Benefits 2</li>
                <li>Benefits 3</li>
                <li>Benefits 4</li>
                <li>Benefits 5</li>
                <li>Benefits 6</li>
                <li>Benefits 7</li>
                <li>Benefits 8</li>
                <li>Benefits 9</li>
                <li>Benefits 10</li>
              </ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={handleClose}>Close</Button> */}
          <div className="modal_btn_wrapper">
            <DarkButton
              classbtn={
                "cx-btn-light btn-width-50 btn-height1 font-14 me-3"
              }
              onClick={handleClose}
              btn={manageModal == 1 ? "Cancel Plan" : "Cancel"}
            /> <DarkButton
              classbtn={
                "cx-btn-dark me-auto  btn-width-50 btn-height1 font-14"
              }
              btn={"Upgrade Plan"}
            />
          </div>

        </Modal.Footer>
      </Modal>

      {/* Modal End */}


    </motion.div>

  );
};

export default Subscription;
