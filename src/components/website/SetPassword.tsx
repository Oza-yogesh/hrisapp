import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Box,
  Paper,
  Container,
  Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { postRequest } from "../../api/Api";
import { SETPASSWORD } from "../../api/Server";

const SetPassword: React.FC = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(window.location.search);
  const otp = searchParams.get("otp");

  console.log({ otp });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const loginData = {
      password,
      otp,
    };
    if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      const response = await postRequest(SETPASSWORD, "", loginData);
      console.log(response);
      setPassword("");
      setConfirmPassword("");
      setError("");
      navigate("/login");
    }
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, mt: 10 }}>
        <Typography variant="h5" gutterBottom>
          Set Your Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="confirm-password"
            label="Confirm Password"
            type="password"
            fullWidth
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin="normal"
            variant="outlined"
            error={error.length > 0}
            helperText={error}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disableElevation
            >
              Set Password
            </Button>
          </Box>
        </form>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid item>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Back to Login
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default SetPassword;
