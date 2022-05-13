import React from "react";
import { Tabs } from "../../components/index";
import styles from "./viewKVMember.module.css";
import member from "../../assets/images/sampleTeamMember.png";
import left from "../../assets/icons/chervonLeft.svg";
import { StartupCard } from "./components/index";
import { useHistory } from "react-router-dom";

export const ViewKVMember = () => {
  const { goBack } = useHistory();
  return (
    <div className="p-5">
      <section className="d-flex align-items-center mb-3">
        <img
          src={left}
          alt="left"
          className="mr-2"
          style={{ transform: "rotate(180deg)" }}
        />
        <p className="bread-start" role="button" onClick={() => goBack()}>
          Go back
        </p>
      </section>
      <section className={styles?.card}>
        <img src={member} alt="member" />
        <div>
          <h1>Kate Mcbeth Joan</h1>
          <p>Michealsmith@gmail.com</p>
          <span>Department:</span>
          <span className="mb-0">Role:</span>
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between pb-0 white-strip mb-3"
        style={{ borderRadius: "10px 10px 0 0" }}
      >
        <Tabs tabItems={["Startup assigned"]} />
      </section>

      <section className="row">
        {Array.from("sixSix").map((x, i) => {
          return (
            <div className="col-lg-4 mb-4">
              <StartupCard />
            </div>
          );
        })}
      </section>
    </div>
  );
};
