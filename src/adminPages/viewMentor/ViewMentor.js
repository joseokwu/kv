import React from "react";
import styles from "./viewMentor.module.css";
import userPic from "../../assets/images/sampleUser.png";
import stars from "../../assets/icons/Stars.svg";
import twitter from "../../assets/images/profileTwitter.svg";
import linkedIn from "../../assets/images/profileLinkedIn.svg";
import location from "../../assets/icons/locationSm.svg";
import phone from "../../assets/icons/phoneSm.svg";
import web from "../../assets/icons/webSm.svg";
import { Tabs } from "../../components";
import { WorkExp } from "./components";
import { useHistory } from "react-router-dom";
import { AreaOfInterest } from "./components/AreaOfInterest";

export const ViewMentor = () => {
  const tabItems = [
    "Work Experience",
    "Area of Interest/Skills",
    "Consulting Offerings",
    "Availability",
  ];

  const {
    location: { hash },
  } = useHistory();
  const renderComponent = () => {
    switch (hash) {
      case `#${tabItems[0]}`:
        return <WorkExp />;
      case `#${tabItems[1]}`:
        return <AreaOfInterest />;
      case `#${tabItems[2]}`:
        return <div>Consulting Offerings</div>;
      case `#${tabItems[3]}`:
        return <div>Availability</div>;
      default:
        return <WorkExp />;
    }
  };
  return (
    <div className="p-5">
      <section className={`${styles.contact_card} row mx-0 p-5 mb-5`}>
        <div className="col-lg-6">
          <article className="d-flex align-items-center space-out mb-2">
            <img src={userPic} alt="user" className={styles.userDp} />
            <img src={stars} alt="stars" className="ml-2" />
            <p className={`ml-2 mb-0 ${styles.rate}`}>4.5</p>
            <p className="view-link mb-0">View rating</p>
          </article>

          <h4 className={styles.user_name}>Micheal Smith</h4>
          <a href="" className={`mb-4 d-block ${styles.text}`}>
            Michealsmith@gmail.com
          </a>

          <p className={styles.text} style={{ color: "#828282" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet,
            facilisi sodales cursus tellus nam ut. Enim, at imperdiet praesent
            velit. Eget consequat, sollicitudin molestie curabitur lobortis
            imperdiet. Vulputate malesuada tortor sit mi laoreet. Iaculis quis
            pretium urna.
          </p>
        </div>

        <div className="col-lg-6 d-flex flex-column justify-content-between">
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

          <section>
            <div
              className={`d-flex align-items-center justify-content-end space-out mb-2 ${styles.contact_det}`}
            >
              <img src={location} alt="location" />
              <p className={styles.text}>San francisco United State</p>
            </div>

            <div
              className={`d-flex align-items-center justify-content-end space-out mb-2 ${styles.contact_det}`}
            >
              <img src={web} alt="web" />
              <a href="" className={styles.text}>
                www.michealsmith.com
              </a>
            </div>

            <div
              className={`d-flex align-items-center justify-content-end space-out ${styles.contact_det}`}
            >
              <img src={phone} alt="phone" />
              <a href="" className={styles.text}>
                +212456789865
              </a>
            </div>
          </section>
        </div>
      </section>

      <section className="mb-3">
        <Tabs tabItems={tabItems} />
      </section>

      <section>{renderComponent()}</section>
    </div>
  );
};
