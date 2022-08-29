import React from "react";
import { useParams } from "react-router";
import AssetBoxPdf from "../../Startupcomponents/assetBox/AssetBoxPdf";
import AssetBoxVid from "../../Startupcomponents/assetBox/AssetBoxVid";
import styles from "./session.module.scss";
import leftArrow from "../../assets/icons/chevron-left-blue.svg";
import { useHistory } from "react-router-dom";

const Session = () => {
  const { id, session } = useParams();
  const history = useHistory();
  return (
    <div className={styles.container}>
      Course id is {id} Sessions is: {session}
      <header
        onClick={() => {
          history.goBack();
        }}
        style={{ marginBottom: "34px" }}
      >
        <img style={{ marginRight: "25px" }} height={16} src={leftArrow}></img>
        <p className="">{session}</p>
      </header>
      <div className={styles.asset_container}>
        <AssetBoxVid></AssetBoxVid>
        <AssetBoxVid></AssetBoxVid>
        <AssetBoxPdf></AssetBoxPdf>
        <AssetBoxPdf></AssetBoxPdf>
      </div>
    </div>
  );
};

export default Session;
