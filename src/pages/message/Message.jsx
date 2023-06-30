import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Message.scss";
import LoadingPage from "../loading/LoadingPage";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.user;
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}?accessToken=${token}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages?accessToken=${token}`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">Tin nhắn</Link> {">"} John Doe {">"}
        </span>
        {isLoading ? (
          <LoadingPage />
        ) : error ? (
          "Error"
        ) : (
          <div className="messages">
            {data.map((m) => (
              <div
                className={m.userId === currentUser._id ? "owner item" : "item"}
                key={m._id}
              >
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="write" onSubmit={handleSubmit}>
          <textarea type="text" placeholder="Viết nội dung tin nhắn..." />
          <button type="submit">Gửi</button>
          <Link to={"https://videochat-congviet.netlify.app/"}>Gọi Video</Link>
        </form>
      </div>
    </div>
  );
};

export default Message;
