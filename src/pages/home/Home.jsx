import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>
              Một thế giới toàn cầu của những tài năng tự do trong tầm tay bạn
            </h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Tốt nhất cho mọi ngân sách
            </div>
            <p>
              Tìm các dịch vụ chất lượng cao ở mọi mức giá. Không tính giá theo
              giờ, chỉ có giá dự án.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Công việc chất lượng được thực hiện nhanh chóng
            </div>
            <p>
              Tìm freelancer phù hợp để bắt đầu làm việc trên dự án của bạn chỉ
              trong vài phút.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Thanh toán bảo đảm, mỗi lần thanh toán
            </div>
            <p>
              Luôn biết trước bạn sẽ thanh toán bao nhiêu. Thanh toán của bạn
              không được phát hành cho đến khi bạn chấp thuận công việc.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Hỗ trợ 24/7
            </div>
            <p>
              Tìm các dịch vụ chất lượng cao ở mọi mức giá. Không tính giá theo
              giờ, chỉ có giá dự án.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Khám phá thị trường</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Đồ họa & Thiết kế</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Marketing số</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Viết & Dịch thuật</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Hoạt hình</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Nhạc & Âm thanh</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lập trình & Công nghệ</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Kinh doanh</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Phong cách cuộc sống</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Dữ liệu</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Nhiếp ảnh</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>Doanh Nghiệp</h1>
            <h1>
              Giải pháp kinh doanh dành cho <i>đội nhóm</i>
            </h1>
            <p>
              Nâng cấp thành một trải nghiệm đặc biệt được trang bị công cụ và
              lợi ích, dành riêng cho doanh nghiệp.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Được phù hợp với những tài năng hoàn hảo thông qua quản lý thành
              công của khách hàng
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Quản lý công việc nhóm và tăng năng suất với một không gian làm
              việc mạnh mẽ
            </div>
            <button>Khám phá Nhà Tuyển Dụng</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}
export default Home;
