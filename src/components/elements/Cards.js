import React, {useEffect, useState,useRef} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../elements/Image';
import * as Icon from 'react-bootstrap-icons';
import Card from 'react-bootstrap/Card';
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


function Cards({key,data, onClick}) {
  const images = require.context('../../../public/images', true);
  const imgSrc = images(`./${data.snapshot}`);
  const imgFei = images(`./fei.jpg`);
  const imgHui = images(`./hui.png`);
 const [likes, setLikes] = useState(data.likes);

  return (

    <div className="tiles-item"  onClick={onClick}>

                                 <div className="tiles-item-inner">

                                  <span className="testimonial-item-link">


                                   <Image
                                                className="image-border"

                                                src={imgSrc}

                                                alt={data.snapshot}
                                                />
                                   </span>

                                   <div className="testimonial-item-footer content-left text-xs mt-32 mb-0" >

                                   <p className="text-sm mb-0">
                                                      {data.name} </p>

                                    <p className="text-xxs mb-0" style={{color: "grey"}}> {data.description} </p>

                                    <span className="testimonial-item-link" onClick={() => setLikes(likes + 1)} >


                                     <Icon.Star size={20}  style={ { display: "inline" }} /></span>

                                     <span className="testimonial-item-link" > {likes}  </span>
                                     <span className="testimonial-item-link">
                                       <Icon.Eye size={20} style={ { display: "inline"}}/> {data.views}</span>




                                        <span className="testimonial-item-link" style={ { paddingLeft: "50px" }}>
                                        <Image    className="image-profile" src={imgFei} /> </span>

                                         <span className="testimonial-item-link" > Fei </span>
                                           <span className="testimonial-item-link">
                                                       <Image    className="image-profile" src={imgHui} />Hui</span>

   <div>
                                   { data.access == "N" ? <Link to="#0" className="small-button button mt-1 mb-1 " >Refresh Delayed</Link> : null }

                                     </div>
                                   </div>

                                 </div>
               </div>

  );


}
Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;
export default Cards;