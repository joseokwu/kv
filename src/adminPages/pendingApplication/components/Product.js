import React from "react";
import demo from "../../../assets/icons/demoImg.png";
import founder from "../../../assets/images/sampleFounderImg.png";
import investor from "../../../assets/images/sampleinvestors.png";
import investorLg from "../../../assets/images/sampleInvestor.png";
import { Button, Modal, Tag } from "../../../components";
import founderLg from "../../../assets/images/sampleFounder.png";
import facebook from "../../../assets/icons/facebookLogo.svg";
import twitter from "../../../assets/icons/twitterLogo.svg";
import linkedIn from "../../../assets/icons/linkedInLogo.svg";
import web from "../../../assets/icons/webSm.svg";
import split from "../../../assets/icons/split.svg";
import mail from "../../../assets/icons/mail.svg";
import yeLogo from "../../../assets/images/yeLogo.svg";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const Product = ({ data }) => {
  const countInvestor = [1, 2, 3, 4];
  return (
    <div className="row">
      <Modal id="founderInfo" withHeader={false}>
        <FounderInfo />
      </Modal>

      <Modal id="investorInfo" withHeader={false}>
        <InvestorInfo />
      </Modal>
      <section className="col-xl-8">
        <div className="product-wrap">
          <h3>Product Description</h3>
          <p className="border-bottom pb-3 mb-5 prod-desc">
            {data?.productDes}
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
              <p>{data?.founderProfile?.name}</p>
              <small>{data?.founderProfile?.position}</small>
            </div>
          </section>
          <section className="text-center mt-3">
            <Button
              label="Connect"
              data-toggle="modal"
              data-target={`#founderInfo`}
            />
          </section>
        </div>

        <div className="product-wrap">
          <h3 className="border-bottom pb-3 mb-4">Investors</h3>

          {data?.investor.map((c, i) => {
            return (
              <section
                className="d-flex align-items-center justify-content-between mt-4 product-investor"
                data-toggle="modal"
                data-target={`#investorInfo`}
                key={i}
              >
                <div className="d-flex align-items-center">
                  <img src={investor} alt="investor" className="mr-3" />
                  <span>
                    <p>{c.name}</p>
                    <small>{"Lead Investor"}</small>
                  </span>
                </div>
                <Link href="#">Connect</Link>
              </section>
            );
          })}
        </div>
      </section>
    </div>
  );
};

const InvestorInfo = () => {
  return (
    <div className="">
      <section className="d-flex justify-content-end">
        <button
          type="button"
          className="close-investor-modal"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <section className="investor-modal-info mx-4">
        <section
          className="d-flex align-items-start flex-wrap py-2 w-100"
          style={{ rowGap: 10, columnGap: "1.5rem" }}
        >
          <img src={investorLg} alt="profile" className="modal-profile-img" />
          <div style={{ flexBasis: "74%" }}>
            <article className="d-flex align-items-center justify-content-between w-100">
              <h2 className="">Mastel Greate</h2>
              <span>
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" className="mx-3" />
                <img src={linkedIn} alt="linkedIn" />
              </span>
            </article>
            <p className="founder-modal-title">Investor</p>
            <span className="founder-modal-mail">
              <img src={mail} alt="mail" />
              <a href="mailto:Promise_Amstel@gmail.com">
                Promise_Amstel@gmail.com
              </a>
            </span>

            <article className="d-flex align-items-center flex-wrap founder-links">
              <span>
                <img src={web} alt="web" />
                <a href="https://www.promiseamstel.com">@promiseamstel</a>
              </span>
            </article>
            <article
              className="d-flex align-items-center justify-content-between mt-5"
              style={{ rowGap: 10 }}
            >
              <span
                className="d-flex align-items-center"
                style={{ columnGap: 12, rowGap: 10 }}
              >
                <Button label="Schedule call" />
                <Button label="Send a message" variant="secondary" />
              </span>
              <span className="text-right">
                <p className="investment-count">10</p>
                <p className="investment-text">investments</p>
              </span>
            </article>
          </div>
        </section>
      </section>

      <section className="mx-4 my-5">
        <p className="investor-modal-subtitles">Preferred Sector</p>
        <div
          className="d-flex align-items-center"
          style={{ columnGap: 5, rowGap: 5 }}
        >
          <Tag name="Tech" />
          <Tag name="Engineering" color="#40439A" />
          <Tag name="Career" color="#E31937" />
          <Tag name="Engineering" color="#40439A" />
          <Tag name="Career" color="#E31937" />
        </div>
      </section>

      <section className="mx-4 my-5">
        <p className="investor-modal-subtitles">Recent Investments</p>
        <div className="d-flex align-items-center" style={{ columnGap: 13 }}>
          <img src={yeLogo} alt="logo" />
          <p className="investment-name">Yebox Technology</p>
        </div>
      </section>
    </div>
  );
};

const FounderInfo = () => {
  const { id } = useParams();

  return (
    <div className="founder-info-modal">
      <section>
        <button
          type="button"
          className="close close-founder-modal"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </section>

      <section
        className="d-flex align-items-start flex-wrap py-5"
        style={{ rowGap: 10, columnGap: "1.5rem" }}
      >
        <img src={founderLg} alt="profile" className="modal-profile-img" />
        <div>
          <article
            className="d-flex align-items-center flex-wrap"
            style={{ rowGap: 10 }}
          >
            <h2 className="mr-5">Mr Promise Amstel</h2>
            <span>
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" className="mx-3" />
              <img src={linkedIn} alt="linkedIn" />
            </span>
          </article>
          <p className="founder-modal-title">CEO Applean Insteen</p>
          <span className="founder-modal-mail">
            <img src={mail} alt="mail" />
            <a href="mailto:Promise_Amstel@gmail.com">
              Promise_Amstel@gmail.com
            </a>
          </span>

          <article className="d-flex align-items-center flex-wrap founder-links">
            <span>
              <img src={web} alt="web" />
              <a href="https://www.promiseamstel.com">@promiseamstel</a>
            </span>

            <span>
              <img src={split} alt="split" />
              <a href="https://www.promiseamstel.com">@promiseamstel</a>
            </span>
            <span>
              <img src={split} alt="split" />
              <a href="https://www.promiseamstel.com">@promiseamstel</a>
            </span>
          </article>
          <article
            className="d-flex align-items-center mt-5"
            style={{ columnGap: 12, rowGap: 10 }}
          >
            <Button label="Schedule call" />
            <Button label="Send a message" variant="secondary" />
            <a
              href={`/investor/opportunities/${id}/founder`}
              className="full-profile-link ml-3"
            >
              View full profile
            </a>
          </article>
        </div>
      </section>
    </div>
  );
};
