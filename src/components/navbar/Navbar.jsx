import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

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

  const currentUser = {
    id: 1,
    username: "Ly Ly",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">
              <span>Công</span>
              <span>việt</span>
            </span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Doanh Nghiệp</span>
          <span>Khám phá</span>
          {!currentUser?.isSeller && <span>Trở thành Người bán</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
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
                  <Link className="link" to="/">
                    Đăng xuất
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span>Đăng nhập</span>
              <Link className="link" to="/register">
                <button>Tham gia</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Đồ họa & Thiết kế
            </Link>
            <Link className="link menuLink" to="/">
              Video & Hoạt hình
            </Link>
            <Link className="link menuLink" to="/">
              Viết lách & Phiên dịch
            </Link>
            <Link className="link menuLink" to="/">
              Dịch vụ AI
            </Link>
            <Link className="link menuLink" to="/">
              Marketing số hóa
            </Link>
            <Link className="link menuLink" to="/">
              Âm nhạc & Âm thanh
            </Link>
            <Link className="link menuLink" to="/">
              Lập trình & Công nghệ
            </Link>
            <Link className="link menuLink" to="/">
              Kinh doanh
            </Link>
            <Link className="link menuLink" to="/">
              Lối sống
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}
export default Navbar;
