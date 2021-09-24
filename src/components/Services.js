//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s

import React from "react";

import { serviceData } from "../serviceData";
import Title from "./Title";
const Services = () => {
  // const [data, setData] = useState(serviceData);
  const data = serviceData;

  return (
    <div className="services">
      <Title title="services" />
      <div className="services-center">
        {data.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
