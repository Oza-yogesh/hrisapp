import { Divider, Grid, Paper, Typography } from "@mui/material";
import CustomTableContainer from "../common/CustomTableContainer";

type WorkHistoryItem = {
  Department: string;
  Designation: string;
  FromDate: string;
  ToDate: string;
};

const workHistoryData: WorkHistoryItem[] = [
  {
    Department: "IT",
    Designation: "Full Stack Developer",
    FromDate: "16/11/2022",
    ToDate: "Present",
  },
];

const tableHeaders: (keyof WorkHistoryItem)[] = [
  "Department",
  "Designation",
  "FromDate",
  "ToDate",
];

const headerStyling = {
  fontWeight: "bold",
};

export default function WorkProfile() {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  Basic Info
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Employee ID
                </Typography>
                <Typography variant="body2" color="#808080">
                  10019
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Date Of Joining
                </Typography>
                <Typography variant="body2" color="#808080">
                  16/11/2022
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Probation Period
                </Typography>
                <Typography variant="body2" color="#808080">
                  0
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Employee Type
                </Typography>
                <Typography variant="body2" color="#808080">
                  Full Time
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Work Location
                </Typography>
                <Typography variant="body2" color="#808080">
                  Registered Office
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Employee Status
                </Typography>
                <Typography variant="body2" color="#808080">
                  Active
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Work Experience
                </Typography>
                <Typography variant="body2" color="#808080">
                  1 Year
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  work info
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Designation
                </Typography>
                <Typography variant="body2" color="#808080">
                  Full Stack Developer
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Job Title
                </Typography>
                <Typography variant="body2" color="#808080">
                  --
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Department
                </Typography>
                <Typography variant="body2" color="#808080">
                  IT
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Sub Department
                </Typography>
                <Typography variant="body2" color="#808080">
                  Software Engineer
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  work history
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <CustomTableContainer
                headers={tableHeaders}
                data={workHistoryData}
                noDataMessage="No work history data available."
                headerCellStyle={headerStyling}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
