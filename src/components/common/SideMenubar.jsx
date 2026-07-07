import { TieredMenu } from "primereact/tieredmenu";
import { getMenuItems } from "../../data/sidemenu";
import "../../styles/Sidemenu.css"

import { useNavigate } from "react-router-dom";
export default function SideMenu() {
  const navigate = useNavigate();
  return (
    <aside className="sidebar">
     

      <TieredMenu
        model={getMenuItems(navigate)}
        className="custom-tiered"
        breakpoint="960px"
      />
    </aside>
  );
}
