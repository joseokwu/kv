import React from "react";
import "./assignmentCard.css";
import dots from "../../assets/icons/3dots.svg";
import lady from "../../assets/icons/person1.svg";
import girl from "../../assets/icons/person2.svg";
import guy from "../../assets/icons/person3.svg";

export const AssignmentCard = () => {
  return (
    <div className="assignment-card">
      <section className="assignment_card_header d-flex justify-content-between">
        <div className="">
          <h4>Assignment</h4>
        </div>
        <div>
          <img src={dots} alt="dots" />
        </div>
      </section>

      <section className="d-flex justify-content-between mt-2">
        <p className="pending_date pr-4">
          <span>50</span> September
        </p>

        <span className="today_tag">Today</span>
      </section>

      <section className="assignment_card_body mt-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </section>

      <section className="assignmnet_card_footer d-flex mt-4">
        <p className="pt-3">Assigned to</p>
        <section className="assigned_people ml-3">
          <img src={lady} alt="lady" />
          <img src={girl} alt="girl" />
          <img src={guy} alt="guy" />
        </section>
      </section>
    </div>
  );
};

export const Assignment_Canvas_Card = () => {
  return (
    <div className="assignment-card">
      <section className="assignment_card_header d-flex justify-content-between">
        <div className="">
          <h4>Business Canvas Assignment</h4>
        </div>
        <div>
          <img src={dots} alt="dots" />
        </div>
      </section>

      <section className="d-flex justify-content-between mt-2">
        <p className="pending_date pr-4">
          <span>50</span> September
        </p>

        <span className="tomorrow_tag">Tomorrow</span>
      </section>

      <section className="assignment_card_body mt-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </section>

      <section className="assignmnet_card_footer d-flex mt-4">
        <p className="pt-3">Assigned to</p>
        <section className="assigned_people ml-3">
          <img src={lady} alt="doc" />
          <img src={girl} alt="doc" />
          <img src={guy} alt="doc" />
        </section>
      </section>
    </div>
  );
};

export const Completed_Todolist = () => {
  return (
    <div className="assignment-card">
      <section className="assignment_card_header d-flex justify-content-between">
        <div className="">
          <h4>Business Canvas Assignment</h4>
        </div>
        <div>
          <img src={dots} alt="dots" />
        </div>
      </section>

      <section className="d-flex justify-content-between mt-2">
        <p className="pending_date pr-4">
          <span>50</span> September
        </p>

        <span className="completed_tag">Completed</span>
      </section>

      <section className="assignment_card_body mt-5">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
      </section>

      <section className="assignmnet_card_footer d-flex mt-4">
        <p className="pt-3">Assigned to</p>
        <section className="assigned_people ml-3">
          <img src={lady} alt="doc" />
          <img src={girl} alt="doc" />
          <img src={guy} alt="doc" />
        </section>
      </section>
    </div>
  );
};
