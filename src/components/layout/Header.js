import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from '../elements/Image';
const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes} style={{display: 'flex', height: "6%"}}
    >
     <Logo style={{marginLeft: '5px', marginTop: '5px'}} /> <h4 style={{marginTop: "10px"}}>databox</h4>
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>

          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                <ul className={
                                                    classNames(
                                                      'list-reset text-xs',
                                                      navPosition && `header-nav-${navPosition}`
                                                    )}>


                                                    <li>
                                                        <DropdownButton className="dropdown-item-button" title="Catalogue">
                                                                                                 <Dropdown.ItemText>Overview</Dropdown.ItemText>
                                                                                                 <Dropdown.Item as="button">Design</Dropdown.Item>
                                                                                                 <Dropdown.Item as="button">ProtoTypes</Dropdown.Item>
                                                                                                 <Dropdown.Item as="button">Stories</Dropdown.Item>
                                                                                               </DropdownButton>
                                                    </li>
                                                  </ul>


                 <ul className={
                                    classNames(
                                      'list-reset text-xs',
                                      navPosition && `header-nav-${navPosition}`
                                    )}>


                                    <li>
                                        <DropdownButton className="dropdown-item-button" title="DataSuperHero">
                                                                                 <Dropdown.ItemText>Overview</Dropdown.ItemText>
                                                                                 <Dropdown.Item as="button">Past Lessons</Dropdown.Item>
                                                                                 <Dropdown.Item as="button">Dashboards</Dropdown.Item>

                                                                               </DropdownButton>
                                    </li>
                                  </ul>



                 <ul className={
                                    classNames(
                                      'list-reset text-xs',
                                      navPosition && `header-nav-${navPosition}`
                                    )}>
                                    <li>
                                        <DropdownButton className="dropdown-item-button" title="Community">
                                            <Dropdown.ItemText>Reach to US</Dropdown.ItemText>
                                            <Dropdown.Item as="button">Best Practices</Dropdown.Item>
                                            <Dropdown.Item as="button">Events</Dropdown.Item>
                                            <Dropdown.Item as="button">Career</Dropdown.Item>
                                          </DropdownButton>
                                    </li>
                                  </ul>
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>


                    <li>
                        <DropdownButton className="dropdown-item-button" title="Resource">
                                                                 <Dropdown.ItemText>Overview</Dropdown.ItemText>
                                                                 <Dropdown.Item as="button">Alteryx</Dropdown.Item>
                                                                 <Dropdown.Item as="button">Tableau</Dropdown.Item>
                                                                 <Dropdown.Item as="button">Data Analytics</Dropdown.Item>
                                                               </DropdownButton>
                    </li>
                  </ul>


                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right "
                    >
                      <li>
                        <Link to="#0" className="button button-primary button-wide-mobile button-sm"  onClick={closeMenu}>Request Demo</Link>
                      </li>
                    </ul>}


                </div>


              </nav>

            </>}
        </div>
      </div>

                 <ul className={classNames(
                                                                                   'list-reset text-xs',
                                                                                   navPosition && `header-nav-${navPosition}`
                                                                                 )} style={{marginTop: '10px'}} > <h7 style={{marginTop: "25px", marginRight: "5px"}}>Sandeep, Bisawa</h7>  <Image className="image-profile" style={{marginRight: '10px'}} src={require("./../../assets/images/sandeep.jpg" )}/>
                                                                           </ul>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
