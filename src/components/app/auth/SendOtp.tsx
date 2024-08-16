import React, { useState, useEffect } from "react";
import {CardContent,Button ,Grid,Link,Paper,TextField,Typography,Box,LinearProgress,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";  
import { useNavigate } from "react-router-dom";

interface FormData {
  phoneNumber: string;
  otp: string;
  checkbox: boolean;
}


const SendOtp: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(30);
  const [resendDisabled, setResendDisabled] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(60);
  const [message, setMessage] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (resendDisabled) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(countdown);
            setResendDisabled(false);
            setTimer(60);
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
  }, [resendDisabled]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const errormsg = { color: "red" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const loginhandler: SubmitHandler<FormData> = (data) => {
    console.log("login handler", data);
    navigate("/create-password")
  };

  const handleClick = () => {
    setProgress(100);
  };

  const handleResendOtp = async () => {
    setResendDisabled(true);
    setMessage("Sending OTP...");

    try {
      const response = await axios.post("https://hris-project-bpux.onrender.com/otp", { phoneNumber });

      if (response.status === 200) {
        setMessage("OTP resent successfully!");
      } else {
        setMessage("Failed to resend OTP. Please try again.");
        setResendDisabled(false);
      }
    } catch (error:any) {
      setMessage(`Error occurred: ${error.response ? error.response.data.message : error.message}`);
      setResendDisabled(false);
    }
  };

  return (
    <div>
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
            onClick={handleClick}
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
                    Welcome
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Nunito",
                      color: "brown",
                      fontSize: "2rem",
                      marginLeft: "1rem",
                      marginTop: "2rem",
                    }}
                  >
                    Yogesh!
                  </Typography>
                </Box>
                <form
                  onSubmit={handleSubmit(loginhandler)}
                  style={{ margin: 7, padding: "19px" }}
                >
                  <TextField
                    variant="standard"
                    margin="normal"
                    fullWidth
                    id="phoneNumber"
                    label="Phone Number"
                    autoComplete="tel"
                    placeholder="Enter your phone number"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />

                  {errors.phoneNumber && <p style={errormsg}>{errors.phoneNumber.message}</p>}

                  {phoneNumber && (
                    <TextField
                      variant="standard"
                      margin="normal"
                      fullWidth
                      id="otp"
                      label="OTP"
                      autoComplete="one-time-code"
                      placeholder="Enter OTP"
                      {...register("otp", {
                        required: "OTP is required",
                        pattern: {
                          value: /^[0-9]{6}$/,
                          message: "OTP must be 6 digits",
                        },
                        
                      })}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  )}

                  {errors.otp && <p style={errormsg}>{errors.otp.message}</p>}

                  <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
                    <Button
                      variant="text"
                      onClick={handleResendOtp}
                      disabled={resendDisabled}
                    >
                      {resendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
                    </Button>
                  </Box>

                  {message && <p style={{ color: "blue", textAlign: "center" }}>{message}</p>}

                  <Box>
                    <div
                      style={{
                        marginTop: "10px",
                        marginLeft: "12px",
                        display: "flex",
                        alignItems: "flex-start",
                      }}
                    >
                       
                    </div>

                    {errors.checkbox && (
                      <p style={errormsg}>
                        You must accept Kredily terms before joining.
                      </p>
                    )}
                  </Box>

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      style={{
                        borderRadius: "26px",
                        backgroundColor: "#F0817A",
                        alignItems: "center",
                        width: "8rem",
                        height: "42px",
                        color: "#ffff",
                        border: "2px",
                        marginTop: "16px",
                        marginBottom: "40px",
                      }}
                    >
                      Verify
                    </Button>
                  </Box>
                  <hr />
                  <Typography
                    style={{
                      fontSize: "11px",
                      height: 1.5,
                      opacity: 0.61,
                      color: "#1D244FCC",
                      fontFamily: "revert",
                      fontWeight: "initial",
                      marginBottom: 0,
                    }}
                  >
                    We’re committed to your privacy. Kredily uses the
                    information you provide to us to contact you about our
                    relevant content, products and services. You may unsubscribe
                    from these communications at any time. For more information,
                    check out our
                  </Typography>
                  <Box sx={{ textAlign: "center", marginTop: 9 }}>
                    <Link href="/privacy-policy" target="_blank" rel="noopener">
                      Privacy Policy
                    </Link>
                  </Box>
                </form>
                <Box />
              </Paper>
            </Grid>
          </CardContent>
        </Box>
      </Box>
    </div>
  );
};

export default SendOtp;
