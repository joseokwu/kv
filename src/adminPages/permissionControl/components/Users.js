import React from "react";
import { useHistory } from "react-router-dom";
import { Table } from "../../../adminComponents";

export const Users = () => {
  const headers = [
    { title: "User", accessor: "user" },
    { title: "Email Address", accessor: "email" },
    { title: "Roles", accessor: "roles" },
    { title: "", accessor: "action" },
  ];

  const { push } = useHistory();

  const data = [
    {
      user: "Kate Mcbeth Joan",
      email: "KateMcbeth@gmail.com",
      roles: <p style={{ color: "#40439A" }}>Admin</p>,
      action: (
        <p
          className="view-link text-center"
          role="button"
          onClick={() => push(`/admin/permission/123`)}
        >
          View Details
        </p>
      ),
    },
    {
      user: "Kate Mcbeth Joan",
      email: "KateMcbeth@gmail.com",
      roles: <p style={{ color: "#40439A" }}>Admin</p>,
      action: (
        <p
          className="view-link text-center"
          role="button"
          onClick={() => push(`/admin/permission/123`)}
        >
          View Details
        </p>
      ),
    },
  ];
  return (
    <div>
      <Table headers={headers} data={[...data, ...data]} />
    </div>
  );
};
