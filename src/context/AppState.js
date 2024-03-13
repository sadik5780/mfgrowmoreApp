import { AppContext } from "./AppContext";
import React, { useState } from "react";

const AppState = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const [Dark, setDark] = useState("lightMode");
  const [Prescription, setPrescription] = useState(false)

  return (
    <div>
      <AppContext.Provider
        value={{
          sidebar,
          setSidebar,
          Dark,
          setDark,
          Prescription, 
          setPrescription
        }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default AppState;
