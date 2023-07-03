import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      navigate("/login");
    } catch (err) {
      if (err) {
        console.log(err);
        toast.error(err?.response?.data, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
  };
  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Tạo Tài Khoản</h1>
          <label htmlFor="">Tên đăng nhập *</label>
          <input
            name="username"
            type="text"
            placeholder="Tên của bạn..."
            onChange={handleChange}
            required
          />
          <label htmlFor="">Email *</label>
          <input
            name="email"
            type="email"
            placeholder="Email của bạn..."
            onChange={handleChange}
            required
          />
          <label htmlFor="">Mật khẩu *</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Ảnh đại diện</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Địa chỉ *</label>
          <input
            name="country"
            type="text"
            placeholder="Đường số A, phường B, quận C, thành phố D..."
            onChange={handleChange}
            required
            minLength={20}
          />
          <button type="submit">Đăng ký</button>
        </div>
        <div className="right">
          <h1>Tôi muốn tìm việc</h1>
          <div className="toggle">
            <label htmlFor="">Kích hoạt tài khoản tìm việc</label>
            <label className="switch">
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round"></span>
            </label>
          </div>
          <label htmlFor="">Số điện thoại *</label>
          <input
            name="phone"
            type="text"
            placeholder="+84 234 567 890"
            onChange={handleChange}
            required
            maxLength={10}
            minLength={10}
          />
          <label htmlFor="">Mô tả</label>
          <textarea
            placeholder="Hãy mô tả ngắn gọn về bạn..."
            name="desc"
            id=""
            cols="30"
            rows="10"
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Register;
