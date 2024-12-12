import VpnKeyIcon from "@mui/icons-material/VpnKey";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../api/Api"; // Make sure this is correctly implemented
import { LOGIN } from "../../api/Server"; // API endpoint for login
import images from "../../images/images.json"; // Ensure images are correctly imported
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice"; // Action to set user in Redux store
import { PeopleRounded } from "@mui/icons-material";
import { border, Box } from "@mui/system";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    try {
      const data = new FormData(event.currentTarget);
      const loginData = {
        email: data.get("email") as string,
        password: data.get("password") as string,
      };

      const response: AxiosResponse = await postRequest(LOGIN, "", loginData);
      if (response.status === 200) {
        const { userId, token, role, message, user } = response.data;

        // Extract user information from the user object
        const { firstName, lastName, email, avatar } = user;

        // Store data in local storage for session management
        localStorage.setItem("token", token);
        localStorage.setItem("Role", role);
        localStorage.setItem("userId", userId);
        // Dispatch user data to Redux store
        dispatch(
          setUser({
            _id: userId,
            firstName,
            lastName,
            email: email,
            role,
            avatar,
          })
        );

        // Notify user and navigate
        toast.success(
          message || "Login successful! Redirecting to your dashboard..."
        );
        navigate("/dashboard");
      }
    } catch (error) {
      const axiosError = error as AxiosError; // Type assertion
      const errorMessage = axiosError.response?.data
        ? JSON.stringify(axiosError.response.data)
        : "An unknown error occurred"; // Provide fallback message

      toast.error(errorMessage); // Show error message
    }
  };

  return (
    <Container sx={{ mt: 10, mb: 5 }}>
      <Paper>
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            component="img"
            mt={0}
            borderRadius={3}
            src={`${images.logingInImage.src}`}
            alt={`${images.logingInImage.alt}`}
          />
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: 500,
                height: 200,
                boxShadow: 4, // Predefined shadow level
                backgroundColor: "white",
                padding: 2,
                borderRadius: 2, // Optional rounded corners
              }}
            >
              <Grid
                container
                spacing={4}
                padding={4}
                component="form"
                onSubmit={handleSubmit}
              >
                <Grid item xs={12}>
                  <Typography
                    variant="h5"
                    color="#191970"
                    fontWeight="600"
                    textTransform="uppercase"
                    gutterBottom
                  >
                    Login
                  </Typography>
                  <Typography color="#9e9e9e" textTransform="capitalize">
                    Welcome to SAWA HRIS
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    autoFocus
                    fullWidth
                    id="email"
                    size="medium"
                    name="email"
                    label="Email"
                    type="email"
                    autoComplete="username"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    id="password"
                    size="medium"
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="primary"
                    onClick={() => navigate("/forgot-password")}
                    sx={{ cursor: "pointer", textDecoration: "underline" }}
                  >
                    Forgot Password?
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    size="medium"
                    startIcon={<VpnKeyIcon />}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
