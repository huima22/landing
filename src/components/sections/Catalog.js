import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Catalog = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  showCatalog,
  ...props
}) => {
 const outerClasses = classNames(
    'testimonial section',
    'padding-removal',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
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

 if (showCatalog) {
  return  (
    <section {...props}  className={outerClasses} >
 <span className="text-sm mt-2 mb-2 " style={{ display: 'flex', justifyContent: 'left'}}> Browse the Catalog </span>

              <div className="container tiles-wrap">



        <div className="container">
             <div className={innerClasses}>
                <div className={tilesClasses}>

                 <div className="tiles-item-catalog"  >
                     <div className="tiles-item-inner-catalog">
                            <span className="testimonial-item-link" style={{display: 'flex'}}>
                                 <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/finance.png" )} /> </span>
                                  <span style={{marginTop: '10px', marginLeft: '10px', fontSize: '15px'}}> Business </span>
                            </span>
                     </div>
                 </div>

                  <div className="tiles-item-catalog" >
                                      <div className="tiles-item-inner-catalog" >
                                             <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                  <span>  <Image style={{height: '50px', width: '70px'}} src={require("./../../assets/images/fwiconssc/ClientManagement.png" )} /> </span>
                                                   <span style={{marginLeft: '10px', fontSize: '15px'}}> Client Management </span>
                                             </span>
                                      </div>
                  </div>


                  <div className="tiles-item-catalog" >
                                                        <div className="tiles-item-inner-catalog" >
                                                               <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                    <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/trading.png" )} /> </span>
                                                                     <span style={{ marginTop: '10px',marginLeft: '5px', fontSize: '15px'}}> Investors</span>
                                                               </span>
                                                        </div>
                                    </div>


                   <div className="tiles-item-catalog" >
                                                                          <div className="tiles-item-inner-catalog" >
                                                                                 <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                                      <span>  <Image style={{height: '50px', width: '80px'}} src={require("./../../assets/images/fwiconssc/climate.png" )} /> </span>
                                                                                       <span style={{ marginLeft: '5px', fontSize: '15px'}}> Global Banking Operations </span>
                                                                                 </span>
                                                                          </div>
                   </div>


                   <div className="tiles-item-catalog" >
                                                                                             <div className="tiles-item-inner-catalog" >
                                                                                                    <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                                                         <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/cldm.png" )} /> </span>
                                                                                                          <span style={{ marginTop: '10px', marginLeft: '5px', fontSize: '15px'}}> CDLM</span>
                                                                                                    </span>
                                                                                             </div>
                   </div>

                   <div className="tiles-item-catalog" >
                                                                                                                <div className="tiles-item-inner-catalog" >
                                                                                                                       <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                                                                            <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/Icons-2-01.png" )} /> </span>
                                                                                                                             <span style={{ marginTop: '10px', marginLeft: '5px', fontSize: '15px'}}> Regions</span>
                                                                                                                       </span>
                                                                                                                </div>
                   </div>

                   <div className="tiles-item-catalog" >
                                                                                                                                   <div className="tiles-item-inner-catalog" >
                                                                                                                                          <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                                                                                               <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/analytics.png" )} /> </span>
                                                                                                                                                <span style={{  marginLeft: '5px', fontSize: '15px'}}> CPM Analytics</span>
                                                                                                                                          </span>
                                                                                                                                   </div>
                   </div>

                  <div className="tiles-item-catalog" >
                                                 <div className="tiles-item-inner-catalog" >
                                                        <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                             <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/products.png" )} /> </span>
                                                              <span style={{ marginTop: '10px', marginLeft: '5px', fontSize: '15px'}}> Products</span>
                                                        </span>
                                                                                                                                                      </div>
                  </div>


                  <div className="tiles-item-catalog" >
                              <div className="tiles-item-inner-catalog" >
                                     <span className="testimonial-item-link" style={{display: 'flex'}}>
                                          <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/wow.png" )} /> </span>
                                           <span style={{ marginTop: '10px', marginLeft: '5px', fontSize: '15px'}}> nWoWs</span>
                                     </span>
                              </div>
                 </div>


                 <div className="tiles-item-catalog" >
                                               <div className="tiles-item-inner-catalog" >
                                                      <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                           <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/stats.png" )} /> </span>
                                                            <span style={{marginLeft: '5px', fontSize: '15px'}}>  User Statistics</span>
                                                      </span>
                                               </div>
                                  </div>


               <div className="tiles-item-catalog" >
                                                              <div className="tiles-item-inner-catalog" >
                                                                     <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                          <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/lapMap.png" )} /> </span>
                                                                           <span style={{ marginTop: '10px', marginLeft: '5px', fontSize: '15px'}}>  Lap Map</span>
                                                                     </span>
                                                              </div>
               </div>


              <div className="tiles-item-catalog" >
                                                                            <div className="tiles-item-inner-catalog" >
                                                                                   <span className="testimonial-item-link" style={{display: 'flex'}}>
                                                                                        <span>  <Image style={{height: '50px', width: '50px'}} src={require("./../../assets/images/fwiconssc/ClientList.png" )} /> </span>
                                                                                         <span style={{ marginTop: '10px', marginLeft: '5px', fontSize: '15px'}}>  Client Lists</span>
                                                                                   </span>
                                                                            </div>
                             </div>


                </div>
                </div>
             </div>
        </div>

    </section>

  )
 } else {
    return null
 }
}
Catalog.propTypes = propTypes;
Catalog.defaultProps = defaultProps;

export default Catalog;