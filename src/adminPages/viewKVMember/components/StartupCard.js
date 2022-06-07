import React from "react";
import styles from "../viewKVMember.module.css";
import yeLogo from "../../../assets/images/yeLogo.svg";
import { Badge, Tag } from "../../../components";

export const StartupCard = ({ data = {}, ...rest }) => {
  const statusList = {
    active: "#0E760C",
    "in-active": "#E31919",
  };
  return (
    <div className={styles.portfolioCard} {...rest}>
      <section className="d-flex justify-content-between mb-2">
        <img src={yeLogo} alt="startup logo" />
        {/* <Badge
          name={data?.status}
          color={statusList[data?.status?.toLowerCase()]}
        /> */}
      </section>

      <section>
        <h4>Yebox Technology</h4>
        <div className="d-flex flex-wrap space-out mb-2">
          <Tag name="Tech" />
          <Tag name="Engineering" color="#40439A" />
          <Tag name="Career" color="#E31937" />
        </div>

        <p className={`border-bottom ${styles.portDesc}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit...
        </p>
      </section>

      <section className="row">
        <div className="col-md-6">
          <p>Idea stage</p>
          <p>Funding amount: $7</p>
        </div>
        <div className="col-md-6 text-right">
          <p>Last funding date: 20/3/21</p>
          <p>Invest. requirement: $21</p>
        </div>
      </section>
    </div>
  );
};
