import { Button } from "../..";
import logo from "../../../assets/images/yeLogo.svg";
import web from "../../../assets/icons/webSm.svg";
import clock from "../../../assets/icons/clock.svg";
import office from "../../../assets/icons/office.svg";
import twitter from "../../../assets/icons/twitterLogo.svg";
import linkedIn from "../../../assets/icons/linkedInLogo.svg";
import whatsApp from "../../../assets/icons/whatsapp.svg";
import share from "../../../assets/icons/share.svg";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const CompanyDetails = () => {
  const { push } = useHistory();

  const { dash_view } = useSelector((state) => state.business);

  console.log("dash_view", dash_view);
  return (
    <section className="opp_page_card py-4">
      <div
        className="d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div>
          <img src={logo} alt="logo" className="mb-3" />
          <h3 className="opp_page_card_title">{dash_view?.name}.</h3>
        </div>

        <div className="d-flex align-items-end flex-column">
          <section className="d-flex align-items-center mb-3">
            <span className="opp_tag_label">Industry</span>
            <span className="opp_tag">{dash_view?.industry}</span>
          </section>

          <section className="d-flex align-items-center">
            <span className="opp_tag_label">Stage</span>
            <span className="opp_tag">{dash_view?.stage}</span>
          </section>
        </div>
      </div>
      <section
        className="d-flex align-items-center justify-content-between mt-4 border-bottom pb-4 flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div className="d-flex align-items-center">
          <img src={web} alt="web" />
          <a
            href={`https://${dash_view?.website}`}
            className="ml-2 extra-info"
            style={{ textDecoration: "underline", color: "#2E3192" }}
          >
            {dash_view?.website}
          </a>
        </div>

        <div className="d-flex align-items-center">
          <img src={clock} alt="web" width="20" height="20" />
          <span className="ml-2 extra-info">
            Incorporated {dash_view?.incorporationDate}
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img src={office} alt="web" />
          <span className="ml-2 extra-info">{dash_view?.location}</span>
        </div>
      </section>

      <section
        className="mt-4 d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div className="d-flex align-items-center" style={{ columnGap: 10 }}>
          <Button
            label="Evaluate"
            onClick={() =>
              push("/mentor/evaluation/evaluate#market_attractiveness")
            }
          />
          <Button label="Schedule Call" variant="secondary" />
        </div>

        <div className="d-flex align-items-center">
          <span className="d-flex align-items-center mr-3">
            <img src={share} alt="share" className="mr-2" />
            <span className="share-link">Share</span>
          </span>

          <span style={{ cursor: "pointer" }}>
            <img src={linkedIn} alt="linkedIn" width="24" height="24" />
            <img
              src={twitter}
              alt="twitter"
              className="mx-2"
              width="24"
              height="24"
            />
            <img src={whatsApp} alt="whatsapp" />
          </span>
        </div>
      </section>
    </section>
  );
};
