import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";
import { formatDate } from "../../utils/formatDate";

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/${id}`).then((res) => {
        return res.data;
      }),
  });
  const userId = data?.userId;
  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  const navigate = useNavigate();
  const handleContact = () => {};
  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">
            <span className="breadcrumbs">
              CôngVIỆT {">"} {data?.title} {">"}
            </span>
            <h1>{data?.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser?.img || "/img/noavatar.jpg"}
                  alt=""
                />
                <span>{dataUser?.username}</span>
                {!isNaN(data?.totalStars / data?.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data?.totalStars / data?.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>
                      {Math.round(data?.totalStars / data?.starNumber)}
                    </span>
                  </div>
                )}
              </div>
            )}
            {data?.images?.length < 1 ? (
              "Không có ảnh mô tả!"
            ) : (
              <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                {data?.images?.map((img) => (
                  <img key={img} src={img} alt="" />
                ))}
              </Slider>
            )}
            <h2>Về Công Việc</h2>
            <p>{data?.desc}</p>
            {isLoadingUser ? (
              "Loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h2>Về Người Làm Việc</h2>
                <div className="user">
                  <img src={dataUser?.img || "/img/noavatar.jpg"} alt="" />
                  <div className="info">
                    <span>{dataUser?.username}</span>
                    {!isNaN(data?.totalStars / data?.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data?.totalStars / data?.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="/img/star.png" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data?.totalStars / data?.starNumber)}
                        </span>
                      </div>
                    )}
                    <button onClick={handleContact}>Liên Hệ Với Tôi</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">Từ</span>
                      <span className="desc">{dataUser?.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Thành viên từ</span>
                      <span className="desc">
                        {formatDate(dataUser?.createdAt)}
                      </span>
                    </div>
                    <div className="item">
                      <span className="title">
                        Thời gian phản hồi trung bình
                      </span>
                      <span className="desc">4 giờ</span>
                    </div>
                    <div className="item">
                      <span className="title">Giao hàng gần nhất</span>
                      <span className="desc">1 ngày</span>
                    </div>
                    <div className="item">
                      <span className="title">Dân tộc</span>
                      <span className="desc">Kinh</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser?.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data?.shortTitle}</h3>
              <h2>{data?.price}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>Giao hàng trong {data?.deliveryTime} ngày</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data?.revisionNumber} Lần chỉnh sửa</span>
              </div>
            </div>
            <div className="features">
              {data?.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay`}>
              <button>Tiếp Tục</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;
