import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { ContactUs } from "../interfaces/Interfaces";
import images from "../../images/images.json";

export default function Contact() {
  const [contactInfo, setContactInfo] = useState<ContactUs | undefined>(
    undefined
  );
  return (
    <>
      <Container sx={{ my: 12 }}>
        <Grid container spacing={2} padding={2} component="form">
          <Grid item xs={12} md={5}>
            <Grid container spacing={2} padding={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  textTransform="uppercase"
                  textAlign="center"
                >
                  contact us
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  variant="outlined"
                  type="text"
                  size="small"
                  fullWidth
                  value={contactInfo?.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  type="email"
                  size="small"
                  fullWidth
                  value={contactInfo?.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact"
                  variant="outlined"
                  type="text"
                  size="small"
                  fullWidth
                  value={contactInfo?.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Enter a message"
                  type="text"
                  size="small"
                  spellCheck
                  minRows={3}
                  multiline
                  value={contactInfo?.message}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" type="submit" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={7}>
            <img
              src={`${images.contactingImage.src}`}
              alt={`${images.contactingImage.alt}`}
              width="100%"
              style={{ borderRadius: 10 }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
