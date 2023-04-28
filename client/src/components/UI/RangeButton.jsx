import "./RangeButton.css";
import React from "react";

const RangeButton = ({ active, children, onToggleSwitch, onToggleItems }) => {
  const classList = active ? "range-button active" : "range-button";

  const handleClick = (e) => {
    onToggleSwitch(e.target.innerHTML);
    onToggleItems(e.target.innerHTML);
  };

  return (
    <span
      className={classList}
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      {children}
    </span>
  );
};

export default RangeButton;