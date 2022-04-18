import React from "react";
import "./progressBar.css";

export const ProgressBar = ({ progress = 0, isMeasured = false, ...props }) => {
  const getProgressColor = () => {
    if (progress <= 20) {
      return "#D63535";
    } else if (progress > 20 && progress < 50) {
      return "#FECB16";
    } else if (progress >= 50) {
      return "#35D662";
    }
  };


  return (
    <div>
      {!isMeasured && <label className="progress-label">{progress}%</label>}
      <div className={`${"kv-progress"} ${props?.className ?? ""}`}>
        <section
          className={"kv-progress-bar"}
          style={{
            width: `${progress}%`,
            background: isMeasured ? getProgressColor() : "",
          }}
        ></section>
      </div>
    </div>
  );
};
