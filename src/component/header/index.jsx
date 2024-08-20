import React from "react";
import "./index.css";
import SideHeader from "../sideHeader";
import AddWidgetButton from "../addWidgetButton";
import RefreshButton from "../refreshButton";
import DateRangeSelector from "../daterangeSelector";

const Header = () => {
  return (
    <div className="headerContainner">
      <SideHeader />
      <div className="section2Containner">
        <AddWidgetButton />
        <RefreshButton isrefreshButton={true} />
        <RefreshButton isrefreshButton={false} />
        <DateRangeSelector />
      </div>
    </div>
  );
};

export default Header;
