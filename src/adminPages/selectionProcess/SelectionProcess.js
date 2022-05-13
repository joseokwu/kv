import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Tabs } from "../../components";
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
        return tabs[1];
      case `#${tabs[2]}`:
        return tabs[2];
      default:
        return tabs[0];
    }
  };
  return (
    <div className="p-5">
      <section className="d-flex align-items-center justify-content-between mb-4">
        <Tabs tabItems={tabs} />
        <Button
          label="Create New Criteria"
          variant="secondary"
          onClick={() => push("/admin/selection_process/new-criteria-intro")}
        />
      </section>

      <section>{renderComp()}</section>
    </div>
  );
};
