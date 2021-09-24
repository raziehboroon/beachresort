// https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s
import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;
