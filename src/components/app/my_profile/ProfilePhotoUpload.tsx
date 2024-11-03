import React, { useState, ChangeEvent, useEffect } from "react";
import {
  Box,
  IconButton,
  Avatar,
  CircularProgress,
  Snackbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MuiAlert from "@mui/material/Alert";
import axios from "axios"; // Import axios
import { GET_PHOTO, UPLOAD_PHOTO } from "../../../api/Server";

const ProfilePhotoUpload: React.FC = () => {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Fetch the profile photo when the component mounts
  useEffect(() => {
    const fetchProfilePhoto = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_SERVER_URL}${GET_PHOTO}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfilePhoto(response.data.photoUrl);
      } catch (error) {
        console.error("Error fetching profile photo:", error);
        setProfilePhoto(null); // Ensure the add icon shows if no photo is found
      }
    };

    fetchProfilePhoto();
  }, []); // Run effect on component mount

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
      uploadPhoto(file);
    }
  };

  const uploadPhoto = async (file: File) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("profilePhoto", file);

    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `${process.env.REACT_APP_BASE_SERVER_URL}${UPLOAD_PHOTO}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSnackbarMessage("Photo uploaded successfully!");
    } catch (error) {
      setSnackbarMessage("Error uploading photo. Please try again.");
    } finally {
      setLoading(false);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      position="relative"
      width={200}
      height={200}
      borderRadius="50%"
    >
      {/* <Avatar
        src={profilePhoto || undefined}
        alt="Profile Photo"
        sx={{
          width: 200,
          height: 200,
          cursor: "pointer", // Change cursor to pointer for better UX
        }}
        onClick={() => document.getElementById("file-input")?.click()} // Trigger file input click
      >
        {!profilePhoto && (
          <IconButton
            component="span" // Change to "span" to avoid conflict with onClick
            sx={{
              position: "absolute",
              bgcolor: "white",
              borderRadius: "50%",
              boxShadow: 1,
              width: 200,
              height: 200,
              border: "2px dashed #90CAF9",
            }}
          >
            <AddIcon color="primary" />
          </IconButton>
        )}
        <input
          id="file-input" // Add id for reference
          type="file"
          accept="image/*"
          hidden
          onChange={handlePhotoUpload}
        />
      </Avatar> */}

      <label htmlFor="file-input">
        <Avatar
          src={profilePhoto || undefined}
          alt="Profile Photo"
          sx={{
            width: 200,
            height: 200,
            cursor: "pointer", // Change cursor to pointer for better UX
          }}
        >
          {!profilePhoto && (
            <IconButton
              component="span" // Change to "span" to avoid conflict with onClick
              sx={{
                position: "absolute",
                bgcolor: "white",
                borderRadius: "50%",
                boxShadow: 1,
                width: 200,
                height: 200,
                border: "2px dashed #90CAF9",
              }}
            >
              <AddIcon color="primary" />
            </IconButton>
          )}
        </Avatar>
        <input
          id="file-input" // Add id for reference
          type="file"
          accept="image/*"
          hidden
          onChange={handlePhotoUpload} // Trigger photo upload function
        />
      </label>

      {loading && (
        <CircularProgress
          size={24}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginLeft: -12,
            marginTop: -12,
          }}
        />
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={snackbarMessage.includes("Error") ? "error" : "success"}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </Box>
  );
};

export default ProfilePhotoUpload;
