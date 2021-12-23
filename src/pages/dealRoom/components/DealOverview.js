import React from "react";
import { DeckCard, Tag } from "../../../components";
import logo from "../../../assets/images/yeLogo.svg";
import pic from "../../../assets/images/sampleinvestors.png";
// import doc from "../../../assets/icons/greenDoc.svg";
// import docIcon from "../../../assets/icons/docIcon.svg";
// import download from "../../../assets/icons/cloudDownloadB.svg";
// import editDoc from "../../../assets/icons/editDoc.svg";

export const DealOverview = () => {
  return (
    <section>
      <div className="row">
        <article className="col-xl-4 mb-4">
          <div className="deal-card">
            <h5>Deal info</h5>
            <img src={logo} alt="logo" className="mb-4" />
            <p className="deal-company">Yebox Technology</p>
            <Tag name="Tech" />

            <section className="border-bottom mt-4 mb-2 pb-4">
              <p className="deal-desc-title">Description</p>
              <p className="deal-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit...{" "}
              </p>
            </section>

            <section
              className="d-flex align-items-center justify-content-between opp-footer-text"
              style={{ columnGap: 10, rowGap: 10 }}
            >
              <p>Total Funding Till Date: $7M</p>
              <p className="text-right">Last funding date: 20/3/21</p>
            </section>
          </div>
        </article>

        <article className="col-xl-4 mb-4">
          <div className="deal-card">
            <h5>Deal Term</h5>

            <section>
              <div
                className="d-flex align-items-center mb-3"
                style={{ columnGap: "1rem" }}
              >
                <p>Funding Ask</p>
                <Tag name="$150,000" />
              </div>

              <div
                className="d-flex align-items-center mb-3"
                style={{ columnGap: "1rem" }}
              >
                <p>Round Type</p>
                <Tag name="Seed" color="#212463" />
              </div>

              <div
                className="d-flex align-items-center mb-3"
                style={{ columnGap: "1rem" }}
              >
                <p>Minimum Investment</p>
                <Tag name="$10,000" />
              </div>

              <div
                className="d-flex align-items-center mb-3"
                style={{ columnGap: "1rem" }}
              >
                <p>Pre Money Valuation</p>
                <Tag name="$150,000" />
              </div>

              <div
                className="d-flex align-items-center mb-3"
                style={{ columnGap: "1rem" }}
              >
                <p>Price Per Share</p>
                <Tag name="$100" color="#212463" />
              </div>

              <div
                className="d-flex align-items-center mb-3"
                style={{ columnGap: "1rem" }}
              >
                <p>Dilution</p>
                <Tag name="10%" color="#212463" />
              </div>

              <div
                className="d-flex align-items-center mb-3"
                style={{ columnGap: "1rem" }}
              >
                <p>Closing Date</p>
                <Tag name="31 st Dec 2021" color="#212463" />
              </div>
            </section>
          </div>
        </article>

        <article className="col-xl-4 mb-4">
          <div className="deal-card">
            <h5>Deal Commitments</h5>
            <section
              className="d-flex align-items-center mb-5"
              style={{ columnGap: "1rem" }}
            >
              <p>Total Commitment</p>
              <Tag name="$50,000" />
            </section>

            {Array.from("12345").map((x, i) => {
              return (
                <section
                  className="d-flex align-items-center justify-content-between mb-3"
                  key={`committer-${i}`}
                >
                  <div
                    className="d-flex align-items-center"
                    style={{ columnGap: "1rem" }}
                  >
                    <img
                      src={pic}
                      alt="committers"
                      className="deal-committer-img"
                    />
                    <p className="committer-name">Promise Amstel</p>
                  </div>

                  <div className="committer-text">
                    <b>$50,000</b>
                    <p>21/05/21</p>
                  </div>
                </section>
              );
            })}
          </div>
        </article>
      </div>

      <div className="row">
        <section className="col-12 mt-4 mb-3">
          <h3 className="page-title">Deal Termsheet</h3>
        </section>
        <section className="col-xl-4">
          {/* <article className="deck-card" style={{ width: 302 }}>
            <div
              className="deck-card-img position-relative"
              style={{ maxWidth: 302 }}
            >
              <img src={doc} alt="document" />
              <img
                src={editDoc}
                alt="edit document"
                className="edit-doc"
                role="button"
              />
            </div>
            <div className="d-flex align-items-center  justify-content-between p-3">
              <section className="d-flex align-items-start">
                <img src={docIcon} alt="document icon" className="mr-2" />
                <span>
                  <p>Deal Termsheet</p>
                  <small>21MB</small>
                </span>
              </section>
              <img src={download} alt="download" role="button" />
            </div>
          </article> */}

          <DeckCard />
        </section>
      </div>
    </section>
  );
};
