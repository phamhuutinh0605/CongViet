import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { ToastContainer, toast } from "react-toastify";

function PaymentForm() {
  const handleMoMoPayment = () => {
    // Gửi yêu cầu thanh toán qua MoMo
    axios
      .post("/momo/pay", {
        // Các thông tin thanh toán
      })
      .then((response) => {
        // Xử lý kết quả thành công
      })
      .catch((error) => {
        // Xử lý lỗi
      });
  };

  const handleVNPayPayment = () => {
    // Gửi yêu cầu thanh toán qua VNPay
    axios
      .post("/vnpay/pay", {
        // Các thông tin thanh toán
      })
      .then((response) => {
        // Xử lý kết quả thành công
      })
      .catch((error) => {
        // Xử lý lỗi
      });
  };
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe chưa sẵn sàng hoặc không tìm thấy các thành phần
      return;
    }

    // Xác minh thẻ ngân hàng
    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (result.error) {
      // Xác minh thẻ không thành công
      setErrorMessage(result.error.message);
      toast.error(result.error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      // Xác minh thẻ thành công, tiến hành xử lý thanh toán
      // Gửi thông tin đến server để xử lý thanh toán
      toast.success("Thêm thông tin thanh toán thành công", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1.5rem",
        padding: "2rem",
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        backgroundColor: "#ffffff",
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Tên chủ thẻ"
        variant="outlined"
        required
        sx={{ width: "100%" }}
      />
      <TextField
        label="Số thẻ"
        variant="outlined"
        required
        sx={{ width: "100%" }}
      />
      <TextField
        label="Tên ngân hàng"
        variant="outlined"
        required
        sx={{ width: "100%" }}
      />
      <Box
        sx={{
          display: "flex",
          gap: "0.5rem",
          width: "100%",
        }}
      >
        <TextField
          label="Ngày hết hạn"
          variant="outlined"
          required
          sx={{ flex: 1 }}
        />
        <TextField
          label="Mã CVV"
          variant="outlined"
          required
          sx={{ flex: 1 }}
        />
      </Box>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              iconColor: "#FFC7EE",
              color: "#FFC7EE",
            },
          },
        }}
        sx={{
          border: "1px solid #aab7c4",
          borderRadius: "4px",
          padding: "10px",
          width: "100%",
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ width: "100%" }}
      >
        Thanh toán
      </Button>
      <h1>Hoặc</h1>
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "100%" }}
        onClick={handleMoMoPayment}
      >
        Thanh toán qua MoMo
      </Button>
      <Button
        variant="contained"
        color="secondary"
        sx={{ width: "100%" }}
        onClick={handleVNPayPayment}
      >
        Thanh toán qua VNPay
      </Button>

      <ToastContainer />
    </Box>
  );
}

export default PaymentForm;
