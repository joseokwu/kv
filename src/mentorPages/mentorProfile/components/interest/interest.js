import React, { useState } from "react";
import edit from "../../../../assets/icons/edit.svg";
import {
  Modal,
  Tag,
  Select,
  TextArea,
  Button,
} from "../../../../mentorComponents";
import { Form } from "antd";
import "./interest.css";

const MentorInterest = ({ data }) => {
  return (
    <section className="profile-offering mb-3">
      <span className="text-right d-block">
        <img
          src={edit}
          alt={"edit"}
          data-toggle="modal"
          data-target="#editInterestModal"
          role="button"
        />
        <Modal title="Area of Interest" id="editInterestModal">
          <EditMentorInterest />
        </Modal>
      </span>

      <div>
        <section className="mentor_consulting mb-2">
          <p className="partner-cat-header mb-3">Area of Interest</p>
          <p className="mentor_availability_question mb-3">
            What kind of time commitment are you willing to make as a mentor?
          </p>
          {[data?.roleInKv]?.map((item, i) => (
            <button key={i} className="interest_btn mt-1 mr-2">
              {" "}
              {item}{" "}
            </button>
          ))}

          <p className="mentor_service mt-4">Area of expertise</p>
        </section>

        <section>
          <span
            className="d-flex align-items-center flex-wrap"
            style={{ columnGap: 10, rowGap: 10 }}
          >
            {data?.skills?.map((item, i) => (
              <Tag
                key={i}
                name={item}
                color={
                  item === "Engineering" || item === "Cyber Security"
                    ? "#40439A"
                    : item === "Career"
                    ? "#E31937"
                    : "#ACACAC"
                }
              />
            ))}
          </span>
        </section>
      </div>
    </section>
  );
};

export default MentorInterest;

const EditMentorInterest = () => {
  const [loader, setLoader] = useState(false);

  return (
    <div className="px-4 pb-4">
      <section className="mentor_consult_modal mb-4">
        <Select
          label={"What are your top  industries of expertise?"}
          placeholder={"Choose option"}
        />
      </section>

      <section className="mentor_consult_modal mb-4">
        <Select
          label={"Please list your skills or areas of expertise"}
          placeholder={"Choose option"}
        />
      </section>

      <section className="mentor_consult_modal mb-4">
        <Select
          label={
            "What role(s) would you like to play within the Knight Ventures Network?"
          }
          placeholder={"Choose option"}
        />
      </section>

      <section className="mentor_availabilty">
        <p className="mentor_availability_question mb-4">
          What mentor type would you prefer?
        </p>
        <button className="mr-3">
          Regular mentor - Dedicated office hours{" "}
        </button>
        <button className="">Directory listing - By approval </button>
      </section>

      <section className="mentor_consult_modal mb-4 mt-4">
        <Select
          label={"What founder type roles are you interested in?"}
          placeholder={"Choose option"}
        />
      </section>

      <section className="mentor_consult_modal mb-4">
        <Select
          label={
            "What kind of time commitment are you willing to make as a mentor?"
          }
          placeholder={"Choose option"}
        />
      </section>

      <div className="row">
        <section className="col-md-12 mb-4">
          <TextArea
            className="mb-0"
            label={
              "In three sentences or less, tell us why you want to mentor with Knight Ventures and what experience you have with mentoring (being mentored included.)"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"4"}
          />
        </section>

        <section className="col-md-12 mb-4">
          <p className="offer-text pt-2">
            Have you been one of the first 10 employees of a company that has
            been valued or exited at $5m or more?
          </p>
          <section className="free-choice">
            <button className="yes-btn">Yes</button>
            <button className="no-btn">No</button>
          </section>
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            className="mb-0"
            label={
              "Are you interested in joining a company at a particular stage?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"4"}
          />
        </section>

        <section className="col-md-12 mb-5">
          <TextArea
            className="mb-0"
            label={
              "​​What do you care most about when selecting a company to join?"
            }
            placeholder={"e.g I was made a managing director...."}
            rows={"4"}
          />
        </section>

        <section className="col-md-12 mb-4">
          <TextArea
            className="mb-0"
            label={"Please list any notes you want us to know"}
            placeholder={"e.g I was made a managing director...."}
            rows={"4"}
          />
          <hr className="mt-4" />
        </section>

        <section className="mentor_interest_btn text-right col-md-12">
          <button className=" btn_change mr-2">Change</button>
          <button className="btn_del">Delete</button>
        </section>
      </div>

      <Form.Item>
        <div className=" text-right mb-4 mt-3">
          <Button label="Save" loading={loader} onClick={() => setLoader()} />
        </div>
      </Form.Item>
    </div>
  );
};
