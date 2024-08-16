import React, { useState } from "react";
import {
  CardContent, Button, FormControlLabel, Grid, Paper, TextField, Typography, Box, LinearProgress
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from "@mui/material/styles";

interface FormData {
  password: string;
}

const CheckIcon = styled(CheckCircleIcon)(() => ({
  color: 'rgb(37,194,165)',
}));

const CreatePassword: React.FC = () => {
  const [progress, setProgress] = useState<number>(30);
  const [message, setMessage] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [minLengthChecked, setMinLengthChecked] = useState<boolean>(false);
  const [lowercaseChecked, setLowercaseChecked] = useState<boolean>(false);
  const [uppercaseChecked, setUppercaseChecked] = useState<boolean>(false);
  const [numberOrSymbolChecked, setNumberOrSymbolChecked] = useState<boolean>(false);

  const errormsg = { color: "red" };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleClick = () => {
    setProgress(100);
  };

  const validatePassword = (password: string) => {
    const minLength = /.{8,}/;
    const hasLowercase = /[a-z]/;
    const hasUppercase = /[A-Z]/;
    const hasNumberOrSymbol = /[0-9!@#$%^&*]/;

    setMinLengthChecked(minLength.test(password));
    setLowercaseChecked(hasLowercase.test(password));
    setUppercaseChecked(hasUppercase.test(password));
    setNumberOrSymbolChecked(hasNumberOrSymbol.test(password));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const onSubmit: SubmitHandler<FormData> = data => {
    validatePassword(data.password);
    if (!minLengthChecked || !lowercaseChecked || !uppercaseChecked || !numberOrSymbolChecked) {
      setMessage("Password does not meet all the requirements.");
      return;
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
                    Create Password
                  </Typography>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)} style={{ margin: 7, padding: "19px", }}>
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
                    })}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {errors.password && <p style={errormsg}>{errors.password.message}</p>}
                  {message && <p style={{ color: "red" }}>{message}</p>}

                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px", }}>
                    <FormControlLabel
                      control={minLengthChecked ? <CheckIcon /> : <CheckIcon style={{ opacity: 0.3 }} />}
                      label="At least 8 characters long"

                    />
                    <FormControlLabel
                      control={lowercaseChecked ? <CheckIcon /> : <CheckIcon style={{ opacity: 0.3 }} />}
                      label="At least one lowercase letter"
                    />
                    <FormControlLabel
                      control={uppercaseChecked ? <CheckIcon /> : <CheckIcon style={{ opacity: 0.3 }} />}
                      label="At least one uppercase letter"
                    />
                    <FormControlLabel
                      control={numberOrSymbolChecked ? <CheckIcon /> : <CheckIcon style={{ opacity: 0.3 }} />}
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
                  <hr />
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

export default CreatePassword;
