import { Grid, IconButton, Paper, Typography } from "@mui/material";
import CustomTableContainer from "../common/CustomTableContainer";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
type WorkHistoryItem = {
  Name: string;
  Relationship: string;
  "Date of Birth"?: string;
  Dependant?: string;
  Action: string;
  "Phone Number"?: number;
};

const workHistoryData: WorkHistoryItem[] = [
  {
    Name: "Momin Aminpasha",
    Relationship: "Father",
    "Date of Birth": "01/01/1972",
    Dependant: "yes",
    Action: "",
  },
];
const directReportsData: WorkHistoryItem[] = [
  {
    Name: "Momin Aminpasha",
    Relationship: "Father",
    "Phone Number": 7865454323,
    Action: "",
  },
];

const tableHeaders: (keyof WorkHistoryItem)[] = [
  "Name",
  "Relationship",
  "Date of Birth",
  "Dependant",
  "Action",
];

const directReportsHeaders: (keyof WorkHistoryItem)[] = [
  "Name",
  "Relationship",
  "Phone Number",
  "Action",
];

const headerStyling = {
  fontWeight: "bold",
};

export default function FamilyProfile() {
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
            <Grid
              container
              spacing={2}
              display="flex"
              justifyContent="space-evenly"
            >
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  FAMILY MEMBERS
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <IconButton>
                  <AddCircleOutlineIcon />
                </IconButton>
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
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  EMERGENCY CONTACT
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <IconButton>
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>
              <CustomTableContainer
                headers={directReportsHeaders}
                data={directReportsData}
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
