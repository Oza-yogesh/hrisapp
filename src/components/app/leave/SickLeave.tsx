import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Divider, Grid, Paper, Typography } from "@mui/material";

export default function SickLeave() { 
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
                  Sick Leave
                </Typography>   
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                 
              </Grid>
               <Grid item xs={6} md={6}>
               
              </Grid> 

              <Grid item xs={6} md={6}>
               
             </Grid>
             <Grid item xs={6} md={6}>
               
             </Grid>  
             <Grid item xs={6} md={6}>
             </Grid>
              <Grid item xs={6} md={6}>
              </Grid>

              <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                </Typography>
                <Typography variant="body1" marginTop={3} textAlign="justify">
              <ul>
                <li>Credited Leaves  5</li>
                <li>Total Leaves  5</li>
                <li>Applied Leaves  0</li>
                <li>Penalty Deduction  0.00</li>
            
              </ul>
             </Typography>
               </Grid>
               <Grid item xs={6} md={6}>
                <Typography variant="body2" fontWeight="bold">
                 5.00 
                </Typography>
                <Typography variant="body2" color="#808080">
                Leave Balance 
                </Typography>
               </Grid>
             <Grid item xs={6} md={6}>
              </Grid>
              <Grid item xs={6} md={6}>
              </Grid>
             <Grid item xs={6} md={6}>
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