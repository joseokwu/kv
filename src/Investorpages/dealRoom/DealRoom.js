import React from "react";
import back from "../../assets/icons/chervonLeft.svg";
import download from "../../assets/icons/cloudDownload.svg";

import { Button, Tabs } from "../../components";
import { DealFilter } from "../investorDeal/InvestorDeal";
import { DataRoom } from "./components/DataRoom";
import { DealOverview } from "./components/DealOverview";
import "./dealRoom.css";

export const DealRoom = ({ history }) => {
  const {
    location: { hash },
    push,
  } = history;

  const renderComponents = () => {
    switch (hash?.replaceAll("%20", " ")) {
      case "#deal overview":
        return <DealOverview />;
      case "#data room":
        return <DataRoom />;

      default:
        return <DealOverview />;
    }
  };
  return (
    <div className="wrapper">
      <section
        className="mb-5 d-flex align-items-center justify-content-between"
        role="button"
        onClick={() => push("/investor/deal_room")}
      >
        <h5 className="page-header d-flex align-items-center">
          <img src={back} alt="back" className="go-back-deal" />
          Deal Room
        </h5>
        <DealFilter />
      </section>

      <section className="mb-4 d-flex align-items-center justify-content-between">
        <Tabs tabItems={["deal overview", "data room"]} />
        <Button
          label={
            <div className="d-flex align-items-center">
              <img src={download} alt="download" className="mr-2" />
              Download
            </div>
          }
        />
      </section>

      <div>{renderComponents()}</div>
    </div>
  );
};
