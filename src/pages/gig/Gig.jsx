import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";
import { formatDate } from "../../utils/formatDate";
import { ToastContainer, toast } from "react-toastify";
import { formatPrice } from "../../utils/formatPrice";
function Gig() {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.user;
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;
  const { isLoading, error, data } = useQuery({
    queryKey: [id],
    queryFn: () =>
      newRequest.get(`/gigs/${id}?accessToken=${token}`).then((res) => {
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
      newRequest.get(`/users/${userId}?accessToken=${token}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });
  const navigate = useNavigate();
  const handlePayment = () => {
    if (currentUser.isSeller) {
      toast.warning("Phương thức chỉ dành cho Nhà Tuyển Dụng!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      navigate(`/pay/${id}`);
    }
  };
  const handleContact = async () => {
    const sellerId = userId;
    const buyerId = currentUser?._id;
    const id = buyerId + sellerId;

    try {
      const res = await newRequest.get(
        `/conversations/single/${id}?accessToken=${token}`
      );
      navigate(`/messages`);
    } catch (err) {
      if (err.response.status === 404 || err.response.status === 500) {
        const res = await newRequest.post(
          `/conversations?accessToken=${token}`,
          {
            buyerId,
            sellerId,
            username: currentUser?.username,
            usernameSeller: dataUser?.username,
            isSeller: currentUser.isSeller,
          }
        );
        navigate(`/message/${res.data.id}`);
      }
    }
  };
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
              CôngVIỆT {">"} {data?.cat}
            </span>
            <h1>{data?.title}</h1>
            {isLoadingUser ? (
              "Loading..."
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
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
                    <span>{dataUser?.username} </span>
                    <h3 style={{ color: "#b22234", fontStyle: "italic" }}>
                      {data?.isSeller == false ? "Nhà Tuyển Dụng" : ""}
                    </h3>
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
                      <span className="title">Hoàn thành gần nhất</span>
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
            <Reviews gigId={id} user={dataUser} />
          </div>
          <div className="right">
            <div className="price">
              <h3>{data?.shortTitle}</h3>
              <h2>{formatPrice(data?.price)}</h2>
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>Hoàn thành trong {data?.deliveryTime} ngày</span>
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
            <button onClick={handlePayment}>Chốt đơn ngay</button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Gig;
