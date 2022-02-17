import React from "react";
import doc from "../../../../assets/icons/document.svg";
import docIcon from "../../../../assets/icons/docIcon.svg";
import videoDemo from "../../../../assets/icons/demoImg.png";
import videoIcon from "../../../../assets/icons/videoIcon.svg";

import "./pitchDeck.css";

export const PitchDeck = () => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Pitch Deck</h3> */}

      <section className="row">
        <div className="col-xl-3 col-lg-4 mb-4">
          <article className="deck-card">
            <div className="deck-card-img">
              <img src={doc} alt="document" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={docIcon} alt="document icon" className="mr-2" />
              <span>
                <p>Pitch Deck Document</p>
                <small>21MB</small>
              </span>
            </div>
          </article>
        </div>

        <div className="col-xl-3 col-lg-4 mb-4">
          <article className="deck-card">
            <div className="deck-card-img">
              <img src={videoDemo} alt="video demo" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={videoIcon} alt="video icon" className="mr-2" />
              <span>
                <p>Pitch Video</p>
                <small>100MB</small>
              </span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
