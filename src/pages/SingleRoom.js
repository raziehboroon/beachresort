//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s
import React, { useContext } from "react";
// import Title from "../components/Title";
// import Hero from "../components/Hero";
import Banner from "../components/Banner";
import defaultBcg from "../images/room-1.jpeg";
import { Link, useParams } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

const SingleRoom = ({ props }) => {
  const { getRoom } = useContext(RoomContext);
  const { id } = useParams();
  const room = getRoom(id);

  //componentDidMount(){}
  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  // console.log(images);
  const [mainImg, ...defaultImg] = images;
  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => (
            <img key={index} src={item} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size}SQFT</h6>
            <h6>
              max capacity: {capacity} {capacity > 1 ? "people" : "person"}
            </h6>

            <h6>{!pets && "no "}pets allowed</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
