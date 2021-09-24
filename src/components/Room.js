//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s

import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

const Room = ({ room }) => {
  // console.log(room);
  const { images, name, slug, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt={name} />
        <div className="price-top">
          <h6>{price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="room-link btn-primary">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Room;

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    price: PropTypes.number,
  }).isRequired,
};
