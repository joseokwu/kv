import React from "react";
import demo from "../../../../assets/icons/demoImg.png";
import founder from "../../../../assets/images/sampleFounderImg.png";
import investor from "../../../../assets/images/sampleinvestors.png";
import { Button } from "../../../../components";
import "./product.css";

export const Product = () => {
  const countInvestor = [1, 2, 3, 4];
  return (
    <div className="row">
      <section className="col-xl-8">
        <div className="product-wrap">
          <h3>Product Description</h3>
          <p className="border-bottom pb-3 mb-5 prod-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
            morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Enim lectus morbi elementum
            eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Enim lectus morbi elementum
          </p>

          <h3>Product Demo</h3>

          <img
            src={demo}
            alt="demo video placeholder"
            className="product-demo"
          />
        </div>
      </section>

      <section className="col-xl-4">
        <div className="product-wrap mb-4">
          <h3 className="border-bottom pb-3">Founder’s Profile</h3>
          <section className="d-flex align-items-center mt-3 product-founder">
            <img src={founder} alt="founder" />
            <div>
              <p>Mr Promise Amstel</p>
              <small>CEO Applean Insteen</small>
            </div>
          </section>
          <section className="text-center mt-3">
            <Button label="Connect" />
          </section>
        </div>

        <div className="product-wrap">
          <h3 className="border-bottom pb-3 mb-4">Investors</h3>

          {countInvestor.map((c, i) => {
            return (
              <section className="d-flex align-items-center justify-content-between mt-4 product-investor">
                <div className="d-flex align-items-center">
                  <img src={investor} alt="investor" className="mr-3" />
                  <span>
                    <p>Mr Promise Amstel</p>
                    <small>Lead Investor</small>
                  </span>
                </div>
                <a href="http://www.google.com">Connect</a>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
};
