import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Select, Tabs } from "../../Startupcomponents";
import AssetBoxPdf from "../../Startupcomponents/assetBox/AssetBoxPdf";
import AssetBoxVid from "../../Startupcomponents/assetBox/AssetBoxVid";
import { TabsV2 } from "../../Startupcomponents/tabs/TabsV2";
import { request } from "../../utils/axios";
import sessionBlueImg from "../../assets/icons/session-img-blue.svg";
import leftArrow from "../../assets/icons/chevron-left-blue.svg";
import { useHistory } from "react-router-dom";

import styles from "./courseDetails.module.scss";
import { StartUpsContext } from "../../context/startups";
import { getLecture } from "../../services";

const CourseDetail = () => {
  const { id } = useParams();
  const [active, setActive] = useState("Sessions");
  const history = useHistory();
  const { allCourses, setLectures, lectures } = useContext(StartUpsContext);
  const course = allCourses?.idHash[id];
  console.log("Course is", course, allCourses);
  // request

  const fetchBuildAllLectures = async () => {
    // Get all lecture for this course
    let allLecturePromises = [];
    course?.lecture_sections?.forEach((el) => {
      el?.lectures?.forEach((el) => {
        allLecturePromises = [...allLecturePromises, getLecture(id, el.id)];
      });
    });

    const allLecturesResolved = await Promise.all(allLecturePromises);
    let allLectures = allLecturesResolved.map((el) => {
      return el?.data?.lecture;
    });
    console.log("ALl lectures of course are:", allLectures);

    // Build each course Section hash
    let courseLecturesHash = {};
    courseLecturesHash[id] = allLectures;
    let courseSectionLecturesHash = {};
    allLectures.forEach((el) => {
      if (courseSectionLecturesHash[`${id}${el?.lecture_section_id}`]) {
        courseSectionLecturesHash[`${id}${el?.lecture_section_id}`] = [...courseSectionLecturesHash[`${id}${el?.lecture_section_id}`], el];
      } else {
        courseSectionLecturesHash[`${id}${el?.lecture_section_id}`] = [el];
      }
    });

    console.log("All course sections lectures hash is", courseSectionLecturesHash);
    // setLectures((val)=> {return {...val, data: [...data, allLectures]}}})
    setLectures((val) => {
      return {
        ...val,
        data: [...val.data, ...allLectures],
        courseLecturesHash: { ...val.courseLecturesHash, ...courseLecturesHash },
        courseSectionLecturesHash: { ...val.courseSectionLecturesHash, ...courseSectionLecturesHash },
      };
    });
  };

  const getTotalLectures = (sections) => {
    console.log("In get totlal", sections);
    let total = 0;
    sections?.forEach((el) => {
      total = total + el?.lectures?.length;
    });

    return total;
  };

  useEffect(() => {
    console.log("all courses are", allCourses?.idHash, id);
    if (!allCourses?.idHash[id]) {
      history.push(`/startup/e-academy/`);
    }
    if (!lectures?.courseLecturesHash[id]) {
      console.log("No lecture hash so fetch");
      fetchBuildAllLectures();
    }
  }, []);

  useEffect(() => {
    console.log("All lectures changed", lectures);
  }, [lectures]);

  return (
    <div className={styles.container}>
      <header
        onClick={() => {
          history.push(`/startup/e-academy/`);
        }}
        style={{ marginBottom: "34px" }}
      >
        <img style={{ marginRight: "25px" }} height={16} src={leftArrow}></img>
        <p className="text-3xl font-bold underline">E-Academy</p>
      </header>
      <div className={styles.hero}>
        <img width={451} height={329} src={course?.image_url}></img>
        <div>
          <h3>{course?.heading ?? course?.name}</h3>
          <p>{course?.description ?? "No description yet"} </p>
          <div className="scroll_hide" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "350px", flexWrap: "wrap" }}>
            <div className={styles.stat}>
              <p>Sessions:</p>
              <span>
                {course?.lecture_sections?.length} Session{course?.lecture_sections?.length <= 1 ? "" : "s"}
              </span>
            </div>
            <div className={styles.stat}>
              <p>Lectures:</p>
              <span>
                {getTotalLectures(course?.lecture_sections)} Lecture{getTotalLectures(course?.lecture_sections) <= 1 ? "" : "s"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <TabsV2
        onChange={(item) => {
          console.log("item change", item);
          setActive(item);
        }}
        tabItems={["Sessions", "All Files"]}
      ></TabsV2>

      {/* sessions */}
      {active === "Sessions" && (
        <section className={styles.card_container} style={{ marginTop: "40px" }}>
          {course?.lecture_sections.map((el, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  history.push(`/startup/e-academy/${course?.id}/${el.id}`);
                }}
                className={styles.card}
              >
                <img height={18} src={sessionBlueImg}></img>
                <span>{el?.name}</span>
              </div>
            );
          })}
        </section>
      )}
      {active === "All Files" && (
        <div style={{ marginTop: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px", alignItems: "center", marginBottom: "40px" }}>
            <p className={styles.courses}>Total courses: {allCourses?.total}</p>
            {/* <Select placeholder={"Sort by: Industry"} options={["one", "two"]} /> */}
          </div>
          <div style={{ marginTop: "40px" }} className={styles.asset_container}>
            {lectures.courseLecturesHash[id].map((lecture, i) => {
              return lecture?.attachments?.map((el, i) => {
                return el?.kind == "video" ? <AssetBoxVid key={i} url={el?.url} title={el?.name}></AssetBoxVid> : <AssetBoxPdf key={i} url={el?.url} title={el?.name}></AssetBoxPdf>;
              });
            })}
            {/* <AssetBoxVid></AssetBoxVid>
            <AssetBoxVid></AssetBoxVid>
            <AssetBoxPdf></AssetBoxPdf>
            <AssetBoxPdf></AssetBoxPdf> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;

// {Object.entries(lectures?.cIdLIdHash)?.map(([cIdLId, lecture], i) => {
//   if (cIdLId.includes(id)) {
//     return lecture?.attachments?.map((el, i) => {
//       return el?.kind == "video" ? <AssetBoxVid key={i} url={el?.url} title={el?.name}></AssetBoxVid> : <AssetBoxPdf url={el?.url} title={el?.name}></AssetBoxPdf>;
//     });
//   } else {
//     return null;
//   }
// })}
