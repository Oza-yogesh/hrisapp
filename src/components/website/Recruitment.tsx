import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Box, Grid, Typography } from "@mui/material";
import images from "../../images/images.json";

export default function Recruitment() {
  return (
    <>
      <Box sx={{ padding: 10 }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              variant="h5"
              fontWeight={700}
              textAlign="center"
              textTransform="uppercase"
            >
              Recruitment Management
            </Typography>
            <Typography variant="body1" marginTop={3} textAlign="justify">
              Hiring is an essential procedure in every organization. By
              creating plans and publicizing jobs, HRMS streamlines the hiring
              process. The classification, number of positions, current count,
              open positions, and anticipated cost per position are all
              displayed by HRMS. The management of internal hiring is done
              exceptionally well using HRMS.
            </Typography>
            <Typography
              variant="body1"
              marginTop={2}
              display="flex"
              justifyContent="center"
              alignSelf="flex-start"
            >
              <CheckBoxIcon /> Employee recommendations can be managed in the
              HRMS.
            </Typography>
            <Typography
              variant="body1"
              marginTop={2}
              display="flex"
              justifyContent="center"
              alignSelf="flex-start"
            >
              <CheckBoxIcon /> Using the HRMS, you may keep track of candidates
              for specific job openings.
            </Typography>
            <Typography
              variant="body1"
              marginTop={2}
              display="flex"
              justifyContent="center"
              alignSelf="flex-start"
            >
              <CheckBoxIcon /> Once you've decided, you can enter the job offers
              you've extended to each applicant in your HRMS.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ position: "relative", overflow: "hidden", borderRadius: 8 }}
          >
            <img
              src={`${images.recruitmentLandingImage.src}`}
              alt={`${images.recruitmentLandingImage.alt}`}
              width="100%"
              style={{ transition: "transform 0.3s ease-in-out" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "#36454F", padding: 10, color: "white" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <img
              src={`${images.recruitmentBusinessImage.src}`}
              alt={`${images.recruitmentBusinessImage.alt}`}
              width="100%"
              style={{ transition: "transform 0.3s ease-in-out" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              variant="h5"
              fontWeight={700}
              textAlign="center"
              textTransform="uppercase"
            >
              Efficacious Recruitment Management System for Your Business
            </Typography>
            <Typography variant="body1" marginTop={3} textAlign="justify">
              The employee recruitment software, Sawa HRIS, can help you save
              time, money, and worry by automating and standardizing your
              recruiting process.
              <ul>
                <li>Generate job descriptions</li>
                <li>Post jobs</li>
                <li>Obtain applications</li>
                <li>Evaluate candidates</li>
                <li>Schedule and monitor applicants</li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ padding: 10 }}>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Typography
              variant="h5"
              fontWeight={700}
              textAlign="center"
              textTransform="uppercase"
            >
              Follow the Right Way of Hiring with the Best Hiring Software in
              UAE
            </Typography>
            <Typography variant="body1" marginTop={3} textAlign="justify">
              On the employment market, candidates favor organizations that
              utilize current technology in their daily operations. Sawa HRIS is
              the best hiring software in UAE for small and medium-sized firms
              to update and enhance HR processes. Sawa HRIS streamlined and
              automated hiring process enables your business to acquire the most
              qualified applicants quickly. You need not spend many hours on the
              hiring process.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src={`${images.discussionImage.src}`}
              alt={`${images.discussionImage.alt}`}
              width="100%"
              style={{ transition: "transform 0.3s ease-in-out" }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
