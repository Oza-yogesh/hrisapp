import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider, Grid, Paper, Typography } from "@mui/material";

export default function AdvancedSettings() {
  return (
    <>
      <Grid container spacing={2} marginTop="20px">
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
                  Advanced Settings
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Leaves Count
                </Typography>
               </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Max. Leaves Allowed in a Month
                </Typography>  
                <Typography variant="body2" color="#808080">
                  5
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                Continuous Leaves Allowed
                </Typography>  
                <Typography variant="body2" color="#808080">
                 5
                </Typography> 
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Applicability
                </Typography>
               </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Negative Leaves Allowed
                </Typography>
                <Typography variant="body2" color="#808080">
                Yes
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Miscellaneous
                </Typography>
               </Grid>
               <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Future-dated Leaves Allowed
                </Typography>
                <Typography variant="body2" color="#808080">
                Yes
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                Future-dated Leaves Allowed After
                </Typography>
                <Typography variant="body2" color="#808080">
                7 Days
                </Typography> 
                <Typography variant="body2" fontWeight="bold">
                Backdated Leaves Allowed
                </Typography>
                <Typography variant="body2" color="#808080">
                Yes
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                Backdated Leaves Allowed up to
                </Typography>
                <Typography variant="body2" color="#808080">
                60 Days
                </Typography> 
                <Typography variant="body2" fontWeight="bold">
                Apply Leaves for Next Year Till
                </Typography>
                <Typography variant="body2" color="#808080">
                February
                </Typography> 
                </Grid>
              <Grid item xs={6} md={6}></Grid>
            </Grid>
          </Paper>
        </Grid>
     </Grid> 
    </>
  );
}