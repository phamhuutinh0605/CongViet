import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { formatDate } from "../../utils/formatDate";

function MyGigs() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.user;
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: [currentUser?._id],
    queryFn: () =>
      newRequest
        .get(`/gigs?userId=${currentUser._id}&accessToken=${token}`)
        .then((res) => {
          return res.data;
        }),
  });
  console.log(data);
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}?accessToken=${token}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries([currentUser?._id]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="myGigs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Những công việc của bạn</h1>
            {currentUser.isSeller ? (
              <Link to="/add">
                <button>Thêm công việc mới</button>
              </Link>
            ) : (
              <Link to="/add">
                <button>Đăng tin tuyển việc</button>
              </Link>
            )}
          </div>
          <table>
            <tr>
              <th>Ảnh</th>
              <th>Tiêu đề</th>
              <th>Giá</th>
              <th>Ngày tạo</th>
              <th>Hành động</th>
            </tr>
            {data?.map((gig) => (
              <tr key={gig._id}>
                <td>
                  <img className="image" src={gig.cover} alt="" />
                </td>
                <td>{gig.title}</td>
                <td>{gig.price}</td>
                <td>{formatDate(gig.createdAt)}</td>
                <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt=""
                    onClick={() => handleDelete(gig._id)}
                    style={{ marginLeft: "30px" }}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default MyGigs;
