import React, { useMemo } from "react";
import userPic from "../../assets/images/sampleUser.png";
import twitter from "../../assets/images/profileTwitter.svg";
import linkedIn from "../../assets/images/profileLinkedIn.svg";
import location from "../../assets/icons/locationSm.svg";
import web from "../../assets/icons/webSm.svg";
import left from "../../assets/icons/chervonLeft.svg";
import styles from "./viewInvestor.module.css";
import { useHistory } from "react-router-dom";
import { Tabs } from "../../components";
import { InvestmentInfo, InvestorInfo, StartupPortfolio } from "./components";

export const ViewInvestor = () => {
  const { goBack } = useHistory();

  const tabItems = useMemo(
    () => ["Investment Info", "Investor Info", "Start-up Portfolio"],
    []
  );

  const {
    location: { hash },
  } = useHistory();

  const renderComponent = () => {
    switch (hash) {
      case `#${tabItems[0]}`:
        return <InvestmentInfo />;
      case `#${tabItems[1]}`:
        return <InvestorInfo />;
      case `#${tabItems[2]}`:
        return <StartupPortfolio />;
      default:
        return <InvestmentInfo />;
    }
  };
  return (
    <div className="p-5" style={{ maxWidth: 2000 }}>
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
      <section className={`${styles.contact_card} row mx-0 p-5 mb-5`}>
        <div className="col-lg-6">
          <article className="d-flex align-items-center space-out mb-2">
            <img src={userPic} alt="user" className={styles.userDp} />
          </article>

          <h4 className={styles.user_name}>Micheal Smith</h4>
          <a href="" className={`mb-4 d-block ${styles.text}`}>
            Michealsmith@gmail.com
          </a>

          <section className="mb-3 d-flex align-items-center flex-wrap">
            <div
              className={`d-flex align-items-center space-out mb-2 ${styles.contact_det}`}
            >
              <img src={location} alt="location" />
              <p className={styles.text}>San francisco United State</p>
            </div>

            <div
              className={`d-flex align-items-center space-out mb-2 ml-4 ${styles.contact_det}`}
            >
              <img src={web} alt="web" />
              <a href="" className={styles.text}>
                www.michealsmith.com
              </a>
            </div>
          </section>

          <p className={styles.text} style={{ color: "#828282" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>

        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <section>
            <article className="d-flex justify-content-end mb-2">
              <img src={twitter} alt="twitter" className="mr-3" />
              <img src={linkedIn} alt="linked in" />
            </article>
            <a
              href=""
              className={`mb-4 d-block text-right ${styles.text}`}
              style={{ color: "#828282" }}
            >
              www.Knightventure/michealsmith
            </a>
          </section>
        </div>
      </section>

      <section className="mb-4">
        <Tabs tabItems={tabItems} />
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};
