import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import left from "../../assets/icons/chervonLeft.svg";
import { Tabs, Tag } from "../../components";
import styles from "./selectionProcessMentor.module.css";
import mentorPic from "../../assets/images/sampleTeamMember.png";
import twitter from "../../assets/icons/twitterLogo.svg";
import linkedIn from "../../assets/icons/linkedInLogo.svg";
import location from "../../assets/icons/locationSm.svg";
import web from "../../assets/icons/web.svg";
import phone from "../../assets/icons/phoneSm.svg";
import apple from "../../assets/images/apple.svg";
import office from "../../assets/icons/office.svg";

export const SelectionProcessMentor = () => {
  const {
    goBack,
    location: { hash },
  } = useHistory();

  const [currentStartups, setCurrentStartups] = useState([]);

  const startups = [
    { status: "pending" },
    { status: "evaluated" },
    { status: "pending" },
    { status: "evaluated" },
    { status: "evaluated" },
    { status: "pending" },
  ];

  useEffect(() => {
    if (hash === "#Evaluated") {
      setCurrentStartups(() =>
        startups.filter((x) => x.status === "evaluated")
      );
    } else if (hash === "#Pending") {
      setCurrentStartups(() => startups.filter((x) => x.status === "pending"));
    } else {
      setCurrentStartups(startups);
    }
  }, [hash]);

  const tabItems = ["All", "Evaluated", "Pending"];
  return (
    <section className="bg-white" style={{ minHeight: "100vh" }}>
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
            Go back
          </p>
        </section>

        <section className={styles.mentor_detail_card}>
          <article className="row">
            <div className="col-lg-5">
              <section className={styles.person_info}>
                <img src={mentorPic} alt="mentor pic" />
                <h3>Micheal Smith</h3>
                <a href="mailto:Michealsmith@gmail.com">
                  Michealsmith@gmail.com
                </a>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et
                  amet, facilisi sodales cursus tellus nam ut. Enim, at
                  imperdiet praesent velit. Eget consequat, sollicitudin
                  molestie curabitur lobortis imperdiet. Vulputate malesuada
                  tortor sit mi laoreet. Iaculis quis pretium urna.
                </p>
                <h5>Industry : Tech</h5>
              </section>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <section className={styles.skills}>
                <h5>Skill</h5>
                <span>
                  <Tag name="Tech" />
                  <Tag name="Engineering" color="#40439A" />
                  <Tag name="Career" color="#E31937" />
                  <Tag name="Engineering" color="#40439A" />
                  <Tag name="Career" color="#E31937" />
                </span>
              </section>
            </div>
            <div className="col-lg-3">
              <section className={styles.mentor_links}>
                <span>
                  <a href="http://">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="http://">
                    <img src={linkedIn} alt="linkedIn" />
                  </a>
                </span>
                <a href="http://www.Knightventure/michealsmith">
                  www.Knightventure/michealsmith
                </a>

                <div>
                  <p>Seam Technologies Inc.</p>
                  <span>
                    <img src={location} alt="location" />
                    <p>San francisco United State</p>
                  </span>
                  <span>
                    <img src={web} alt="web" />
                    <a href="http://www.michealsmith.com">
                      www.michealsmith.com
                    </a>
                  </span>
                  <span>
                    <img src={phone} alt="phone" />
                    <a href="tel:+212456789865">+212456789865</a>
                  </span>
                </div>
              </section>
            </div>
          </article>
        </section>

        <section className="mt-4 pt-3 mb-4">
          <h6 className={styles.eval_header}>Start-ups in evaluation</h6>
          <Tabs tabItems={tabItems} />
        </section>

        <section className="row">
          {currentStartups.map((startup, i) => (
            <div className="col-lg-4 mb-4">
              <StartupCard data={startup} />
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export const StartupCard = ({ data = {} }) => {
  const colors = {
    evaluated: "#0A6CF4",
    pending: "#D42323",
  };
  const {
    push,
    location: { pathname },
  } = useHistory();

  return (
    <div className={styles?.card}>
      <section className="d-flex align-items-center justify-content-between">
        <img src={apple} alt="logo" />

        <p style={{ color: colors[data?.status], textTransform: "capitalize" }}>
          {data?.status}
        </p>
      </section>
      <section className="d-flex align-items-center justify-content-between mb-3">
        <h4>Applane Insteen.</h4>
      </section>

      <section className="d-flex align-items-center space-out border-bottom pb-3 mb-3">
        <Tag name="Accounting" color="#2E3192" />
        <Tag name="Idea stage" />
      </section>

      <section className="border-bottom pb-3 mb-3">
        <p className={styles.start_desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          eu lorem ipsum dolor sit amet, consectetur adipiscing eli
        </p>
      </section>

      <section className="d-flex align-items-center justify-content-between">
        <p className={styles.result}>
          {data?.status === "evaluated" ? "Result: 2/10" : "Result: Awaiting"}
        </p>

        {data?.status === "evaluated" && (
          <p
            className="view-link"
            onClick={() => {
              push("/admin/selection_process/mentors_answer/1");
            }}
            role="button"
          >
            View answer
          </p>
        )}
      </section>
    </div>
  );
};
