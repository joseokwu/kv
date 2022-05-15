import React from "react";
import { Table } from "../../../adminComponents";
import teamMember from "../../../assets/images/sampleTeamMember.png";
import { Button, Modal, Tag } from "../../../components";
import { formatDate } from "../../../utils/helpers";

export const CriteriaTable = () => {
  const header = [
    { title: "#Batch ID", accessor: "id" },
    { title: "Date", accessor: "date" },
    { title: "Criteria Type", accessor: "type" },
    { title: "Selection Team", accessor: "team" },
    { title: "Status", accessor: "status" },
    { title: "Action", accessor: "action" },
  ];

  const data = [
    {
      id: "0001",
      date: formatDate(new Date(2021, 7, 13)),
      type: "KV Member",
      team: (
        <section className="event_people">
          {Array.from("fiver").map((item, i) => {
            return (
              <img
                src={teamMember}
                alt="doc"
                key={`over-${i}`}
                style={{ position: "relative", left: i * -5 }}
              />
            );
          })}
        </section>
      ),
      status: <Tag name="Active" />,
      action: (
        <div className="d-flex align-items-center space-out">
          <p className="view-link" role="button">
            View
          </p>
          <p className="view-link" role="button">
            Edit
          </p>
          <p
            role="button"
            className="delete-link"
            data-target="#deleteCriteria"
            data-toggle="modal"
          >
            Delete
          </p>
        </div>
      ),
    },

    {
      id: "0001",
      date: formatDate(new Date(2021, 7, 13)),
      type: "Mentor",
      team: (
        <section className="event_people">
          {Array.from("fiver").map((item, i) => {
            return (
              <img
                src={teamMember}
                alt="doc"
                key={`over-${i}`}
                style={{ position: "relative", left: i * -5 }}
              />
            );
          })}
        </section>
      ),
      status: <Tag name="Active" />,
      action: (
        <div className="d-flex align-items-center space-out">
          <p className="view-link" role="button">
            View
          </p>
          <p className="view-link" role="button">
            Edit
          </p>
          <p role="button" className="delete-link">
            Delete
          </p>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Modal id="deleteCriteria" title="Delete Criteria" width={492}>
        <div className="px-4">
          <p className="text-center mb-3">
            Are you sure you want to delete January Cohort
          </p>
          <section className="d-flex align-items-centers justify-content-center space-out mb-4">
            <Button label="Delete" variant="danger" />
            <Button label="Cancel" variant="trans" />
          </section>
        </div>
      </Modal>
      <Table headers={header} data={[...data, ...data, ...data]} />
    </div>
  );
};
