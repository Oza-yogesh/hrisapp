import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { AxiosError, AxiosResponse } from "axios";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../api/Api";
import { LOGIN } from "../../api/Server";
import images from "../../images/images.json";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      let loginData = {
        email: data.get("email"),
        password: data.get("password"),
      };
      postRequest(LOGIN, "", loginData)
        .then((response: AxiosResponse) => {
          if (response.status === 200) {
            navigate("/dashboard");
          }
        })
        .catch((error: AxiosError) => alert(error.response?.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container sx={{ mt: 10, mb: 5 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={7}
            component="img"
            borderRadius={3}
            src={`${images.logingInImage.src}`}
            alt={`${images.logingInImage.alt}`}
          ></Grid>
          <Grid item xs={12} md={5}>
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
                  login
                </Typography>
                <Typography color="#9e9e9e" textTransform="capitalize">
                  welcome to SAWA HRIS
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
