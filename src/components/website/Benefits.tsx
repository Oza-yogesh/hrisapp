import BeenhereIcon from "@mui/icons-material/Beenhere";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PublicIcon from "@mui/icons-material/Public";
import { Box, Grid, Typography } from "@mui/material";

const sectionItems = [
  {
    id: 1,
    icon: <PublicIcon sx={{ my: 2, fontSize: 100, color: "#007791" }} />,
    heading: "Global implementation team",
    sentence:
      "Thousands of professionals in 140 countries are on hand to advise and support your global payroll adoption",
  },
  {
    id: 2,
    icon: <BeenhereIcon sx={{ my: 2, fontSize: 100, color: "#007791" }} />,
    heading: "Compliance-ready",
    sentence:
      "Our payroll services have compliance built-in and we have an experienced team of professionals to help keep you compliant.",
  },
  {
    id: 3,
    icon: <MilitaryTechIcon sx={{ my: 2, fontSize: 100, color: "#007791" }} />,
    heading: "Award-winning solutions",
    sentence:
      "Many payroll providers claim they’re industry-leading, but our awards speak volumes. At the Global Payroll Awards 2022, we won the Global Payroll Supplier of the Year category",
  },
];

const Benefits = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        textTransform="uppercase"
        color="#007791"
      >
        benefits of choosing SAWA HRIS system
      </Typography>
      <Grid
        container
        spacing={2}
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
            minHeight={350}
            key={item.id}
            sx={{
              textAlign: "center",
              padding: "30px",
              width: "200px",
              borderRadius: "10px",
              margin: "20px",
            }}
          >
            <Typography
              variant="h6"
              textAlign="center"
              textTransform="capitalize"
              fontWeight={600}
            >
              {item.heading}
            </Typography>
            {item.icon}
            <Typography component="p" sx={{ opacity: 0.9 }}>
              {item.sentence}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Benefits;
