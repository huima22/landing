import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../elements/Image';
import * as Icon from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
function CollapseCards() {
    const images = require.context('../../../public/images', true);
    const imgSrc = images(`./board1.png`);

    return (
     <div className="container-xs">
    <Accordion defaultActiveKey="0"  className="tiles-item padding-removal">
          <Accordion.Item eventKey="1" >
            <Accordion.Header className="remove-margin">
             <div className="tiles-item" >


                                                <span className="testimonial-item-link">


                                                 <Image
                                                              className="image-border"

                                                              src={imgSrc}
                                                              />
                                                 </span>



                      <div className="testimonial-item-footer content-left text-xs mb-0" >
                                                        <p className="text-sm mb-0">
                                                                           eOps Dashboard </p>


                                                         <span className="testimonial-item-link">
                                                          <Icon.Star size={20}  style={ { display: "inline" }} /></span>

                                                          <span className="testimonial-item-link" > 10 </span>
                                                          <span className="testimonial-item-link">
                                                            <Icon.Eye size={20} style={ { display: "inline"}}/> 20 </span>

                                                        </div>
             </div>
            </Accordion.Header>
            <Accordion.Body>
                 <div className="testimonial-item-footer content-left text-xs mb-0" >
                         <table>
                         <tr>
                        <h6> Data Source: </h6> 
                         </tr>
                         <tr>
                         <td>  eops data base </td>
                         </tr>
                         </table>
                               <p className="text-sm mb-0">Data Source: </p>
                               <p className="text-sm mb-0">Description: </p> <h3> This is a dummy dashboards </h3>
                               <p className="text-sm mb-0">Last Refresh Date: </p> <h3> Nov 22, 2022 </h3>
                               <span className="testimonial-item-link">
                                                 <Icon.Briefcase size={20}  style={ { display: "inline" }} /></span>
                                                                   <span className="testimonial-item-link" > Fei </span>
                                                                   <span className="testimonial-item-link">
                                                                   <Icon.Github size={20} style={ { display: "inline"}}/> Hui</span>
                                                 </div>
            </Accordion.Body>
          </Accordion.Item>
         </Accordion>
         </div>
    );

  }

export default CollapseCards;