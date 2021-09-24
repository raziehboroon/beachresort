//https://www.youtube.com/watch?v=l0JbuMVXaTs&t=393s
import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";
const Loading = () => {
  return (
    <div className="loading">
      <h4>rooms data is loading...</h4>
      <img src={loadingGif} alt="loading" />
    </div>
  );
};

export default Loading;
