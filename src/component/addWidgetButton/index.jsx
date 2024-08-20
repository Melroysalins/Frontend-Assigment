import React from "react";
import "./index.css";
import AddIcon from "@mui/icons-material/Add";

const AddWidgetButton = () => {
  return (
    <div className="widgetContainner">
      <p>Add widget</p>
      <AddIcon sx={{ fontSize: "16px", opacity: "0.7" }} />
    </div>
  );
};

export default AddWidgetButton;
