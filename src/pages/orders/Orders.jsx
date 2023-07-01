import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.scss";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import LoadingPage from "../loading/LoadingPage";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.user;
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;

  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders?accessToken=${token}`).then((res) => {
        return res.data;
      }),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const id = sellerId + buyerId;

    try {
      const res = await newRequest.get(
        `/conversations/single/${id}?accessToken=${token}`
      );
      navigate(`/message/${res.data.id}`);
    } catch (err) {
      if (err.response.status === 404) {
        const res = await newRequest.post(
          `/conversations?accessToken=${token}`,
          {
            to: currentUser.isSeller ? buyerId : sellerId,
          }
        );
        navigate(`/message/${res.data.id}`);
      }
    }
  };
  return (
    <div className="orders">
      {isLoading ? (
        <LoadingPage />
      ) : error ? (
        "Error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Đơn hàng</h1>
          </div>
          <table>
            <tr>
              <th>Hình ảnh</th>
              <th>Tiêu đề</th>
              <th>Giá</th>
              <th>Liên hệ</th>
            </tr>
            {data.length < 1
              ? "Bạn chưa có đơn hàng nào!"
              : data?.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <img className="image" src={order.img} alt="" />
                    </td>
                    <td>{order.title}</td>
                    <td>{order.price}</td>
                    <td>
                      <img
                        className="message"
                        src="./img/message.png"
                        alt=""
                        onClick={() => handleContact(order)}
                      />
                    </td>
                  </tr>
                ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
