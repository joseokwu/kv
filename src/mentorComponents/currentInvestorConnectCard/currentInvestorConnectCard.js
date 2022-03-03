import React from "react";
import kenny from "../../assets/images/kenny.svg";

export const CurrentInvestorConnectCard = ({ data = {} }) => {
  return (
    <section className="d-flex align-items-center justify-content-between mt-4 product-investor">
      <div className="d-flex align-items-center">
        <img src={kenny} alt="investor" className="mr-3" />
        <span>
          <p>{data?.fullName}</p>
          {data?.postion.length > 0 && <small>{data?.postion}</small>}
        </span>
      </div>
      <a href="#!">Connect</a>
    </section>
  );
};
