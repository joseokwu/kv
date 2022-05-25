import React from "react";
import { YesNo } from "../../../adminComponents";
import { RowOption, Tag } from "../../../components";
import styles from "../viewInvestor.module.css";

export const InvestorInfo = ({ data }) => {
  return (
    <div>
      <section className="row mx-0">
        <div className="col-lg-6">
          <section className={styles.pitchCard}>
            <div className="d-flex align-items-start mb-45">
              <div className="mr-4">
                <h6>Angel Network</h6>
                <YesNo text={data?.angelInvestedBefore ? "Yes" : "No"} />
              </div>
              <RowOption options={[data?.angelInvestorOrSyndicateInvestor]} selectAll={true} />
            </div>

            <div className="mb-45">
              <h6>Lead investor</h6>
              <YesNo text={data?.isLeadInvestor ? "Yes" : "No"} />
            </div>

            <div className="mb-45">
              <h6>Mentor</h6>
              <YesNo text="Yes" />
            </div>

            <div className="mb-45">
              <h6>Interested in online pitching session</h6>
              <YesNo text={data?.interestedInOnlinePitching ? "Yes" : "No"} />
            </div>
          </section>

          <section className="mt-4">
            <h6 className={styles.header} style={{ fontSize: 18 }}>
              Note to Start-up
            </h6>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </section>
        </div>

        <div className="col-lg-6">
          <section className={`mb-4 ${styles.pitchCard}`}>
            <div className="mb-45">
              <h6>Number of start-ups invested in</h6>
              <YesNo text="12" />
            </div>

            <div className="mb-4">
              <h6 className="mb-3">Sector with expertise</h6>
              <div className="d-flex flex-wrap space-out">
                <Tag name="Tech" />
                <Tag name="Engineering" color="#40439A" />
                <Tag name="Career" color="#E31937" />
                <Tag name="Engineering" color="#40439A" />
                <Tag name="Career" color="#E31937" />
              </div>
            </div>
          </section>

          <section className={styles.pitchCard}>
            <div className="mb-5">
              <h6 className="mb-3">Investment Fund</h6>
              <RowOption
                options={["Personal Fund", "Lead deals"]}
                selectAll={true}
              />
            </div>

            <div>
              <h6>Investment budget per year</h6>
              <p style={{ color: "#000", fontSize: "18px" }}>$1000- $2000</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
