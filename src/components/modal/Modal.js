import React from "react";
import "./modal.css";
import Close from '../../assets/icons/Close.svg';


export const Modal = ({
  title = "",
  children,
  position = "",
  id = "",
  subTitle = "",
}) => {
  return (
    <div className="modal fade" tabindex="-1" role="dialog" id={id}>
      <div
        className={`modal-dialog ${
          position === "center" && "modal-dialog-centered"
        }`}
        role="document"
        style={{ maxWidth: 847, marginTop: 200 }}
      >
        <div className="modal-content kv-modal-content">
          <header>
            <div className="w-100">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <p className="kv-modal-title">{title}</p>
            {subTitle.length > 0 && <p className="mt-3">{subTitle}</p>}
          </header>
          <section className="modal-body text-left">{children}</section>
        </div>
      </div>
    </div>
  );
};


export const ModalCus = ({ children, closeModal }) => {
  return (
    <>
      <div className="backDrop" onClick={() => closeModal(false)}></div>
      <div className="app_modal">
        <img className="modalCloseImg" onClick={() => closeModal(false)} src={Close} alt={""}/>
        {children || "Enter element here"}
      </div>
    </>
  );
};