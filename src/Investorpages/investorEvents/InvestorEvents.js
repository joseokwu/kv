// import React from "react";
// import { Tabs } from "../../components/index";

// export const InvestorEvents = ({ history }) => {
//   const {
//     location: { hash },
//   } = history;
//   const tabsItems = [
//     "all events",
//     "selection day",
//     "pitching session",
//     "others",
//   ];

//   const renderComponents = () => {
//     switch (hash?.replaceAll("%20", " ")) {
//       case "#all events":
//         return <div>All Events</div>;
//       case "#selection day":
//         return <div>Selection Day</div>;
//       case "#pitching session":
//         return <div>Pitching Session</div>;
//       case "#others":
//         return <div>Others</div>;
//       default:
//         return <div>all events</div>;
//     }
//   };
//   return (
//     <div className="wrapper">
//       {/* <section className="mb-4">
//         <h1>Events</h1>
//       </section> */}

//       <section className="mb-4">
//         <Tabs tabItems={tabsItems} />
//       </section>
//       <section>{renderComponents()}</section>
//     </div>
//   );
// };

import React from "react";
import { Tabs } from "../../Startupcomponents";
import down from "../../assets/icons/downArrow.svg";
import { SelectionDay } from "./components/selectionDay";
import { getEvents } from "../../services/events";


export const InvestorEvents = ({ history }) => {
  const {
    location: { hash },
  } = history;

  const renderContent = () => {
    switch (hash) {
      case "#Selection Day":
        return <SelectionDay />;

      case "#Demo Day":
        return <SelectionDay />;

      case "#Pitching Events":
        return <SelectionDay />;

      case "#Other Events":
        return <SelectionDay />;

      default:
        return <SelectionDay />;
    }
  };

  const tabItems = [
    "Selection Day",
    "Demo Day",
    "Pitching Events",
    "Other Events",
  ];
  return (
    <div className="mb-5">
      <div className="col-lg-12">
        <section className="container d-flex align-items-center justify-content-end mb-4">
          {/* <p className="event_title">Events</p> */}
          {/* <img src={searchIcon} alt="search" /> */}
        </section>
      </div>

      <div className="container row d-flex justify-content-between">
        <div className="col d-flex justify-content-between">
          <Tabs tabItems={tabItems} />

          <div className="mx-4">
            <button
              className="d-flex align-items-center sort-btn"
              style={{ columnGap: 7 }}
              data-toggle="dropdown"
            >
              <span>
                <span>Sort by: </span> Industry
              </span>
              <img src={down} alt="down" />
            </button>
          </div>
        </div>
      </div>

      <div className="col-lg-12 col-xl-12 pt-3">
        <section className="mt-1">{renderContent()}</section>
      </div>
    </div>
  );
};
