import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

const Footer: FC = () => {
  return (
    <Box className="footer-container">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} lg={6}>
            <Stack direction="row" spacing={2} marginBottom={"2rem"}>
              <Grid display="grid" alignItems="center">
                <LocationOnIcon sx={{ color: "orange", fontSize: "2rem" }} />
              </Grid>
              <Grid>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h6">Find Us</Typography>
                  <Typography variant="body2" gutterBottom>
                    Office 139 Building 9 - Dubai Media City - United Arab
                    Emirates
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Stack direction="row" spacing={2} marginBottom={"2rem"}>
              <Grid display="grid" alignItems="center">
                <PhoneEnabledIcon sx={{ color: "orange", fontSize: "2rem" }} />
              </Grid>
              <Grid>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h6">Call Us</Typography>
                  <Typography variant="body2" gutterBottom>
                    +97145136866
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Stack direction="row" spacing={2} marginBottom={"2rem"}>
              <Grid display="grid" alignItems="center">
                <EmailIcon sx={{ color: "orange", fontSize: "2rem" }} />
              </Grid>
              <Grid>
                <Stack direction="column" spacing={2}>
                  <Typography variant="h6">Mail Us</Typography>
                  <Typography variant="body2" gutterBottom>
                    info@sawatechnologies.com
                  </Typography>
                </Stack>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
        <Divider
          color="white"
          sx={{ height: 1, width: "auto", margin: "20px 60px" }}
        />
        <Box>
          <Typography textAlign="center">
            Copyright © 2024 NWS Soft Consulting Pvt Ltd. All Rights Reserved.
          </Typography>
          <Stack
            spacing={2}
            padding={2}
            direction="row"
            justifyContent="center"
          >
            <Link to="refund" className="link-blue">
              Refund & Cancellation
            </Link>
            <Link to="terms" className="link-blue">
              Terms & Conditions
            </Link>
            <Link to="login" className="link-blue">
              Privacy Policy
            </Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
