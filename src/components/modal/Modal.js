import React from "react";
import "./modal.css";

export const Modal = ({
  title = "",
  children,
  position = "",
  id = "",
  subTitle = "",
  withHeader = true,
  width = 847,
}) => {
  return (
    <div
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      id={id}
      style={{ overflowY: "auto" }}
    >
      <div
        className={`modal-dialog ${
          position === "center" && "modal-dialog-centered"
        }`}
        role="document"
        style={{ maxWidth: width, marginTop: 200 }}
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
              <p className="kv-modal-title">{title}</p>
              {subTitle.length > 0 && <p className="mt-3">{subTitle}</p>}
            </header>
          )}
          <section className="modal-body text-left">{children}</section>
        </div>
      </div>
    </div>
  );
};
