import React from "react";
import doc from "../../../assets/icons/document.svg";
import docIcon from "../../../assets/icons/docIcon.svg";
import videoDemo from "../../../assets/icons/demoImg.png";
import videoIcon from "../../../assets/icons/videoIcon.svg";

export const PitchDeck = ({ data }) => {
  return (
    <div>
      {/* <h3 className="tab-section-title">Pitch Deck</h3> */}
      <section className="row">

      {
       data?.pitchDeckFile && <div  className="col-xl-3 col-lg-4 mb-4">
                <article className="deck-card">
                  <div className="deck-card-img">
                   
                  <a href={data?.pitchDeckFile} style={{textDecoration:'none'}}  download>
                    <img
                      src={doc}
                      alt="document"
                    />
                  </a>
                   
                  </div>
                  <div className="d-flex align-items-start p-3">
                    
                    <span>
                      <p> PITCH DECK FILE </p>
                    </span>
                  </div>
                </article>
              </div>
      }
       {
        data?.pitchDeckVideo && <div className="col-xl-3 col-lg-4 mb-4">
        <article className="">
        <video 
                      style={{
                        borderRadius:"20px",
                       maxHeight:"150px",
                        width:"250px"
                      }}
                      className='mb-3'
                     controls>
                    <source src={data?.pitchDeckVideo} id="video_here" />
                      Your browser does not support HTML5 video.
                     </video>
                     </article>
        </div>
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
