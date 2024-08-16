import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider, Grid, Paper, Typography } from "@mui/material";

export default function GeneralSetting() { 
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
                  General Settings
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                 Name
                </Typography>
                <Typography variant="body2" color="#808080">
                 Casual Leave
                </Typography>
             
              </Grid>
               <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Description
                </Typography>
                <Typography variant="body2" color="#808080">
                This is a default description for the Leave Type. You can customise this.
                </Typography> 
              </Grid> 

              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Leaves Count
                </Typography>
             </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Leaves Allowed in a Year
                </Typography>  
                <Typography variant="body2" color="#808080">
                  18.0
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                Holidays Between Leave
                </Typography>  
                <Typography variant="body2" color="#808080">
                Count as Leave
                </Typography> 
                <Typography variant="body2" fontWeight="bold">
                Weekends Between Leave
                </Typography>  
                <Typography variant="body2" color="#808080">
                Not Considered
                </Typography> 
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Accrual
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Creditable On Accrual Basis
                </Typography>
                <Typography variant="body2" color="#808080">
                Yes
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                Accrual Frequency
                </Typography>
                <Typography variant="body2" color="#808080">
                Half Yearly
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                Accrual Period
                </Typography>
                <Typography variant="body2" color="#808080">
                Start
                </Typography>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Applicability
                </Typography>
               </Grid>
               <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Allowed under Probation
                </Typography>
                <Typography variant="body2" color="#808080">
                Yes
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                Allowed under Notice Period
                </Typography>
                <Typography variant="body2" color="#808080">
                No
                </Typography>
              
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Leave Encash
                </Typography>
               </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Leave Encash Enabled
                </Typography>
                <Typography variant="body2" color="#808080">
                No
                </Typography>
             </Grid>
             <Grid item xs={6} md={6}>
              <Typography variant="body2" fontWeight="bold">
               Carry Forward
              </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Carry Forward Enabled
                </Typography>
                <Typography variant="body2" color="#808080">
                Yes
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                All Remaining Leaves
                </Typography>
                <Typography variant="body2" color="#808080">
                No
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                Max. Leaves to Carry Forward
                </Typography>
                <Typography variant="body2" color="#808080">
                10
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