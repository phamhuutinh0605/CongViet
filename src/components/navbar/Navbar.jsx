import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import newRequest from "../../utils/newRequest";
import { cards } from "../../data.js";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faFileCirclePlus,
  faRightFromBracket,
  faSackDollar,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const user = currentUser?.user;

  useEffect(() => {
    if (currentUser?.user) {
      toast.success("Đăng nhập thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [currentUser?.user._id]);
  const handleLogout = async () => {
    try {
      localStorage.setItem("currentUser", null);
      await newRequest.post("/auth/logout");
      toast.info("Đăng xuất thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.log(error);
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">
              <span>Công</span>
            </span>
          </Link>
          <span className="dot">VIỆT</span>
        </div>
        <div className="links">
          <span>Doanh Nghiệp</span>
          <span>Khám phá</span>
          {!user?.isSeller && <span>Tạo công việc của bạn</span>}
          {user ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={user.img || "/img/noavatar.jpg"} alt="" />
              <span>{user?.username}</span>
              {open && (
                <div className="options">
                  <Link className="link" to="/userprofile">
                    <FontAwesomeIcon icon={faUserTie} />
                    {""} Thông tin cá nhân
                  </Link>
                  {user.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        <FontAwesomeIcon icon={faBriefcase} />
                        {""} Công việc của bạn
                      </Link>
                      <Link className="link" to="/add">
                        <FontAwesomeIcon icon={faFileCirclePlus} />
                        {""} Thêm công việc mới
                      </Link>
                      <Link className="link" to="/orders">
                        <FontAwesomeIcon icon={faSackDollar} />
                        {""} Đơn hàng
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/messages">
                    <FontAwesomeIcon icon={faMessage} />
                    {""} Tin nhắn
                  </Link>
                  <Link className="link" to="/" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    {""} Đăng xuất
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/login">
                <button>Đăng nhập</button>
              </Link>
              <Link className="link" to="/register">
                <button>Đăng ký</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            {cards.map((cat) => {
              return (
                <Link
                  className="link menuLink"
                  to={`/gigs?cat=${cat.title}`}
                  key={cat.id}
                >
                  {cat.title}
                </Link>
              );
            })}
          </div>
          <hr />
        </>
      )}
      <ToastContainer />
    </div>
  );
}
export default Navbar;
