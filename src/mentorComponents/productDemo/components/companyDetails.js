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
import { useActivity } from "../../../hooks";
import { formatDate } from "../../../utils/helpers";

export const CompanyDetails = ({ data = {} }) => {
  const { push } = useHistory();

  console.log("data", data?.url);
  return (
    <section className="opp_page_card py-4">
      <div
        className="d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div>
          <img src={logo} alt="logo" className="mb-3" />
          <h3 className="opp_page_card_title">{data?.name}.</h3>
        </div>

        <div className="d-flex align-items-end flex-column">
          <section className="d-flex align-items-center mb-3">
            <span className="opp_tag_label">Industry </span>
            <span className="opp_tag">{data?.industry}</span>
          </section>

          <section className="d-flex align-items-center">
            <span className="opp_tag_label">Stage</span>
            <span className="opp_tag">{data?.stage ?? "Seed"}</span>
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
            href={`https://${data?.url}`}
            className="ml-2 extra-info"
            style={{ textDecoration: "underline", color: "#2E3192" }}
          >
            {data?.url}
          </a>
        </div>

        <div className="d-flex align-items-center">
          <img src={clock} alt="web" width="20" height="20" />
          <span className="ml-2 extra-info">
            Incorporated {formatDate(data?.incorporation)}
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img src={office} alt="web" />
          <span className="ml-2 extra-info">{data?.location}</span>
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
