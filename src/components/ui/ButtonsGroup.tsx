import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ButtonsGroup = () => {
  const [sortType, setSortType] = useState("speed");

  const onSortChange = (
    event: React.MouseEvent<HTMLElement>,
    newSort: string
  ) => {
    setSortType(newSort);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={sortType}
      exclusive
      onChange={onSortChange}
      className="buttonsGroup"
    >
      <ToggleButton value="speed" className="buttonsGroup__item">
        Самый дешевый
      </ToggleButton>
      <ToggleButton value="price" className="buttonsGroup__item">
        Самый быстрый
      </ToggleButton>
      <ToggleButton value="optimal" className="buttonsGroup__item">
        Оптимальный
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ButtonsGroup;
