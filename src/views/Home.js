import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import SideBarWrap from '../components/elements/SideBarWrap';
import Image from '../components/elements/Image';
import Chatbox from '../components/elements/Chatbox';
const Home = () => {

  return (
    <>
      <SideBarWrap />
      <Hero className="illustration-section-01" />

 <Chatbox />


      <FeaturesTiles />

      <FeaturesSplit invertMobile topDivider imageFill className="" />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
}

export default Home;