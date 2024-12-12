import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ForgotPasswordValues {
  email: string;
  otp: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("This field is required"),
  otp: Yup.string()
    .matches(/^\d{6}$/, "Invalid OTP")
    .required("This field is required"),
});

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (
    values: ForgotPasswordValues,
    { setSubmitting }: FormikHelpers<ForgotPasswordValues>
  ) => {
    setLoading(true);

    //     // Simulate a delay to represent an API call
    //     setTimeout(() => {
    //       setLoading(false);
    //       setSubmitting(false);
    //       // Show success toast and redirect to login
    //       toast.success("Password reset link sent to your email!");
    //       navigate("/login");
    //     }, 2000); // Simulate 2 seconds delay for form submission
  };

  return (
    <Container sx={{ mt: 10, mb: 5 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 1,
          padding: 4,
          textAlign: "center",
          width: "500px",
        }}
      >
        <Box sx={{ textAlign: "start", mb: 0 }}>
          <Typography
            variant="h5"
            fontWeight="600"
            gutterBottom
            color="#191970"
          >
            Forgot Password
          </Typography>
          <Typography
            color="#9e9e9e"
            fontSize="14px"
            gutterBottom
            sx={{ mb: 3 }}
          >
            Email Address / Mobile Number
          </Typography>
        </Box>

        <Formik
          initialValues={{ email: "", otp: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box sx={{ "& .MuiTextField-root": { marginBottom: 2, mt: 0 } }}>
                <Field
                  as={TextField}
                  variant="standard"
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="Email Address / Mobile Number"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  style={{ color: "red", fontSize: "12px", textAlign: "start" }}
                />

                <Field
                  as={TextField}
                  variant="standard"
                  fullWidth
                  name="otp"
                  label="OTP"
                  type="text"
                  placeholder="Enter OTP"
                  required
                />
                <ErrorMessage
                  name="otp"
                  component="div"
                  style={{ color: "red", fontSize: "12px", textAlign: "start" }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#f77f7f",
                    marginBottom: "200px",
                    color: "#ffff",
                    borderRadius: "20px",
                    padding: "10px ",
                    "&:hover": { backgroundColor: "#ff5a4f" },
                  }}
                  disabled={isSubmitting || loading}
                >
                  {loading ? <CircularProgress size={20} /> : "Verify Account"}
                </Button>
              </Box>
            </Form>
          )}
        </Formik>

        <Button
          onClick={() => navigate("/login")}
          sx={{
            marginTop: 2,
            color: "#191970",
            textTransform: "none",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Back to Home
        </Button>
      </Paper>
    </Container>
  );
}
