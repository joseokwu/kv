import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import AssetBoxPdf from "../../Startupcomponents/assetBox/AssetBoxPdf";
import AssetBoxVid from "../../Startupcomponents/assetBox/AssetBoxVid";
import styles from "./session.module.scss";
import leftArrow from "../../assets/icons/chevron-left-blue.svg";
import { useHistory } from "react-router-dom";
import { StartUpsContext } from "../../context/startups";
import { EmptyState } from "../../mentorComponents";

const SessionLectures = () => {
  const { id, sectionId, lectureId } = useParams();
  const { lectures, allCourses } = useContext(StartUpsContext);
  const history = useHistory();

  useEffect(() => {
    console.log("all section lectuess", lectures?.courseSectionLecturesHash[`${id}${sectionId}`]);
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
          /
          {
            lectures?.courseSectionLecturesHash[`${id}${sectionId}`].filter((el) => {
              return el?.id == lectureId;
            })[0]?.name
          }
        </p>
      </header>
      <div className={styles.asset_container}>
        {lectures?.courseSectionLecturesHash[`${id}${sectionId}`]
          ?.filter((lec) => lec.id == lectureId)
          ?.map((lecture, i) => {
            if (lecture?.attachments.length < 1) {
              return <p>No attachments yet</p>;
            }
            return lecture?.attachments?.map((el, i) => {
              return el?.kind == "video" ? <AssetBoxVid key={i} url={el?.url} title={el?.name}></AssetBoxVid> : <AssetBoxPdf key={i} url={el?.url} title={el?.name}></AssetBoxPdf>;
            });
          })}
      </div>
    </div>
  );
};

export default SessionLectures;
