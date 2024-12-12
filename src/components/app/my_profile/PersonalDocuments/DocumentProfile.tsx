
import React, { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Modal,
  TextField,
  Paper,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ArticleIcon from "@mui/icons-material/Article";
import { useFormik } from "formik";
import * as Yup from "yup";
import Certifications from "./Certifications";
import Works from "./Works";
import ActionButtons from "../../common/ActionButton";
import { Policy } from "@mui/icons-material";

interface FormValues {
  idType: string;
  idValue: string;
  proofs: object;
  file: File | null;
}

const DocumentProfile: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const documents = [
    {
      type: "PAN Card",
      id: "APJPH0246M",
      uploadedBy: "Faijanahemad Hipparage",
      verification: "Verified",
      url: "https://example.com/pan-card.pdf", 
    },
    {
      type: "Aadhaar Card",
      id: "332267741566",
      uploadedBy: "Faijanahemad Hipparage",
      verification: "Verified",
      url: "https://example.com/aadhaar-card.pdf", 
    },
  ];

  const handleViewDocument = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [uploadedDocuments, setUploadedDocuments] = useState(documents);

  const formik = useFormik({
    initialValues: {
      idType: "",
      idValue: "",
      proofs: {
        photoID: false,
        dob: false,
        currentAddress: false,
        permanentAddress: false,
      },
      file: null,
    },

    validationSchema: Yup.object({
      idType: Yup.string().required("ID Type is required"),
      idValue: Yup.string().required("ID value is required"),
      file: Yup.mixed()
        .required("File is required")
        .test("is-file", "Invalid file", (value) => value instanceof File),
    }),
    onSubmit: (values: FormValues) => {
      if (values.file && values.file instanceof File) {
        const newDocument = {
          type: values.idType,
          id: values.idValue,
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
    },
  });

  return (
    <Paper
      elevation={3}
      sx={{ padding: 2, borderRadius: 2, marginTop: "40px" }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          sx={{ fontWeight: "bold" }}
          onChange={handleTabChange}
        >
          <Tab
            label="IDs"
            sx={{
              fontSize: "13px",
              color: "#4A4A4A",
              fontWeight: activeTab === 0 ? "bold" : "normal",
            }}
          />
          <Tab
            label="CERTIFICATIONS"
            sx={{
              fontSize: "13px",
              color: "#4A4A4A",
              fontWeight: activeTab === 1 ? "bold" : "normal",
            }}
          />
          <Tab
            label="WORK"
            sx={{
              fontSize: "13px",
              color: "#4A4A4A",
              fontWeight: activeTab === 2 ? "bold" : "normal",
            }}
          />
          <Tab
            label="POLICY"
            sx={{
              fontSize: "13px",
              color: "#4A4A4A",
              fontWeight: activeTab === 3 ? "bold" : "normal",
            }}
          />
        </Tabs>
        
      </Box>

      {
        activeTab === 1 && (
          <Box>
            <Certifications/>
          </Box>
        )
      }
      {
        activeTab === 2 && (
          <Box>
            <Works/>
          </Box>
        )
      }
      {
        activeTab === 3 && (
          <Box>
            <Policy/>
          </Box>
        )
      }

      {activeTab === 0 && (
        <Box sx={{ fontFamily: "Arial, sans-serif", marginTop: 2 }}>
          {/* Proofs Section */}
          <Typography
            variant="h6"
            sx={{
              marginBottom: 2,
              color: "#2E3B62",
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "18px",
            }}
          >
            Proofs
          </Typography>
          <TableContainer sx={{ marginBottom: 2 }}>
            <Table>
              <TableBody sx={{ border: "1px solid lightgrey" }}>
                <TableRow sx={{ border: "1px solid lightgrey" }}>
                  <TableCell>Photo ID</TableCell>
                  <TableCell align="left" sx={{ color: "#8292A6" }}>
                    <DoneIcon
                      style={{
                        color: "#5BD94E",
                        fontSize: "16px",
                        marginRight: "4px",
                        stroke: "#5BD94E",
                        strokeWidth: "3.5",
                      }}
                    />{" "}
                    PAN Card &nbsp;&nbsp;
                    <DoneIcon
                      style={{
                        color: "#5BD94E",
                        fontSize: "16px",
                        marginRight: "4px",
                        stroke: "#5BD94E",
                        strokeWidth: "3.5",
                      }}
                    />{" "}
                    Aadhaar Card
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date of Birth</TableCell>
                  <TableCell align="left" sx={{ color: "#8292A6" }}>
                    PAN Card, Aadhaar Card
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Current Address</TableCell>
                  <TableCell align="left" sx={{ color: "#8292A6" }}>
                    Aadhaar Card
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Permanent Address</TableCell>
                  <TableCell align="left" sx={{ color: "#8292A6" }}>
                    Aadhaar Card
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Typography
            variant="h6"
            sx={{
              marginBottom: 2,
              color: "#2E3B62",
              fontSize: "18px",
              fontWeight: "bold",
              lineHeight: "18px",
            }}
          >
            Uploaded Documents
          </Typography>
          <Divider variant="fullWidth" sx={{ backgroundColor: "#c7d7e6" }} />
          <TableContainer sx={{ marginBottom: 1 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: "#6d7e92", fontWeight: "bold" }}>
                    TYPE
                  </TableCell>
                  <TableCell sx={{ color: "#6d7e92", fontWeight: "bold" }}>
                    ID
                  </TableCell>
                  <TableCell sx={{ color: "#6d7e92", fontWeight: "bold" }}>
                    UPLOADED BY
                  </TableCell>
                  <TableCell sx={{ color: "#6d7e92", fontWeight: "bold" }}>
                    VERIFICATION
                  </TableCell>
                  <TableCell sx={{ color: "#6d7e92", fontWeight: "bold" }}>
                    ACTIONS
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {uploadedDocuments.map((doc, index) => (
                  <TableRow key={index}>
                    <TableCell>{doc.type}</TableCell>
                    <TableCell sx={{ color: "#8292A6" }}>{doc.id}</TableCell>
                    <TableCell sx={{ color: "#8292A6" }}>
                      {doc.uploadedBy}
                    </TableCell>
                    <TableCell>
                      <DoneIcon
                        style={{
                          stroke: "#5BD94E",
                          strokeWidth: "3.5",
                          color:
                            doc.verification === "Verified"
                              ? "#5BD94E"
                              : "orange",
                          fontSize: "16px",
                          marginRight: "4px",
                        }}
                      />
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{
                          color:
                            doc.verification === "Verified"
                              ? "#5BD94E"
                              : "orange",
                          fontWeight: "bold",
                        }}
                      >
                        {doc.verification}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button
                        startIcon={<ArticleIcon />}
                        onClick={() => handleViewDocument(doc.url)}
                      />
                      <Button
                        startIcon={<CloudDownloadIcon />}
                        onClick={() => handleViewDocument(doc.url)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Button
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              color: "#2094FF",
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: "16px",
            }}
            onClick={handleOpen}
          >
            Add
          </Button>

          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "16px", fontWeight: "bold", marginBottom: 2 }}
              >
                Add Document
              </Typography>

              {/* Formik Form */}
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  select
                  label="Select ID Type"
                  variant="standard"
                  fullWidth
                  SelectProps={{ native: true }}
                  {...formik.getFieldProps("idType")}
                  error={Boolean(formik.touched.idType && formik.errors.idType)}
                  helperText={formik.touched.idType && formik.errors.idType}
                  sx={{ marginBottom: 2 }}
                >
                  <option value=""></option>
                  <option value="PAN">PAN Card</option>
                  <option value="Aadhaar">Aadhaar Card</option>
                  <option value="Passport">Passport</option>
                </TextField>

                <TextField
                  label="Enter ID"
                  variant="standard"
                  fullWidth
                  {...formik.getFieldProps("idValue")}
                  error={Boolean(
                    formik.touched.idValue && formik.errors.idValue
                  )}
                  helperText={formik.touched.idValue && formik.errors.idValue}
                  sx={{ marginBottom: 2 }}
                />

                <Typography
                  variant="body2"
                  sx={{ marginBottom: 1, color: "#6d7e92" }}
                >
                  Use it as proof for
                </Typography>
                <Box>
                  {["photoID", "dob", "currentAddress", "permanentAddress"].map(
                    (field) => (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: 1,
                        }}
                        key={field}
                      >
                        <input
                          type="checkbox"
                          id={field}
                          checked={
                            formik.values.proofs[
                              field as keyof typeof formik.values.proofs
                            ]
                          }
                          onChange={() =>
                            formik.setFieldValue(
                              `proofs.${field}`,
                              !formik.values.proofs[
                                field as keyof typeof formik.values.proofs
                              ]
                            )
                          }
                        />
                        <label htmlFor={field} style={{ marginLeft: 8 }}>
                          {field
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str) => str.toUpperCase())}
                        </label>
                      </Box>
                    )
                  )}
                </Box>

                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    variant="outlined"
                    component="label"
                    sx={{
                      color: "white",
                      borderColor: "#2094FF",
                      backgroundColor: "#0093FF",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                      "&:hover": {
                        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                        backgroundColor: "#0093FF",
                      },
                    }}
                  >
                    SELECT FILE
                    <input
                      type="file"
                      hidden
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        console.log("Selected file:", file); // Debugging log
                        formik.setFieldValue("file", file);
                        setFileName(file?.name || null);
                      }}
                    />
                  </Button>
                  {fileName && (
                    <Typography sx={{ marginLeft: 2 }}>{fileName}</Typography>
                  )}
                </Box>
                {formik.errors.file && (
                  <Typography
                    sx={{ color: "red", fontSize: "12px", marginTop: 1 }}
                  >
                    {formik.errors.file}
                  </Typography>
                )}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent:"flex-end",
                    marginTop: 3,
                  }}
                >
                  <ActionButtons 
                  onCancel={handleClose} 
                  showButtons={true}
                  onSave={() => onsubmit}
                  ></ActionButtons>
                </Box>
              </form>
            </Box>
          </Modal>
        </Box>
      )}
    </Paper>
  );
};

export default DocumentProfile;
