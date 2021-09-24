//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s

import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";
// get all unique values
// import data from "../data";
//method 1-----------
// const uniqueTypes = data.reduce((acc, item) => {
//   if (!acc.includes(item.fields.type)) {
//     acc.push(item.fields.type);
//   }
//   return acc;
// }, []);
// method 2-----------

const getUnique = (items, value) => [
  ...new Set(items.map((item) => item[value])),
];

const RoomsFilter = () => {
  const {
    rooms,
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    // setMyState,
  } = useContext(RoomContext);

  // get types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  // get capacity/guest
  let people = getUnique(rooms, "capacity");
  // map to jsx
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={type}
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
            value={capacity}
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end of select type */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            className="form-control"
            name="price"
            type="range"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
          />
        </div>
        {/* end of room price */}
        {/* room size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              className="size-input"
              onChange={handleChange}
            />
            <input
              type="nimber"
              name="maxSize"
              id="size"
              value={maxSize}
              className="size-input"
              onChange={handleChange}
            />
          </div>
        </div>
        {/* end of room size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomsFilter;
