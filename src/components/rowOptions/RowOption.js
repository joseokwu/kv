import React, { useState } from "react";
import { OptionWrap, Option } from "./RowOption.styled";

export const RowOption = ({
  options = [],
  getSelected = () => {},
  currentSelected = "",
  selectAll = false,
}) => {
  const [selected, setSelected] = useState(currentSelected);

  const handleClick = (selectedOption) => {
    setSelected(selectedOption);
    getSelected(selectedOption);
 
  };

  return (
    <OptionWrap>
      {options.length > 0 &&
        options.map((option, i) => {
          return (
            <Option
              key={i}
              bg={selected === option || selectAll ? "#DCEBFF" : ""}
              onClick={() => handleClick(option)}
            >
              {option}
            </Option>
          );
        })}
    </OptionWrap>
  );
};
