import React from "react";
import "./modal.css";
import Close from "../../assets/icons/close.svg";

export const Modal = ({
  title = "",
  children,
  position = "",
  id = "",
  bold = false,
  subTitle = "",
  withHeader = true,
}) => {
  return (
    <div className="modal fade" tabIndex="-1" role="dialog" id={id}>
      <div
        className={`modal-dialog ${
          position === "center" && "modal-dialog-centered"
        }`}
        role="document"
        style={{ maxWidth: 723, marginTop: 200 }}
      >
        <div className="modal-content kv-modal-content">
          {withHeader && (
            <header>
              <div className="w-100">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p className={bold ? "text-dark" : "kv-modal-title"}>{title}</p>
              {subTitle.length > 0 && <p className="mt-3">{subTitle}</p>}
            </header>
          )}
          <section className="modal-body text-left">{children}</section>
        </div>
      </div>
    </div>
  );
};

export const ModalCus = ({ children, closeModal, title }) => {
  return (
    <>
      <div className="backDrop" onClick={() => closeModal(false)}></div>

      <div className="app_modal">
        <div className="m-0 d-flex justify-content-between">
          <p className="kv-modal-title px-5">{title}</p>
          <img
            className="modalCloseImg"
            onClick={() => closeModal(false)}
            src={Close}
            alt={""}
          />
        </div>

        {children || "Enter element here"}
      </div>
    </>
  );
};

export const SmallModal = ({ children, closeModal, title }) => {
  return (
    <>
      <div className="backDrop" onClick={() => closeModal(false)}></div>

      <div className="small-modal">
        <div className="m-0 d-flex justify-content-between">
          <p className="kv-modal-title">{title}</p>
          <img
            className="modalCloseImg"
            onClick={() => closeModal(false)}
            src={Close}
            alt={""}
          />
        </div>

        {children || "Enter element here"}
      </div>
    </>
  );
};

export const LargeModal = ({ children, closeModal, title , id }) => {
  return (
    <>
      <div className="backDrop" onClick={() => closeModal(false)}></div>

      <div id={id} className="large-modal">
        <div className="top-grey"></div>
        <div className="d-flex justify-content-between mx-4">
          <p className="kv-modal-title px-3 pt-5 mb-4">{title}</p>
          <img
            className="modalCloseImg mx-4 my-4"
            onClick={() => closeModal(false)}
            src={Close}
            alt={""}
          />
        </div>

        {children || "Enter element here"}
      </div>
    </>
  );
};
