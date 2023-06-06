import React from "react";
import "./Add.scss";

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Thêm Công Việc</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Tiêu đề bài đăng</label>
            <input type="text" placeholder="Chuyên môn của bạn là gì?" />
            <label htmlFor="">Danh mục</label>
            <select name="cats" id="cats">
              <option value="design">Thiết kế</option>
              <option value="web">Lập trình Web</option>
              <option value="animation">Tự động hóa</option>
              <option value="music">Nghệ thuật</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Mô tả công việc</label>
            <textarea
              name=""
              id=""
              placeholder="Mô tả ngắn gọn để giới thiệu dịch vụ của bạn với khách hàng"
              cols="0"
              rows="16"
            ></textarea>
            <button>Tạo Công Việc</button>
          </div>
          <div className="details">
            <label htmlFor="">Tên việc làm</label>
            <input type="text" placeholder="vd: Thiết kế web một trang..." />
            <label htmlFor="">Mô tả công việc</label>
            <textarea
              name=""
              id=""
              placeholder="Mô tả ngắn về công việc của bạn"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="">Thời gian hoàn thành (Ví dụ: 5 ngày)</label>
            <input type="number" />
            <label htmlFor="">Số sửa đổi</label>
            <input type="number" />
            <label htmlFor="">Thêm tính năng</label>
            <input type="text" placeholder="e.g. page design" />
            <input type="text" placeholder="e.g. file uploading" />
            <input type="text" placeholder="e.g. setting up a domain" />
            <input type="text" placeholder="e.g. hosting" />
            <label htmlFor="">Price</label>
            <input type="number" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
