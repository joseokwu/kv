import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import FormCard from "../formCard/FormCard";
import { TextArea, Select, Button } from "../../../../Startupcomponents/index";
import {useAuth} from '../../../../hooks/useAuth';
import "./outOffering.css";

const OurOffering = () => {
  const { goBack } = useHistory();

  // const { setAlert } = useContext(AlertContext);

  // const handleDone = () => {
  //   setAlert({
  //     success: true,
  //     message: "You have successfully completed your profile",
  //     autoClose: true,
  //     action: {
  //       name: "View Profile",
  //       func: () => {},
  //     },
  //   });
  // };

  return (
    <div className="register-form-wrap">
      <h3>Our Offerings</h3>
      <p>Fill in the offers you want to display to start-ups</p>
      <FormCard>
        <section className="mb-4">
          <TextArea
            label="Offerings"
            placeholder="Enter offering description"
            rows="6"
          />
        </section>

        <section className="mb-4">
          <TextArea
            label="Eligibility Criteria "
            placeholder="Eligibility Criteria "
            rows="6"
          />
        </section>

        <section className="mb-4">
          <TextArea
            label="Important Note"
            placeholder="Enter your terms and conditions"
            rows="6"
          />
        </section>

        <section className="mb-4">
          <TextArea
            label="Process"
            placeholder="Enter offer process"
            rows="6"
          />
        </section>

        <div className="row">
          <section className="col-md-6 mb-4">
            <Select label="Partnership Validity" />
          </section>
          <section className="col-md-6 mb-4">
            <Select label="Turnaround Time" />
          </section>
        </div>

        <div>
          <p className="offer-text pt-2">Free Credit Value Alloted</p>
          <section className="free-choice">
            <button className="yes-btn">Yes</button>
            <button className="no-btn">No</button>
          </section>
        </div>
      </FormCard>

      <section className="d-flex align-items-center justify-content-between">
        <button
          className="back-btn"
          onClick={() => {
            goBack();
          }}
        >
          Go Back
        </button>

        <div className="d-flex align-items-center" style={{ columnGap: 9 }}>
          <Button label="Save" variant="secondary" />
          <Button label="Done" />
        </div>
      </section>
    </div>
  );
};

export default OurOffering;
