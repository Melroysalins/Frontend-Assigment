import React from "react";
import "./index.css";
import BreadCrumbs from "../breadCrumbs";
import SearchBar from "../searchbar";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Navbar = () => {
  return (
    <div className="NavigationBar">
      <div className="navbarContainner">
        <BreadCrumbs />
        <SearchBar />
        <NotificationsActiveIcon
          className="bellIcon"
          sx={{ fontSize: "18px" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
