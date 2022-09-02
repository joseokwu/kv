import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Section } from "./eAcademy.styled";
import comingSoon from "../../assets/images/comingsoon.svg";
import close from "../../assets/icons/close.svg";
import sessionGray from "../../assets/icons/session-img-gray.svg";
import modulesImg from "../../assets/icons/modules-img.svg";
import timeImg from "../../assets/icons/time.svg";
import { Modal, Select, Tabs } from "../../Startupcomponents";
import styles from "./eAcademy.module.scss";
import { enrollCourse, getAllCourses, getCourseDetail, getUserCourses } from "../../services";
import { TabsV2 } from "../../Startupcomponents/tabs/TabsV2";
import { StartUpsContext } from "../../context/startups";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

export const StartupEAcademy = () => {
  const [modalActiveTab, setModalActiveTab] = useState("Course Overview");
  const startUpsContextData = useContext(StartUpsContext);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [activeCourseTab, setActiveCourseTab] = useState("Courses");
  const stateAuth = useSelector((state) => state.auth);
  const [enrolling, setEnrolling] = useState(false);
  const closeModalRef = useRef(null);
  const history = useHistory();

  const startCourse = async (courseId, teachableId) => {
    if (startUpsContextData?.userCourses?.courseIdHash[courseId]) {
      closeModalRef.current.click();
      history.push(`/startup/e-academy/${courseId}`);
      return;
    }
    console.log("course id and teachable id is", courseId, teachableId);
    setEnrolling(true);
    const resp = await enrollCourse(courseId, teachableId);
    console.log("response is", resp);
    if (!resp) {
      toast.error("Error enrolling!");
    } else if (resp?.err || resp?.status == false) {
      toast.error(resp?.message);
    } else {
      console.log("enrol resp", resp);
      toast.success(resp?.message);
      fetchAndSetData();
      // setActiveCourseTab("My Courses");
    }
    setEnrolling(false);
    closeModalRef.current.click();
  };

  const getTotalLectures = (sections) => {
    console.log("In get totlal", sections);
    let total = 0;
    sections?.forEach((el) => {
      total = total + el?.lectures?.length;
    });

    return total;
  };

  const fetchAndSetData = async () => {
    startUpsContextData.setAllCourses((val) => {
      return { ...val, isLoading: true };
    });
    const res = await getAllCourses();
    const userCourses = await getUserCourses();
    console.log("all user courses are: ", userCourses?.data?.courses);

    const userCoursesHash = {};
    userCourses?.data?.courses.forEach((el) => {
      userCoursesHash[el?.course_id] = el;
    });

    startUpsContextData.setUserCourses((val) => {
      return { ...val, data: userCourses?.data?.courses, courseIdHash: userCoursesHash };
    });
    const totalCourses = res.data?.meta?.total;

    // Fetch Details
    const allCoursesDetailsPromise = res?.data?.courses?.map((el) => {
      return getCourseDetail(el.id);
    });

    const allCoursesResolved = await Promise.all(allCoursesDetailsPromise);
    console.log("resove courses are", allCoursesResolved);
    const allCourses = allCoursesResolved.map((el) => {
      return el?.data?.course;
    });
    const courseIdHash = {};
    allCourses.forEach((el) => {
      courseIdHash[el.id] = el;
    });
    console.log("course hash is", courseIdHash);
    // console.log("all courses formatted are", allCourses);
    startUpsContextData.setAllCourses((val) => {
      return { ...val, data: allCourses, isLoading: false, total: totalCourses, idHash: courseIdHash };
    });
  };
  useEffect(() => {
    if (startUpsContextData.allCourses?.data?.length < 1) {
      console.log("No hash: fetching course data");
      fetchAndSetData();
    }

    // console.log("Startus data context is ", startUpsContextData);
  }, []);

  useEffect(() => {
    console.log("Starup context changes:", startUpsContextData.allCourses);
  }, [startUpsContextData.allCourses?.data]);
  return (
    <>
      <Modal forceTop={true} position="top" id="founderInfo" withHeader={false}>
        <div className={styles.modal}>
          <div style={{ marginLeft: "auto", display: "flex" }}>
            <img
              ref={closeModalRef}
              data-dismiss="modal"
              aria-label="Close"
              style={{ marginLeft: "auto", display: "flex", height: "15px", width: "15px", marginBottom: "40px", cursor: "pointer" }}
              src={close}
            ></img>
          </div>
          <img style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)" }} height={305} src={selectedCourse?.image_url}></img>
          <h3>{selectedCourse?.heading}</h3>
          <div className="scroll_hide" style={{ display: "flex", alignItems: "center", marginBottom: "30px", overflow: "scroll", whiteSpace: "nowrap" }}>
            <div style={{ marginRight: "32px" }} className={styles.modal_stat}>
              <p>Sessions: </p>
              <img height={18} src={sessionGray}></img>
              <span>
                {selectedCourse?.lecture_sections?.length} Session{selectedCourse?.lecture_sections?.length <= 1 ? "" : "s"}
              </span>
            </div>
            <div className={styles.modal_stat}>
              <p>Lectures:</p>
              <img height={18} src={modulesImg}></img>
              <span>
                {getTotalLectures(selectedCourse?.lecture_sections)} Lecture{getTotalLectures(selectedCourse?.lecture_sections) <= 1 ? "" : "s"}
              </span>
            </div>
          </div>

          <TabsV2
            onChange={(item) => {
              console.log("item change", item);
              setModalActiveTab(item);
            }}
            tabItems={["Course Overview", "Sessions"]}
          ></TabsV2>
          {modalActiveTab === "Course Overview" && (
            <div className={styles.modal_desc_box}>
              <h4>Description</h4>
              <p>{selectedCourse?.description ?? "No description yet"}</p>
            </div>
          )}
          {modalActiveTab === "Sessions" && (
            <div className={styles.modal_session_box}>
              <h4>Sessions</h4>
              {selectedCourse?.lecture_sections.map((el, i) => {
                return (
                  <section>
                    <div>{i + 1}</div>
                    <p>{el?.name}</p>
                    <span>
                      {el?.lectures?.length} lecture{i == 0 ? "" : "s"}
                    </span>
                  </section>
                );
              })}
            </div>
          )}

          <div className={styles.modal_owner}>
            <p>Course Owner</p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                height={70}
                src={
                  selectedCourse?.author_bio?.profile_image_url ?? "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg"
                }
              ></img>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h4>{selectedCourse?.author_bio?.name}</h4>
                <span>{selectedCourse?.author_bio?.bio ?? "No bio yet"}</span>
                {/* <span>Partner at Apple Inc. Canada</span> */}
              </div>
            </div>
          </div>

          <button
            disabled={enrolling}
            onClick={() => {
              startCourse(selectedCourse?.id, stateAuth?.teachableId);
            }}
            style={{ marginTop: "70px", cursor: enrolling ? "progress" : "pointer" }}
            className={styles.button}
          >
            {enrolling && (
              <div class="spinner-border spinner-border-sm text-primary mr-2 text-light" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            )}
            <span>{!startUpsContextData?.userCourses?.courseIdHash[selectedCourse?.id] ? "Start this course" : "Continue course"} </span>
          </button>
        </div>
      </Modal>
      <div className={styles.container}>
        <header style={{ marginBottom: "34px" }}>
          <p>E-Academy</p>
        </header>
        <div className="mx-auto text-center my-auto">
          <TabsV2
            onChange={(item) => {
              console.log("item change", item);
              setActiveCourseTab(item);
            }}
            tabItems={["Courses", "My Courses"]}
          ></TabsV2>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "50px", alignItems: "center", marginBottom: "40px" }}>
            <p className={styles.courses}>Total courses: {activeCourseTab === "Courses" ? startUpsContextData.allCourses?.total : startUpsContextData.userCourses?.data?.length}</p>
            {/* <Select placeholder={"Sort by: Industry"} options={["one", "two"]} /> */}
          </div>

          {/* Main BOdy */}
          <main>
            {activeCourseTab === "Courses" && (
              <div className={styles.card_container}>
                {startUpsContextData.allCourses?.data?.map((el, i) => {
                  return (
                    <div key={i} className={styles.card}>
                      <img height={236} src={el?.image_url}></img>
                      {/* Details */}
                      <div style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "36px", alignItems: "center" }}>
                          <h3>{el?.heading ?? el?.name}</h3>
                          {/* <span style={{ display: "flex" }}>30 minutes</span> */}
                        </div>
                        {/* Desc */}
                        <p>{el?.description ?? "No description yet"} </p>
                        <footer style={{ marginTop: "auto" }}>
                          <button
                            style={{ marginTop: "auto" }}
                            onClick={() => {
                              setSelectedCourse(el);
                            }}
                            data-toggle="modal"
                            data-target={`#founderInfo`}
                            className={styles.button}
                          >
                            View Course
                          </button>
                          {/* <div>800+ Started course</div> */}
                        </footer>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {/* My courses */}
            {activeCourseTab === "My Courses" && (
              <div className={styles.card_container}>
                {startUpsContextData.userCourses?.data?.map((el, i) => {
                  return (
                    <div key={i} className={styles.card}>
                      <img height={236} src={startUpsContextData?.allCourses.idHash[el?.course_id].image_url}></img>
                      {/* Details */}
                      <div style={{ flexGrow: "1", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "36px", alignItems: "center" }}>
                          <h3>{startUpsContextData?.allCourses.idHash[el?.course_id]?.heading ?? startUpsContextData?.allCourses.idHash[el?.course_id]?.name}</h3>
                          {/* <span style={{ display: "flex" }}>30 minutes</span> */}
                        </div>
                        {/* Desc */}
                        <p>{startUpsContextData?.allCourses.idHash[el?.course_id]?.description ?? "No description yet"} </p>
                        <footer>
                          <button
                            style={{ marginTop: "auto" }}
                            onClick={() => {
                              history.push(`/startup/e-academy/${el?.course_id}`);
                            }}
                            className={styles.button}
                          >
                            Go to course
                          </button>
                          {/* <div>800+ Started course</div> */}
                        </footer>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {startUpsContextData?.allCourses?.isLoading && "Loading..."}
          </main>
        </div>
      </div>
    </>
  );
};
