import React from "react";
import edit from "../../../assets/icons/edit.svg";
import art from "../../../assets/icons/iprofileArt.svg";

export const InvestmentProfile = () => {
  return (
    <div className="profile-offering">
      <span className="text-right d-block">
        <img
          src={edit}
          alt="edit"
          data-toggle="modal"
          data-target="#editValidity"
          role="button"
        />
        {/* <Modal title="Edit" id="editValidity">
          <EditValidity />
        </Modal> */}
      </span>

      <section>
        <h2 className="investor-profile-header">Investment Profile</h2>

        <div className="row">
          <section className="col-lg-6">
            <span className="prefer-stage flex-align">
              <i style={{ background: "#1D9D1A" }}>
                <img src={art} alt="art" />
              </i>
              <p className="ml-3">Investment profile name</p>
            </span>
          </section>

          <section className="col-lg-6">
            <span className="prefer-stage flex-align">
              <i style={{ background: "#5355A3" }}>
                <img src={art} alt="art" />
              </i>
              <p className="ml-3">Investment profile name</p>
            </span>
          </section>
        </div>
      </section>
    </div>
  );
};
