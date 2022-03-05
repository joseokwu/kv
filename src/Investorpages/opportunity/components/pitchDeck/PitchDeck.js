import React from "react";
import doc from "../../../../assets/icons/document.svg";
import docIcon from "../../../../assets/icons/docIcon.svg";
import videoDemo from "../../../../assets/icons/demoImg.png";
import videoIcon from "../../../../assets/icons/videoIcon.svg";

import "./pitchDeck.css";

export const PitchDeck = ({data}) => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Pitch Deck</h3> */}
      <section className="row">

      {
        data && data.map((item, i) =>{
         
           return (
            <div className="col-xl-3 col-lg-4 mb-4">
          <article className="deck-card">
            <div className="deck-card-img">
              <img src={item?.file === 'file' ? doc : videoDemo } alt="document" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={ item?.file === 'file' ? docIcon : videoIcon } alt="document icon" className="mr-2" />
              <span>
                <p> { item?.filename.toUpperCase() } </p>
                <small> { item?.size } </small>
              </span>
            </div>
          </article>
        </div>
           )
         
      })
      }

      </section>
{/* 
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
        </div> */}
 
    </div>
  );
};
