import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Messages.scss";
import moment from "moment";
import { useState, useEffect } from "react";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.user;

  const queryClient = useQueryClient();
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["conversations"],
    queryFn: () =>
      newRequest.get(`/conversations?accessToken=${token}`).then((res) => {
        return res.data;
      }),
  });
  console.log(data);
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}?accessToken=${token}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });
  const navigate = useNavigate();
  const handleRead = (id) => {
    mutation.mutate(id);
    navigate(`/message/${id}`);
  };
  useEffect(() => {
    refetch();
  }, [data]);
  return (
    <div className="messages">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
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
              <th>Thời gian</th>
              <th>Trạng thái</th>
            </tr>
            {data.length < 1 ? (
              <span>Bạn không có tin nhắn nào!</span>
            ) : (
              data.map((c) => (
                <tr
                  className={
                    ((currentUser.isSeller && !c.readBySeller) ||
                      (!currentUser.isSeller && !c.readByBuyer)) &&
                    "active"
                  }
                  key={c.id}
                >
                  <td>
                    {currentUser.username == c.usernameSeller
                      ? c.username
                      : c.usernameSeller}
                    {/* {c.buyerId === currentUser._id
                      ? c.usernameSeller
                      : c.username} */}
                  </td>
                  <td>
                    <Link to={`/message/${c.id}`} className="link">
                      {c?.lastMessage?.substring(0, 100)}...
                    </Link>
                  </td>
                  <td>{moment(c.updatedAt).fromNow()}</td>
                  <td>
                    {(currentUser.isSeller && !c.readBySeller) ||
                    (!currentUser.isSeller && !c.readByBuyer) ? (
                      <button onClick={() => handleRead(c.id)}>
                        Nhấn để đọc
                      </button>
                    ) : (
                      <i>Đã xem</i>
                    )}
                  </td>
                </tr>
              ))
            )}
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
