import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import DomainIcon from "@mui/icons-material/Domain";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function EducationProfile() {
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
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  Educational info
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body2"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Graduation
                </Typography>
              </Grid>
              <Grid item xs={2} display="flex" justifyContent="space-evenly">
                <EditIcon />
                <DeleteIcon />
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="space-evenly">
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                        width: 140,
                        height: 140,
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <DomainIcon
                        sx={{
                          display: "block",
                          fontSize: "5rem",
                          color: "#000080	",
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography>Sandipani Technical Campus Latur</Typography>
                    <Typography variant="body2" color="#808080">
                      Bachelor of Engineering
                    </Typography>
                    <Typography>Electronics and telecommunication</Typography>
                    <Typography>Full Time</Typography>
                    <Typography>2016 - 2019</Typography>
                    <Typography>
                      Swami Ramanand Teerth Marathwada University,nanded
                    </Typography>
                  </Grid>
                </Grid>
              </Grid> 
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
