import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import * as Icon from 'react-bootstrap-icons';
import FavouriteCard from '../elements/FavouriteCard';
import CollapseCards from '../elements/CollapseCards';
import dashboards from '../../myfavouriteDashboards.json'
//import Select from 'react-select';
import { Dropdown } from "react-bootstrap";


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const MyFavouriteDashboards = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  allDashboards,
  search,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    'padding-removal',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className && 'has-bottom-divider'
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    'padding-removal',
    topDivider && 'has-top-divider put-line-to-bottom ',
    bottomDivider && 'has-bottom-divider',

  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );


 console.log(dashboards);
  return (

   <section {...props}  className={outerClasses} >
           <div className="container tiles-wrap  has-bottom-divider" >
      <div className="tiles-item">
               <p className="text-sm mt-1 content-left "> Your Favourite Dashboards</p>
        </div>

         <div className="tiles-item" >

             <Dropdown style={{textAlign: "right"}}>
                          <Dropdown.Toggle variant="username" id="dropdown-basic">
                           <Icon.Funnel size={20}  style={ { display: "inline" }} />
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item style={{color: '#9CA9B3'}} href="#/action-1"><h7>CCIB</h7></Dropdown.Item>
                            <Dropdown.Item style={{color: '#9CA9B3'}} href="#/action-2">CCPB</Dropdown.Item>
                            <Dropdown.Item style={{color: '#9CA9B3'}} href="#/action-3">WM</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>

        </div>
           </div>
            <div className="container">
              <div className={innerClasses}>
                <div className={tilesClasses}>
       {

        dashboards.map(data  =>  {

                return  (

                 <FavouriteCard key={data.id} data={data} />

                 )

          })

}

                </div>
            </div>
          </div>
        </section>


  )

}

MyFavouriteDashboards.propTypes = propTypes;
MyFavouriteDashboards.defaultProps = defaultProps;

export default MyFavouriteDashboards;