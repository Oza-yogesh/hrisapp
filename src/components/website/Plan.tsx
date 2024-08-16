import { Box, Grid, Typography } from "@mui/material";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import DomainIcon from "@mui/icons-material/Domain";
import PublicIcon from "@mui/icons-material/Public";

const sectionItems = [
  {
    id: 1,
    icon: <AddBusinessIcon sx={{ my: 2, fontSize: 70, color: "#34495E" }} />,
    sentence: "1-199 EMPLOYEES",
    heading: "Small Business",
  },
  {
    id: 2,
    icon: <CorporateFareIcon sx={{ my: 2, fontSize: 70, color: "#34495E" }} />,
    sentence: "200-999 EMPLOYEES",
    heading: "Medium Business",
  },
  {
    id: 3,
    icon: <DomainIcon sx={{ my: 2, fontSize: 70, color: "#34495E" }} />,
    sentence: "1000+ EMPLOYEES",
    heading: "Large Business",
  },
  {
    id: 4,
    icon: <PublicIcon sx={{ my: 2, fontSize: 70, color: "#34495E" }} />,
    sentence: "MULTI-COUNTRY EMPLOYEES",
    heading: "Global Business",
  },
];

const Plan = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        textTransform="uppercase"
        color="#34495E"
      >
        payroll services and hr solutions for your <br></br>organisation's size
      </Typography>
      <Typography
        component="p"
        textAlign="center"
        textTransform="capitalize"
        mt="20px"
      >
        With over 10,000 clients around the globe, we've worked with employers
        of every size. <br></br>See how our integrated payroll services can make
        work easier for the employees in your organisation.
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        {sectionItems.map((item) => (
          <Grid
            item
            xs="auto"
            md={2.5}
            minHeight={300}
            key={item.id}
            sx={{
              backgroundColor: "#8AAAE5",
              textAlign: "center",
              padding: "10px",
              width: "250px",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            {item.icon}
            <Typography component="p" fontSize="14px" fontWeight="200">
              {item.sentence}
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              textTransform="capitalize"
            >
              {item.heading}
            </Typography>
            <Typography component="p" fontSize="12px" mt="5px">
              Payroll Service
            </Typography>
            <Typography component="p" fontSize="12px" mt="5px">
              HR Service
            </Typography>
            <Typography component="p" fontSize="12px" mt="5px">
              Time and Attendence
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Plan;
