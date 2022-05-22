import React from "react";
import { Link } from "react-router-dom";
import user from "../../../assets/images/sampleTeamMember.png";
import styles from "../dashboard.module.css";

export const UserMgtDash = () => {
  return (
    <div className={styles?.dash_card}>
      <section className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
        <h4>User Management</h4>
        <Link to="/admin/users">See All</Link>
      </section>

      <section>
        <article className={`${styles?.name_tag} mb-3 pb-3`}>
          <img src={user} alt="user" />
          <div>
            <h6>Mr Promise Amstel</h6>
            <p>Investor</p>
          </div>
        </article>
      </section>

      <section>
        <article className={`${styles?.name_tag} mb-3 pb-3`}>
          <img src={user} alt="user" />
          <div>
            <h6>John Newman</h6>
            <p>Investor</p>
          </div>
        </article>
      </section>

      <section>
        <article className={`${styles?.name_tag} mb-3 pb-3`}>
          <img src={user} alt="user" />
          <div>
            <h6>Felicia Jerome</h6>
            <p>Mentor</p>
          </div>
        </article>
      </section>
    </div>
  );
};
