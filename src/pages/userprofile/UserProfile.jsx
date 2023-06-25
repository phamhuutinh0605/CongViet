import React, { useState } from "react";
import { Button, TextField, Grid, Container } from "@mui/material";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";

const UserProfile = () => {
  const userId = JSON.parse(localStorage.getItem("currentUser"))?.user._id;
  const currentUser = JSON.parse(localStorage.getItem("currentUser"))?.user;
  const token = JSON.parse(localStorage.getItem("currentUser"))?.token;
  const [formData, setFormData] = useState({
    username: currentUser?.username,
    img: currentUser?.img,
    email: currentUser?.email,
    phone: currentUser?.phone,
    country: currentUser?.country,
  });

  const [isEditing, setIsEditing] = useState(false);
  //show/ hide password
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangeAvatar = async (e) => {
    e.preventDefault();
    const url = await upload(e.target.files[0]);
    setFormData((prev) => ({
      ...prev,
      img: url,
    }));
    setIsEditing(!isEditing);
    console.log(url);
  };
  const handleSaveClick = async (e) => {
    // Save the updated information
    e.preventDefault();
    setIsEditing(false);
    try {
      const res = await newRequest.put(
        `/users/${userId}?accessToken=${token}`,
        { ...formData }
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container maxWidth="xs">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <img
          src={formData.avatar || "img/noavatar.jpg"}
          alt=""
          accept="image/*"
          style={{
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "#e0e0e0",
            color: "#757575",
            fontSize: "1.5rem",
            position: "relative",
          }}
        />
        <input
          type="file"
          onChange={handleChangeAvatar}
          style={{
            opacity: 0,
            position: "absolute",
            marginTop: 10,
          }}
          name={"avatar"}
        />
        <h2>{formData.username}</h2>
      </div>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Username"
              disabled
              value={formData.username}
              name={"username"}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              type="email"
              label="Email"
              disabled={!isEditing}
              value={formData.email}
              name={"email"}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              label="Số điện thoại"
              disabled={!isEditing}
              value={formData.phone}
              name={"phone"}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              type="text"
              label="Địa chỉ"
              disabled={!isEditing}
              value={formData.country}
              name={"country"}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            {isEditing ? (
              <Button
                fullWidth
                variant="contained"
                color="success"
                onClick={handleSaveClick}
              >
                Lưu
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleEditClick}
              >
                Cập nhật
              </Button>
            )}
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default UserProfile;
