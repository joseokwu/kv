import React, { useContext, useState } from "react";
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

const CourseDetail = () => {
  const { id } = useParams();
  const [active, setActive] = useState("Sessions");
  const history = useHistory();
  const { allCourses } = useContext(StartUpsContext);
  const course = allCourses?.idHash[id];
  console.log("Course is", course, allCourses);
  // request

  return (
    <div className={styles.container}>
      <header
        onClick={() => {
          history.goBack();
        }}
        style={{ marginBottom: "34px" }}
      >
        <img style={{ marginRight: "25px" }} height={16} src={leftArrow}></img>
        <p className="text-3xl font-bold underline">E-Academy</p>
      </header>
      <div className={styles.hero}>
        <img width={451} height={329} src={course?.image_url}></img>
        <div>
          <h3>{course?.heading}</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et amet, facilisi sodales cursus tellus nam ut. Enim, at imperdiet praesent velit. Eget consequat, sollicitudin molestie curabitur
            lobortis imperdiet. Vulputate malesuada tortor sit mi laoreet. Iaculis quis pretium urna.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "30px", maxWidth: "350px" }}>
            <div className={styles.stat}>
              <p>Duration:</p>
              <span>40mins</span>
            </div>
            <div className={styles.stat}>
              <p>Duration:</p>
              <span>40mins</span>
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
          <div
            onClick={() => {
              history.push(`/startup/e-academy/${course?.id}/Morning Session`);
            }}
            className={styles.card}
          >
            <img height={18} src={sessionBlueImg}></img>
            <span>Morning Session</span>
          </div>
        </section>
      )}
      {active === "All Files" && (
        <div style={{ marginTop: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px", alignItems: "center", marginBottom: "40px" }}>
            <p className={styles.courses}>Total courses: 6</p>
            <Select placeholder={"Sort by: Industry"} options={["one", "two"]} />
          </div>
          <div style={{ marginTop: "40px" }} className={styles.asset_container}>
            <AssetBoxVid></AssetBoxVid>
            <AssetBoxVid></AssetBoxVid>
            <AssetBoxPdf></AssetBoxPdf>
            <AssetBoxPdf></AssetBoxPdf>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
