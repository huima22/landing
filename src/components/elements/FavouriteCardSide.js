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


function FavouriteCardSide({key,data}) {
  const images = require.context('../../../public/images', true);
  //const imgSrc = images(`./${data.snapshot}`);
  const imgSrc =  data.access == "Y" ? images("./" + data.snapshot) :  images("./" + data.snapshotlock);
   const [show, setShow] = useState(false);
   const target = useRef(null);

  return (

    <div className="tiles-item" >

                                 <div className="tiles-item-inner add-box-shadow" style={{background: "#FFF", borderRadius: "20px"}} >

                                  <span className="testimonial-item-link">



                                   <Image className="cursor-pointer" src={imgSrc} alt={data.snapshot} />

                                   </span>

                                   <div className="testimonial-item-footer content-left text-xs mb-0" >
                                     {data.name}

                                   </div>

                                   <Button ref={target} style={{background: "#FFF", border: "#FFF", textAlign: "left", paddingLeft: "1px", zIndex: "100"}} onClick={() => setShow(!show)}>
                                                                                                                      <p className="text-sm mb-0" style={{fontSize: "15px"}}>    {data.shortDescription} ... </p>
                                                                                                                   </Button>
                                                                                                                   <Overlay target={target.current} show={show} placement="left"  >
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
FavouriteCardSide.propTypes = propTypes;
FavouriteCardSide.defaultProps = defaultProps;
export default FavouriteCardSide;