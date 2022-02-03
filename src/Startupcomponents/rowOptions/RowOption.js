import React, { useState } from "react";
import { OptionWrap, Option } from "./RowOption.styled";

export const RowOption = ({ options = [], getSelected = () => {} }) => {
  const [selected, setSelected] = useState("");

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
              bg={selected === option ? "#DCEBFF" : ""}
              onClick={() => handleClick(option)}
            >
              {option}
            </Option>
          );
        })}
    </OptionWrap>
  );
};
