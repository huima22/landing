import React, {useEffect, useState , useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as Icon from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
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

function SmallCards({key,data}) {
const images = require.context('../../../public/images', true);

const imgSrc =  data.access == "Y" ? images("./" + data.snapshot) :  images("./" + data.snapshotlock);
const [show, setShow] = useState(false);
const target = useRef(null);
 return (
  <div className="small-card-tiles-item  small-card-container cursor-pointer" >

    <img
                                                  className="small-card-image"
                                                  style={{display: "inline", marginTop:"10px"}}
                                                  src={imgSrc}

                                                  alt={data.snapshot}

                                                  />


     <Button ref={target} style={{background: "#FFF", border: "#FFF", textAlign: "center", paddingLeft: "1px",  zIndex: "50"}} onClick={() => setShow(!show)}>
                                                                                                                          <p className="text-sm mb-0" style={{fontSize: "15px"}}><h6>{data.name}</h6></p>
                                                                                                                       </Button>
                                                                                                                       <Overlay style={{zIndex: "100"}} target={target.current} show={show} placement="left"  >
                                                                                                                         {(props) => (
                                                                                                                           <Tooltip id="overlay-example" {...props}>
                                                                                                                            {data.description}
                                                                                                                           </Tooltip>
                                                                                                                         )}
                                                                                                                       </Overlay>


  </div>
 );
}

SmallCards.propTypes = propTypes;
SmallCards.defaultProps = defaultProps;
export default SmallCards;