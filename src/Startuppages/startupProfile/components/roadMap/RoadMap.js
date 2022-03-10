import React, { useState } from "react";
import {
  Button,
  SmallModal,
  TextArea,
  TextField,
} from "../../../../Startupcomponents";
import { RoadMapTodo } from "./components/RoadMapTodo";
import { MapPoint } from "./components/MapPoint";
import "./roadMap.css";
import { NewGoalModal } from "./roadMap.styled";
import close from "../../../../assets/icons/closesm.svg";
import girl from "../../../../assets/icons/person2.svg";
import guy from "../../../../assets/icons/person3.svg";

export const RoadMap = ({ data = [] }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {showModal ? (
        <SmallModal id="addNewGoalModal" title="" closeModal={setShowModal}>
          <AddNewGoalModal />
        </SmallModal>
      ) : (
        <span></span>
      )}
      <section className="row">
        <div className="col-xl-4 col-lg-5 mb-4">
          <article className="road-map-card">
            <div className="d-flex mb-4" style={{ columnGap: "1rem" }}>
              <MapPoint color="#35D662" />
              <span>
                <p className="point-title">Stage</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: "1rem" }}>
              <MapPoint color="#2E3192" />
              <span>
                <p className="point-title">Idea</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: "1rem" }}>
              <MapPoint />
              <span>
                <p className="point-title">Prototype</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: "1rem" }}>
              <MapPoint />
              <span>
                <p className="point-title">Minimum Viable Product</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: "1rem" }}>
              <MapPoint />
              <span>
                <p className="point-title">Early customers</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: "1rem" }}>
              <MapPoint />
              <span>
                <p className="point-title">Revenue generating</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>

            <div className="d-flex mb-4" style={{ columnGap: "1rem" }}>
              <MapPoint withStem={false} />
              <span>
                <p className="point-title">Growth</p>
                <p className="point-desc">Euismod netus eget donec diam.</p>
              </span>
            </div>
          </article>
        </div>

        <div className="col-xl-8 col-lg-7 mb-4">
          <article className="road-map-card" style={{ background: "white" }}>
            <section
              className="d-flex align-items-center justify-content-between flex-wrap mb-5"
              style={{ rowGap: 10 }}
            >
              <div
                className="d-flex align-items-center flex-wrap"
                style={{ rowGap: 10, columnGap: "1rem" }}
              >
                <span className="road-map-tag">
                  <div></div> Ongoing
                </span>
                <Button label="Completed" className="transparent-btn" />
              </div>

              <Button
                style={{ cursor: "pointer" }}
                data-target="#addNewGoalModal"
                onClick={() => setShowModal(true)}
                label="Add new goal"
              />
            </section>

            <section>
              {data?.length > 0 &&
                data?.map((item, i) => {
                  return <RoadMapTodo data={item} progress={item?.progress} />;
                })}
            </section>
          </article>
        </div>
      </section>
    </div>
  );
};

export const AddNewGoalModal = () => {
  const actArr = [1, 2];
  return (
    <NewGoalModal>
      <div className="mx-4">
        <div className="border-bottom pb-4">
          <h4>Add new goal</h4>
          <span>In Idea stage</span>
        </div>
        <div className="my-4">
          <TextArea label="Title" rows={1} />
        </div>
        <div className="">
          <TextArea label="Description" rows={5} />
        </div>
        <div className="my-4">
          <TextArea
            label="Description"
            placeholder={"Search for team members"}
            rows={5}
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img src={girl} alt="girl" />
            <article className="pt-2 ps-3">Kate Mcbeth Joan</article>
          </div>
          <div className="mt-2">
            <img src={close} alt="close" role="button" />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <div className="d-flex">
            <img src={guy} alt="girl" />
            <article className="pt-2 ps-3">Jonathan Fleut</article>
          </div>
          <div className="mt-2">
            <img src={close} alt="close" role="button" />
          </div>
        </div>
        <div className="mt-4 mb-3">
          <h6>Activities</h6>
        </div>
        <div className="row activities">
          <div className="w-75">
            <TextArea
              placeholder={"Et integer fringilla.Et integer fringilla."}
              rows={1}
            />
          </div>
          <div className="w-25 mt-2">
            <button>Add</button>
          </div>
        </div>

        <div className="mt-4">
          {actArr.map((i) => (
            <div className="d-flex justify-content-between mt-2">
              <div className="d-flex">
                <input className="mt-2" type="radio" />
                <p className="pt-1 ps-3">
                  Et integer fringilla.Et integer fringilla.
                </p>
              </div>
              <div className="mt-1">
                <img src={close} alt="close" role="button" />
              </div>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between my-5">
          <button className="can">Cancel</button>
          <button className="createGoal">Create goal</button>
        </div>
      </div>
    </NewGoalModal>
  );
};
