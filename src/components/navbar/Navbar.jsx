import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import newRequest from "../../utils/newRequest";
import { cards } from "../../data.js";
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

  const handleLogout = async () => {
    try {
      localStorage.setItem("currentUser", null);
      await newRequest.post("/auth/logout");
    } catch (error) {
      console.log(error);
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
          {!currentUser?.isSeller && <span>Tạo công việc của bạn</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  <Link className="link" to="/">
                    Thông tin cá nhân
                  </Link>
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Công Việc
                      </Link>
                      <Link className="link" to="/add">
                        Thêm Công Việc mới
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Đơn hàng
                  </Link>
                  <Link className="link" to="/messages">
                    Tin nhắn
                  </Link>
                  <Link className="link" to="/" onClick={handleLogout}>
                    Đăng xuất
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
                <Link className="link menuLink" to={`/gigs?cat=${cat.title}`}>
                  {cat.title}
                </Link>
              );
            })}
          </div>
          <hr />
        </>
      )}
    </div>
  );
}
export default Navbar;
