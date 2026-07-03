import { TieredMenu } from "primereact/tieredmenu";
import { getMenuItems } from "../../data/sidemenu";
import "../../styles/SideMenu.css"

import { useNavigate } from "react-router-dom";
export default function SideMenu() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <i className="pi pi-chart-line"></i>
        </div>

        <div>
          <h2>Sales</h2>
        
        </div>
      </div>

      <TieredMenu
        model={getMenuItems(navigate)}
        className="custom-tiered"
        breakpoint="960px"
      />
    </aside>
  );
}
