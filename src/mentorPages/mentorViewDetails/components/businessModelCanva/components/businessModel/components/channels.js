import React from "react";

export const Channels = ({ data = {} }) => {
  return (
    <div>
      <div className="business_model_canva_card mb-4">
        <section className="p-4">
          <h3>{data?.title}</h3>
          <p className="pt-2">
            <ul>
              {data?.description.length > 0 &&
                data?.description.map((d, i) => {
                  return <li key={`channel-${i}`}>{d}</li>;
                })}
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};
