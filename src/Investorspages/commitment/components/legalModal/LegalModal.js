import React, { useState } from "react";
import { Button, Select, TextField } from "../../../../components";
import "./legalModal.css";
import editIcon from "../../../../assets/icons/editIcon.svg";
import deleteIcon from "../../../../assets/icons/delete.svg";
import Icon from "../../../../assets/icons/legalIcon.svg";

const LegalModal = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="px-4">
      <p className="terms-text mb-4">
        The investment profile information would be used to create the
        contribution agreement for signing up on the angel fund this cannot be
        changed later, if you wish to invest in a different name, you may create
        additional investment profiles
      </p>
      {!edit ? (
        <section className="info-investor-commit">
          <div
            className="d-flex align-items-center justify-content-end"
            style={{ columnGap: 10 }}
          >
            <img
              src={editIcon}
              alt="edit"
              role="button"
              onClick={() => setEdit(true)}
            />
            <img src={deleteIcon} alt="delete" role="button" />
          </div>

          <div className="row">
            <article className="col-lg-6 d-flex align-items-start">
              <img src={Icon} alt="icon" className="mr-3" />
              <div>
                <p className="info-legal-header">Investor Details</p>
                <p className="info-legal-commit-text">
                  Investor: Micheal Smith
                </p>
                <p className="info-legal-commit-text">
                  Address: Califonia, United States{" "}
                </p>
              </div>
            </article>

            <article>
              <p className="info-legal-commit-text">Bank: Access Bank</p>
              <p className="info-legal-commit-text">A/C No : 098382080/c</p>
              <p className="info-legal-commit-text">Branch : Lekki City</p>
            </article>
          </div>
        </section>
      ) : (
        <section className="info-investor-edit">
          <div>
            <p
              className="see-all text-right"
              style={{ textDecoration: "underline" }}
            >
              Save changes
            </p>
          </div>

          <form action="">
            <section className="row">
              <div className="col-12 mb-4">
                <TextField
                  label="Registered Address"
                  placeholder="Enter your registered address"
                  className="commit-input"
                />
              </div>
              <div className="col-xl-6 mb-4">
                <Select label="Bank Name" placeholder="Choose bank" />
              </div>
              <div className="col-xl-6 mb-4">
                <Select label="Bank branch" placeholder="Choose bank branch" />
              </div>

              <div className="col-xl-6 mb-4">
                <TextField
                  label="Account Number"
                  placeholder="Enter your account number"
                  className="commit-input"
                />
              </div>
              <div className="col-xl-6 mb-4">
                <Select
                  label="Account Type"
                  placeholder="Enter your account type"
                />
              </div>
            </section>
          </form>
        </section>
      )}

      <section className="text-right my-5">
        {!edit ? (
          <Button label="Continue" />
        ) : (
          <Button label="Commit" onClick={() => setEdit(false)} />
        )}
      </section>
    </div>
  );
};

export default LegalModal;
