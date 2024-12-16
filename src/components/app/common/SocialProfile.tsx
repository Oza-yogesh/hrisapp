import React, { useState, ChangeEvent } from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditIcon from "@mui/icons-material/Edit";
import CustomTextField from "./CustomTextField";
import ActionButtons from "./ActionButton";

interface LinksState {
  linkedin: string;
  facebook: string;
  twitter: string;
}

const SocialProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [links, setLinks] = useState<LinksState>({
    linkedin: "",
    facebook: "",
    twitter: "",
  });

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  const handleLinkChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof LinksState
  ) => {
    setLinks((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = () => {
    console.log("Saved links:", links);
    setIsEditing(false); // Exit edit mode after saving
  };

  return (
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
              Social Profile
              <IconButton onClick={handleEditToggle}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Typography>
            <Divider variant="fullWidth" sx={{ backgroundColor: "#424242" }} />
          </Grid>
          {isEditing ? (
            <Grid item xs={12}>
              <Box sx={{ mb: 2 }}>
                <LinkedInIcon
                  sx={{
                    color: "#0080ff",
                    cursor: "pointer",
                    "&:hover": { color: "#0056b3" },
                  }}
                />
                <CustomTextField
                  variant="standard"
                  label="LinkedIn"
                  name="linkedin"
                  value={links.linkedin}
                  onChange={(e) => handleLinkChange(e, "linkedin")}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <FacebookRoundedIcon
                  sx={{
                    color: "#0040ff",
                    cursor: "pointer",
                    "&:hover": { color: "#002080" },
                  }}
                />
                <CustomTextField
                  variant="standard"
                  label="facebook"
                  name="facebook"
                  value={links.facebook}
                  onChange={(e) => handleLinkChange(e, "facebook")}
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TwitterIcon
                  sx={{
                    color: "#00bfff",
                    cursor: "pointer",
                    "&:hover": { color: "#0080ff" },
                  }}
                />
                <CustomTextField
                  variant="standard"
                  label="twitter"
                  name="twitter"
                  value={links.twitter}
                  onChange={(e) => handleLinkChange(e, "twitter")}
                />
              </Box>
              <ActionButtons
                onCancel={handleEditToggle}
                onSave={handleSave}
                showButtons={true}
              />
            </Grid>
          ) : (
            <Grid item xs={10} sx={{ display: "flex" }}>
              <Box sx={{ mb: 1 }}>
                <LinkedInIcon
                  sx={{
                    color: "#0080ff",
                    cursor: "pointer",
                    "&:hover": { color: "#0056b3" },
                  }}
                />
                <Typography variant="body2" sx={{ ml: 1, display: "inline" }}>
                  {links.linkedin}
                </Typography>
              </Box>
              <Box sx={{ mb: 1 }}>
                <FacebookRoundedIcon
                  sx={{
                    color: "#0040ff",
                    cursor: "pointer",
                    "&:hover": { color: "#002080" },
                  }}
                />
                <Typography variant="body2" sx={{ ml: 1, display: "inline" }}>
                  {links.facebook}
                </Typography>
              </Box>
              <Box>
                <TwitterIcon
                  sx={{
                    color: "#00bfff",
                    cursor: "pointer",
                    "&:hover": { color: "#0080ff" },
                  }}
                />
                <Typography variant="body2" sx={{ ml: 1, display: "inline" }}>
                  {links.twitter}
                </Typography>
              </Box>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SocialProfile;
