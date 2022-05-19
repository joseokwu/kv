import maindoc from "../../assets/images/mani-doc.svg";
import pitchicon from "../../assets/icons/pitchd.svg";
import download from "../../assets/icons/downloadoutline.svg";

export const AssignmentFile = () => {
  return (
    <article className="deck-card">
      <div className="deck-card-img">
        <img src={maindoc} alt="document" />
      </div>
      <div className="d-flex align-items-start justify-content-between p-3">
        <section className="d-flex align-items-start">
          <img src={pitchicon} alt="document icon" className="mr-2" />

          <span>
            <p>Business Plan</p>
            <small>21MB</small>
          </span>
        </section>
        <span>
          <img src={download} alt="download" />
        </span>
      </div>
    </article>
  );
};
