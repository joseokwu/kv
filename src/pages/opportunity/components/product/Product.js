import React from "react";
import demo from "../../../../assets/icons/demoImg.png";
import founder from "../../../../assets/images/sampleFounderImg.png";
import investor from "../../../../assets/images/sampleinvestors.png";
import { Button } from "../../../../components";
import "./product.css";

export const Product = () => {
  const countInvestor = [1, 2, 3, 4];
  return (
    <div>
    <section className="d-flex justify-content-between" >
    <h3 className="header" >Product </h3>
    <span className="headBtn" >Edit product</span>
    </section>
    <div className="row">
      <section className="col-xl-8">
        <div className="product-wrap">
          <div className="wrap mb-5" >
          <h3>Product Description</h3>
          <p className=" pb-3 mb-5 prod-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim lectus
            morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Enim lectus morbi elementum eu.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Enim lectus morbi elementum
            eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
            lectus morbi elementum eu.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Enim lectus morbi elementum
          </p>

          </div>

          <h3>Product Demo</h3>

          <img
            src={demo}
            alt="demo video placeholder"
            className="product-demo"
          />
        </div>
      </section>
    </div>
    </div>
  );
};
