import React, { useRef, useState } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          Fiver {">"} Đồ họa & Thiết kế {">"}
        </span>
        <h1>Nghệ sĩ AI</h1>
        <p>
          Khám phá ranh giới của nghệ thuật và công nghệ với các nghệ sĩ AI của
          CôngVIỆT
        </p>
        <div className="menu">
          <div className="left">
            <span>Ngân sách</span>
            <input ref={minRef} type="number" placeholder="tối thiểu" />
            <input ref={maxRef} type="number" placeholder="tối đa" />
            <button onClick={apply}>Áp dụng</button>
          </div>
          <div className="right">
            <span className="sortBy">Sắp xếp theo</span>
            <span className="sortType">
              {sort === "sales" ? "Bán chạy nhất" : "Mới nhất"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Mới nhất</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Bán chạy nhất</span>
                )}
                <span onClick={() => reSort("sales")}>Phổ biến</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
