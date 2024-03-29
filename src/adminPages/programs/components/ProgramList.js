import React from "react";
import { ProgramCard } from "./ProgramCard";

export const ProgramList = ({ data = [] }) => {
  return (
    <div className="row mx-0">
      {data?.length > 0 &&
        data?.map((info, i) => {
          return (
            <section key={i} className="col-lg-6 mb-3">
              <ProgramCard data={info} id={i} />
            </section>
          );
        })}
    </div>
  );
};
