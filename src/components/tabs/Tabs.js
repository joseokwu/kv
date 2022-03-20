import React, { useEffect } from "react";
import { useHistory } from "react-router";

export const Tabs = ({
  tabItems,
  withState = false,
  state = "",
  className = "",
  setState = () => {},
  ...rest
}) => {
  const history = useHistory();
  const {
    replace,
    location: { hash },
  } = history;

  useEffect(() => {
    if (hash === "" && tabItems?.length > 0) {
      replace(`#${tabItems[0]}`);
    }
  }, [hash, tabItems, replace]);
  return (
    <ul className={`applicant-tabs-list ${className}`} {...rest}>
      {tabItems.length > 0 &&
        tabItems.map((item, i) => {
          return !withState ? (
            <li
              className={`${
                hash?.replaceAll("%20", " ") === `#${item}` ? "active-tab" : ""
              }`}
              onClick={() => replace(`#${item}`)}
              key={`tab-${i}`}
            >
              {item}
            </li>
          ) : (
            <li
              className={`${
                state?.toLowerCase() === item?.toLowerCase() ? "active-tab" : ""
              }`}
              onClick={() => setState(item)}
              key={`tab-${i}`}
            >
              {item}
            </li>
          );
        })}
    </ul>
  );
};
