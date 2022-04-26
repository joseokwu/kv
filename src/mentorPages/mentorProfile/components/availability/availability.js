import React, { useState } from "react";
import {
  Modal,
  TextArea,
  TextField,
  Select,
  Button,
} from "../../../../mentorComponents";
import edit from "../../../../assets/icons/edit.svg";
import imageRep from "../../../../assets/icons/plus.svg";
import { Form } from "antd";
import "./availability.css";

const Availability = ({ data }) => {
  return (
    <section className="profile-offering mb-3">
      <span className="text-right d-block">
        <img
          src={edit}
          alt={"edit"}
          data-toggle="modal"
          data-target="#editAvailabilityModal"
          role="button"
        />
        <Modal title="Availability" id="editAvailabilityModal">
          <EditAvailability />
        </Modal>
      </span>

      <div>
        <section className="mentor_availabilty mb-5">
          <p className="partner-cat-header mb-3">Availability</p>
          <p className="mentor_availability_question mb-3">
            What mentor type would you prefer?
          </p>
          <button>{data?.mentorType}</button>
        </section>
      </div>
    </section>
  );
};

export default Availability;

const EditAvailability = () => {
  const [loader, setLoader] = useState(false);

  return (
    <div className="px-4 pb-4">
      <section className="mentor_availabilty">
        <p className="mentor_availability_question mb-3">
          What mentor type would you prefer?
        </p>
        <button className="mr-3">
          Regular mentor - Dedicated office hours{" "}
        </button>
        <button>Directory listing - By approval </button>
      </section>

      <div className="row">
        <section className="col-md-12 mb-4 mt-3">
          <p className="offer-text pt-2">
            Have you been a founder or one of the first 10 employees of a
            company that has been valued or exited at $100m or more?
          </p>
          <section className="free-choice">
            <button className="yes-btn">Yes</button>
            <button className="no-btn">No</button>
          </section>
        </section>

        <section className="col-md-12 mb-4 border-bottom">
          <TextArea
            className="mb-4"
            label={"Please list here any notes / things you want us to know"}
            placeholder={"e.g I was made a managing director...."}
            rows={"6"}
          />
        </section>

        <section className="col-md-6 mb-4">
          <TextField
            label={"Assistant First Name*"}
            placeholder={"Micheal"}
            required={true}
          />
        </section>
        <section className="col-md-6 mb-4">
          <TextField
            label={"Assistant Last Name*"}
            placeholder={"Smith"}
            required={true}
          />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            label={"Assistant Email*"}
            placeholder={"Michealsmith@gmail.com"}
            rows={"1"}
          />
        </section>

        <section className="col-md-6 mb-4">
          <TextField
            label={"Country code*"}
            placeholder={"Enter country code"}
            required={true}
          />
        </section>
        <section className="col-md-6 mb-4">
          <TextField
            label={"Assistant Mobile Number*"}
            placeholder={"Enter Mobile number"}
            required={true}
          />
        </section>

        <section className="col-md-12 mb-4">
          {/* <TextArea
            label={'Availability Day*'}
            placeholder={'Michealsmith@gmail.com'}
            rows={'1'}
          /> */}
          <label htmlFor={""}>Availability Day*</label>
          <input className="col-md-12 ant-input-borderless" type="date" />
        </section>

        <section className="col-md-6 mentor_consult_modal mb-4">
          <Select
            label={"Availability Start Timing*"}
            placeholder={"Choose option"}
          />
        </section>
        <section className="col-md-6 mentor_consult_modal mb-4">
          <Select
            label={"Availability End Timing*"}
            placeholder={"Choose option"}
          />
        </section>

        <section className="col-md-12 mb-4">
          <p className="add_another_experience">
            <img className="mr-2" src={imageRep} alt="plus" />
            Add Another availability
          </p>
        </section>
      </div>
      <Form.Item>
        <div className="text-right mb-4 mt-3">
          <Button label="Save" loading={loader} onClick={() => setLoader()} />
        </div>
      </Form.Item>
    </div>
  );
};
