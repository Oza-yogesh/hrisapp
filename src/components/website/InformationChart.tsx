import { Container, Grid, Typography } from "@mui/material";

const InformationChart = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Grid container spacing={2} padding={2}>
        <Grid item xs={12} md={7}>
          <Typography textTransform="uppercase" marginY={1} fontWeight={600}>
            Employee Information
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Payroll software allows HR managers to maintain employee information
            such as name, address, contact information, employment status, and
            other details related to compensation. This information is essential
            to calculate accurate employee pay.
          </Typography>
          <Typography textTransform="uppercase" marginY={1} fontWeight={600}>
            Time and Attendance Management
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Time and attendance management is a key feature of payroll software
            that allows managers to track employee attendance and hours worked.
            This information is used to calculate employee pay and manage
            overtime, bonuses, and other pay-related benefits. Here are some of
            the key functions of time and attendance management in payroll
            software.
          </Typography>
          <Typography textTransform="uppercase" marginY={1} fontWeight={600}>
            Payroll Processing
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Payroll processing is one of the most critical features of payroll
            software. It involves calculating employee pay based on their hours
            worked, pay rate, and any additional factors such as bonuses,
            overtime, or deductions. Here are some of the key functions of
            payroll processing in payroll software.
          </Typography>
          <Typography textTransform="uppercase" marginY={1} fontWeight={600}>
            Recruitment
          </Typography>
          <Typography variant="body1" textAlign="justify">
            The employee recruitment module can help you save time, money, and
            worry by automating and standardizing your recruiting process.
            Generate job descriptions Post jobs Obtain application Evaluating
            candidates Schedule and monitor applicants
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src="https://ik.imagekit.io/nwssoft/Payroll-portal/hr-payroll.webp?updatedAt=1708063440261"
            alt="Payroll-Circle"
            width="100%"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default InformationChart;
