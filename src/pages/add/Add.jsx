import React, { useEffect, useReducer, useState } from "react";
import "./Add.scss";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import { cards } from "../../data";
import { ToastContainer, toast } from "react-toastify";

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: e.target[0].value,
    });
    e.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      toast.success("Cập nhật thành công", {
        position: toast.POSITION.TOP_CENTER,
      });
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]),
        toast.success("Tạo công việc thành công", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
    },
    onError: (err) => {
      toast.error("Thất bại!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    // navigate("/mygigs")
  };
  return (
    <div className="add">
      <div className="container">
        <h1>Thêm Công Việc</h1>
        <div className="sections">
          <div className="info">
            <label htmlFor="">Tiêu đề bài đăng</label>
            <input
              type="text"
              name="title"
              placeholder="Chuyên môn của bạn là gì?"
              onChange={handleChange}
            />
            <label htmlFor="">Danh mục</label>
            <select name="cat" id="cat" onChange={handleChange}>
              {cards.map((cat) => {
                return (
                  <option key={cat.id} value={cat.title}>
                    {cat.title}
                  </option>
                );
              })}
            </select>
            <label htmlFor="">Ảnh công việc</label>
            <input
              type="file"
              onChange={(e) => setSingleFile(e.target.files[0])}
              required
            />
            <label htmlFor="">Cập nhật ảnh</label>
            <input
              type="file"
              multiple
              onChange={(e) => setFiles(e.target.files)}
              required
            />
            <button onClick={handleUpload}>
              {uploading ? "Đang cập nhật..." : "Cập nhật ảnh"}
            </button>
            <label htmlFor="">Mô tả công việc</label>
            <textarea
              name="desc"
              id=""
              placeholder="Mô tả ngắn gọn để giới thiệu dịch vụ của bạn với khách hàng"
              cols="0"
              rows="16"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Tạo Công Việc</button>
          </div>
          <div className="details">
            <label htmlFor="">Tên việc làm</label>
            <input
              type="text"
              placeholder="vd: Thiết kế web một trang..."
              name="shortTitle"
              onChange={handleChange}
            />
            <label htmlFor="">Mô tả công việc</label>
            <textarea
              name="shortDesc"
              id=""
              placeholder="Mô tả ngắn về công việc của bạn"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
            <label htmlFor="">Thời gian hoàn thành (Ví dụ: 5 ngày)</label>
            <input type="number" name="deliveryTime" onChange={handleChange} />
            <label htmlFor="">Số lần sửa đổi</label>
            <input
              type="number"
              name="revisionNumber"
              onChange={handleChange}
            />
            <label htmlFor="">Thêm điểm nổi bật của bạn</label>
            <form action="" className="add" onSubmit={handleFeature}>
              <input
                type="text"
                placeholder="Ví dụ: thiết kế giá rẻ..."
                required
              />
              <button type="submit">Thêm</button>
            </form>
            <div className="addedFeatures" style={{ marginLeft: "30%" }}>
              {state?.features?.map((f) => (
                <li className="item" key={f} style={{ marginBottom: "10px" }}>
                  {f}
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FEATURE", payload: f })
                    }
                  >
                    X
                  </button>
                </li>
              ))}
            </div>
            <label htmlFor="">Giá</label>
            <input type="number" onChange={handleChange} name="price" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Add;
