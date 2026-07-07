import { Avatar } from "primereact/avatar";
import "../../styles/Header.css";

import { Menu } from "primereact/menu";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const menu = useRef(null);
  const profileItems = [
    {
      label: "Profile",
      icon: "pi pi-user",
      command: () => navigate("/profile"),
    },
    {
      label: "Settings",
      icon: "pi pi-cog",
      command: () => navigate("/settings"),
    },
    {
      separator: true,
    },
    {
      label: "Logout",
      icon: "pi pi-sign-out",
      command: () => navigate("/logout"),
    },
  ];
  return (
    <header className="header">
      {/* Left Logo Section */}
      <div className="header-logo">
        <span>SalesPro</span>
      </div>

      {/* Right Header */}
      <div className="header-content">
        <div className="header-left">
          <div className="search-box">
            <i className="pi pi-search"></i>
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div className="header-user">
          <div className="notification">
            <i className="pi pi-bell"></i>
            <span className="notification-badge"></span>
          </div>

          <div className="user-profile" onClick={(e) => menu.current.toggle(e)}>
            <Avatar icon="pi pi-user" shape="circle" className="user-avatar" />

            <div className="user-details">
              <span className="user-name">Lavanya</span>
              <span className="user-email">lavanya@gmail.com</span>
            </div>

            <i className="pi pi-angle-down"></i>
          </div>

          <Menu
            model={profileItems}
            popup
            ref={menu}
            id="profile_menu"
            className="profile-menu"
          />
        </div>
      </div>
    </header>
  );
}
