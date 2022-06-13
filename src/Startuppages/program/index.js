import React, { useEffect, useState } from "react";
import {
  ProgramCardWrapper,
  TabFilterWrapper,
  TodoCard,
} from "./program.sttyled";
import woman from "../../assets/icons/woman.svg";
import down from "../../assets/icons/downArrow.svg";
import DownloadIcon from "../../assets/icons/downloadIcon.svg";
import { Tabs } from "../../Startupcomponents/tabs/Tabs";
import { Session } from "./components/sessions";
import { useHistory } from "react-router-dom";
import { Assignment } from "./components/assignment";
import { Rating } from "./components/rating";
import { CalenderComponent } from "./components/calender";
import { getPrograms } from "../../services";


export const StartupProgram = () => {
  const tabList = ["Calender", "Session", "Assignment"];

  const [programInfo, setProgramInfo] = useState(null);
  const [loading, setLoading] = useState(false);
 




  const {
    location: { hash },
  } = useHistory();

  

  const renderComponent = () => {
    switch (hash) {
      case "#Calender":
        return <CalenderComponent  data={ programInfo !== undefined && programInfo?.calendar} />;
      case "#Session":
        return <Session />;
      case "#Assignment":
        return <Assignment  />;
      // case "#Rating":
      //   return <Rating />;
      default:
        return <CalenderComponent data={ programInfo !== undefined && programInfo?.calendar} />
    }
  };



  return (
    <div className="container">
      <ProgramCardWrapper className=" row">
        <div className="col-lg-6">
          <img src={woman} alt="woman" className="img" />
        </div>
        <div className="div col-lg-6">
          <h5> Welcome to Knight Ventures Program</h5>
          <p className="my-4">
           {
            programInfo?.description
           }
          </p>
    
        </div>
      </ProgramCardWrapper>

      <TabFilterWrapper className="pt-3">
        <section className="my-3 mx-3 container d-flex justify-content-between">
          <Tabs tabItems={tabList} />
        </section>
      </TabFilterWrapper>

      <section className="mb-5 container ">{renderComponent()}</section>
    </div>
  );
};
