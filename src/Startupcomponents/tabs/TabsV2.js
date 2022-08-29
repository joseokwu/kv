import React, { useEffect, useState } from "react";

export const TabsV2 = ({ tabItems, onChange = () => {} }) => {
  const [active, setActive] = useState(0);
  return (
    <ul className="applicant-tabs-list">
      {tabItems.length > 0 &&
        tabItems.map((item, i) => {
          return (
            <li
              className={`${active === i ? "active-tab" : ""}`}
              onClick={() => {
                setActive(i);
                onChange(tabItems[i]);
              }}
              key={`tab-${i}`}
            >
              {item}
            </li>
          );
        })}
    </ul>
  );
};
