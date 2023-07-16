import React, { useEffect } from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import LoadingPage from "../../pages/loading/LoadingPage";

const GigCard = ({ item }) => {
  console.log(item);
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;
  const isSellerCurr = JSON.parse(localStorage.getItem("currentUser"))?.user
    ?.isSeller;

  const { data, isLoading, error } = useQuery({
    queryKey: [item.userId],
    queryFn: async () => {
      return newRequest
        .get(`/users/${item.userId}?accessToken=${token}`)
        .then((res) => res.data);
    },
  });
  return isSellerCurr !== item.isSeller ? (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.img || item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            <LoadingPage />
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="user">
              <img src={data.img || "/img/noavatar.jpg"} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>
            {item.desc.slice(0, 55)} <i>...xem thêm</i>
          </p>
          <div className="star">
            <img src="./img/star.png" alt="" />
            <span>
              {Math.round(item.totalStars / item.starNumber) |
                "Chưa có đánh giá nào!"}
            </span>
            {/* <h3
              style={{
                color: "#b22234",
                marginLeft: 60,
              }}
            >
              {item.isSeller === false ? (
                <>
                  <h4>
                    Tin nhà tuyển dụng{" "}
                    <FontAwesomeIcon
                      icon={faHome}
                      style={{
                        marginLeft: 4,
                      }}
                    />
                  </h4>
                </>
              ) : (
                ""
              )}
            </h3> */}
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="./img/heart.png" alt="" />
          <div className="price">
            <h2>{formatPrice(item.price)}</h2>
          </div>
        </div>
      </div>
    </Link>
  ) : (
    ""
  );
};
export default GigCard;
