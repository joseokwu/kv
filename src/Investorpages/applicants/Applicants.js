import React, { useEffect, useMemo, useState } from "react";
import search from "../../assets/icons/search.svg";
import { PageLoader, Tabs } from "../../components";
import filter from "../../assets/icons/filterFunnel.svg";
import down from "../../assets/icons/chevronDown.svg";
import searchSm from "../../assets/icons/searchSm.svg";
import "./applicants.css";
import { Tab } from "react-bootstrap";
import { getApplicant } from "../../services/partners";
import {
  AllComponent,
  ApproveComponent,
  ReapplyComponent,
  DeclineComponent,
  PendingComponent,
  ExpireComponent,
} from "../containers";




export const BoosterApplicants = ({ history }) => {
  const {
    push,
    location: { hash },
  } = history;

  const [applicants, setApplicatnts] = useState(null);
  const [loading, setLoading] = useState(false);

  const getFetchData = async () => {
    setLoading(true);
    const res = await getApplicant();
    setApplicatnts(res?.all);
    setLoading(false);
  };

  const pendin =
    applicants && applicants?.filter((item) => item?.status === "pending");
  const approve =
    applicants && applicants?.filter((item) => item?.status === "approved");
  const decline =
    applicants && applicants?.filter((item) => item?.status === "declined");
  const expire =
    applicants && applicants?.filter((item) => item?.status === "expired");
  const reApply =
    applicants && applicants?.filter((item) => item?.status === "re-applied");

  const renderContent = () => {
    switch (hash.replaceAll("%20", " ")) {
      case "#all":
        return <AllComponent  />;
      case "#pending":
        return <PendingComponent data={pendin} />;
      case "#approved":
        return <ApproveComponent data={approve} />;

      case "#declined":
        return <DeclineComponent data={decline} />;

      case "#expired":
        return <ExpireComponent data={expire} />;

      case "#re-applied":
        return <ReapplyComponent data={reApply} />;
      default:
        return <AllComponent data={applicants} />;
    }
  };

  const tabItems = [
    "all",
    "pending",
    "approved",
    "declined",
    "expired",
    "re-applied",
  ];



  

  if (loading) {
    return (
      <PageLoader
        dashboard={true}
        num={[applicants, pendin, approve, decline, expire, reApply]}
      />
    );
  }

  return (
    <div className="wrapper">
      <section className="d-flex justify-content-between align-items-center applicant-header">
        <h1>Startup Application</h1>
        {/* <img src={search} alt="search" /> */}
      </section>

      <section className="d-flex align-items-center justify-content-between mb-4">
        <Tabs tabItems={tabItems} />

        <div className="dropdown">
          <button
            className="d-flex align-items-center filter-btn"
            style={{ columnGap: 7 }}
            data-toggle="dropdown"
          >
            <img src={filter} alt="filter" />
            <p>Filter</p>
            <img src={down} alt="down" />
          </button>

          <section className="dropdown-menu filter-menu">
            <div
              className="d-flex align-items-center justify-content-between"
              style={{ marginBottom: 35 }}
            >
              <p className="filter-title">Filter</p>
              <p className="filter-clear">Clear All</p>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4">
              <p className="filter-industry">Industry</p>
              <img src={down} alt="down" />
            </div>

            <div className="mb-4">
              <section className="d-flex align-items-center kv-search-input">
                <span>
                  <img src={searchSm} alt="search" />
                </span>
                <input type="search" />
              </section>
            </div>

            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor="all">All</label>
              <input type="checkbox" name="type" id="all" />
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <label htmlFor="accounting">Accounting</label>
              <input type="checkbox" name="type" id="accounting" />
            </div>

            <article className="filter-check-list">
              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="analytics">Analytics</label>
                <input type="checkbox" name="type" id="analytics" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="bike-rentals">Bike Rentals</label>
                <input type="checkbox" name="type" id="bike-rentals" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="cloud-computing">Cloud Computing</label>
                <input type="checkbox" name="type" id="cloud-computing" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="cloud-telephony">Cloud Telephony</label>
                <input type="checkbox" name="type" id="cloud-telephony" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="content-services">Content Services</label>
                <input type="checkbox" name="type" id="content-services" />
              </div>

              <div className="d-flex align-items-center justify-content-between">
                <label htmlFor="crm">CRM</label>
                <input type="checkbox" name="type" id="crm" />
              </div>
            </article>

            <article className="type-list">
              <p className="filter-header mb-4">Programme Type</p>
              <div className="d-flex align-items-center flex-wrap type-badge-group">
                <span className="type-badge">All</span>
                <span className="type-badge">Incubation Programme</span>
                <span className="type-badge">Acceleration Programme</span>
                <span className="type-badge">Investor Connect</span>
              </div>
            </article>
          </section>
        </div>
      </section>

      <section className="row application-card-list">{renderContent()}</section>
    </div>
  );
};
