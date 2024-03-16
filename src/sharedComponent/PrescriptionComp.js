import React, { useContext } from "react";
import ic_call from "../assets/images/ic_call.svg";
import ic_location from "../assets/images/ic_location.svg";
import ic_mail from "../assets/images/ic_mail.svg";
import DoctorSymbol from "../assets/images/DoctorSymbol.svg";
import sign from "../assets/images/sign.png";
import agreement from "../assets/images/agreement/agreement.jpeg";

import Modal from 'react-bootstrap/Modal';
import { AppContext } from "../context/AppContext";
const PrescriptionComp = () => {
    const {Prescription, setPrescription } = useContext(AppContext);
    return (
    <div className="prescription-wrapper-main">
      <Modal
        show={Prescription}
        onHide={() => setPrescription(false)}
        size="lg"
      >
        <Modal.Body>
          <div className="orderModalInvoice">
           <img src={agreement} alt="" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PrescriptionComp;
