import React from "react";
import { Select } from "../../../components";
import styles from "../permissionControl.module.css";
import { features, investorRoles } from "../../../utils/utils";
import { Checkbox, Table } from "../../../adminComponents";

export const RoleAndPermission = () => {
  const headers = [
    { title: "Features", accessor: "features" },
    { title: "Role", accessor: "role" },
    { title: "Permissions", accessor: "permissions" },
  ];

  const data = [
    {
      features: "Oppportunities",
      role: <div style={{ minWidth: "6.4rem" }}>Admin</div>,
      permissions: (
        <div className="d-flex align-items-center flex-wrap space-out">
          <Checkbox label="Create" id="create" defaultChecked={true} />
          <Checkbox label="View" id="view" defaultChecked={true} />
          <Checkbox label="Edit" id="edit" defaultChecked={true} />
          <Checkbox label="Delete" id="delete" defaultChecked={true} />
        </div>
      ),
    },
    {
      features: "Schedule",
      role: "Admin",
      permissions: (
        <div className="d-flex align-items-center flex-wrap space-out">
          <Checkbox label="Create" id="create" defaultChecked={true} />
          <Checkbox label="View" id="view" defaultChecked={true} />
          <Checkbox label="Edit" id="edit" defaultChecked={true} />
          <Checkbox label="Delete" id="delete" defaultChecked={true} />
        </div>
      ),
    },
    {
      features: "Event",
      role: "Admin",
      permissions: (
        <div className="d-flex align-items-center flex-wrap space-out">
          <Checkbox label="Create" id="create" defaultChecked={true} />
          <Checkbox label="View" id="view" defaultChecked={true} />
          <Checkbox label="Edit" id="edit" defaultChecked={true} />
          <Checkbox label="Delete" id="delete" defaultChecked={true} />
        </div>
      ),
    },
    {
      features: "Selection Process",
      role: "Admin",
      permissions: (
        <div className="d-flex align-items-center flex-wrap space-out">
          <Checkbox label="Create" id="create" defaultChecked={true} />
          <Checkbox label="View" id="view" defaultChecked={true} />
          <Checkbox label="Edit" id="edit" defaultChecked={true} />
          <Checkbox label="Delete" id="delete" defaultChecked={true} />
        </div>
      ),
    },
    {
      features: "Networking",
      role: "Admin",
      permissions: (
        <div className="d-flex align-items-center flex-wrap space-out">
          <Checkbox label="Create" id="create" defaultChecked={true} />
          <Checkbox label="View" id="view" defaultChecked={true} />
          <Checkbox label="Edit" id="edit" defaultChecked={true} />
          <Checkbox label="Delete" id="delete" defaultChecked={true} />
        </div>
      ),
    },
    {
      features: "Dashboard",
      role: "Admin",
      permissions: (
        <div className="d-flex align-items-center flex-wrap space-out">
          <Checkbox label="Create" id="create" defaultChecked={true} />
          <Checkbox label="View" id="view" defaultChecked={true} />
          <Checkbox label="Edit" id="edit" defaultChecked={true} />
          <Checkbox label="Delete" id="delete" defaultChecked={true} />
        </div>
      ),
    },
    {
      features: "Program",
      role: "Admin",
      permissions: (
        <div className="d-flex align-items-center flex-wrap space-out">
          <Checkbox label="Create" id="create" defaultChecked={true} />
          <Checkbox label="View" id="view" defaultChecked={true} />
          <Checkbox label="Edit" id="edit" defaultChecked={true} />
          <Checkbox label="Delete" id="delete" defaultChecked={true} />
        </div>
      ),
    },
    {
      features: "Assignment",
      role: "Admin",
      permissions: (
        <div className="d-flex align-items-center flex-wrap space-out">
          <Checkbox label="Create" id="create" defaultChecked={true} />
          <Checkbox label="View" id="view" defaultChecked={true} />
          <Checkbox label="Edit" id="edit" defaultChecked={true} />
          <Checkbox label="Delete" id="delete" defaultChecked={true} />
        </div>
      ),
    },

    {
      features: "Evaluation",
      role: "Admin",
      permissions: (
        <div className="d-flex align-items-center flex-wrap space-out">
          <Checkbox label="Create" id="create" defaultChecked={true} />
          <Checkbox label="View" id="view" defaultChecked={true} />
          <Checkbox label="Edit" id="edit" defaultChecked={true} />
          <Checkbox label="Delete" id="delete" defaultChecked={true} />
        </div>
      ),
    },
  ];
  return (
    <div>
      <section className={styles?.roleSelects}>
        <div className="d-flex align-items-center">
          <Select placeholder="Select features" options={features} />
          <Select placeholder="Investor role" options={investorRoles} />
        </div>
      </section>

      <section className="my-4">
        <Table headers={headers} data={data} />
      </section>
    </div>
  );
};
