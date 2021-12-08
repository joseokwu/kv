import { Button } from "../../../components";
import logo from "../../../assets/images/yeLogo.svg";
import web from "../../../assets/icons/webSm.svg";
import clock from "../../../assets/icons/clock.svg";
import office from "../../../assets/icons/building.svg";
import twitter from "../../../assets/icons/twitterLogo.svg";
import linkedIn from "../../../assets/icons/linkedInLogo.svg";
import whatsApp from "../../../assets/icons/whatsapp.svg";
import share from "../../../assets/icons/share.svg";

export const OppCompanyInfo = () => {
  return (
    <section className="opp-page-card py-3">
      <div
        className="d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div>
          <img src={logo} alt="logo" className="mb-3" />
          <h3 className="opp-page-card-title">Yebox Tech.</h3>
        </div>

        <div className="d-flex align-items-end flex-column">
          <section className="d-flex align-items-center mb-3">
            <p className="opp-tag-label">Industry</p>
            <span className="opp-tag">Tech</span>
          </section>

          <section className="d-flex align-items-center">
            <p className="opp-tag-label">Stage</p>
            <span className="opp-tag">Proof of concept</span>
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
            href="https://www.applaneinsteen.com"
            className="ml-2 extra-info"
            style={{ textDecoration: "underline", color: "#2E3192" }}
          >
            www.applaneinsteen.com
          </a>
        </div>
        <div className="d-flex align-items-center">
          <img src={clock} alt="web" width="20" height="20" />
          <p className="ml-2 extra-info">Incorporated 2/09/19</p>
        </div>

        <div className="d-flex align-items-center">
          <img src={office} alt="web" />
          <p className="ml-2 extra-info">Lagos, Nigeria</p>
        </div>
      </section>

      <section
        className="mt-4 d-flex align-items-center justify-content-between flex-wrap"
        style={{ rowGap: 10 }}
      >
        <div className="d-flex align-items-center" style={{ columnGap: 10 }}>
          <Button label="Commit" />
          <Button label="Interested" variant="secondary" />
        </div>

        <div className="d-flex align-items-center">
          <span className="d-flex align-items-center mr-3">
            <img src={share} alt="share" className="mr-2" />
            <p className="share-link">Share</p>
          </span>

          <span>
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
