import React from "react";
import demo from "../../../../assets/images/demo.svg";
import founder from "../../../../assets/images/founder.svg";
import fanai from "../../../../assets/images/fana.svg";
import { CurrentInvestorConnectCard } from "../../../../mentorComponents";
import "./product.css";
import { useActivity } from "../../../../hooks";

export const Product = () => {
  const {
    state: { dash_view },
  } = useActivity();

  return (
    <div className="row">
      <section className="col-xl-8">
        <div className="product-wrap opp_page_card py-5">
          <h3>Product Description</h3>
          <p className="pb-3 mb-5 prod-desc">{dash_view?.productDescription}</p>

          <h3>Product Demo</h3>

          <img
            src={demo}
            alt="demo video placeholder"
            className="product-demo pb-4"
          />
        </div>
      </section>

      <section className="col-xl-4">
        <div className="product-wrap opp_page_card mb-4">
          <h3 className="border-bottom pb-3">Founder’s Profile</h3>
          <section className="d-flex align-items-center mt-3 product-founder">
            <img src={founder} alt="founder" />
            <div>
              <p>{dash_view?.founderProfile?.fullName}</p>
              <small>
                {dash_view?.founderProfile?.designation}{" "}
                {dash_view?.founderProfile?.company}
              </small>
            </div>
          </section>
          <section className="founder_profile mt-3">
            <div className="text-center">
              <a href="/mentor/dashboard/founder">View</a>
            </div>
          </section>
        </div>

        <div className="product-wrap opp_page_card">
          <h3 className="border-bottom pb-3 mb-4">Investors</h3>

          {/* <section className="d-flex align-items-center justify-content-between mt-4 product-investor">
            <div className="d-flex align-items-center">
              <img src={fanai} alt="investor" className="mr-3" />
              <span>
                <p>Mr Promise Amstel</p>
                <small>Lead Investor</small>
              </span>
            </div>
            <a href="#!">Connect</a>
          </section> */}

          {dash_view?.investors.map((c, i) => {
            return (
              <div key={`conn-${1}`} className="mb-3">
                <CurrentInvestorConnectCard data={c} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
