import React, { useEffect, useRef, useState } from "react";
import "./Gigs.scss";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";
import LoadingPage from "../loading/LoadingPage";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();
  const { search } = useLocation();
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: async () => {
      return await newRequest(
        `/gigs${decodeURIComponent(search)}&min=${minRef.current.value}&max=${
          maxRef.current.value
        }&sort=${sort}`
      ).then((res) => res.data);
    },
  });
  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    refetch();
  };
  const removeFirstCharacter = (str) => {
    if (str.length === 0) {
      return "";
    }
    return str.slice(5);
  };

  useEffect(() => {
    refetch();
  }, [sort, search]);

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">
          CôngVIỆT {">"} {removeFirstCharacter(decodeURIComponent(search))}{" "}
          {">"}
        </span>
        <h1>{removeFirstCharacter(decodeURIComponent(search))}</h1>
        <div className="menu">
          <div className="left">
            <span>Ngân sách</span>
            <input ref={minRef} type="text" placeholder="tối thiểu" />
            <input ref={maxRef} type="text" placeholder="tối đa" />
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
          {isLoading ? (
            <LoadingPage />
          ) : error ? (
            "Error Page"
          ) : (
            data?.map((gig) => <GigCard key={gig._id} item={gig} />)
          )}
          {data?.length < 1 && <span>Không tìm thấy công việc nào!</span>}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
