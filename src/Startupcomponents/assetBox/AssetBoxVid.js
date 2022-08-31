import React, { useRef, useState } from "react";
import styles from "./assetBox.module.scss";
import play from "../../assets/icons/play_circle_filled.svg";
import close from "../../assets/icons/close.svg";
import ReactPlayer from "react-player";
import { Modal } from "../modal/Modal";

const AssetBoxVid = ({ img, title = "Introduction to business", time = "1:30", url }) => {
  const [playing, setPlaying] = useState(false);
  const closeModalRef = useRef(null);
  const vidRef = useRef(null);
  const [vidDuration, setVidDuration] = useState(0);

  const setVidTime = (duration) => {
    if (duration < 60) {
      setVidDuration(`0:${Math.floor(duration)}`);
      return;
    } else if (duration > 60 && duration < 60 * 60) {
      setVidDuration(`${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`);
      return;
    } else {
      setVidDuration(`${Math.floor(duration / (60 * 60))}:${Math.floor(duration % (60 * 60)) > 60 ? Math.floor(Math.floor(duration % (60 * 60)) / 60) : "00"}:00`);
    }
  };

  return (
    <>
      {" "}
      <Modal
        onCloseModal={() => {
          setPlaying(false);
        }}
        forceTop={true}
        position="top"
        id="founderInfo"
        withHeader={false}
      >
        <div style={{ marginLeft: "auto", display: "flex" }}>
          <img
            onClick={() => setPlaying(false)}
            ref={closeModalRef}
            data-dismiss="modal"
            aria-label="Close"
            style={{ marginLeft: "auto", display: "flex", height: "15px", width: "15px", marginBottom: "40px", cursor: "pointer" }}
            src={close}
          ></img>
        </div>
        <ReactPlayer
          onReady={() => {
            console.log("media loaded", vidRef.current?.getDuration());
            setVidTime(vidRef.current?.getDuration());
          }}
          ref={vidRef}
          width={"100%"}
          height={"100%"}
          controls={true}
          playing={playing}
          url={url ? url : "https://www.youtube.com/watch?v=ysz5S6PUM-U"}
        />
      </Modal>
      <div className={styles.container}>
        <main>
          <img
            onClick={() => {
              setPlaying(true);
            }}
            data-toggle="modal"
            data-target={`#founderInfo`}
            height={44}
            width={44}
            src={play}
          ></img>
        </main>
        <div className={styles.details}>
          <div>
            <section>
              <span>{title ?? "No name"}</span>
              <p>Section 1</p>
            </section>
            <span>{vidDuration}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetBoxVid;
