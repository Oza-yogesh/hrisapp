import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import images from "../../images/images.json";

const Landing = () => {
  return (
    <Fragment>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${images.landingImage.src})`,
          backgroundSize: "cover",
          paddingTop: 10,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 0,
          },
        }}
      >
        <Grid container spacing={2} padding={4}>
          <Grid
            item
            xs={12}
            md={6}
            height={450}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            padding={2}
            sx={{ zIndex: 4 }}
          ></Grid>
          <Grid
            item
            xs={12}
            md={6}
            height={450}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            padding={2}
            border={2}
            borderRadius={4}
            borderColor="white"
            sx={{ zIndex: 0 }}
          >
            <Typography
              variant="h4"
              fontWeight={700}
              textAlign="center"
              textTransform="uppercase"
              color="white"
              zIndex={1}
              position="relative"
            >
              step into the hr & payroll future with SAWA HRIS
            </Typography>
            <Typography
              variant="body1"
              marginTop={5}
              textAlign="justify"
              color="white"
              zIndex={1}
              position="relative"
            >
              HR and payroll software is a comprehensive solution that
              streamlines human resources and payroll processes. It automates
              tasks like employee data management, attendance tracking, benefits
              administration, and tax calculations. This software ensures
              accurate payroll processing, reducing errors and saving time. It
              also assists in compliance with tax regulations and labor laws. HR
              and payroll software offers efficiency, accuracy, and data
              security, making it an essential tool for businesses of all sizes.
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "30px",
                fontSize: "16px",
                alignSelf: "flex-start",
              }}
              endIcon={<DoubleArrowIcon />}
            >
              Request For Demo
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Landing;
