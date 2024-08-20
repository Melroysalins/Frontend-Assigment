import React from "react";
import "./index.css";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const DateRangeSelector = () => {
  return (
    <div className="DateRangeSelectorContainner">
      <WatchLaterIcon sx={{ fontSize: "18px", color: "#14147d" }} />
      <div className="divider"></div>
      <p>Last 2 days</p>
      <ArrowDropDownIcon sx={{ fontSize: "20px", color: "#14147d" }} />
    </div>
  );
};

export default DateRangeSelector;
