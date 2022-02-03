import React from "react";
import { ConnectedCard } from "../../../components/connectedCard/ConnectedCard";

export const Connections = () => {
  return (
    <div>
      <section className="row">
        {Array.from("coding").map((x, i) => {
          return (
            <div className="col-xl-6 mb-4">
              <ConnectedCard />
            </div>
          );
        })}
      </section>
    </div>
  );
};
