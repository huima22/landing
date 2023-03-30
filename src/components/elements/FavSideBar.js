import React from "react";
import * as Icon from 'react-bootstrap-icons';
import dashboards from '../../myfavouriteDashboards.json';
import FavouriteCardSide from '../elements/FavouriteCardSide';
import Image from '../elements/Image';
const FavSideBar = props => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";
  const sidebarClassName = sidebarClass + " scroller";
  return (
    <div className={sidebarClass}>
       <button onClick={props.toggleSidebar} className="sidebar-toggle">
                <Image src={require('./../../assets/images/favourite icon.png')}/>
              <span style={{fontSize: "11px"}} > Favourite </ span>
        </button>
         <div className="scroller-side">
             {

                dashboards.map(data  =>  {

                        return  (

                         <FavouriteCardSide key={data.id} data={data} />

                         )

                  })

        }

           </div>

    </div>
  );
};
export default FavSideBar;
