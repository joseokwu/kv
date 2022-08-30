import { createContext, useState } from "react";

export const StartUpsContext = createContext({ userCourses: {}, allCourses: {}, lectures: {}, setAllCourses: () => {}, setUserCourses: () => {}, setLectures: () => {} });

const StartUpsProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState({ data: [], isLoading: false, total: 0, idHash: {} });
  const [userCourses, setUserCourses] = useState({ data: [], isLoading: false, total: 0, courseIdHash: {} });
  const [lectures, setLectures] = useState({ data: [], isLoading: false, total: 0, cIdLIdHash: {}, courseLecturesHash: {}, courseSectionLecturesHash: {} }); //CourseId-Lecture Id hash
  return <StartUpsContext.Provider value={{ userCourses, setUserCourses, allCourses, setAllCourses, lectures, setLectures }}>{children}</StartUpsContext.Provider>;
};

export default StartUpsProvider;
