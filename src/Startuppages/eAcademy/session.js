import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AssetBoxPdf from "../../Startupcomponents/assetBox/AssetBoxPdf";
import AssetBoxVid from "../../Startupcomponents/assetBox/AssetBoxVid";
import sessionBlueImg from "../../assets/icons/session-img-blue.svg";
import styles from "./session.module.scss";
import leftArrow from "../../assets/icons/chevron-left-blue.svg";
import { useHistory } from "react-router-dom";
import { StartUpsContext } from "../../context/startups";

const Session = () => {
  const { id, sectionId } = useParams();
  const { lectures, allCourses } = useContext(StartUpsContext);
  const history = useHistory();

  useEffect(() => {
    if (!allCourses?.idHash[id]) {
      history.push(`/startup/e-academy/`);
    }
  });
  return (
    <div className={styles.container}>
      {/* Course id is {id} Sessions id is: {sectionId} */}
      <header
        onClick={() => {
          history.goBack();
        }}
        style={{ marginBottom: "34px" }}
      >
        <img style={{ marginRight: "25px" }} height={16} src={leftArrow}></img>
        <p className="">
          {
            allCourses?.idHash[id]?.lecture_sections?.filter((el) => {
              return el?.id == sectionId;
            })[0]?.name
          }
        </p>
      </header>
      {/* <div className={styles.asset_container}>
        {lectures?.courseSectionLecturesHash[`${id}${sectionId}`].map((lecture, i) => {
          return 
        })} */}
      <section className={styles.card_container} style={{ marginTop: "40px" }}>
        {lectures?.courseSectionLecturesHash[`${id}${sectionId}`]?.map((lecture, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                history.push(`/startup/e-academy/${id}/${sectionId}/${lecture?.id}`);
              }}
              className={styles.card}
            >
              <img height={18} src={sessionBlueImg}></img>
              <span>{lecture?.name}</span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Session;
