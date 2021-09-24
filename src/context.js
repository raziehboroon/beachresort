import React, { useState, useEffect } from "react";
// import items from "./data";
import Client from "./Contentful";
// Client.getEntries({ content_type: "beachResortRoom" }).then((response) =>
//   console.log(response.items)
// );

const RoomContext = React.createContext();

const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  // const getDataFun = () => {
  // };

  // const tempGetData = useRef();
  // tempGetData.current = getDataFun;

  useEffect(() => {
    // tempGetData.current();
    const getData = async () => {
      try {
        let response = await Client.getEntries({
          content_type: "beachResortRoom",
          // order: "sys.createdAt",
          order: "-fields.price",
        });
        // console.log(response.items);
        componentDidMount(response.items);
      } catch (err) {
        console.log(err);
      }
    };
    const componentDidMount = (items) => {
      let rooms = formatData(items);
      let featuredRooms = rooms.filter((room) => room.featured);
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));
      setState((prevValue) => {
        return {
          ...prevValue,
          rooms,
          sortedRooms: rooms,
          featuredRooms,
          loading: false,
          price: maxPrice,
          maxPrice,
          maxSize,
        };
      });
      // console.log(featuredRooms);
    };
    const formatData = (items) => {
      let tempItems = items.map((item) => {
        let id = item.sys.id;
        let images = item.fields.images.map((image) => image.fields.file.url);
        let room = { ...item.fields, images, id };
        return room;
      });
      return tempItems;
    };
    getData();
  }, []);

  // state.rooms,
  // state.loading,
  // state.sortedRooms,
  // state.featuredRooms,
  // state.price,
  // state.maxPrice,
  // state.maxSize,

  const getRoom = (slug) => {
    let tempRooms = [...state.rooms];
    const room = tempRooms.find((item) => item.slug === slug);
    return room;
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    setState((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  useEffect(() => {
    const filterRooms = () => {
      let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } =
        state;
      let tempRooms = [...rooms];
      // filter by Type
      if (type !== "all") {
        tempRooms = tempRooms.filter((room) => room.type === type);
      }
      // filter by capacity
      //  state.capacity  is a string
      capacity = Number(capacity);
      if (capacity !== 1) {
        tempRooms = tempRooms.filter((room) => room.capacity === capacity);
      }
      // price range
      price = Number(price);
      if (price !== 0) {
        tempRooms = tempRooms.filter((room) => room.price <= price);
      }

      //room size
      tempRooms = tempRooms.filter(
        (item) => item.size >= Number(minSize) && item.size <= Number(maxSize)
      );

      //breakfast
      if (breakfast) {
        tempRooms = tempRooms.filter((item) => item.breakfast);
      }

      //pets
      if (pets) {
        tempRooms = tempRooms.filter((item) => item.pets);
      }

      if (minSize !== 0 || maxSize)
        setState((prevValue) => {
          return { ...prevValue, sortedRooms: tempRooms };
        });
    };
    filterRooms();
  }, [
    state.type,
    state.capacity,
    state.price,
    state.minSize,
    state.maxSize,
    state.breakfast,
    state.pets,
  ]);

  return (
    <RoomContext.Provider value={{ ...state, getRoom, handleChange }}>
      {children}
    </RoomContext.Provider>
  );
};

// const RoomConsumer = RoomProvider.Consumer;
//also export RoomConsumer
export { RoomContext, RoomProvider };
