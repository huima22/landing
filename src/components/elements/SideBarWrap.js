import React, { useState } from "react";
import FavSideBar from './FavSideBar';


function SideBarWrap() {
   const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    };
    return (
      <span>
        <FavSideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
     </span>
    );
}

export default SideBarWrap;