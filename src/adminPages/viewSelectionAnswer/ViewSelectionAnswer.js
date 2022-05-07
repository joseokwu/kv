import React, { useState } from "react";
import { Button } from "../../components";
import { FullTab } from "../../adminComponents";
import web from "../../assets/icons/web.svg";
import office from "../../assets/icons/office.svg";
import apple from "../../assets/images/apple.svg";
import left from "../../assets/icons/chervonLeft.svg";
import styles from "./viewSelectionAnswer.module.css";
import { useHistory } from "react-router-dom";
import { Overview } from "./components/Overview";
import { Evaluators } from "./components/Evaluators";
import { Assignments } from "./components/Assignments";

export const ViewSelectionAnswer = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabComponents = [
    <Overview setCurrentTab={setCurrentTab} />,
    <Evaluators />,
    <Assignments />,
  ];

  const {
    goBack,
    location: { pathname },
  } = useHistory();

  const isMentor = pathname.includes("mentors");
  return (
    <div className="p-5">
      <section
        className="d-flex align-items-center mb-3"
        onClick={() => goBack()}
        role="button"
        style={{ width: "fit-content" }}
      >
        <img
          src={left}
          alt="left"
          className="mr-2"
          style={{ transform: "rotate(180deg)" }}
        />
        <p className="bread-start" role="button">
          Selection Process
        </p>
      </section>

      <section className={styles.card}>
        <article className="row" style={{ minHeight: "100%" }}>
          <div className="col-lg-6">
            <section
              className="d-flex align-items-start"
              style={{ columnGap: "1.5rem" }}
            >
              <img src={apple} alt="logo" className={styles.logo} />
              <div>
                <h2>Gecko Inc.</h2>
                <p className="border-bottom pb-3 mb-3">Tech Industry</p>
                <p>
                  <img src={web} alt="web" /> www.applaneinsteen.com
                </p>
                <p>
                  <img src={office} alt="office" /> Lagos, Nigeria
                </p>
              </div>
            </section>
          </div>

          <div className="col-lg-6 align-items-center justify-content-center d-flex">
            <section className="d-flex align-items-center justify-content-center space-out">
              <Button
                label="Approve and publish"
                variant="trans"
                className={styles.approve_btn}
              />
              <Button
                label="Recommend"
                variant="trans"
                className={styles.rec_btn}
              />
            </section>
          </div>
        </article>
      </section>

      <section className="white-strip my-3" style={{ padding: "9px 1.5rem" }}>
        <FullTab
          tabItems={
            isMentor
              ? ["Overview", "Evaluators", "Assignment"]
              : ["Overview", "Evaluators"]
          }
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </section>

      <section>{tabComponents[currentTab]}</section>
    </div>
  );
};
