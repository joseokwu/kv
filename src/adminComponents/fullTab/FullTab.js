import React from "react";
import styles from "./fullTab.module.css";

export const FullTab = ({
  tabItems = [],
  setCurrentTab = () => {},
  currentTab = 0,
}) => {
  return (
    <div>
      <ul className={styles.list}>
        {tabItems?.length > 0 &&
          tabItems?.map((tab, i) => {
            return (
              <li
                className={currentTab === i ? styles.list_active : ""}
                onClick={() => setCurrentTab(i)}
                role="button"
              >
                {tab}
              </li>
            );
          })}
      </ul>
    </div>
  );
};
