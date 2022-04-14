import React from "react";
import { SelectionStartup } from "../../../adminComponents";

export const Startups = ({ data = [] }) => {
  return (
    <div>
      <section className="row">
        {data?.length > 0 &&
          data?.map((info, i) => {
            return (
              <article className="col-lg-4 mb-3">
                <SelectionStartup data={info} />
              </article>
            );
          })}
      </section>
    </div>
  );
};
