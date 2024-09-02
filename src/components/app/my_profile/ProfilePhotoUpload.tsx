import React, { useState, ChangeEvent } from "react";
import { Box, IconButton, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface ProfilePhotoUploadProps {
  image?: String;
}

const ProfilePhotoUpload: React.FC<ProfilePhotoUploadProps> = ({ image }) => {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(
    "https://wallpapers.com/images/hd/cartoon-profile-pictures-3opqz8op53khmhjp.jpg"
  );

  const handlePhotoUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
      <Avatar
        src={profilePhoto || undefined}
        alt="Profile Photo"
        sx={{
          width: 200,
          height: 200,
        }}
      >
        {/* Placeholder if no image is selected */}
        {!profilePhoto && (
          <>
            {/* full icon */}
            <IconButton
              component="label"
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
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handlePhotoUpload}
                placeholder="Your Profile Photo comes here"
              />
            </IconButton>
          </>
        )}
      </Avatar>
    </Box>
  );
};

export default ProfilePhotoUpload;
