import React from "react";
import { YesNo } from "../../../adminComponents";
import { RowOption, Tag } from "../../../components";
import styles from "../viewInvestor.module.css";

export const InvestorInfo = ({ data }) => {
  console.log(data)
  return (
    <div>
      <section className="row mx-0">
        <div className="col-lg-6">
          <section className={styles.pitchCard}>
            <div className="d-flex align-items-start mb-45">
              <div className="mr-4">
                <h6>Angel Network</h6>
                <YesNo text={data?.personalDetail?.angelInvestedBefore ? "Yes" : "No"} />
              </div>
              <RowOption options={[data?.personalDetail?.angelInvestorOrSyndicateInvestor]} selectAll={true} />
            </div>

            <div className="mb-45">
              <h6>Lead investor</h6>
              <YesNo text={data?.personalDetail?.isLeadInvestor ? "Yes" : "No"} />
            </div>

            <div className="mb-45">
              <h6>Mentor</h6>
              <YesNo text={data?.personalDetail?.mentorsStartups ? "Yes" : "No"} />
            </div>

            <div className="mb-45">
              <h6>Interested in online pitching session</h6>
              <YesNo text={data?.personalDetail?.interestedInOnlinePitching ? "Yes" : "No"} />
            </div>
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
              {
                data?.personalDetail?.sectorOfExpertise?.map((item , i) =>(
                  <Tag key={i} name={item} color="#E31937" />
                ))
              }
                
              </div>
            </div>
          </section>

          <section className={styles.pitchCard}>
            <div className="mb-5">
              <h6 className="mb-3">Investment Fund</h6>
              <RowOption
                options={[data?.personalDetail?.investingFrom]}
                selectAll={true}
              />
            </div>

            <div>
              <h6>Investment budget per year</h6>
              <p style={{ color: "#000", fontSize: "18px" }}> { data?.investorApproach?.averageInvestment } </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
