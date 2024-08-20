import React from "react";
import "./index.css";
import CachedIcon from "@mui/icons-material/Cached";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const RefreshButton = ({ isrefreshButton }) => {
  return (
    <div className="RefreshButton">
      {isrefreshButton ? (
        <CachedIcon sx={{ fontSize: "15px", opacity: "0.8" }} />
      ) : (
        <MoreVertIcon sx={{ fontSize: "15px", opacity: "0.8" }} />
      )}
    </div>
  );
};

export default RefreshButton;
