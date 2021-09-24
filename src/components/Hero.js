//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s

import React from "react";

const Hero = ({ children, hero }) => {
  return <header className={hero}>{children}</header>;
};

Hero.defaultProps = {
  hero: "defaultHero",
};
export default Hero;
