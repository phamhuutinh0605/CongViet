import React from "react";
import "./Featured.scss";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { cards } from "../../data.js";
import { ToastContainer, toast } from "react-toastify";
function Featured() {
  const inputRef = useRef("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (!inputRef?.current?.value) {
      toast.warning("Bạn chưa nhập tên công việc cần tìm!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const searchCat = cards?.filter((cat) =>
      cat?.title?.toLowerCase().includes(inputRef?.current?.value)
    );
    if (!searchCat?.[0]) {
      toast.warning("Không tìm thấy công việc này!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    navigate(`/gigs?cat=${searchCat?.[0].title}`);
  };
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Công<span>VIỆT</span> - Việc làm cho người <span>VIỆT</span>
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder='"Tìm những gì bạn muốn "'
                ref={inputRef}
              />
            </div>
            <button onClick={handleSearch}>Tìm kiếm</button>
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
          <img src="./img/bando.png" alt="" />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Featured;
