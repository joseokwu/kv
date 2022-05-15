import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Tabs, Modal } from "../../components";
import { CohortTable } from "./components/CohortTable";
import { CreateCohort } from "./components/CreateCohort";
import { EvaluationTable } from "./components/EvaluationTable";
import styles from "./selection.module.css";

export const SelectionProcess = () => {
  const tabs = ["Evaluation", "Cohorts", "Criterias"];

  const {
    location: { hash },
    push,
  } = useHistory();
  const renderComp = () => {
    switch (hash) {
      case `#${tabs[0]}`:
        return <EvaluationTable />;
      case `#${tabs[1]}`:
        return <CohortTable />;
      case `#${tabs[2]}`:
        return tabs[2];
      default:
        return tabs[0];
    }
  };
  return (
    <div className="p-5">
      <Modal id="newCohort" title="Create New Cohort" width={568}>
        <CreateCohort />
      </Modal>
      <section className="d-flex align-items-center justify-content-between mb-4">
        <Tabs tabItems={tabs} />
        {`#${tabs[0]}` === hash && (
          <Button
            label="Create New Criteria"
            variant="secondary"
            onClick={() => push("/admin/selection_process/new-criteria-intro")}
          />
        )}
        {`#${tabs[1]}` === hash && (
          <Button
            label="Create New Cohort"
            variant="secondary"
            data-target="#newCohort"
            data-toggle="modal"
          />
        )}
        {`#${tabs[2]}` === hash && (
          <Button
            label="Create New Criteria"
            variant="secondary"
            onClick={() => push("/admin/selection_process/new-criteria-intro")}
          />
        )}
      </section>

      <section>{renderComp()}</section>
    </div>
  );
};
