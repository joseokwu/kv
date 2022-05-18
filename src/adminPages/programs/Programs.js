import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal, Tabs } from "../../components";
import { ProgramList } from "./components/ProgramList";
import { UploadProgramInfo } from "./components/UploadProgramInfo";
import styles from "./programs.module.css";

export const Programs = () => {
  const tabs = [
    "All",
    "Pending",
    "Accepted",
    "Rescheduled",
    "Declined",
    "Completed",
  ];

  const {
    location: { hash },
    push,
  } = useHistory();

  const programList = [
    { status: "pending" },
    { status: "accepted" },
    { status: "rescheduled" },
    { status: "declined" },
    { status: "completed" },
    { status: "completed" },
    { status: "pending" },
    { status: "pending" },
    { status: "accepted" },
  ];

  const renderComp = () => {
    switch (hash) {
      case `#${tabs[0]}`:
        return <ProgramList data={programList} />;
      case `#${tabs[1]}`:
        return (
          <ProgramList
            data={programList?.filter(
              (x) => x.status.toLowerCase() === tabs[1].toLowerCase()
            )}
          />
        );
      case `#${tabs[2]}`:
        return (
          <ProgramList
            data={programList?.filter(
              (x) => x.status.toLowerCase() === tabs[2].toLowerCase()
            )}
          />
        );
      case `#${tabs[3]}`:
        return (
          <ProgramList
            data={programList?.filter(
              (x) => x.status.toLowerCase() === tabs[3].toLowerCase()
            )}
          />
        );
      case `#${tabs[4]}`:
        return (
          <ProgramList
            data={programList?.filter(
              (x) => x.status.toLowerCase() === tabs[4].toLowerCase()
            )}
          />
        );
      case `#${tabs[5]}`:
        return (
          <ProgramList
            data={programList?.filter(
              (x) => x.status.toLowerCase() === tabs[5].toLowerCase()
            )}
          />
        );
      default:
        return <ProgramList data={programList} />;
    }
  };
  return (
    <div className="p-5">
      <Modal
        id="uploadProgram"
        title="Upload Program Info Pack"
        subTitle="Upload the cohorts program info pack"
        width={697}
      >
        <UploadProgramInfo />
      </Modal>
      <section
        className="d-flex align-items-center justify-content-end mb-45"
        style={{ columnGap: "1rem", maxWidth: 2000 }}
      >
        <Button
          label="Upload Program Info Pack"
          variant="trans"
          data-target="#uploadProgram"
          data-toggle="modal"
        />
        <Button
          label="Add new program"
          onClick={() => push("/admin/program/create")}
        />
      </section>

      <section className="mb-45" style={{ maxWidth: 2000 }}>
        <Tabs tabItems={tabs} />
      </section>

      <section
        className="d-flex align-items-center justify-content-between mb-4"
        style={{ maxWidth: 2000 }}
      >
        <p className="mb-0">Total Programs created: 6</p>
        <div className="d-flex align-items-center space-out">
          <Button
            label="View Assignment"
            variant="trans"
            className={styles.view_assign_btn}
            onClick={() => push("/admin/program/assignments")}
          />
          <Button
            label="Create Assignment"
            variant="secondary"
            onClick={() => push("/admin/program/create_assignment")}
          />
        </div>
      </section>

      <section style={{ maxWidth: 2000 }}>{renderComp()}</section>
    </div>
  );
};
