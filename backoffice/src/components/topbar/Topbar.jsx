import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Easy Wear</span>
        </div>
        <div className="topRight">
          <img src="https://cdn-icons-png.flaticon.com/512/3251/3251650.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
