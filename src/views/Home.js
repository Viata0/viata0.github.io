import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesCoinBG from '../components/sections/FeaturesCoinBG';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import FeaturesMarketPlace from '../components/sections/FeaturesMarketPlace';
import FeaturesTeamInfo from '../components/sections/FeaturesTeamInfo';
import RoadMap from '../components/sections/RoadMap';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <FeaturesCoinBG invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesMarketPlace topDivider />
      <FeaturesTiles topDivider/>
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <Testimonial topDivider />
      <RoadMap topDivider />
      <FeaturesTeamInfo topDivider/>
      <Cta split />
    </>
  );
}

export default Home;