import React from "react";
import "./progressBar.css";

export const ProgressBar = ({ progress = 0 }) => {
  return (
    <div>
      <label className="progress-label">{progress}%</label>
      <div className="kv-progress">
        <section
          className="kv-progress-bar"
          style={{ width: `${progress}%` }}
        ></section>
      </div>
    </div>
  );
};
