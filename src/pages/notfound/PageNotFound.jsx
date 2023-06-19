import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";
const PageNotFound = () => {
  return (
    <div className="not-found">
      <Link to="/" className="link-home">
        <img
          src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
          alt="not-found"
        />
      </Link>
    </div>
  );
};

export default PageNotFound;
