import Person2Icon from "@mui/icons-material/Person2";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import images from "../../images/images.json";

export default function About() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${images.aboutusBackgroundImage.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Container sx={{ py: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight={700}>
              HRIS Management For Dubai
            </Typography>
            <Typography
              variant="body1"
              fontSize={17}
              sx={{ padding: "5px", whiteSpace: "wrap" }}
              marginTop={5}
            >
              We are a leading SAWA HRIS solution provider company dedicated to
              helping organizations streamline their human resources management
              processes. Our goal is to provide our clients with powerful HR
              software solutions that simplify and automate HR tasks, saving
              them time and money, and enabling them to focus on their core
              business operations.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              fontSize={17}
              sx={{ padding: "5px", whiteSpace: "wrap" }}
            >
              Our SAWA HRIS Software are highly customizable and can be tailored
              to meet the specific needs of each organization. We work closely
              with our clients to understand their requirements and deliver
              customized solutions that fit their business needs perfectly.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              fontSize={17}
              sx={{ padding: "5px", whiteSpace: "wrap" }}
            >
              We pride ourselves on our commitment to providing exceptional
              customer service and support. Our team of highly trained and
              experienced professionals is always available to help our clients
              with any questions or concerns they may have, ensuring that their
              SAWA HRIS system runs smoothly and efficiently.
            </Typography>
            <br></br>
            <Typography
              variant="body1"
              fontSize={17}
              sx={{ padding: "5px", whiteSpace: "wrap" }}
            >
              If you are looking for a reliable and powerful SAWA HRIS solution
              provider company, look no further than us. Contact us today to
              learn more about our SAWA HRIS solutions and how we can help your
              organization streamline its HR processes and achieve its business
              goals.
            </Typography>
            <br></br>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src={`${images.aboutUsLandingImage.src}`}
              alt={`${images.aboutUsLandingImage.alt}`} 
              width="100%"
              height="80%"
              style={{ borderRadius: "15px" }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src={`${images.aboutUsVisionImage.src}`}
              alt={`${images.aboutUsVisionImage.alt}`}
              width="100%"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight={700}
              textAlign="center"
              textTransform="uppercase"
            >
              Our Vision
            </Typography>
            <Typography variant="body1" fontSize={17} sx={{ padding: "20px" }}>
              HR and Payroll teams face the brunt of overload towards the end of
              the month. Imagine if you could save 4 working days per month by
              automating mundane and repetitive tasks. It offers Payroll and HR
              software at zero cost across organisations in Dubai, which will
              make the lives of HR professionals, finance managers and business
              founders simpler.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h4"
              fontWeight={700}
              textAlign="center"
              marginBottom={5}
              textTransform="uppercase"
            >
              Love From Clients
            </Typography>
            <Paper elevation={4} sx={{ padding: 5, borderRadius: 5 }}>
              <Typography variant="h6" textAlign="justify">
                As a growing not-for-profit, we needed an HR solution that could
                help us manage our core HR processes at minimal cost. That's
                where SAWA HRIS helped us out! SAWA HRIS brought to us a
                <b> Core HR Suit at no cost</b>. Its basic and simple interface
                is very intuitive and doesn't require any training to implement.
                It's interesting to see how in India, an HRIS company is
                offering these valuable services at no cost to clients.
              </Typography>
              <Typography
                variant="h6"
                color="#808080"
                fontWeight={700}
                textAlign="center"
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={3}
              >
                <Person2Icon sx={{ fontSize: 40, color: "	#808080" }} />
                Priya Sharma
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
