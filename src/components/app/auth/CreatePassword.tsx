import React, { useState } from "react";
import {
  CardContent,
  Button,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  LinearProgress,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../../api/Api";
import { SETPASSWORD } from "../../../api/Server";

interface FormData {
  password: string;
  confirmPassword: string;
}

const CheckIcon = styled(CheckCircleIcon)(() => ({
  color: "rgb(37,194,165)",
}));

const CreatePassword: React.FC = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const otp = searchParams.get("otp");

  const [progress, setProgress] = useState<number>(30);
  const [message, setMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const validatePassword = (password: string): boolean => {
    const minLength = /.{8,}/;
    const hasLowercase = /[a-z]/;
    const hasUppercase = /[A-Z]/;
    const hasNumberOrSymbol = /[0-9!@#$%^&*]/;

    const isMinLength = minLength.test(password);
    const isLowercase = hasLowercase.test(password);
    const isUppercase = hasUppercase.test(password);
    const isNumberOrSymbol = hasNumberOrSymbol.test(password);

    return isMinLength && isLowercase && isUppercase && isNumberOrSymbol;
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { password, confirmPassword } = data;

    if (!validatePassword(password)) {
      setMessage("Password does not meet all the requirements.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const loginData = {
      password,
      otp,
    };

    try {
      const response = await postRequest(SETPASSWORD, "", loginData);
      console.log(response);
      setMessage("Password set successfully!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error) {
      setMessage("Failed to set the password. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#eceff1",
        display: "grid",
        justifyContent: "right",
      }}
    >
      <Box
        sx={{
          mt: 1,
          display: "flex",
          gap: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <PersonIcon
            sx={{
              p: "0.8rem",
              color: "white",
              bgcolor: "#f77f7f",
              border: "2px solid #f77f7f",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box
          sx={{ width: "10rem", cursor: "pointer", userSelect: "none" }}
          onClick={() => setProgress(100)}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: "2px",
              bgcolor: "#e8e3e3",
              ".MuiLinearProgress-bar": {
                bgcolor: "#f77f7f",
              },
            }}
          />
        </Box>
        <Box>
          <LockIcon
            sx={{
              p: "0.8rem",
              color: "#f77f7f",
              bgcolor: "white",
              border: "2px solid #f77f7f",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          backgroundColor: "#eceff1",
          justifyContent: "flex-end",
          display: "flex",
          width: 650,
        }}
      >
        <CardContent sx={{ width: "100%" }}>
          <Grid>
            <Paper elevation={10}>
              <Box
                sx={{
                  fontStyle: "normal",
                  fontWeight: "bold",
                  textAlign: "left",
                  margin: 3,
                  marginBottom: 0,
                  display: "flex",
                }}
              >
                <Typography
                  style={{
                    fontSize: "2rem",
                    marginTop: "2rem",
                    fontFamily: "Nunito",
                  }}
                >
                  Create Password
                </Typography>
              </Box>
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ margin: 7, padding: "19px" }}
              >
                <TextField
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    validate: (value) => validatePassword(value),
                  })}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password.message}</p>
                )}

                <TextField
                  variant="standard"
                  margin="normal"
                  fullWidth
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                  })}
                />
                {errors.confirmPassword && (
                  <p style={{ color: "red" }}>
                    {errors.confirmPassword.message}
                  </p>
                )}

                {message && <p style={{ color: "red" }}>{message}</p>}

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <FormControlLabel
                    control={
                      validatePassword(watch("password")) ? (
                        <CheckIcon />
                      ) : (
                        <CheckIcon style={{ opacity: 0.3 }} />
                      )
                    }
                    label="At least 8 characters long"
                  />
                  <FormControlLabel
                    control={
                      /[a-z]/.test(watch("password")) ? (
                        <CheckIcon />
                      ) : (
                        <CheckIcon style={{ opacity: 0.3 }} />
                      )
                    }
                    label="At least one lowercase letter"
                  />
                  <FormControlLabel
                    control={
                      /[A-Z]/.test(watch("password")) ? (
                        <CheckIcon />
                      ) : (
                        <CheckIcon style={{ opacity: 0.3 }} />
                      )
                    }
                    label="At least one uppercase letter"
                  />
                  <FormControlLabel
                    control={
                      /[0-9!@#$%^&*]/.test(watch("password")) ? (
                        <CheckIcon />
                      ) : (
                        <CheckIcon style={{ opacity: 0.3 }} />
                      )
                    }
                    label="At least one number or symbol"
                  />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    style={{
                      borderRadius: "26px",
                      backgroundColor: "#F0817A",
                      alignItems: "center",
                      width: "11rem",
                      height: "42px",
                      color: "#ffff",
                      border: "2px",
                      marginTop: "16px",
                      marginBottom: "40px",
                    }}
                  >
                    Complete Signup
                  </Button>
                </Box>
              </form>
            </Paper>
          </Grid>
        </CardContent>
      </Box>
    </Box>
  );
};

export default CreatePassword;
