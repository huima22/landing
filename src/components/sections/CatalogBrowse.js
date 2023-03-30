import React, {useState, useEffect} from 'react';
import Image from '../elements/Image';
import SmallCards from '../elements/SmallCards';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';



function CatalogBrowse({showCatalog, allDashboards,
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
...props}) {
   const propTypes = {
     ...SectionTilesProps.types
   }

   const defaultProps = {
     ...SectionTilesProps.defaults
   }

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

    const outerClasses = classNames(
       'testimonial section',
       'padding-removal',
       topOuterDivider && 'has-top-divider',
       bottomOuterDivider && 'has-bottom-divider',
       hasBgColor && 'has-bg-color',
       invertColor && 'invert-color',
       className

     );

      const [dashboardsToRender, setDashboardsToRender] = useState("finance");
      const updateLeft = (e) => {
       setDashboardsToRender(e);
       console.log(e);
      }


   if(showCatalog) {
    return (
     <section {...props}  className={outerClasses} >
    <span className="text-sm mt-2 mb-2 has-bot has-bottom-divider" style={{ display: 'flex', justifyContent: 'left'}}> Browse the Catalog </span>
    <div className="container main-container">

    <div className="left-container">

               <div className={ dashboardsToRender == "business" ? "tiles-item-catalog" : "small-card-catalog-choice"} onClick={() => updateLeft("business")}>
                                 <div className= { dashboardsToRender == "business" ? "tiles-item-inner-catalog" : ""}>
                                        <span className="testimonial-item-link" style={{display: 'flex'}}>
                                             <span>  <Image style={{height: '40px', width: '50px'}} src={require("./../../assets/images/fwiconssc/businessIcon.png" )} /> </span>
                                              <span className="" style={{marginTop: '10px', marginLeft: '10px', fontSize: '15px'}}> Business </span>
                                        </span>
                                 </div>
                             </div>

                              <div className={ dashboardsToRender == "finance" ? "tiles-item-catalog" : "small-card-catalog-choice"} onClick={() => updateLeft("finance")}>
                                                  <div className={ dashboardsToRender == "finance" ? "tiles-item-inner-catalog" : ""} >
                                                         <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                              <span>  <Image style={{height: '40px', width: '40px'}} src={require("./../../assets/images/fwiconssc/ClientManagementIcon.png" )} /> </span>
                                                               <span style={{marginLeft: '20px', marginTop:'10px', fontSize: '15px'}}> Client Management </span>
                                                         </span>
                                                  </div>
                              </div>


                               <div className={ dashboardsToRender == "investors" ? "tiles-item-catalog" : "small-card-catalog-choice"} onClick={() => updateLeft("investors")}>
                                                                                <div className={ dashboardsToRender == "investors" ? "tiles-item-inner-catalog" : ""} >
                                                                                       <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                                            <span>  <Image style={{height: '40px', width: '50px'}} src={require("./../../assets/images/fwiconssc/InvestorIcon.png" )} /> </span>
                                                                                             <span style={{marginLeft: '10px', marginTop:'10px', fontSize: '15px'}}> Investors </span>
                                                                                       </span>
                                                                                </div>
                              </div>


                              <div className={ dashboardsToRender == "Global Banking" ? "tiles-item-catalog" : "small-card-catalog-choice"} onClick={() => updateLeft("Global Banking")}>
                                                                                                              <div className={ dashboardsToRender == "Global Banking" ? "tiles-item-inner-catalog" : ""} >
                                                                                                                     <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                                                                          <span>  <Image style={{height: '40px', width: '50px'}} src={require("./../../assets/images/fwiconssc/globalIcon.png" )} /> </span>
                                                                                                                           <span style={{marginLeft: '10px', marginTop:'10px', fontSize: '15px'}}> Global Banking </span>
                                                                                                                     </span>
                                                                                                              </div>
                              </div>

                               <div className={ dashboardsToRender == "Client List" ? "tiles-item-catalog" : "small-card-catalog-choice"} onClick={() => updateLeft("Client Lists")}>
                                                                                                                                             <div className={ dashboardsToRender == "Client Lists" ? "tiles-item-inner-catalog" : ""} >
                                                                                                                                                    <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                                                                                                         <span>  <Image style={{height: '40px', width: '50px'}} src={require("./../../assets/images/fwiconssc/ClientListIcon.png" )} /> </span>
                                                                                                                                                          <span style={{marginLeft: '10px', marginTop:'10px', fontSize: '15px'}}> Client Lists</span>
                                                                                                                                                    </span>
                                                                                                                                             </div>
                               </div>

                               <div className={ dashboardsToRender == "Products" ? "tiles-item-catalog" : "small-card-catalog-choice"} onClick={() => updateLeft("Products")}>
                                                                                                                                                                            <div className={ dashboardsToRender == "Products" ? "tiles-item-inner-catalog" : ""} >
                                                                                                                                                                                   <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                                                                                                                                        <span>  <Image style={{height: '40px', width: '40px', marginLeft: "5px"}} src={require("./../../assets/images/fwiconssc/ProductIcon.png" )} /> </span>
                                                                                                                                                                                         <span style={{marginLeft: '10px', marginTop:'15px', fontSize: '15px', marginLeft: "20px"}}>Products</span>
                                                                                                                                                                                   </span>
                                                                                                                                                                            </div>
                               </div>





    </div>
     <div className="right-container scroller">
      <div className={innerClasses}>
                     <div className={tilesClasses}>
                    {
                     allDashboards.filter((val) => {
                              if(val.category.toLowerCase().includes(dashboardsToRender.toLowerCase())){
                                              return val
                                 }
                              }).map( (data)  =>  {

                                    return  (


                                            <SmallCards key={data.id} data={data} />


                                     )

                              })


                    }
                   </div>
                   </div>
          </div>
       </div>
 </section>
       );
   } else {
    return null;
   }


}

export default CatalogBrowse;