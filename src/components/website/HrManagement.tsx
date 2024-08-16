import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Box, Grid, Typography } from "@mui/material";
import { ReactComponent as MySVG1 } from "../../images/Better-Employee-Management.svg";
import { ReactComponent as MySVG2 } from "../../images/Boosts-HR-Productivity.svg";
import { ReactComponent as MySVG3 } from "../../images/Accurate-Payroll-Statutory-Compliance.svg";
import images from "../../images/images.json";

const sectionItems = [
  {
    id: 1,
    icon: <MySVG1 style={{ width: "150px", height: "auto" }} />,
    heading: "Improved Employee Management",
    sentence:
      "With the proven administration and employee self service capabilities Sawa HRIS, the best HR software in UAE, can effectively manage your employees.",
  },
  {
    id: 2,
    icon: <MySVG2 style={{ width: "150px", height: "auto" }} />,
    heading: "Increases HR Efficiency",
    sentence:
      "Sawa HRIS streamlines repetitive HR processes in your company, saving time and increasing HR staff efficiency and productivity.",
  },
  {
    id: 3,
    icon: <MySVG3 style={{ width: "150px", height: "auto" }} />,
    heading: "Accurate Payroll & Statutory Compliance",
    sentence:
      "Sawa HRIS payroll software in UAE ensures precise salary calculations of your employees and adheres to the legal compliance of your company.",
  },
];

export default function HrManagement() {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        paddingY={12}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          textTransform="uppercase"
          color="#007791"
        >
          benefits of choosing sawa hr management services
        </Typography>
        <Grid
          container
          spacing={2}
          alignSelf="flex-end"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            minHeight: "500px",
          }}
        >
          {sectionItems.map((item) => (
            <Grid
              item
              xs="auto"
              md={3.5}
              minHeight={400}
              key={item.id}
              sx={{
                textAlign: "center",
                padding: "30px",
                width: "200px",
                borderRadius: "10px",
                margin: "20px",
                backgroundColor: "#b1effe",
              }}
            >
              {item.icon}
              <Typography
                variant="h6"
                textAlign="center"
                textTransform="capitalize"
                fontWeight={600}
              >
                {item.heading}
              </Typography>
              <Typography component="p" sx={{ opacity: 0.9, margin: 2 }}>
                {item.sentence}
              </Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          maxWidth="lg"
          sx={{
            backgroundColor: "#F4F7FB",
            border: 2,
            borderRadius: 4,
            marginTop: 10,
            padding: 2,
          }}
        >
          <Grid
            item
            xs={12}
            md={7}
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
              HR Management
            </Typography>
            <Typography variant="body1" marginTop={3} textAlign="justify">
              HR software, also known as Human Resources software, is a digital
              solution that helps organizations manage their HR processes and
              activities. HR software can automate many tasks that were
              previously done manually, saving time and increasing efficiency.
              HR software typically includes features such as employee data
              management, payroll processing, benefits administration, time and
              attendance tracking, performance management, and recruitment
              management.
            </Typography>
            <Typography
              variant="body1"
              marginTop={2}
              display="flex"
              justifyContent="center"
              alignSelf="flex-start"
            >
              <CheckBoxIcon /> Employee Information Management
            </Typography>
            <Typography
              variant="body1"
              marginTop={2}
              display="flex"
              justifyContent="center"
              alignSelf="flex-start"
            >
              <CheckBoxIcon /> Payroll Management
            </Typography>
            <Typography
              variant="body1"
              marginTop={2}
              display="flex"
              justifyContent="center"
              alignSelf="flex-start"
            >
              <CheckBoxIcon /> Time and Attendance Tracking
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ position: "relative", overflow: "hidden", borderRadius: 8 }}
          >
            <img
              src={`${images.hrManagementImage.src}`}
              alt={`${images.hrManagementImage.alt}`}
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
