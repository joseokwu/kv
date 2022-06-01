import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import left from "../../assets/icons/chervonLeft.svg";
import twitter from "../../assets/images/profileTwitter.svg";
import linkedIn from "../../assets/images/profileLinkedIn.svg";
import location from "../../assets/icons/locationSm.svg";
import web from "../../assets/icons/webSm.svg";
import phone from "../../assets/icons/phoneSm.svg";
import digitalLogo from "../../assets/icons/digitalOceanLogo.png";
import styles from "./viewPartner.module.css";
import { Tabs } from "../../components";
import { AppliedStartup, Offerings } from "./components";
import { CircularLoader } from "../../mentorComponents/CircluarLoader";

export const ViewPartner = () => {
  const {
    location: { hash },
    goBack,
  } = useHistory();

  const tabItems = useMemo(() => ["Our Offerings", "Start-up Applied"], []);

  const renderComponent = () => {
    switch (hash) {
      case `#${tabItems[0]}`:
        return <Offerings />;
      case `#${tabItems[1]}`:
        return <AppliedStartup />;
      default:
        return <Offerings />;
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
          <div className="w-100">
            <article className="d-flex align-items-center space-out mb-2 w-100">
              <img src={digitalLogo} alt="user" className={styles.userDp} />
            </article>

            <h4 className={styles.user_name}>Digital Ocean</h4>
            <div
              className={`d-flex align-items-center mb-3 ${styles.partnerContact}`}
            >
              <p>CONTACT : Winner Grace</p>
              <p className="d-flex align-items-center">
                <span></span>Manager
              </p>
              <p>Category : Application</p>
            </div>

            <section className="mb-3 d-flex align-items-center flex-wrap">
              <div className={`d-flex align-items-center space-out mb-2`}>
                <img src={location} alt="location" />
                <p className={styles.text}>San francisco United State</p>
              </div>

              <div className={`d-flex align-items-center space-out mb-2 ml-4`}>
                <img src={phone} alt="phone" />
                <a href="" className={styles.text}>
                  +212456789865
                </a>
              </div>

              <div className={`d-flex align-items-center space-out mb-2 ml-4`}>
                <img src={web} alt="web" />
                <a href="" className={styles.text}>
                  www.michealsmith.com
                </a>
              </div>
            </section>

            <p className={styles.text} style={{ color: "#828282" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
          </div>
        </div>

        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <section>
            <article className="d-flex justify-content-end mb-2">
              <img src={twitter} alt="twitter" className="mr-3" />
              <img src={linkedIn} alt="linked in" />
            </article>
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
