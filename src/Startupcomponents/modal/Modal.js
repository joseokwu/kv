import React from "react";
import "./modal.css";
import Close from "../../assets/icons/close.svg";

export const Modal = ({ title = "", children, position = "", id = "", bold = false, subTitle = "", withHeader = true, forceTop = false, onCloseModal = () => {} }) => {
  return (
    <div
      onClick={() => {
        onCloseModal();
      }}
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      id={id}
    >
      <div className={`modal-dialog ${position === "center" ? "modal-dialog-centered" : ""}`} role="document" style={{ maxWidth: 723, marginTop: forceTop ? 28 : 200 }}>
        <div className="modal-content kv-modal-content">
          {withHeader && (
            <header>
              <div className="w-100">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
          <img className="modalCloseImg" onClick={() => closeModal(false)} src={Close} alt={""} />
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
        <div className="m-0 d-flex justify-content-between" style={{ paddingBottom: "1.5rem" }}>
          <p className="kv-modal-title">{title}</p>
          <img className="modalCloseImg" onClick={() => closeModal(false)} src={Close} alt={""} />
        </div>

        {children || "Enter element here"}
      </div>
    </>
  );
};

export const LargeModal = ({ children, closeModal, title, subTitle, id }) => {
  return (
    <>
      <div className="backDrop" onClick={() => closeModal(false)}></div>

      <div id={id} className="large-modal">
        <div className="top-grey"></div>
        <div className="mb-4">
          <div className="d-flex justify-content-between ">
            <p className="kv-modal-title mt-3">{title}</p>
            <img className="modalCloseImg" onClick={() => closeModal(false)} src={Close} alt={""} />
          </div>
          {subTitle && <p className="kv-modal-subtitle mb-4">{subTitle}</p>}
        </div>

        {children || "Enter element here"}
      </div>
    </>
  );
};

export const TinyModal = ({ children, closeModal, title, titleCol }) => {
  return (
    <>
      <div className="backDrop" onClick={() => closeModal(false)}></div>

      <div className="tiny-modal">
        <div className="m-0 d-flex justify-content-between" style={{ paddingBottom: "1.5rem" }}>
          <p className="kv-modal-title" style={{ color: titleCol }}>
            {title}
          </p>
          <img className="modalCloseImg" onClick={() => closeModal(false)} src={Close} alt={""} />
        </div>

        {children || "Enter element here"}
      </div>
    </>
  );
};
