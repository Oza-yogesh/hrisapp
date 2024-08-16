import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

interface IProps {
  icon: React.ReactElement;
  iconColor: string;
  title: string;
  color: string;
  bgColor: string;
}

function ButtonGlobe({ title, iconColor, icon, color, bgColor }: IProps) {
  return (
    <IconButton
      sx={{
        gap: 2,
        "&:hover": {
          bgcolor: "transparent",
        },
        borderRadius: 0,
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "1.3rem",
          height: "1.3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          bgcolor={bgColor}
          color={iconColor}
          sx={{
            width: "2.3rem",
            height: "2.3rem",
            strokeWidth: "0.1rem",
            borderRadius: "50%",
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "3px 3px 8px -1px grey",
            transition: "0.2s ease-in-out",
            "&:hover": {
              width: "2.5rem",
              height: "2.5rem",
              boxShadow: "3px 3px 8px 1px grey",
            },
          }}
        >
          {icon}
        </Box>
      </Box>

      <Typography color={color}>{title}</Typography>
    </IconButton>
  );
}

export default ButtonGlobe;