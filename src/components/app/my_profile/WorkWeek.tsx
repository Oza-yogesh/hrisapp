

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';



// import DomainIcon from "@mui/icons-material/Domain"
// import Box from '@mui/material/Box';

// const box= <Box height={20}width={20} sx={{ backgroundColor:'green', paddingLeft:'10px'}}></Box>
// const boxred= <Box height={20}width={20} sx={{ backgroundColor:'red', paddingLeft:'10px'}}></Box>



export default function WorkWeek() {

  const weeks = [1, 2, 3, 4, 5];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const box = <Box height={15} width={15} sx={{ backgroundColor:'green',opacity:'0.9' ,paddingLeft:'10px', marginLeft:'12px'}}></Box>
  const boxRed = <Box height={15} width={15} sx={{ backgroundColor:'red',opacity:'0.8' ,paddingLeft:'10px',marginLeft:'12px' }}></Box>; 

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  

  return (
    <>
      <Grid
         container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
           alignItems: "center",
          marginTop:"20px",
          marginLeft:"50px"
        }}
      >
        <Grid item xs={10} >
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid
              container
              spacing={2}
              display="flex"
              justifyContent="space-evenly"
            >
              <Grid item xs={12}>
                <Typography variant="h4" fontWeight="bold">
                  Saturday Sunday Off
                 </Typography>
          
                
                    <Typography  variant="body2" sx={{fontWeight:"bold", mt:'15px'}}  >

                      Description
                   </Typography>
                    <Typography variant="body2"fontWeight='Light' >
                 
                       This is a 5 days Work Week rule with Weekly off set as Saturday and Sunday.
                   </Typography>
          
             
                    <Typography variant="body2" sx={{fontWeight:"bold", mt:'15px'}} >
                      Effective Date </Typography>
                    <Typography variant="body2"> 04 Jul, 2024</Typography>
             
              
                  <Divider sx={{ backgroundColor: "#424242", marginTop:2 }}/>  
             
             
                    <Typography  sx={{  typography: 'body1',fontWeight:'medium' , mt:'15px', fontSize:15}}>
                      Rule Setting1
                    </Typography>
            
                <Grid marginLeft={70} marginTop={1} >
                   {/* <Checkbox {...label}  checked /> */}
                  <Typography> <Checkbox {...label}  disabled checked sx={{color:'skyblue'}}/>Half Day  </Typography>
                
                </Grid>
            </Grid>
            <Grid  item xs={12} >
              <TableContainer  >
                <Table  sx={{ width:700,  border:1 ,borderColor:"grey.300"}}>
                  <TableHead>
                    <TableRow >
                      <TableCell  sx={{size:'small'  , fontWeight:"Bold",borderRight:1 ,borderColor:"grey.300",textAlign:'center'}}>Week</TableCell>
                      {days.map(day => (
                      <TableCell  sx={{size:'small', fontWeight:"Bold",borderRight:1 ,borderColor:"grey.300",textAlign:'center'}}>{day}  </TableCell>
                    ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {weeks.map(week => (
                    <TableRow >
                        <TableCell  sx={{size:'small',borderRight:1 ,borderColor:"grey.300",textAlign:'center'}}>{week}</TableCell>
                        {days.map((day, index) => (
                          <TableCell  sx={{size:'small', borderRight:1 ,borderColor:"grey.300"}}>
                            {index < 5 ? box : boxRed}
                          </TableCell>
                        ))}
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
      </Grid>
             <Grid display='flex' marginTop={2} >
                   <Typography display='flex' >{box}&nbsp; Working Day</Typography>
                   <Typography display='flex'  paddingLeft={2}>{boxRed} &nbsp;Weekly Off</Typography>
                   <Typography display='flex' paddingLeft={2}> <Box height={15}width={15}  sx={{ backgroundColor:'yellow', }}></Box> &nbsp; Half Day</Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}





