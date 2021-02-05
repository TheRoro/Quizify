import React from "react";
import { Link } from "react-router-dom";
import * as HiIcons from "react-icons/hi";
import { SidebarMenu } from "./sidebarMenu";
import "./sidebar.scss";
import { useState } from "react";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <HiIcons.HiMenuAlt3 onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <HiIcons.HiX />
            </Link>
          </li>
          {SidebarMenu.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
