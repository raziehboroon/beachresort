//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s

import React, { useContext } from "react";
import RoomsList from "./RoomsList";
import RoomsFilter from "./RoomsFilter";
import { RoomContext } from "../context";
import Loading from "./Loading";
const RoomsContainer = () => {
  const { rooms, sortedRooms, loading } = useContext(RoomContext);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
      </>
    );
  }
};

export default RoomsContainer;
