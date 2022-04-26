import React, { useState } from "react";
import { Modal, TextArea, Button, Tag } from "../../../../mentorComponents";
import edit from "../../../../assets/icons/edit.svg";
import del from "../../../../assets/icons/del.svg";
import { Form } from "antd";
import "./consulting.css";

const Consulting = ({ data }) => {
  console.log("data", data);
  return (
    <section className="profile-offering mb-3">
      <span className="text-right d-block">
        <img
          src={edit}
          alt={"edit"}
          data-toggle="modal"
          data-target="#editConsultingModal"
          role="button"
        />
        <Modal title="Consultanting Offerings" id="editConsultingModal">
          <EditConsulting />
        </Modal>
      </span>

      <div>
        <section className="mentor_consulting mb-5">
          <p className="partner-cat-header mb-3">Consulting Offerings</p>
          <p className="mentor_service">Service Areas</p>
        </section>

        <section>
          <span
            className="d-flex align-items-center flex-wrap"
            style={{ columnGap: 10, rowGap: 10 }}
          >
            {data?.areaofService?.map((item, i) => (
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

export default Consulting;

const EditConsulting = () => {
  const [loader, setLoader] = useState(false);

  return (
    <div className="px-4 pb-4">
      <section className="mentor_consult_modal mb-4">
        <TextArea
          label="What are your areas of service?"
          placeholder="Search"
          rows="1"
        />
        <button className="mt-1">
          Tech <img className="pl-2" src={del} alt="del" />
        </button>
      </section>

      <section className="mb-4">
        <TextArea
          label={"Write a short description of your service."}
          placeholder={"e.g I was made a managing director...."}
          rows={"6"}
        />
      </section>

      <section className="mb-4">
        <TextArea
          label={
            "If any, what is your offer / promotion for the Alchemist community?"
          }
          placeholder={"e.g I was made a managing director...."}
          rows={"6"}
        />
      </section>

      <Form.Item>
        <div className="text-right mb-4 mt-3">
          <Button label="Save" loading={loader} onClick={() => setLoader()} />
        </div>
      </Form.Item>
    </div>
  );
};
