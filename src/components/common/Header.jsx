import { Avatar } from "primereact/avatar";
import "../../styles/Header.css";

export default function Header() {
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

          <i className="pi pi-bell notification"></i>

          <span className="user-email">
            lavanya@gmail.com
          </span>

          <Avatar
            icon="pi pi-user"
            shape="circle"
            className="user-avatar"
          />

        </div>

      </div>

    </header>
  );
}