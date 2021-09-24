//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s

import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunatly no rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((room, index) => (
          <Room key={index} room={room} />
        ))}
      </div>
    </section>
  );
};

export default RoomsList;
