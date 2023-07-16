import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CatCard.scss";
import { ToastContainer, toast } from "react-toastify";

function CatCard({ card }) {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.user;
  const validateUser = () => {
    if (!currentUser) {
      navigate(`/login`);
      return toast.info("Bạn chưa đăng nhập", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    navigate(`/gigs?cat=${card.title}`);
  };
  return (
    <Link onClick={validateUser}>
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}
export default CatCard;
