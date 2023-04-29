import React from "react";
import Main from "./UI/Main";
import RangeButton from "./UI/RangeButton";
import "./Top.css";

function Top({ title, currentlyActive, toggleSwitch, toggleItem, children }) {
  return (
    <Main>
      <div className="top-container">
        <div className="top-header">
          <span>{title}</span>
          <div className="top-range-select">
            <RangeButton
              active={currentlyActive === "All time"}
              onToggleSwitch={toggleSwitch}
              onToggleItems={() => {toggleItem("All time")}}
            >
              All time
            </RangeButton>
            <RangeButton
              active={currentlyActive === "6 months"}
              onToggleSwitch={toggleSwitch}
              onToggleItems={() => {toggleItem("6 months")}}
            >
              6 months
            </RangeButton>
            <RangeButton
              active={currentlyActive === "4 weeks"}
              onToggleSwitch={toggleSwitch}
              onToggleItems={() => {toggleItem("4 weeks")}}
            >
              4 weeks
            </RangeButton>
          </div>
        </div>
        <div className="top-content">{children}</div>
      </div>
    </Main>
  );
}

export default Top;