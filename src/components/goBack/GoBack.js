import React from "react";
import left from "../../assets/icons/chervonLeft.svg";
import { useHistory } from "react-router-dom";

export const GoBack = () => {
  const { goBack } = useHistory();
  return (
    <div
      className="d-flex align-items-center mb-3"
      onClick={() => goBack()}
      role="button"
      style={{ width: "fit-content" }}
    >
      <img
        src={left}
        alt="left"
        className="mr-2"
        style={{ transform: "rotate(180deg)" }}
      />
      <p className="bread-start" role="button">
        Go back
      </p>
    </div>
  );
};
