import { createContext, useState } from "react";

export const StartUpsContext = createContext({ userCourses: {}, allCourses: {}, setAllCourses: () => {}, setUserCourses: () => {} });

const StartUpsProvider = ({ children }) => {
  const [allCourses, setAllCourses] = useState({ data: [], isLoading: false, total: 0, idHash: {} });
  const [userCourses, setUserCourses] = useState({ data: [], isLoading: false, total: 0 });
  return <StartUpsContext.Provider value={{ userCourses, setUserCourses, allCourses, setAllCourses }}>{children}</StartUpsContext.Provider>;
};

export default StartUpsProvider;
