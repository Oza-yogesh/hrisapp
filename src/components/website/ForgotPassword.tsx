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
import { toast } from "react-toastify";
import { postRequest } from "../../api/Api"; // Ensure this function is implemented
import { SETPASSWORD } from "../../api/Server"; // Define your forgot password endpoint
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from "formik";
import * as Yup from "yup";

interface ForgotPasswordValues {
  email: string;
  otp: string;
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("This feild is reuired"),
  otp: Yup.string()
    .matches(/^\d{6}$/, "Invalid OTP")
    .required("This feild is reuired"),
});

export default function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (
    values: ForgotPasswordValues,
    { setSubmitting }: FormikHelpers<ForgotPasswordValues>
  ) => {
    setLoading(true); // Set loading state

    try {
      const response = await postRequest(SETPASSWORD, "", values);

      if (response.status === 200) {
        toast.success(
          response.data.message || "Password reset link sent to your email!"
        );
        setSubmitting(false); // Formik will reset the form
        navigate("/login"); // Redirect back to login after submission
      } else {
        throw new Error(response.data.message || "Unexpected error occurred.");
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send reset link. Please try again."
      );
      setSubmitting(false);
    } finally {
      setLoading(false); // Reset loading state
    }
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
            Email Address/ Moblie Number
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
