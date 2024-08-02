import React from "react";
import "../App.css";
const NewsCard = ({ title, urlToImage, description, url }) => {
  return (
    <div className="card">
      <div className="img-box">
        <img src={urlToImage} className="card-img-top" alt="i" />
      </div>
      <div className="card-body">
        <h5 className="card-title">
          <b>{title.slice(0,50)}...</b>
        </h5>
        <p className="card-text">{description.slice(0, 60)}...</p>
        <a href={url} className="primary-btn">
          See more
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
