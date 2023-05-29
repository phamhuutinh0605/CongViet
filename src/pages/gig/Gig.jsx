import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Fiver > Graphics & Design ></span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Anna Bell</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Tôi sử dụng một chương trình AI để tạo ra hình ảnh dựa trên các đề
            xuất văn bản. Điều này có nghĩa là tôi có thể giúp bạn tạo ra một
            tưởng tượng bạn có thông qua mô tả văn bản về cảnh sắc mà không cần
            bất kỳ hình ảnh tham khảo nào. Một số điều mà tôi thường thấy AI làm
            rất tốt bao gồm: Chân dung nhân vật (ví dụ: hình ảnh để kèm theo
            nhân vật DnD của bạn) Phong cảnh (ví dụ: hình nền, minh họa để bổ
            sung câu chuyện) Logo (ví dụ: đội Esports, doanh nghiệp, hình đại
            diện) Bạn có thể mơ hồ hoặc mô tả chi tiết tùy ý. Việc mơ hồ hơn sẽ
            cho phép AI sáng tạo hơn và đôi khi dẫn đến những hình ảnh tuyệt
            vời. Bạn cũng có thể rất cụ thể nếu bạn có một hình ảnh rõ ràng về
            điều bạn muốn trong đầu. Tất cả các hình ảnh mà tôi tạo ra đều là
            độc đáo và không có ở bất kỳ nơi nào khác. Nếu bạn có bất kỳ câu hỏi
            nào, hãy gửi cho tôi một tin nhắn.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Anna Bell</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">Từ</span>
                  <span className="desc">Đồng Tháp</span>
                </div>
                <div className="item">
                  <span className="title">Thành viên từ</span>
                  <span className="desc">Tháng 8 năm 2022</span>
                </div>
                <div className="item">
                  <span className="title">Thời gian phản hồi trung bình</span>
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
              <p>
                Tên tôi là Anna, tôi thích sáng tạo nghệ thuật được tạo bởi AI
                trong thời gian rảnh của mình. Tôi có rất nhiều kinh nghiệm sử
                dụng chương trình AI và điều đó có nghĩa là tôi biết cách yêu
                cầu AI để đạt được kết quả tuyệt vời và chi tiết đáng kinh ngạc.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Đánh giá</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lê Văn Ẫu</span>
                  <div className="country">
                    <img
                      src="https://Côngviệt-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>Tp. Hồ Chí Minh</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Tôi chỉ muốn nói rằng art_with_ai là nghệ sĩ đầu tiên và sau đó,
                là người duy nhất mà tôi sẽ sử dụng trên Côngviệt. Giao tiếp
                tuyệt vời, mỗi ngày anh ấy gửi cho tôi những hình ảnh mà tôi có
                thể yêu cầu thay đổi. Họ lắng nghe, hiểu và vượt xa mong đợi của
                tôi. Tôi hoàn toàn khuyến nghị dịch vụ này và tôi đã biết rằng
                tôi sẽ sử dụng nó một lần nữa rất sớm.
              </p>
              <div className="helpful">
                <span>Hữu ích?</span>
                <img src="/img/like.png" alt="" />
                <span>Có</span>
                <img src="/img/dislike.png" alt="" />
                <span>Không</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://Côngviệt-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Đức</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Nhà thiết kế đã đưa bức ảnh của tôi lên một tầm cao mới cho bìa
                sách của tôi! Sự chuyên nghiệp và dễ làm việc với nhà thiết kế
                cùng với tính đúng giờ vượt trội hơn cả tiêu chuẩn của ngành!!
                Bất kể dự án của bạn là gì, bạn cần nhà thiết kế này!
              </p>
              <div className="helpful">
                <span>Hữu ích?</span>
                <img src="/img/like.png" alt="" />
                <span>Có</span>
                <img src="/img/dislike.png" alt="" />
                <span>Không</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles</span>
                  <div className="country">
                    <img
                      src="https://Côngviệt-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>Hoa Kỳ</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                Công việc tuyệt vời! Giao tiếp tuyệt vời, mỗi ngày anh ấy gửi
                cho tôi những hình ảnh mà tôi có thể yêu cầu thay đổi. Họ lắng
                nghe, hiểu và vượt xa mong đợi của tôi. Tôi hoàn toàn khuyến
                nghị dịch vụ này và tôi đã biết rằng tôi sẽ sử dụng nó một lần
                nữa rất rất sớm.
              </p>
              <div className="helpful">
                <span>Hữu ích?</span>
                <img src="/img/like.png" alt="" />
                <span>Có</span>
                <img src="/img/dislike.png" alt="" />
                <span>Không</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>Một hình ảnh được tạo bởi AI</h3>
            <h2>200.000 VNĐ</h2>
          </div>
          <p>
            Tôi sẽ tạo ra một bức ảnh duy nhất được tạo ra bởi trí tuệ nhân tạo
            chất lượng cao dựa trên mô tả mà bạn cung cấp cho tôi.
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>Giao hàng trong 2 ngày</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Lần chỉnh sửa</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Viết mô tả sáng tạo</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Giao nhận tác phẩm nghệ thuật</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Tăng cường hình ảnh</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Thiết kế bổ sung</span>
            </div>
          </div>
          <button>Tiếp tục</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
