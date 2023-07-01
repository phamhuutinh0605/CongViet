import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Success.scss";
const Success = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent");
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await newRequest.put(`/orders?accessToken=${token}`, {
          payment_intent,
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);

  return (
    <div className="success">
      <div className="card">
        <div
          style={{
            borderRadius: 200,
            height: 200,
            width: 200,
            background: "#F8FAF5",
            margin: "0 auto",
          }}
          className="circle"
        >
          <i className="checkmark">✓</i>
        </div>
        <h1>Thanh Toán Thành Công</h1>
        <p>Cảm ơn vì đã lựa chọn chúng tôi!</p>
      </div>
    </div>
  );
};

export default Success;
