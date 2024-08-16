import { Divider, Grid, Paper, Typography } from "@mui/material";
import CustomTableContainer from "../common/CustomTableContainer";

type WorkHistoryItem = {
  Name: string;
  Type: string;
  Department: string;
  Designation: string;
};

const workHistoryData: WorkHistoryItem[] = [
  {
    Name: "Rohan Potdar",
    Type: "Primary",
    Department: "IT",
    Designation: "Team Lead",
  },
];

const tableHeaders: (keyof WorkHistoryItem)[] = [
  "Name",
  "Type",
  "Department",
  "Designation",
];

const directReportsHeaders: (keyof WorkHistoryItem)[] = [
  "Name",
  "Department",
  "Designation",
];

const headerStyling = {
  fontWeight: "bold",
};

export default function TeamProfile() {
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
                  REPORTING MANAGER
                </Typography>
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
                  DIRECT REPORTS
                </Typography>
              </Grid>
              <CustomTableContainer
                headers={directReportsHeaders}
                data={[]} 
                noDataMessage="No direct reports available."
                headerCellStyle={headerStyling}
              />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
