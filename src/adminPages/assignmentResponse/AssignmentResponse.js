import React, { useState } from "react";
import { Button, GoBack, Modal, Tabs } from "../../components";
import apple from "../../assets/icons/appleSmall.svg";
import down from "../../assets/icons/downArrow.svg";
import styles from "./response.module.css";
import { AssignmentFile } from "../../adminComponents";
import { AddNote } from "./components/AddNote";
import { useHistory } from "react-router-dom";

export const AssignmentResponse = () => {
  const {
    location: { hash },
  } = useHistory();

  console.log("hash", hash);

  const startupResponses = [
    { status: "pending", id: 123 },
    { status: "completed", id: 345 },
    { status: "pending", id: 567 },
    { status: "completed", id: 756 },
    { status: "pending", id: 980 },
    { status: "completed", id: 890 },
  ];

  return (
    <div className="p-5 bg-white" style={{ minHeight: "93vh" }}>
      <GoBack />

      <section className="d-flex align-items-center justify-content-end mb-4">
        <Tabs
          tabItems={["Pending", "Completed"]}
          className={styles.response_tab}
        />
      </section>

      <section className="pt-2">
        {startupResponses?.length > 0 ? (
          startupResponses
            ?.filter((s) => `#${s.status}` === hash.toLowerCase())
            ?.map((t, i) => (
              <StartupResponse key={`response-${i}`} response={t} />
            ))
        ) : (
          <h3 className="text-center mt-4">No Responses</h3>
        )}
      </section>
    </div>
  );
};

const StartupResponse = ({ response = {} }) => {
  const [open, setOpen] = useState(false);
  const { push } = useHistory();
  return (
    <div style={{ marginBottom: "2rem" }}>
      <Modal title="Add a note" id="addNote">
        <AddNote />
      </Modal>
      <section
        className={`d-flex align-items-center justify-content-between ${styles?.top_section}`}
        onClick={() => setOpen(!open)}
      >
        <article className="d-flex align-items-center">
          <img src={apple} alt="apple" />
          <h4 className="mb-0">Applane Insteen.</h4>
        </article>
        <img
          src={down}
          alt="down"
          className={open ? styles.openArrow : styles.closeArrow}
        />
      </section>

      <div className={`${open ? styles.openSection : styles?.closeSection}`}>
        <section className={`${styles?.bottom_section}`}>
          <div className="row">
            <section className="col-lg-8 d-flex align-items-center">
              <div>
                <h5 className="mb-4">Business plan for Applane Insteen</h5>
                <p className="w-75">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Enim lectus morbi elementum
                  eu.Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
                {response?.status === "pending" ? (
                  <Button
                    label="Give Feedback"
                    variant="secondary"
                    data-target="#addNote"
                    data-toggle="modal"
                  />
                ) : (
                  <Button
                    label="View Feedback"
                    variant="secondary"
                    onClick={() =>
                      push(`/admin/program/feedback/${response?.id}`)
                    }
                  />
                )}
              </div>
            </section>
            <section className="col-lg-4">
              <AssignmentFile />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};
