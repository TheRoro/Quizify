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
        <div className="menu-bars">
          <HiIcons.HiMenuAlt3 onClick={showSidebar} />
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <nav className="left-nav" onClick={showSidebar}>
          {/* EL REGRESO */}
        </nav>
        <nav className="right-nav">
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <div className="menu-bars">
                <HiIcons.HiX />
              </div>
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
      </nav>
    </>
  );
}

export default Sidebar;
