import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.scss";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import ForgotPass from "./pages/Auth/ForgotPass";
import ResetPass from "./pages/Auth/ResetPass";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sidebar from "./sharedComponent/Sidebar";
import Header from "./sharedComponent/Header"; 
import CustomerDetails from "./pages/CustomerDetails/CustomerDetails";
import AtClinic from "./pages/Appointments/AtClinic";
import Reports from "./pages/Reports/Reports";
import TransactionDetails from "./pages/TransactionDetails/TransactionDetails";
import Subscription from "./pages/Subscription/Subscription";
import MyProfile from "./pages/MyProfile/MyProfile";
import AddClinic from "./pages/MyProfile/AddClinic";
import AddTeam from "./pages/MyProfile/AddTeam";
import PreInvestment from "./pages/Agreement/PreInvestment";
import Sip from "./pages/Agreement/sip";
import Sequence from "./pages/Payment/Sequence";
import PaymentSheet from "./pages/Payment/PaymentSheet";
import TotalPayments from "./pages/Payment/TotalPayments";
import InvestmentLifecycle from "./pages/Payment/InvestmentLifecycle";
import IdCreateForm from "./pages/Agreement/IdCreateForm";

function App() {
  const location = useLocation();
  let currentRoute = location.pathname;

  return (
    <div className="App">
      <div className="auth-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/ForgotPass" element={<ForgotPass />} />
          <Route path="/ResetPass" element={<ResetPass />} />
        </Routes>
      </div>
      <div className="main-wrapper">
        {currentRoute !== "/" &&
          currentRoute !== "/ForgotPass" &&
          currentRoute !== "/ResetPass" &&
          currentRoute !== "/SignUp" &&
          currentRoute !== "/GeneralInfo" &&
          currentRoute !== "/BankDetails" &&
          currentRoute !== "/VerificationUnderProcess" &&
          currentRoute !== "/VerificationSuccess" &&
          currentRoute !== "/ClinicInfo" &&
          currentRoute !== "/UploadDocs" &&
          currentRoute !== "/ClinicSchedule" && (
            <>
              <Sidebar />
              <Header />
            </>
          )}
        <Routes>
          {/* ============== DASHBOARD ============= */}
          <Route path="Dashboard" element={<Dashboard />} />
          {/* =============== Customer Details =============*/}
          <Route path="CustomerDetails" element={<CustomerDetails />} />
          {/* ============== REPORTS ============= */}
          <Route path="Reports" element={<Reports />} />
          {/* ============== TransactionDetails ============= */}
          <Route path="TransactionDetails" element={<TransactionDetails />} />
          {/* ============== Subscription ============= */}
          <Route path="Subscription" element={<Subscription />} />
          <Route path="PreInvestment" element={<PreInvestment />} />
          <Route path="Sip" element={<Sip />} />
          <Route path="IdCreateForm" element={<IdCreateForm />} />
          <Route path="Sequence" element={<Sequence />} />
          <Route path="PaymentSheet" element={<PaymentSheet />} />
          <Route path="TotalPayments" element={<TotalPayments />} />
          <Route path="InvestmentLifecycle" element={<InvestmentLifecycle />} />
          {/* ============== MyProfile ============= */}
          <Route path="MyProfile" element={<MyProfile />} /> 
          <Route path="AddClinic" element={<AddClinic />} />
          <Route path="AddTeam" element={<AddTeam />} />
          {/* ============== APPOINTMENT ============= */}
          <Route path="AtClinic" element={<AtClinic />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
