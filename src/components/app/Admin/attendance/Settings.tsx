import { Edit } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import { Divider, Grid, Box, Paper, Typography, Select ,MenuItem} from '@mui/material'
import React, { useState } from 'react'
import { FormControl } from 'react-bootstrap';


const Settings = () => {
 const [editdata, setEditdata] = useState<boolean>(false);
 const [selectedDay, setSelectedDay] = useState<boolean>(false);
 
 

  const toggledata = () => {
    setEditdata (!editdata);
    console.log(editdata);

  }
  return (

  <>
      <Grid component={Paper} sx={{ mt: 3, width: 800, height: 500 }}>
        <Grid sx={{ m: 2 }} >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
            <Typography>Attendance Cycle</Typography>
            <Edit onClick={toggledata}/>
          </Box>
          <Divider sx={{ backgroundColor: "#424242" }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', gap: 3 }} >
            <Typography>Attendance Input Cycle</Typography>
            <Typography>
              
              { editdata ?(
              <FormControl>
                < Select>
                  {[...Array(31)].map((_,index)=>(
                    < MenuItem  key={index+1} value={index+1}>
                    {index+1}
                    </MenuItem>

                  ))}

                </Select>
              </FormControl>

            ):(
            "1 to 31"
            )
          }   

            </Typography>
            <Typography>Attendance Regularization Rules</Typography>
          </Box>
          <Grid>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox/>
              <Typography>Limit Backdated AR Applications</Typography>
            </Box>
              <Typography>No Limit</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox/>
              <Typography>Limit number of AR application per month</Typography>
            </Box>
            <Typography>No Limit</Typography>
            <Box>
              <Typography>Manual Penalty Deduction</Typography>
              <Switch size='small' sx={{ width: 100, px: 10}} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
  </>














    // <Grid container spacing={2} sx={{ marginTop: "20px", width: 800 }}>
    //   <Grid item xs={12}>
    //     <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
    //       <Grid container spacing={2}>
    //         <Grid item xs={12}>
    //           <Typography 
    //             variant="body1"
    //             textTransform="uppercase"
    //             color="black"
    //             fontWeight="bold">
    //               Attendance Cycle
    //             </Typography>
    //             <Divider
    //               sx={{ backgroundColor: "#424242" }}
    //             />
    //             <Grid item xs={10}>
    //               <Typography variant="body2">
    //                   Attendance Input Cycle
    //               </Typography>
                  
    //             </Grid>
    //         </Grid>
    //       </Grid>
    //     </Paper>
    //   </Grid>
    // </Grid>
  )
}

export default Settings