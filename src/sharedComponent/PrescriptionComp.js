import React, { useContext } from "react";
import ic_call from "../assets/images/ic_call.svg";
import ic_location from "../assets/images/ic_location.svg";
import ic_mail from "../assets/images/ic_mail.svg";
import DoctorSymbol from "../assets/images/DoctorSymbol.svg";
import sign from "../assets/images/sign.png";

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
            <div className="modalHeading">
              <div className="upperBlue">
                <h1 className="docName">Dr. Royld Miles </h1>
                <label className="domainLab">Orthopedic </label>
                <label className="certificateLab">Certifcation 12548-20</label>
              </div>
              <div className="docSymbolBox">
                <img src={DoctorSymbol} className="docSymImg" alt="" />
              </div>
            </div>
            <div className="modalBody">
              <div className="detailsFill">
                <div className="labelTxt">
                  <label className="widthFixed">Patient Name:</label>
                </div>
                <input type="text" className="form-control formSolution" value={"Drogo (Dog)"} />
              </div>
              <div className="addressFlex">
                <div className="labelTxt">
                  <label className="keyQuestion">Address:</label>
                </div>
                <input type="text" className="form-control formSolution" value={"125/2, Sainketan Colony, Kalas Road, Vishrantwadi, Pune"} />
              </div>
              <div className="dateNdAgeFlex">
                <div className="ageBox">
                  <label className="ageLab">Age:</label>
                  <input type="text" className="form-control formSolution" value={"14 Months"} />
                </div>
                <div className="dateBox">
                  <label className="ageLab">Date:</label>
                  <input type="text" className="form-control formSolution" value={"02-02-2023"} />
                </div>
              </div>
              <div className="addressFlex">
                <div className="labelTxt">
                  <label className="keyQuestion">Diagnosis:</label>
                </div>
                <input type="text" className="form-control formSolution" value={"Regular check up"}/>
              </div>
              <div className="tableAndLandingBg">
                <div className="backGroundPic"></div>
                <div className="innerTable">
                  <table className="modalTable">
                    <thead>
                      <tr>
                        <th>Sr No.</th>
                        <th>Prescription</th>
                        <th>Quantity</th>
                        <th>Dose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Vitamin C</td>
                        <td>10</td>
                        <td>1-1-1</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Vitamin C</td>
                        <td>10</td>
                        <td>1-1-1</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Vitamin C</td>
                        <td>10</td>
                        <td>1-1-1</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Vitamin C</td>
                        <td>10</td>
                        <td>1-1-1</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Vitamin C</td>
                        <td>10</td>
                        <td>1-1-1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="signatureContent">
                <div className="sigBox">
                    <div className="line">
                    <img src={sign} alt="" />
                    </div>
                    
                  {/* <label htmlFor="sigNatureFor" className="signaturePad">
                    <input type="file" id="sigNatureFor" className="d-none" />
                  </label> */}
                  <label className="belowTxt">SIGNATURE</label>
                </div>
              </div>
            </div>
            <div className="belowDetails">
              <div className="imgWrapper">
                <div className="row heightAuto">
                  <div className="col-lg-3 col-md-6 p-0 d-flex justify-content-end align-items-center">
                    <div className="txt">
                      <div className="innerTxt">Contact</div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-12 p-0">
                    <div className="allCOntact">
                      <div className="emailAndCall">
                        <div className="callNnumber">
                          <img src={ic_call} alt="" />
                          <label className="numberInn">
                            55 47 79 94 15,55 47 79 94 18
                          </label>
                        </div>
                        <div className="emialInn">
                          <img src={ic_mail} alt="" />
                          <label className="numberInn">
                            55 47 79 94 15,55 47 79 94 18
                          </label>
                        </div>
                      </div>
                      <div className="locationInn">
                        <img src={ic_location} alt="" />
                        <label className="locationTxt">
                          125/2, Kalas Road, Vishrantwadi, Pune - 411041.
                          Maharashtra, India
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PrescriptionComp;
