import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      if (res.data?.user?.isAdmin) {
        const data = encodeURIComponent(JSON.stringify(res.data));
        window.open(
          // `https://congviet-admin.netlify.app?data=${res.data}`,
          `http://localhost:5174?data=${data}`,
          "_blank"
        );
      }
      navigate("/");
      window.location.reload();
    } catch (err) {
      if (err) {
        toast.error(err?.response?.data, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>
        <label htmlFor="">Tên đăng nhập</label>
        <input
          name="username"
          type="text"
          placeholder="tinhph"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Mật khẩu</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Đăng nhập</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Login;
