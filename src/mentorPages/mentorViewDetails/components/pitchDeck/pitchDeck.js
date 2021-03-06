import React from "react";
import maindoc from "../../../../assets/images/mani-doc.svg";
import pitchicon from "../../../../assets/icons/pitchd.svg";
import playicon from "../../../../assets/icons/play.svg";
import play from "../../../../assets/images/play.svg";
import "./pitchDeck.css";
import { useActivity } from "../../../../hooks";

export const PitchDeck = ({ data = [] }) => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Pitch Deck</h3> */}

      <section className="row">
        {data?.length > 0 &&
          data?.map((d, i) => {
            return (
              <div className="col-xl-3 col-lg-4 mb-4">
                <article className="deck-card">
                  <div className="deck-card-img">
                    <img src={maindoc} alt="document" />
                  </div>
                  <div className="d-flex align-items-start p-3">
                    <img src={pitchicon} alt="document icon" className="mr-2" />
                    <span>
                      <p>{d?.filename}</p>
                      <small>{d?.size}</small>
                    </span>
                  </div>
                </article>
              </div>
            );
          })}

        {/* <div className="col-xl-3 col-lg-4 mb-4">
          <article className="deck-card">
            <div className="deck-card-img">
              <img src={play} alt="video demo" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={playicon} alt="video icon" className="mr-2" />
              <span>
                <p>Pitch Video</p>
                <small>100MB</small>
              </span>
            </div>
          </article>
        </div> */}
      </section>
    </div>
  );
};
