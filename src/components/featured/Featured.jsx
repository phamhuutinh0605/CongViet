import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Công <span>VIỆT</span> - Việc làm cho người <span>VIỆT</span>
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input type="text" placeholder='"Tìm những gì bạn muốn "' />
            </div>
            <button>Tìm kiếm</button>
          </div>
          <div className="popular">
            <span>Phổ biến:</span>
            <button>Thiết kế Web</button>
            <button>WordPress</button>
            <button>Thiết kế Logo</button>
            <button>Dịch vụ AI</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/man.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
