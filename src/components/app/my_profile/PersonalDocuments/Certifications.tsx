import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Grid,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Table } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

interface FormValues {
  courceType: string;
  certificationTitle: string;
  file: File | null;
}

function Certifications() {
  const documents = [
    {}
  ]
  const [showBox, setShowBox] = useState<any>(false);
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedDocuments, setUploadedDocuments] = useState(documents);

  const handleToggle = () => {
    setShowBox(!showBox);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const validationSchema = Yup.object({
    courceType:Yup.string().required("Cource Type is required"),
    certificationTitle: Yup.string().required("Certification title is required"),
    file: Yup.mixed().required("File is required").test("is-file", "Invalid file", (value)=>value instanceof File),
  })
  const formik = useFormik({
    initialValues:{
      courceType: "",
      certificationTitle: "",
      file:null,
    },

    validationSchema: {validationSchema},
    
    onSubmit:(values: FormValues)=>{
      if (values.file && values.file instanceof File) {
        const newDocument = {
          courceType: values.courceType,
          certificationTitle: values.certificationTitle,
          uploadedBy: "User Name",
          verification: "Pending",
          url: URL.createObjectURL(values.file),
        };

        setUploadedDocuments((prev) => [...prev, newDocument]);
        formik.resetForm();
        handleClose();
      } else {
        console.error("Invalid file selected");
      }
    }
  })

  return (
    <>
      <Grid item xs={10}>
        <Grid
          container
          spacing={2}
          display="flex"
          marginLeft={"0px"}
          marginTop={"5px"}
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "#6e8498", fontWeight: "bold" }}>
                  COURSE TITLE
                </TableCell>
                <TableCell sx={{ color: "#6e8498", fontWeight: "bold" }}>
                  UPLOADED BY
                </TableCell>
                <TableCell sx={{ color: "#6e8498", fontWeight: "bold" }}>
                  TYPE
                </TableCell>
                <TableCell sx={{ color: "#6e8498", fontWeight: "bold" }}>
                  VERIFICATION
                </TableCell>
                <TableCell sx={{ color: "#6e8498", fontWeight: "bold" }}>
                  ACTIONS
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <Box>
            <React.Fragment>
              <Button
                startIcon={<AddCircleOutlineIcon />}
                sx={{
                  color: "#2094FF",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: "16px",
                  marginRight:"20px"
                }}
                onClick={handleClickOpen}
              >
              Add
              </Button>
              {/* <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                  Add Certificate
                </DialogTitle>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                  <Typography
                    fontSize={14}
                    color="gray"
                    textAlign="left"
                    marginTop={2}
                  >
                    Select Course Type
                  </Typography>
                  <Box>
                    <FormControl fullWidth>
                      <NativeSelect
                        inputProps={{
                          name: "ID Type",
                          id: "uncontrolled-native",
                        }}
                      >
                        <option>{}</option>
                        <option>Graduation</option>
                        <option>Post Graduation</option>
                        <option>Doctorate</option>
                        <option>Diploma</option>
                        <option>Pre University</option>
                        <option>Certification</option>
                        <option>Other</option>
                      </NativeSelect>
                    </FormControl>
                  </Box>
                  <TextField
                    sx={{ width: "100%", marginTop: "25px" }}
                    id="standard-multiline-static"
                    rows={1}
                    placeholder="Enter Certification Title"
                    variant="standard"
                  />
                  <Box margin={3} marginLeft={-1}>
                    <input
                      accept="image/*"
                      style={{ display: "none" }}
                      id="raised-button-file"
                      type="file"
                      onChange={handleFileChange}
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" component="span">
                        Select File
                      </Button>
                    </label>
                    {selectedFile && (
                      <label>
                        <Typography variant="body1">
                          Selected File: {selectedFile.name}
                        </Typography>
                        <Typography variant="body1">
                          Selected Size: {selectedFile.size}
                        </Typography>
                      </label>
                    )}
                  </Box>
                  <Divider
                    variant="fullWidth"
                    sx={{ backgroundColor: "#424242", margin: "10px" }}
                  />
                  <Box
                    margin={2}
                    sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
                    marginLeft={15}
                  >
                    <Button onClick={handleClose} startIcon={<CloseIcon />}>
                      Cancel
                    </Button>
                    <Button
                      sx={{
                        bgcolor: "blue",
                        color: "white",
                        width: "80px",
                      }}
                    >
                      Save
                    </Button>
                  </Box>
                </DialogContent>
              </BootstrapDialog> */}
              <Modal open={open} onClose={handleClose}>
                <Box
                  sx={{
                    position: "absolute",
                    top:"50%",
                    left:"50%",
                    transform:"translate(-50%, -50%)",
                    width:400,
                    bgcolor:"Background.paper",
                    boxShadow:24,
                    p:4,
                    borderRadius:2,
                  }}
                >
                  <Typography 
                    variant="h6"
                    sx={{fontSize:"16px", fontWeight:"bold", marginBottom:2}}
                  >
                    Add Document
                  </Typography>

                  <form>
                    <TextField
                      select
                      label="Select ID Type"
                      >
                      Select Cource Type
                    </TextField>
                    <TextField>
                      Enter Certifications Title
                    </TextField>
                    
                  </form>
                </Box>
              </Modal>

            </React.Fragment>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Certifications;
