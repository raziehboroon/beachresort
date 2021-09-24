//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s
import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";

const FeaturedRoom = () => {
  let { featuredRooms: rooms, loading } = useContext(RoomContext);

  rooms = rooms.map((room) => <Room key={room.id} room={room} />);
  return (
    <div className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </div>
  );
};

export default FeaturedRoom;
