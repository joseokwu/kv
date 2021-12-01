import React from "react";
import "./applicationCard.css";
import comment from "../../assets/icons/comment.svg";
import approvedIcon from "../../assets/icons/greenCircleCheck.svg";
import declinedIcon from "../../assets/icons/declinedIcon.svg";
import expiredIcon from "../../assets/icons/expired.svg";
import sampleCommenter from "../../assets/images/sampleCommenter.png";
import { Button, Tag, Badge } from "../index";
export const ApplicationCard = ({
  logo = "",
  status = "pending",
  index = 0,
}) => {
  const statusRender = () => {
    switch (status) {
      case "pending":
        return (
          <div className="d-flex align-items-center appCard-btn-group mb-3">
            <Button label="Approve" />
            <Button label="Decline" variant="secondary" />
          </div>
        );
      case "approved":
        return (
          <div className="d-flex align-items-center mb-3">
            <img src={approvedIcon} alt="approved" />
            <p className="approved-txt">Approved</p>
          </div>
        );

      case "declined":
        return (
          <div className="d-flex align-items-center mb-3">
            <img src={declinedIcon} alt="declined" />
            <p className="declined-txt">Declined</p>
          </div>
        );
      case "expired":
        return (
          <div className="d-flex align-items-center mb-3">
            <img src={expiredIcon} alt="expired" />
            <p className="expired-txt">Expired</p>
          </div>
        );
      case "re-applied":
        return (
          <div className="d-flex align-items-center appCard-btn-group mb-3">
            <Button label="Accept" />
            <Button label="Ignore" variant="secondary" />
          </div>
        );

      default:
        return (
          <div className="d-flex align-items-center appCard-btn-group mb-3">
            <Button label="Approve" />
            <Button label="Decline" variant="secondary" />
          </div>
        );
    }
  };
  return (
    <div className="appCard-main">
      <ApplicantModal
        logo={logo}
        status={status}
        id={`applicantModal${index}`}
      />
      <section
        className="appCard-title"
        data-toggle="modal"
        data-target={`#applicantModal${index}`}
      >
        <article>
          <section className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center mb-2">
              <img src={logo} alt="applicant logo" />
              <h3 className="ml-2">Applane Insteen.</h3>
            </div>
            <div>
              <Badge name="Acceleration" />
            </div>
          </section>
          <section className="d-flex flex-wrap appCard-tag-group">
            <Tag name="Tech" />
            <Tag name="Engineering" color="#40439A" />
            <Tag name="Career" color="#E31937" />
          </section>
        </article>
      </section>
      <section
        className="appCard-desc"
        data-toggle="modal"
        data-target={`#applicantModal${index}`}
      >
        <p className="appCard-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
          morbi elementum eu.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit...
        </p>
      </section>
      <section
        className="d-flex align-items-center justify-content-between appCard-info"
        data-toggle="modal"
        data-target={`#applicantModal${index}`}
      >
        <div>
          <p>Applied 12/Oct/21</p>
          <p>Contact Person: Ada Ify</p>
        </div>
        <div className="text-right">
          <p>Applied 12/Oct/21</p>
          <p>Contact Person: Ada Ify</p>
        </div>
      </section>

      <section
        className="d-flex align-items-center justify-content-between flex-wrap"
        data-toggle="modal"
        data-target={`#applicantModal${index}`}
      >
        {statusRender()}
        <div className="d-flex align-items-center appCard-comment mb-3">
          <p className="appCard-text">Comment</p>
          <img src={comment} alt="comment" />
        </div>
      </section>
    </div>
  );
};

const ApplicantModal = ({ logo = "", status = "", id = "" }) => {
  const statusRender = () => {
    switch (status) {
      case "pending":
        return (
          <div className="d-flex align-items-center appCard-btn-group mb-3">
            <Button label="Approve" />
            <Button label="Decline" variant="secondary" />
          </div>
        );
      case "approved":
        return (
          <div className="d-flex align-items-center mb-3">
            <img src={approvedIcon} alt="approved" />
            <p className="approved-txt">Approved</p>
          </div>
        );

      case "declined":
        return (
          <div className="d-flex align-items-center mb-3">
            <img src={declinedIcon} alt="declined" />
            <p className="declined-txt">Declined</p>
          </div>
        );
      case "expired":
        return (
          <div className="d-flex align-items-center mb-3">
            <img src={expiredIcon} alt="expired" />
            <p className="expired-txt">Expired</p>
          </div>
        );
      case "re-applied":
        return (
          <div className="d-flex align-items-center appCard-btn-group mb-3">
            <Button label="Accept" />
            <Button label="Ignore" variant="secondary" />
          </div>
        );

      default:
        return (
          <div className="d-flex align-items-center appCard-btn-group mb-3">
            <Button label="Approve" />
            <Button label="Decline" variant="secondary" />
          </div>
        );
    }
  };
  return (
    <div
      className="modal fade"
      id={id}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        role="document"
        style={{ marginTop: 120, maxWidth: 847 }}
      >
        <div className="modal-content" style={{ padding: 35 }}>
          <div className="modal-body d-block">
            <section style={{ height: 20, marginBottom: 20 }}>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </section>

            <section className="row applicant-modal-content">
              <div className="col-9">
                <section className="applicant-logo">
                  <img src={logo} alt="logo" className="" />
                </section>
                <h1 className="applicant-modal-header">Applane Insteen.</h1>
                <div>
                  <span className="d-flex flex-wrap appCard-tag-group">
                    <Tag name="Tech" />
                    <Tag name="Engineering" color="#40439A" />
                    <Tag name="Career" color="#E31937" />
                  </span>
                </div>
              </div>
              <div className="col-3">
                <section
                  className="d-flex justify-content-between"
                  style={{ marginBottom: 34 }}
                >
                  <div>
                    <Badge name="Acceleration" />
                  </div>
                </section>

                <section
                  className="d-flex align-items-center justify-content-between appCard-info modal-applicant-info"
                  style={{ color: "#6466AA" }}
                >
                  <div>
                    <p>Applied 12/Oct/21</p>
                    <p>Contact Person: Ada Ify</p>
                  </div>
                  <div className="text-right">
                    <p>Applied 12/Oct/21</p>
                    <p>Contact Person: Ada Ify</p>
                  </div>
                </section>

                <section className="appCard-desc border-0">
                  <p className="appCard-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Enim lectus morbi elementum eu.Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit...
                  </p>
                </section>
                <section className="d-flex align-items-center justify-content-between flex-wrap">
                  <div>{statusRender()}</div>
                  <div className="d-flex align-items-center appCard-comment mb-3">
                    <p className="appCard-text">Comment</p>
                    <img src={comment} alt="comment" />
                  </div>
                </section>
              </div>

              <div className="col-12 applicant-modal-comment-section px-0">
                <section>
                  <textarea
                    name=""
                    id=""
                    rows="3"
                    className="comment-textarea"
                    placeholder="Add Note"
                  ></textarea>
                </section>
                <section className="d-flex justify-content-end">
                  <span className="comment-send" role="button">
                    Send
                  </span>
                </section>
                <section className="mb-2">
                  <div className="d-flex align-items-center">
                    <img
                      src={sampleCommenter}
                      alt="commenter"
                      className="commenter-img"
                    />
                    <p className="ml-3 commenter-name">Kenyatta Laurence</p>
                  </div>
                  <div className="commenter-comment">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Enim lectus morbelemen tum eu.Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit...{" "}
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span role="button" className="replay-cbt">
                      Replay
                    </span>
                    <p className="comment-time">2 days ago</p>
                  </div>
                </section>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
