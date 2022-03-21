import React from "react";
import { useHistory } from "react-router-dom";
import { Tabs } from "../../components";
import { Investor, Mentor } from "./components";

export const UserManagement = () => {
  const tabItems = ["Mentor", "Investor", "Partner"];

  const {
    location: { hash },
  } = useHistory();
  const renderComponent = () => {
    switch (hash) {
      case `#${tabItems[0]}`:
        return <Mentor />;
      case `#${tabItems[1]}`:
        return <Investor />;
      case `#${tabItems[2]}`:
        return <div>Partner</div>;
      // case `#${tabItems[3]}`:
      //   return <div>Kv Member</div>;
      default:
        return <Mentor />;
    }
  };
  return (
    <div className="p-5">
      <section className="mb-4">
        <Tabs tabItems={tabItems} />
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};
