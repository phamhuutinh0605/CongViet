import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import Review from "../review/Review";
import "./Reviews.scss";
import { ToastContainer, toast } from "react-toastify";
const Reviews = ({ gigId }) => {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      newRequest.get(`/reviews/${gigId}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: async (review) => {
      return await newRequest.post("/reviews", review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reviews"]);
    },
    onError: (err) => {
      return toast.error(err.response.data, {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });

  const handleSubmit = (e) => {
    const { user } = JSON.parse(localStorage.getItem("currentUser"));
    e.preventDefault();
    const desc = e.target[0].value;
    const star = e.target[1].value;
    mutation.mutate({
      gigId: gigId,
      desc: desc,
      star: star,
      userId: user?._id,
    });
    console.log(desc, star, gigId, user?._id);
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
