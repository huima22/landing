import React, {useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../elements/Image';
import * as Icon from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';

import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
const propTypes = {
  key: PropTypes.string,
  data: PropTypes.object,
  onClick: PropTypes.func
}

const defaultProps = {
  key: null,
  data: null,
  onClick: undefined
}


function FavouriteCard({key,data}) {
  const images = require.context('../../../public/images', true);
  const imgSrc =  data.access == "Y" ? images("./" + data.snapshot) :  images("./" + data.snapshotlock);
  console.log(data);
   const [show, setShow] = useState(false);
   const target = useRef(null);

  return (

    <div className="tiles-item" >

                                 <div className="tiles-item-inner">

                                  <span className="testimonial-item-link">



                                   <Image className="cursor-pointer" src={imgSrc}  />

                                   </span>

                                   <div className="testimonial-item-footer content-left text-xs mb-0" >
                                     {data.name}

                                   </div>

                                   <Button ref={target} style={{background: "#FFF", border: "#FFF", textAlign: "left", paddingLeft: "1px"}} onClick={() => setShow(!show)}>
                                                                                                                      <p className="text-sm mb-0" style={{fontSize: "15px"}}>    {data.shortDescription} ... </p>
                                                                                                                   </Button>
                                                                                                                   <Overlay target={target.current} show={show} placement="left">
                                                                                                                     {(props) => (
                                                                                                                       <Tooltip id="overlay-example" {...props}>
                                                                                                                        {data.description}
                                                                                                                       </Tooltip>
                                                                                                                     )}
                                                                                                                   </Overlay>





                                     <span className="testimonial-item-link"  style={{textAlign: "right"}} >




                                      <Icon.StarFill size={20}  style={ { display: "inline" }} /></span>
                                 </div>
               </div>

  );


}
FavouriteCard.propTypes = propTypes;
FavouriteCard.defaultProps = defaultProps;
export default FavouriteCard;