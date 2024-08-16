import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import images from "../../images/images.json";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#2D4263" : "#2D4263",
  ...theme.typography.body1,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  borderRadius: "15px",
}));

export default function TimeAttendance() {
  return (
    <Container sx={{ py: 10 }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        padding={2}
      >
        <Grid
          item
          xs={12}
          md={7}
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Typography variant="h4" textAlign="center">
            Easier decision making for Time and Attendance Management
          </Typography>
          <Typography variant="body1" textAlign="justify">
            Time and attendance management is a key feature of payroll software
            that allows managers to track employee attendance and hours worked.
            This information is used to calculate employee pay and manage
            overtime, bonuses, and other pay-related benefits. Here are some of
            the key functions of time and attendance management in payroll
            software:
          </Typography>

          <Typography variant="body1" textAlign="justify">
            <b>Time Tracking : </b>
            <br />
            Payroll software allows employees to clock in and out of work
            electronically, either through a time clock or through an online
            portal. This data is automatically recorded and can be used to
            calculate employee pay.
          </Typography>

          <Typography variant="body1" textAlign="justify">
            <b>Schedule Management : </b>
            <br />
            Payroll software can help managers to create and manage employee
            schedules, including shift assignments, time off requests, and
            availability. This can help to ensure that employees are scheduled
            appropriately and that time off requests are managed efficiently.
          </Typography>
        </Grid>

        <Grid item xs={12} md={5}>
          <img
            src={`${images.timeAttendanceImage.src}`}
            alt={`${images.timeAttendanceImage.alt}`}
            width="100%"
            style={{ borderRadius: "15px 15px 15px 15px" }}
          />
        </Grid>
      </Grid>

      <Grid container justifyContent="space-evenly" spacing={1} marginY={5}>
        <Grid
          item
          xs={12}
          md={3}
          height={280}
          display="flex"
          borderRadius={5}
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          justifyContent="space-evenly"
          sx={{ "&:hover": { backgroundColor: "#6495ED" } }}
        >
          <AddIcCallIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              border: "2px solid",
              textAlign: "center",
            }}
          />
          <Typography variant="h5" textAlign="center">
            Quick Response
          </Typography>
          <Typography variant="body1" textAlign="center">
            Experience prompt support and assistance from our dedicated team,
            ensuring you get the help you need without any delays.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          height={280}
          display="flex"
          borderRadius={5}
          textAlign="center"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{ "&:hover": { backgroundColor: "#6495ED" } }}
        >
          <CalendarMonthIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              border: "2px solid",
              textAlign: "center",
            }}
          />
          <Typography variant="h5" textAlign="center">
            Attendance Tracker
          </Typography>
          <Typography variant="body1" textAlign="center">
            Foster growth with effortless attendance management. Enhance
            productivity, promote engagement & forge connections. Join us for a
            brighter future, one attendance at a time.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          height={280}
          display="flex"
          borderRadius={5}
          textAlign="center"
          alignItems="center"
          flexDirection="column"
          justifyContent="space-evenly"
          sx={{ "&:hover": { backgroundColor: "#6495ED" } }}
        >
          <LibraryBooksIcon
            sx={{
              display: "block",
              fontSize: "3rem",
              border: "2px solid",
              textAlign: "center",
            }}
          />
          <Typography variant="h5" textAlign="center">
            Set Rule
          </Typography>
          <Typography variant="body1" textAlign="center">
            Simplify your HR processes by establishing rules and allowing our
            software to manage the rest, giving you the freedom to concentrate
            on strategic initiatives.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={{ xs: 2, sm: 2, md: 2 }}
        columnSpacing={{ xs: 2, sm: 2, md: 4 }}
      >
        <Grid item xs={12} marginY={5}>
          <Typography variant="h4" textAlign="center">
            Transform Your Attendance Process: Empower Your Administrators with
            Our Feature Set
          </Typography>
        </Grid>

        <Grid
          item
          xs={6}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Item>
            <Typography
              variant="body1"
              fontWeight={550}
              textAlign={"center"}
              sx={{ color: "white" }}
            >
              Access Attendance Logs for All Employees
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "wrap",
                marginTop: "5px",
                textAlign: "center",
                color: "white",
              }}
            >
              When assigning employees to shifts, administrators can
              conveniently access comprehensive attendance data for each
              employee. This includes login and logout times, as well as break
              durations, all conveniently available in one centralized location.
            </Typography>
          </Item>
        </Grid>

        <Grid
          item
          xs={6}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Item>
            <Typography
              variant="body1"
              fontWeight={550}
              textAlign={"center"}
              sx={{ color: "white" }}
            >
              Check for attendance anomalies and take action.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "wrap",
                marginTop: "7px",
                textAlign: "center",
                color: "white",
              }}
            >
              We understand that your attendance policies require employees to
              be present at work for a certain number of hours each
              day/week/month. Attendance irregularities can be easily monitored
              to ensure employees’ compliance with these policies.
            </Typography>
          </Item>
        </Grid>

        <Grid
          item
          xs={6}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Item>
            <Typography
              variant="body1"
              fontWeight={550}
              textAlign={"center"}
              sx={{ color: "white" }}
            >
              Create and assign multiple attendance rules.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "wrap",
                marginTop: "5px",
                textAlign: "center",
                color: "white",
              }}
            >
              With our attendance management software, creating and assigning
              multiple shifts is a breeze. You can effortlessly apply distinct
              shift rules to individual employees.
            </Typography>
          </Item>
        </Grid>

        <Grid
          item
          xs={6}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <Item>
            <Typography
              variant="body1"
              fontWeight={550}
              textAlign={"center"}
              sx={{ color: "white" }}
            >
              Biometric device integration.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "wrap",
                marginTop: "5px",
                textAlign: "center",
                color: "white",
              }}
            >
              That’s correct! You have the option to seamlessly integrate your
              biometric device with Sawa HRIS attendance management system. Our
              software is accessible to both employees and managers.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Container>
  );
}
