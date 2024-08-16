import { Box, Typography } from "@mui/material";
import React from "react";

interface IProps {
  icon: React.ReactElement;
  iconColor: string;
  title: string;
  number: number;
}

function InfoTags({ icon, iconColor, title, number }: IProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", cursor: "auto", gap: 1 }}>
      <Typography color={iconColor} >
        {icon}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          color: "#909fc9",
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        {number}
      </Typography>
    </Box>
  );
}

export default InfoTags;
