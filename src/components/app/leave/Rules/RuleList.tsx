import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider, Grid, Paper, Typography } from "@mui/material";

export default function RuleList() {
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
                  Rule list
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>  
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Casual Leave
                </Typography>
                <Typography variant="body2" color="#808080">
                Effective Date: 19/06/23  
                </Typography> 
               </Grid>
              <Grid item xs={6} md={6}>
            </Grid>
              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                Sick Leave
                </Typography>
                <Typography variant="body2" color="#808080">
                Effective Date: 19/06/23
                </Typography> 
               </Grid>
              <Grid item xs={6} md={6}>
             </Grid>
              <Grid item xs={6} md={6}>
              <Typography variant="body2" fontWeight="bold">
                Loss Of Pay
              </Typography>
              <Typography variant="body2" color="#808080">
                Effective Date: 01/06/23
                </Typography> 
               </Grid>
               <Grid item xs={6} md={6}>
              </Grid>
             <Grid item xs={6} md={6}></Grid>
            </Grid>
          </Paper>
        </Grid>
     </Grid> 
    </>
  );
}