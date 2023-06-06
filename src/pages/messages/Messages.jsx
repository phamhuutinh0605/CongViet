import React from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Tin Nhắn</h1>
        </div>
        <table>
          <tr>
            <th>
              {currentUser.isSeller ? "Nhà tuyển dụng" : "Người Tìm Việc"}
            </th>
            <th>Tin nhắn mới nhất</th>
            <th>Ngày</th>
            <th>Trạng thái</th>
          </tr>
          <tr className="active">
            <td>Charley Sharp</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 giờ trước</td>
            <td>
              <button>Nhấn để đọc</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>

            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 giờ trước</td>
            <td>
              <button>Nhấn để đọc</button>
            </td>
          </tr>
          <tr>
            <td>Elinor Good</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>1 ngày trước</td>
          </tr>
          <tr>
            <td>Garner David </td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>
            </td>
            <td>2 ngày trước</td>
          </tr>
          <tr>
            <td>Troy Oliver</td>
            <td>{message.substring(0, 100)}</td>
            <td>1 tuần trước</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
