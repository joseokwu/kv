import React from "react";
import { Checkbox } from "../../../adminComponents";
import { Button, Select, TextField } from "../../../components";
import styles from "../permissionControl.module.css";

export const UserBasicInfo = () => {
  const checklist = [
    { label: "Investment Opportunities", id: "investment_opportunities" },
    { label: "To do List", id: "to_do_list" },
    { label: "Dashboard", id: "dashboard" },
    { label: "Schedule", id: "schedule" },
    { label: "Selection Process", id: "selection_process" },
    { label: "Program", id: "program" },
    { label: "Event", id: "event" },
    { label: "Networking", id: "networking" },
    { label: "Assignment", id: "assignment" },
    { label: "Evaluation", id: "evaluation" },
    { label: "Deal room", id: "deal_room" },
    { label: "Application", id: "application" },
    { label: "Partners", id: "partners" },
    { label: "E-Academy", id: "e_academy" },
  ];
  return (
    <div className={styles.basic_info}>
      <h4>Basic Information</h4>
      <section className="row mb-5">
        <div className="col-lg-6">
          <TextField label="User Name*" />
        </div>
        <div className="col-lg-6">
          <TextField label="Email*" />
        </div>
      </section>

      <h4>Role</h4>

      <section>
        <Select label="Select Role" options={["Admin", "KV Member"]} />

        <h5>Features</h5>

        <div className="mb-4">
          <article className={styles?.role_checklist}>
            {checklist?.map((item, i) => (
              <div>
                <Checkbox label={item?.label} id={item?.id} key={`role-${i}`} />
              </div>
            ))}
          </article>
        </div>

        <div className="text-right">
          <Button label="Save" />
        </div>
      </section>
    </div>
  );
};
