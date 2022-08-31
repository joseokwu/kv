import React, { useRef, useState } from "react";
import styles from "./assetBox.module.scss";
import play from "../../assets/icons/play_circle_filled.svg";
import close from "../../assets/icons/close.svg";
import ReactPlayer from "react-player";
import { Modal } from "../modal/Modal";

const AssetBoxVid = ({ img, title = "Introduction to business", time = "1:30", url }) => {
  const [playing, setPlaying] = useState(false);
  const closeModalRef = useRef(null);

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
        <ReactPlayer width={"100%"} height={"100%"} controls={true} playing={playing} url={url ? url : "https://www.youtube.com/watch?v=ysz5S6PUM-U"} />
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
            {/* <span>{time}</span> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AssetBoxVid;
