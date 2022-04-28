import React, { useEffect, useContext } from "react";
import "./alert.css";
import successIcon from "../../assets/icons/successAlert.svg";
import close from "../../assets/icons/closeButton.svg";
//import { AlertContext } from "../../context/context";
import {useActivity} from '../../hooks/useBusiness';


export const Alert = () => {


  const { state: { alert} , setAlert } = useActivity();

    // console.log(`data`, data);

  const { success, message, autoClose, action } = alert ;
  useEffect(() => {
    if (autoClose && message.length > 0) {
      setTimeout(() => {
        setAlert({ ...alert, message: "" });
      }, 5000);
    }
  }, [alert, setAlert, autoClose, message]);

  const closeAlert = () => {
   setAlert({ ...alert, message: "" });
  };   

  return ( 
    <div
      className={`alert-wrap ${
        message && message?.trim().length > 0 ? "show-alert" : "close-alert"
      }`}
    >
      <section
        className="d-flex align-items-start w-100"
        style={{ columnGap: 18 }}
      >
        {success ? <img src={successIcon} alt="success" /> : ""}
        <div
          style={{ flexBasis: "80%", minHeight: 63 }}
          className="d-flex flex-column justify-content-between"
        >
          <p className="alert-desc">{message}</p>
          {action?.name?.length > 0 && (
            <p className="alert-action" role="button" onClick={action?.func}>
              {action?.name}
            </p>
          )}
        </div>
        <img src={close} alt="close" role="button" onClick={closeAlert} />
      </section>
    </div>
  );
};
