import React from "react";
import styles from "../viewInvestor.module.css";
import pitchIcon from "../../../assets/icons/pitchIcon.svg";
import stageIcon from "../../../assets/icons/stageIcon.svg";
import { YesNo } from "../../../adminComponents";
import { RowOption, Tag } from "../../../components";

export const InvestmentInfo = () => {
  const pitchData = [
    {
      name: "Investment profile name",
      investor: "Micheal Smith",
      address: "Califonia, United States",
      bankName: "Access Bank",
      bankAccount: "098382080",
    },
    {
      name: "Investment profile name",
      investor: "Micheal Smith",
      address: "Califonia, United States",
      bankName: "Access Bank",
      bankAccount: "098382080",
    },
  ];
  return (
    <div>
      <section className="row mx-0">
        <div className="col-lg-6 mb-3">
          <h6 className={styles.header}>Investment Pitch</h6>
          <p className={`mb-4 ${styles.text}`} style={{ color: "#000" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation{" "}
          </p>

          {pitchData?.length > 0 &&
            pitchData.map((p, i) => <PitchCard data={p} key={`pitch-${i}`} />)}

          <div
            className="border-top border-bottom py-4 mb-4"
            style={{ borderColor: "#F4F4F4" }}
          >
            <section className={`d-flex ${styles.pitchCard}`}>
              <article>
                <h6>Tax Resident</h6>
                <YesNo text="Yes" />
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
              {Array.from("1111").map((x, i) => {
                return (
                  <div className="col-lg-6 mb-3" key={`preferred-stage-${i}`}>
                    <PreferStage name="Minimum Viable Product" />
                  </div>
                );
              })}
            </section>
          </div>
        </div>

        <div className="col-lg-6">
          <section className={`mb-5 ${styles.pitchCard}`}>
            <div className="mb-5">
              <h6 className="mb-3">About</h6>
              <RowOption
                options={[
                  "Business Owner",
                  "VC & PE Professional",
                  "VC & PE Professional",
                ]}
                selectAll={true}
              />
            </div>

            <div className="mb-5">
              <h6 className="mb-3">Sector Interested in</h6>
              <div className="d-flex flex-wrap space-out">
                <Tag name="Tech" />
                <Tag name="Engineering" color="#40439A" />
                <Tag name="Career" color="#E31937" />
                <Tag name="Engineering" color="#40439A" />
                <Tag name="Career" color="#E31937" />
              </div>
            </div>

            <div className="mb-5">
              <h6 className="mb-3">Preference</h6>
              <RowOption options={["B2B", "B2B"]} selectAll={true} />
            </div>

            <div className="">
              <h6 className="mb-3">Preferred Founder Background</h6>
              <RowOption options={["Top College Graduates"]} selectAll={true} />
            </div>
          </section>

          <section className="pt-5">
            <h6 className={styles.header}>Preferred Investment Amount</h6>
            <p>$1000- $2000</p>
          </section>
        </div>
      </section>
    </div>
  );
};

const PitchCard = ({ data = {} }) => {
  return (
    <div className={`${styles.pitchCard} d-flex w-100 mb-4`}>
      <img src={pitchIcon} alt="pitch" />
      <section className="w-100">
        <h6>{data?.name}</h6>
        <div className="d-flex w-100">
          <article>
            <p className="mb-2">Investor: {data?.investor}</p>
            <p>Address: {data?.address} </p>
          </article>
          <article>
            <p className="mb-2">Bank: {data?.bankName}</p>
            <p>Act No : {data?.bankAccount}</p>
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
