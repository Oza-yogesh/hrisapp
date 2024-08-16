// import React, { useState } from "react";
// import {
//   Grid,
//   Typography,
//   Paper,
//   Divider,
//   TableCell,
//   TableHead,
//   TableRow,
//   Button,
//   Box,
//   TextField,
//   Stack,
//   Icon,
//   IconButton,
// } from "@mui/material";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { Table } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import DeleteIcon from "@mui/icons-material/Delete";

// const MainContent = ({name}) => {
//   return name.map((item) => (
//     <>
//       <Stack
//         component="form"
//         sx={{
//           width: "25ch",
//           mt: "25px",
//         }}
//         spacing={2}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           hiddenLabel
//           id="filled-hidden-label-small"
//           size="small"
//           label={item}
//         />
//       </Stack>

//       <Button
//         sx={{
//           marginLeft: "34vh",
//           marginTop: "-30px",
//           color: "blue",
//         }}
//       >
//         <AddCircleOutlineIcon fontSize="large" /> Add
//       </Button>

//       <IconButton
//         aria-label="delete"
//         size="small"
//         sx={{ marginLeft: "110vh", marginTop: "-20vh" }}
//       >
//         <DeleteIcon />
//       </IconButton>
//     </>
//   ));
// };

// function AdminDepartment() {
//   const [count, setcount] = useState([]);
//   const [name, setname] = useState(["box1","box2"]);
//   let boxlabel = ["box1"];
//   const [showBox, setShowBox] = useState(false);
//   const [showBox2, setShowBox2] = useState(false);


//   const addnewBox = () =>{
//     let count = 1;
//     count ++;
//     boxlabel.push(`box${count}`)
//   }
  
//   const handleToggle = () => {
//     setShowBox(!showBox);
//   };

//   const handleToggle2 = () => {
//     setShowBox2(!showBox2);
//   };

//   return (
//     <>
//       <Grid
//         container
//         spacing={2}
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "20px",
//         }}
//       >
//         <Grid item xs={8}>
//           <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
//             <Grid
//               container
//               spacing={2}
//               display="flex"
//               justifyContent="space-evenly"
//             >
//               <Grid item xs={12}>
//                 <Typography
//                   variant="body1"
//                   textTransform="uppercase"
//                   color="#936c6c"
//                   fontWeight="bold"
//                 >
//                   DEPARTMENTS
//                 </Typography>
//                 <Divider
//                   variant="fullWidth"
//                   sx={{ backgroundColor: "#424242", mt: "20px" }}
//                 />
//                 <Table aria-label="simple table" marginTop={20}>
//                   <TableHead>
//                     <TableRow>
//                       <TableCell sx={{ color: "#686C61", fontWeight: "bold" }}>
//                         Department
//                       </TableCell>
//                       <TableCell sx={{ color: "#686C61", fontWeight: "bold" }}>
//                         Sub Department
//                       </TableCell>
//                       <TableCell sx={{ color: "#686C61", fontWeight: "bold" }}>
//                         Department Head
//                       </TableCell>
//                       <TableCell sx={{ color: "#686C61", fontWeight: "bold" }}>
//                         Employees(auto Calculator)
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                 </Table>

//                 {showBox && (
//                   <Grid>
//                     <Table aria-label="simple table" marginTop={20}>
//                       <TableHead>
//                         <TableRow>
//                           <TableCell
//                             sx={{ color: "#686C61", fontWeight: "bold" }}
//                           >
//                             Department
//                           </TableCell>
//                           <TableCell
//                             sx={{ color: "#686C61", fontWeight: "bold" }}
//                           >
//                             Sub Department
//                           </TableCell>
//                           <TableCell
//                             sx={{ color: "#686C61", fontWeight: "bold" }}
//                           >
//                             Employees
//                           </TableCell>
//                         </TableRow>
//                       </TableHead>
//                     </Table>

//                     <MainContent boxlabel = {boxlabel}/>

//                     {showBox2 && (
//                       <Grid>
//                         <Stack
//                           component="form"
//                           sx={{
//                             width: "25ch",
//                             mt: "-40px",
//                           }}
//                           spacing={2}
//                           noValidate
//                           autoComplete="off"
//                           marginLeft="35vh"
//                         >
//                           <TextField
//                             hiddenLabel
//                             id="filled-hidden-label-small"
//                             size="small"
//                           />
//                         </Stack>
//                         <IconButton
//                           onClick={handleToggle2}
//                           aria-label="delete"
//                           size="small"
//                           sx={{ marginLeft: "65vh", marginTop: "-9vh" }}
//                         >
//                           <DeleteIcon />
//                         </IconButton>
//                       </Grid>
//                     )}
//                   </Grid>
//                 )}

//                 <Button
//                   onClick={addnewBox}
//                   sx={{
//                     marginRight: "115vh",
//                     marginTop: "10px",
//                     color: "blue",
//                   }}
//                 >
//                   <AddCircleOutlineIcon fontSize="large" /> Add
//                 </Button>
//                 <Button
//                   onClick={handleToggle}
//                   sx={{
//                     marginRight: "115vh",
//                     marginTop: "10px",
//                     color: "blue",
//                   }}
//                 >
//                   <AddCircleOutlineIcon fontSize="large" /> Add
//                 </Button>
//               </Grid>
//             </Grid>

//             <Divider
//               variant="fullWidth"
//               sx={{ borderColor: "divider", mt: "5px" }}
//             />

//             {showBox && (
//               <Box
//                 margin={2}
//                 sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}
//                 marginLeft={90}
//               >
//                 <Button
//                   variant="text"
//                   onClick={handleToggle}
//                   startIcon={<CloseIcon />}
//                 >
//                   Close
//                 </Button>
//                 <Button
//                   variant="contained"
//                   sx={{ bgcolor: "blue", color: "white", width: "80px" }}
//                 >
//                   Save
//                 </Button>
//               </Box>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// export default AdminDepartment;

import React from 'react'

const AdminDepartment = () => {
  return (
    <div>
      Admin Department      
    </div>
  )
}

export default AdminDepartment
