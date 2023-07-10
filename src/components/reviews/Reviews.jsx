import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import Review from "../review/Review";
import "./Reviews.scss";
import { ToastContainer, toast } from "react-toastify";
const Reviews = ({ gigId, user }) => {
  const queryClient = useQueryClient();
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.user;

  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}?accessToken=${token}`).then((res) => {
        return res.data;
      }),
  });
  const mutation = useMutation({
    mutationFn: async (review) => {
      return await newRequest.post(`/reviews?accessToken=${token}`, review);
    },
    onSuccess: () => {
      //reload lại khi có thay đổi data liên quan đến key reviews
      queryClient.invalidateQueries(["reviews"]);
    },
    onError: (err) => {
      return toast.info(err.response.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.username === currentUser?.username) {
      toast.warning("Bạn không thể đánh giá công việc của mình!", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({
      gigId: gigId,
      desc: desc,
      star: star,
      userId: currentUser?._id,
    });
  };

  return (
    <div className="reviews">
      <h2>Đánh Giá</h2>
      {isLoading ? (
        "loading"
      ) : error ? (
        <ToastContainer />
      ) : (
        data.map((review) => <Review key={review._id} review={review} />)
      )}
      <div className="add">
        <h3>Thêm đánh giá về người này</h3>
        <form action="" className="addForm" onSubmit={handleSubmit}>
          <input type="text" placeholder="Nói ra cảm nghĩ của bạn" />
          <select name="" id="">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button>Gửi</button>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
