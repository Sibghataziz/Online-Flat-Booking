import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import Banner from "./Banner";
import Services from "./Services";
// import FeaturedRooms from "./FeaturedRooms";




const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious flats"
          subtitle="2BHK Flat starting at Rs 100000">
          <Link to="/rooms" className="btn-primary">
            ALL FLATS
          </Link>
        </Banner>
      </Hero>
      <Services />
      {/* <FeaturedRooms /> */}
    </>
  );
};

export default home;
