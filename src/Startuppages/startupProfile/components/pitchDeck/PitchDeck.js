import React, { useState } from "react";
import doc from "../../../../assets/icons/document.svg";
import docIcon from "../../../../assets/icons/docIcon.svg";
import videoDemo from "../../../../assets/icons/demoImg.png";
import videoIcon from "../../../../assets/icons/videoIcon.svg";
import plus from "../../../../assets/icons/addPlus.svg";
import downloadIcon from "../../../../assets/icons/download.svg";
import {
    FileSize,
    FileText,
    FileWrapper,
    LabelButton,
} from "../../../startupRegistration/components/pitchdeck/pitch.styled";
import "./pitchDeck.css";
import {
    SmallModal,
    LargeModal,
    TextArea,
} from "../../../../Startupcomponents";

export const PitchDeck = ({ data }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="">
            {showModal ? (
                <SmallModal
                    id="addPitchDeckModal"
                    title="Pitch Deck"
                    subTitle="Upload your pitch deck and document"
                    closeModal={setShowModal}
                >
                    <AddPickDeckModal />
                </SmallModal>
            ) : (
                <span></span>
            )}
            <section className="row pt-3">
                {data &&
                    Object.values(data).map((item, i) => {
                        if (item && item.includes(".pdf")) {
                            return (
                                <div key={i} className="col-xl-3 col-lg-4 mb-4">
                                    <article className="deck-card">
                                        <div className="deck-card-img">
                                            <img src={doc} alt="document" />
                                        </div>
                                    </article>
                                </div>
                            );
                        }
                        if (item && item.includes(".mp4")) {
                            return (
                                <div key={i} className="col-xl-3 col-lg-4 mb-4">
                                    <article className="">
                                        <video
                                            style={{
                                                borderRadius: "20px",
                                                maxHeight: "150px",
                                                width: "250px",
                                            }}
                                            className="mb-3"
                                            controls
                                        >
                                            <source
                                                src={item}
                                                id="video_here"
                                            />
                                            Your browser does not support HTML5
                                            video.
                                        </video>
                                    </article>
                                </div>
                            );
                        }
                    })}

                {/* {
              data && data.map((item, i) =>(
                <div className="col-xl-3 col-lg-4 mb-4">
            <article className="deck-card">
            <div className="deck-card-img">
              <img src={item?.file === 'file' ? doc : videoDemo } alt="document" />
            </div>
            <div className="d-flex align-items-start p-3">
              <img src={item?.file === 'file' ? docIcon : videoIcon} alt="document icon" className="mr-2" />
              <span>
                <p> { item?.filename.toUpperCase() } </p>
                <small> { item?.size } </small>
              </span>
            </div>
          </article>
        </div>
              ))
            } */}

                <div className="col-lg-4 create_pitch my-5 ms-5">
                    <img
                        src={plus}
                        alt="add"
                        data-target="#addPitchDeckModal"
                        onClick={() => setShowModal(true)}
                    />
                </div>
            </section>
        </div>
    );
};

export const AddPickDeckModal = () => {
    return (
        <div className="mx-0 addPitchDeck">
            <div className="pt-4 border-top">
                <p>Paste Youtube Link of Video pitch</p>
            </div>
            <div className="row me-5">
                <div className="w-75">
                    <TextArea rows={1} placeholder={"Youtube link"} />
                </div>
                <div className="w-25 mt-2">
                    <button>Upload</button>
                </div>
            </div>
            <div className="mt-3">
                <FileWrapper className="d-flex justify-content-center text-center col-lg-12">
                    <img src={downloadIcon} alt="Download Icon" />
                    <FileText className="my-3 font-weight-bold">
                        Drag & Drop
                    </FileText>
                    <FileText>Drag files or click here to upload </FileText>
                    <FileSize className="my-3">
                        {"(Max. File size 5mb)"}
                    </FileSize>
                    <input type="file" id="pitch-doc" hidden />
                    <LabelButton for="pitch-doc">Upload Files</LabelButton>
                </FileWrapper>
            </div>
            <div className="my-5">
                <button>Update</button>
            </div>
        </div>
    );
};
