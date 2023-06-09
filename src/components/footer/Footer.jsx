import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Danh mục</h2>
            <span>Đồ họa & Thiết kế</span>
            <span>Marketing số hóa</span>
            <span>Viết lách & Phiên dịch</span>
            <span>Video & Hoạt hình</span>
            <span>Âm nhạc & Âm thanh</span>
            <span>Lập trình & Công nghệ</span>
            <span>Dữ liệu</span>
            <span>Kinh doanh</span>
            <span>Lối sống</span>
            <span>Nhiếp ảnh</span>
            <span>Bản đồ trang web</span>
          </div>
          <div className="item">
            <h2>Giới thiệu</h2>
            <span>Báo chí & Tin tức</span>
            <span>Đối tác</span>
            <span>Chính sách bảo mật</span>
            <span>Điều khoản dịch vụ</span>
            <span>Quyền sở hữu trí tuệ</span>
            <span>Quan hệ đầu tư</span>
            <span>Liên hệ tìm việc</span>
          </div>
          <div className="item">
            <h2>Hỗ trợ</h2>
            <span>Trợ giúp & Hỗ trợ</span>
            <span>Đáng tin cậy & An toàn</span>
            <span>Tìm việc trên CôngVIỆT</span>
            <span>Mua hàng trên CôngVIỆT</span>
          </div>
          <div className="item">
            <h2>Cộng đồng</h2>
            <span>Thành công của khách hàng</span>
            <span>Trung tâm cộng đồng</span>
            <span>Diễn đàn</span>
            <span>Sự kiện</span>
            <span>Blog</span>
            <span>Người có ảnh hưởng</span>
            <span>Liên kết</span>
            <span>Podcast</span>
            <span>Mời bạn bè</span>
            <span>Tạo công việc của bạn</span>
            <span>Tiêu chuẩn cộng đồng</span>
          </div>
          <div className="item">
            <h2>Thêm từ CôngVIỆT</h2>
            <span>CôngVIỆT Business</span>
            <span>CôngVIỆT Pro</span>
            <span>CôngVIỆT Logo Maker</span>
            <span>CôngVIỆT Guides</span>
            <span>Được truyền cảm hứng</span>
            <span>CôngVIỆT Select</span>
            <span>ClearVoice</span>
            <span>CôngVIỆT Workspace</span>
            <span>Học tập</span>
            <span>Working Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>
              Công<span>VIỆT</span>
            </h2>
            <span>© CôngVIỆT International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <span>VNĐ</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
