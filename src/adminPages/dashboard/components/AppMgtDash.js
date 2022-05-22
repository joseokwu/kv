import React from "react";
import { Link } from "react-router-dom";
import startup from "../../../assets/images/sampleUser.png";
import styles from "../dashboard.module.css";

export const AppMgtDash = () => {
  return (
    <div className={styles?.dash_card}>
      <section className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
        <h4>Application Mgt.</h4>
        <Link to="/admin/application_mgt">See All</Link>
      </section>

      <section>
        <article className={`${styles?.name_tag} mb-3 pb-3`}>
          <img src={startup} alt="startup" />
          <div>
            <h6>Music Incorporated</h6>
            <p>Startup</p>
          </div>
        </article>
      </section>

      <section>
        <article className={`${styles?.name_tag}`}>
          <img src={startup} alt="startup" />
          <div>
            <h6>MedPlus</h6>
            <p>Startup</p>
          </div>
        </article>
      </section>
    </div>
  );
};
