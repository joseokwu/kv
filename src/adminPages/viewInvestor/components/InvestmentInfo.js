import React from "react";
import styles from "../viewInvestor.module.css";
import pitchIcon from "../../../assets/icons/pitchIcon.svg";
import stageIcon from "../../../assets/icons/stageIcon.svg";
import { YesNo } from "../../../adminComponents";
import { RowOption, Tag } from "../../../components";

export const InvestmentInfo = ({data , info}) => {
 console.log(data)
  return (
    <div>
      <section className="row mx-0">
        <div className="col-lg-6 mb-3">
          <h6 className={styles.header}>Investment Detail</h6>
          

          <PitchCard data={data} />

          <div
            className="border-top border-bottom py-4 mb-4"
            style={{ borderColor: "#F4F4F4" }}
          >
            <section className={`d-flex ${styles.pitchCard}`}>
              <article>
                <h6>Tax Resident</h6>
                <YesNo text={data?.taxResidentOutsideNigeria ? "Yes" : "No"} />
              </article>
              <article>
                <h6>Taxation Number</h6>
                <p style={{ fontSize: "1rem", fontWeight: 500 }}>1234567909</p>
              </article>
            </section>
          </div>

          <div>
            <h6 className={`mb-3 ${styles.header}`}>Preferred Stage</h6>
            <section className="row">
              {info?.preferredStage?.map((x, i) => {
                return (
                  <div className="col-lg-6 mb-3" key={i}>
                    <PreferStage name={x} />
                  </div>
                );
              })}
            </section>
          </div>
        </div>

        <div className="col-lg-6">
          <section className={`mb-5 ${styles.pitchCard}`}>
            <div className="mb-5">
              <h6 className="mb-3"> Investor Type </h6>
              <RowOption
                options={data?.investorType}
                selectAll={true}
              />
            </div>

            <div className="mb-5">
              <h6 className="mb-3">Sector Interested in</h6>
              <div className="d-flex flex-wrap space-out">
                {
                  data?.sectorOfExpertise?.map((item , i) =>(
                    <Tag name={item} color="#40439A" />
                  ))
                }
                
              </div>
            </div>

            <div className="mb-5">
              <h6 className="mb-3">Preference</h6>
              <RowOption options={[info?.investmentPreference]} selectAll={true} />
            </div>

            <div className="">
              <h6 className="mb-3">Preferred Founder Background</h6>
              <RowOption options={["Top College Graduates"]} selectAll={true} />
            </div>
          </section>

          <section className="pt-5">
            <h6 className={styles.header}>Preferred Investment Amount</h6>
            <p> {info?.averageInvestment} </p>
          </section>
        </div>
      </section>
    </div>
  );
};

const PitchCard = ({ data = {} }) => {
  return (
    <div className={`${styles.pitchCard} d-flex w-100 mb-4`}>
      
      <section className="w-100">
        <div className="d-flex w-100">
          <article>
            <p className="mb-2">Bank Type: {data?.bankAccountType}</p>
            <p>Address: {data?.bankBranch} </p>
          </article>
          <article>
            <p className="mb-2">Bank: {data?.bankName}</p>
            <p>Act No : {data?.bankAccountNumber}</p>
          </article>
        </div>
      </section>
    </div>
  );
};

const PreferStage = ({ name = "" }) => {
  return (
    <div className="d-flex align-items-center">
      <span className={styles.stageIcon}>
        <img src={stageIcon} alt="stage" />
      </span>
      <p>{name}</p>
    </div>
  );
};
