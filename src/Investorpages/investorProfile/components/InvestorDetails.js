import React from "react";
import { Button, Modal, PhoneInput, TextField } from "../../../components";
import edit from "../../../assets/icons/edit.svg";
import twitter from "../../../assets/images/profileTwitter.svg";
import linkedIn from "../../../assets/images/profileLinkedIn.svg";
import location from "../../../assets/icons/locationSm.svg";
import phone from "../../../assets/icons/phoneSm.svg";
import web from "../../../assets/icons/webSm.svg";
import banner from "../../../assets/images/investorBanner.png";
import investor from "../../../assets/images/investorProfileImg.png";
import closedEye from "../../../assets/icons/eye-closed.svg";
import { useAuth } from "../../../hooks";

export const InvestorDetails = () => {
  const { stateAuth } = useAuth();
  return (
    <section className="profile-info">
      <div
        className="profile-banner"
        style={{
          background: "#00ADEF",
          borderRadius: "20px 20px 0px 0px",
        }}
      >
        {/* <span className="edit-banner">
          <img src={edit} alt="edit" />
        </span> */}
      </div>

      <div className="profile-contact-info">
        <Modal title="Edit  Intro" id="investDetailsModal">
          <EditInvestorDetails />
        </Modal>
        <span className="edit-info">
          <img
            src={edit}
            alt="edit"
            data-toggle="modal"
            data-target="#investDetailsModal"
            role="button"
          />
        </span>
        <span className="profile-image">
          <img src={stateAuth?.investorData?.profile?.avatar} alt="sample company" />
        </span>

        <article>
          <h1 className="mb-4 profile-name">{stateAuth?.username}</h1>

          <div className="d-flex align-items-center justify-content-between mb-3">
            <a
              href="mailto:Michealsmith@gmail.com"
              style={{ color: "#3E3E3E", textDecoration: "none" }}
            >
              {stateAuth?.investorData?.profile?.email}
            </a>

            <span>
              <img src={twitter} alt="twitter" className="mr-3" />
              <img src={linkedIn} alt="linked in" />
            </span>
          </div>

          <div className="d-flex align-items-center justify-content-between web-phone-local mb-3">
            <span className="flex-align web-phone-local">
              <p>
                <img src={location} alt="location" /> {stateAuth?.investorData?.profile?.address}
              </p>
              {/* <p>
              <img src={phone} alt="phone" /> +234 709 245 2345
            </p> */}
              <a href={`${stateAuth?.investorData?.profile?.socialMedia?.website}`} target={"_blank"} rel="noreferrer">
                <img src={web} alt="web" />
                {stateAuth?.investorData?.profile?.socialMedia?.website}
              </a>
            </span>
            <a href={`${stateAuth?.investorData?.profile?.socialMedia?.profile}`} >
              {`https://www.knight.venture/${stateAuth?.firstname}${stateAuth?.lastname}`}
            </a>
          </div>

          <div className="profile-bio pb-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

const EditInvestorDetails = () => {
  return (
    <div className="px-4">
      <form>
        <section className="row">
          <div className="col-12 mb-4">
            <TextField
              label={
                <div className="flex-align justify-content-between">
                  <p>Brief Introduction*</p>
                  <p style={{ color: "gray" }}>10 characters at most</p>
                </div>
              }
              className="edit-input"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <TextField
              label="First Name*"
              placeholder="Enter first name"
              className="edit-input"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <TextField
              label="Last Name*"
              placeholder="Enter last name"
              className="edit-input"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <TextField
              type="email"
              label="Email*"
              placeholder="Enter email address"
              className="edit-input"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <TextField
              type="date"
              label={
                <div className="flex-align">
                  <p>Date of Birth*</p>{" "}
                  <p className="vis-style ml-2">
                    Not visible to public{" "}
                    <i>
                      <img src={closedEye} alt="eye" />
                    </i>
                  </p>
                </div>
              }
              placeholder="Enter email address"
              className="edit-input"
            />
          </div>
          <div className="col-12 mb-4">
            <TextField
              label="Permanent Address"
              placeholder="Enter your permanent address"
              className="edit-input"
            />
          </div>
          <div className="col-lg-4 mb-4">
            <TextField
              label="Country"
              placeholder="Enter your country"
              className="edit-input"
            />
          </div>
          <div className="col-lg-4 mb-4">
            <TextField
              label="State"
              placeholder="Enter your state"
              className="edit-input"
            />
          </div>
          <div className="col-lg-4 mb-4">
            <TextField
              label="City"
              placeholder="Enter your city"
              className="edit-input"
            />
          </div>
          <div className="col-lg-12 mb-4">
            <PhoneInput label="Mobile Number" />
          </div>
          <div className="col-lg-6 mb-4">
            <TextField
              label="Linkedin*"
              placeholder="Enter Linkdin link"
              className="edit-input"
            />
          </div>

          <div className="col-lg-6 mb-4">
            <TextField
              label="Twitter*"
              placeholder="Enter Twitter link"
              className="edit-input"
            />
          </div>

          <div className="col-lg-6 mb-4">
            <TextField
              label="Profile Link*"
              placeholder="www.knightventure/michealsmith"
              className="edit-input"
            />
          </div>

          <div className="col-lg-6 mb-4">
            <TextField
              label="Website*"
              placeholder="Enter website"
              className="edit-input"
            />
          </div>

          <div className="col-12 text-right">
            <Button label="Save" />
          </div>
        </section>
      </form>
    </div>
  );
};
